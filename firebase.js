// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration using direct values
const firebaseConfig = {
  apiKey: "AIzaSyAXLC6w01tjsjM9HZyzbxb3TR7iqQGCd0U",
  authDomain: "p6-final-a7c1e.firebaseapp.com",
  projectId: "p6-final-a7c1e",
  storageBucket: "p6-final-a7c1e.appspot.com",
  messagingSenderId: "761110869381",
  appId: "1:761110869381:web:dc78fafccff988e3e8c0ec",
  measurementId: "G-WF5G6P20H2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
