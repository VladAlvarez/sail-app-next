"use client"
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        throw error; 
    }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider(); 
    return signInWithPopup(auth, provider);
};

export const doSignOut = async (redirectFunction) => {
    try {
        await auth.signOut();
        redirectFunction('/login');
    } catch (error) {
        console.error('Error signing out:', error);
    }
};