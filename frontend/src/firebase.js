// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDcLI7Aw_owO5vSJEfM_Bne6pyP-uQ-48",
  authDomain: "vexel-85ef7.firebaseapp.com",
  projectId: "vexel-85ef7",
  storageBucket: "vexel-85ef7.appspot.com",
  messagingSenderId: "674849613809",
  appId: "1:674849613809:web:0aceddb7f4400c972f0650"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth, app,  onAuthStateChanged, doc, setDoc };