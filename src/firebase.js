// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuWEL0smlEnOsH8lQrOFAkG7U842hW3cA",
    authDomain: "scrimba-notes-7e29d.firebaseapp.com",
    projectId: "scrimba-notes-7e29d",
    storageBucket: "scrimba-notes-7e29d.appspot.com",
    messagingSenderId: "90622154135",
    appId: "1:90622154135:web:426fb163f52815fec5e0d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")