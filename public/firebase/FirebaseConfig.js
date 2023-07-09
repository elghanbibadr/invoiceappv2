// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGEZfhYyadukBggW_4OZRKVtaVpW7XLzw",
    authDomain: "invoiceapp-5ebce.firebaseapp.com",
    projectId: "invoiceapp-5ebce",
    storageBucket: "invoiceapp-5ebce.appspot.com",
    messagingSenderId: "358960547875",
    appId: "1:358960547875:web:bca10f3d1f2891cc1ac996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get Firestore instance
export const db = getFirestore(app);

// Read and parse the JSON file
