"use client"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBXLiILTLLarGo5X6yb3TKUrIn3sK0itUE",
    authDomain: "sail-utah.firebaseapp.com",
    projectId: "sail-utah",
    storageBucket: "sail-utah.appspot.com",
    messagingSenderId: "195391245109",
    appId: "1:195391245109:web:eecaa07c6b827b3b575a7c",
    measurementId: "G-55DNCT17GY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
};

export const doSignOut = () => {
    return signOut(auth);
};
