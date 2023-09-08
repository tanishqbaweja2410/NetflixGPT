// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-f38dd.firebaseapp.com",
  projectId: "netflixgpt-f38dd",
  storageBucket: "netflixgpt-f38dd.appspot.com",
  messagingSenderId: "537234445792",
  appId: "1:537234445792:web:3d6c99ce0d5666e2f3c785",
  measurementId: "G-YM9BGV9XL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();