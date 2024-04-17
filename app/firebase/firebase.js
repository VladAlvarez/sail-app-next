import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXLiILTLLarGo5X6yb3TKUrIn3sK0itUE",
    authDomain: "sail-utah.firebaseapp.com",
    projectId: "sail-utah",
    storageBucket: "sail-utah.appspot.com",
    messagingSenderId: "195391245109",
    appId: "1:195391245109:web:eecaa07c6b827b3b575a7c",
    measurementId: "G-55DNCT17GY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};