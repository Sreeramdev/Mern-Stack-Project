
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDnuM6_fdoBmnIo6UR6eRaCqfkpXuQ7fQQ",
  authDomain: "mern-stack-project-c8508.firebaseapp.com",
  projectId: "mern-stack-project-c8508",
  storageBucket: "mern-stack-project-c8508.appspot.com",
  messagingSenderId: "672304948910",
  appId: "1:672304948910:web:cc8354c7625798e196af3f",
  measurementId: "G-Z71GWQSWCD"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
