// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgj8LABIzUGefHe7JVhWDGUe3K-Oqf9EY",
  authDomain: "roect-1.firebaseapp.com",
  projectId: "roect-1",
  storageBucket: "roect-1.firebasestorage.app",
  messagingSenderId: "576505296936",
  appId: "1:576505296936:web:44ed5559f5bb5bb7c4dd1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;