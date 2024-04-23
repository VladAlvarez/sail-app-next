"use client"
import { useState, useEffect } from 'react';

export const useHash = () => {
    const [hash, setHash] = useState('');

    useEffect(() => {
        const updateHash = () => {
            setHash(window.location.hash);
        };

        updateHash();

        const handleHashChange = () => {
            updateHash();
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('hashchange', handleHashChange);

            return () => {
                window.removeEventListener('hashchange', handleHashChange);
            };
        }
    }, []);

    return hash;
};
