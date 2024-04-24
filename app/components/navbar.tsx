"use client"

import Link from 'next/link';
import Image from 'next/image';
import Logo from './sail-logo.png';
import { AuthContext} from '../contexts/authContext';
import React, { useContext } from "react";
import { doSignOut } from '../firebase/auth';

export default function Navbar() {
  const {currentUser, userLoggedIn } = useContext(AuthContext); 
  

  return (
    <nav className='bg-[#0C3854] fixed w-dvw p-2 z-10 border-2 shadow-lg flex justify-between md:justify-start '>
      <Image
        src={Logo}
        alt='Sail logo'
        width={50}
        quality={100}
        placeholder='blur'
      />
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
      <div className='hidden md:flex gap-5 items-center flex-grow'>
        <Link href="/">Home</Link>
        <a href="/#first-section">Schedule</a>
        <a href="/#third-section">Contact</a>
        <a href="/#fourth-section">Captain&apos;s Log</a>
        {userLoggedIn ? (
          <>
            <Link href="/client-list">Client List</Link>
            <div className="user-info flex gap-5 flex-grow justify-between mr-5">
              <button className='btn-primary' onClick={doSignOut}>Logout</button>
              <p>Hello, {currentUser?.email}</p>
            </div>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
