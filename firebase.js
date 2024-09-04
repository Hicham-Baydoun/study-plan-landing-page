// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration using environment variables
const firebaseConfig = {
  NEXT_PUBLIC_EMAILJS_USER_ID=7NUhYA1XjBRX6qpii
  NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAXLC6w01tjsjM9HZyzbxb3TR7iqQGCd0U
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=p6-final-a7c1e.firebaseapp.com
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=p6-final-a7c1e
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=p6-final-a7c1e.appspot.com
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=761110869381
  NEXT_PUBLIC_FIREBASE_APP_ID=1:761110869381:web:dc78fafccff988e3e8c0ec
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="G-WF5G6P20H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
