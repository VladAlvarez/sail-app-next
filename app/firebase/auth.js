"use client"
import { auth } from "./firebase";
import firebase from "firebase/compat/app";

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider(); 
    return firebase.auth().signInWithRedirect(provider);
};

export const doSignOut = () => {
    return auth.signOut();
};