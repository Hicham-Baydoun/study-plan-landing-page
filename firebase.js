// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXLC6w01tjsjM9HZyzbxb3TR7iqQGCd0U",
  authDomain: "p6-final-a7c1e.firebaseapp.com",
  projectId: "p6-final-a7c1e",
  storageBucket: "p6-final-a7c1e.appspot.com",
  messagingSenderId: "761110869381",
  appId: "1:761110869381:web:dc78fafccff988e3e8c0ec",
  measurementId: "G-WF5G6P20H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };