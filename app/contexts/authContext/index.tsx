"use client"

import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext<{
    currentUser?: any, 
    userLoggedIn?: any,
    loading?: boolean
}>({});




export function AuthProvider({ children}:any) {
    const [currentUser, setCurrentUser ] = useState(null);
    const [userLoggedIn, setUserLoggedIn ] = useState(false);
    const [loading, setLoading] = useState(true); 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, initializeUser); 
        return unsubscribe;
    }, [])

    async function initializeUser(user:any) {
        console.log(user);
        
        if (user) {
            setCurrentUser({...user});
            setUserLoggedIn(true);
        } else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }
    
    return (
        <AuthContext.Provider value={
            {currentUser, 
            userLoggedIn,
            loading}
        }>
            {!loading && children}
        </AuthContext.Provider>
    )
}