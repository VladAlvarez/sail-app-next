"use client"

import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { AuthContext } from '../contexts/authContext';
import { doSignInWithEmailAndPassword, doSignInWithGoogle, doSignOut } from '../firebase/auth';
import GoogleLoginButton from './GoogleLoginButton';

const Login = () => {
    const router = useRouter();
    const { userLoggedIn } = useContext(AuthContext); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e:any) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                router.push('/');
            } catch (error:any) {
                setErrorMessage(error.message || 'An error occurred');
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = async () => {
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
                router.push('/');
            } catch (error:any) {
                setErrorMessage(error.message || 'An error occurred');
                setIsSigningIn(false);
            }
        }
    };
    
    const handleLogout = async () => {
        try {
            await doSignOut(() => {
                window.location.href = '/login'; 
            });
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div>
            {userLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <div className='justify-center flex items-center'>
                    <div className="mt-40 flex items-center w-full shadow-lg max-w-sm px-6 bg-white py-6 border gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                        <form onSubmit={onSubmit} className="space-y-6">
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Welcome Back!</h5>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                            <div className='flex items-center space-x-4 pt-3'>
                                <GoogleLoginButton onClick={onGoogleSignIn} />
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <a href="/sign-up" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                            </div>
                            {errorMessage && (
                                <span className='text-red-600 font-bold'>{errorMessage}</span>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
