"use client"

import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext<{
    currentUser?: any;
    userLoggedIn?: boolean;
    loading?: boolean;
}>({});

export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return () => unsubscribe();
    }, []);

    async function initializeUser(user: any | null) {
        if (user) {
            setCurrentUser(user);
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    return (
        <AuthContext.Provider value={{ currentUser, userLoggedIn, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
