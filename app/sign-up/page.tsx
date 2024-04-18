"use client"

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import GoogleLoginButton from '../login/GoogleLoginButton';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';

const Signup: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const router = useRouter();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await doCreateUserWithEmailAndPassword(email, password);
            router.push('/');
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    }

    return (
        <div className='justify-center flex items-center m-3'>
            <div className="w-full shadow-lg max-w-sm px-6 bg-white py-6 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                <form onSubmit={onSubmit} className="space-y-6">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up!</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <button type="submit" className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Account</button>
                    <div className='flex items-center space-x-4 pt-3'>
                        <GoogleLoginButton onClick={() => {}} /> {}
                        <a href="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login To Your Account</a> 
                    </div>
                    {errorMessage && (
                        <span className='text-red-600 font-bold'>{errorMessage}</span>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Signup;
