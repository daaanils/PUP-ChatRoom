import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbZnU9PdYS_r04x2xvXVQga0FHgyGSqcE",
  authDomain: "cybersecurity-212d3.firebaseapp.com",
  projectId: "cybersecurity-212d3",
  storageBucket: "cybersecurity-212d3.appspot.com",
  messagingSenderId: "196392905241",
  appId: "1:196392905241:web:3e8d85e07f361274ed5888",
  measurementId: "G-21S6YL4B80"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);