// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
/* import { getFirestore } from "firebase/firestore"; */
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration - .env.local
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

/* DATI CONSOLE FIREBASE (funzionanti)*/
/* apiKey: "AIzaSyBQpL5_qgNvtFeVF4sUYQkuBbMUlVBCCKA",
  authDomain: "next-global-state-todoapp.firebaseapp.com",
  projectId: "next-global-state-todoapp",
  storageBucket: "next-global-state-todoapp.appspot.com",
  messagingSenderId: "420708182054",
  appId: "1:420708182054:web:65d2286a7df9f6929a1ee7",
  measurementId: "G-F63PZEEH78" */

// Initialize Firebase Services
getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
//SOLUZIONE PER: FirebaseError: Firebase: Firebase App named '[DEFAULT]' already exists with
//different options or config (app/duplicate-app)

/* export const app = initializeApp(firebaseConfig); */
/* export const db = getFirestore(app); */
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
