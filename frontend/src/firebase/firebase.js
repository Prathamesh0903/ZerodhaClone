// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB_FVLXNGDYuOXom_8VVoInPVTfLhA6I1U",
  authDomain: "zerodhaauth.firebaseapp.com",
  projectId: "zerodhaauth",
  storageBucket: "zerodhaauth.firebasestorage.app",
  messagingSenderId: "917626651805",
  appId: "1:917626651805:web:255ae861eb1ed4a8f4c074",
  measurementId: "G-3MLQMZWN82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

