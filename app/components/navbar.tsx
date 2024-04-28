"use client"

import Link from 'next/link';
import Image from 'next/image';
import Logo from './sail-logo.png';
import { AuthContext } from '../contexts/authContext';
import React, { useContext, useState } from "react";
import { doSignOut } from '../firebase/firebase';
import router from 'next/router';

export default function Navbar() {
  const { currentUser, userLoggedIn } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await doSignOut();
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-[#0C3854] fixed w-full p-2 z-10 md:border-b-2 border-2 shadow-lg flex justify-between md:justify-start '>
      <Image
        src={Logo}
        alt='Sail logo'
        width={50}
        height={50} 
        quality={100}
        placeholder='blur'
      />
      <button 
        onClick={toggleMenu} 
        className="bg-blue-100 inline-flex items-center mr-5 p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
        aria-controls="navbar-default" 
        aria-expanded={isMenuOpen ? "true" : "false"} 
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div className={`md:flex md:items-start md:border-0 shadow-2xl border-t-0 border-2 gap-8 items-center flex-grow absolute top-[5.75rem] left-0  bg-[#0C3854] w-full md:w-auto md:static md:flex-row md:gap-5 p-3 md:p-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href="/" className="block md:inline-block">Home</a>
        <a href="/#first-section" className="block md:inline-block">Schedule</a>
        <a href="/#third-section" className="block md:inline-block">Contact</a>
        <a href="/#fourth-section" className="block md:inline-block">Captain&apos;s Log</a>                        
        {userLoggedIn ? (
          <>
            <a href="/client-list" className="block md:inline-block">Client List</a>
            <div className="user-info flex gap-5 flex-grow justify-between mr-5">
              <button className='btn-primary' onClick={handleLogout}>Logout</button>
              <p>Hello, {currentUser?.email}</p>
            </div>
          </>
        ) : (
          <Link href="/login" className="block md:inline-block">Login</Link>
        )}
      </div>
    </nav>
  );
}
