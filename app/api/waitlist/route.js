import { NextResponse } from 'next/server'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import dns from 'dns';
import { promisify } from 'util';

const resolveMx = promisify(dns.resolveMx);

const firebaseConfig = {
  // Your Firebase config here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function isEmailValid(email) {
  // Basic format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  // Domain and MX record check
  const domain = email.split('@')[1];
  try {
    const mxRecords = await resolveMx(domain);
    return mxRecords.length > 0;
  } catch (error) {
    console.error("Error checking MX records:", error);
    return false;
  }
}

export async function POST(request) {
  const { name, email } = await request.json()

  try {
    // Check if email is valid
    const emailValid = await isEmailValid(email);
    if (!emailValid) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 })
    }

    // Check if email already exists in the database
    const q = query(collection(db, "waitlist"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return NextResponse.json({ message: "Email already exists in waitlist" }, { status: 400 })
    }

    // Add to waitlist
    await addDoc(collection(db, "waitlist"), {
      name,
      email,
      timestamp: new Date()
    });

    return NextResponse.json({ message: "Successfully added to waitlist" })
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}