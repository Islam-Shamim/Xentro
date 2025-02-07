// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYhgRcBcFJsyqYHJVVhxmbr8KPy2EyHnc",
  authDomain: "xentro-43c98.firebaseapp.com",
  projectId: "xentro-43c98",
  storageBucket: "xentro-43c98.firebasestorage.app",
  messagingSenderId: "1011545270978",
  appId: "1:1011545270978:web:ac2f627aa8fb447181a95b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);