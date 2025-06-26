// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration

// We can use get from all value in .env.local file also but I give this local because of You can run local you system also
const firebaseConfig = {
  apiKey: "AIzaSyBhDV6iG9eAFs3uMZFzQEVyl7typIX1GXE",
  authDomain: "koinbx-422d7.firebaseapp.com",
  databaseURL: "https://koinbx-422d7-default-rtdb.firebaseio.com",
  projectId: "koinbx-422d7",
  storageBucket: "koinbx-422d7.firebasestorage.app",
  messagingSenderId: "512996896652",
  appId: "1:512996896652:web:3e66ae724489357f2870a9",
  measurementId: "G-JEPVXGH7XF",
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const database = getDatabase(app); // Export the Database for getting all data from Firebase Realtime Database
