"use client"

import Link from 'next/link';
import Image from 'next/image';
import Logo from './sail-logo.png';
import { useAuth } from '../contexts/authContext';
import React from "react";
import Login from './login';

export default function Navbar() {
  const { userLoggedIn, userEmail, logout } = useAuth(); 

  return (
    <nav className='bg-[#0C3854] fixed w-full p-2 z-10 border-2 shadow-lg '>
      <Image
        src={Logo}
        alt='Sail logo'
        width={50}
        quality={100}
        placeholder='blur'
      />
      <Link href="/">Home</Link>
      <a href="/#first-section">Schedule</a>
      <a href="/#third-section">Contact</a>
      <a href="/#fourth-section">Captain&apos;s Log</a>
      {userLoggedIn ? (
        <>
          <Link href="/client-list">Client List</Link>
          <div className="user-info">
            <p>Hello, {userEmail}</p>
            <button onClick={logout}>Logout</button>
          </div>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </nav>
  );
}
