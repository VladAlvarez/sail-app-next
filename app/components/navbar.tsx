"use client"

import Image  from "next/image";
import Logo from './sail-logo.png'
import Link from 'next/link';
import { useAuth } from '../contexts/authContext';
import { useRouter } from 'next/navigation';
import React from "react";
import { doSignOut } from "../firebase/firebase";

export default function Navbar() {
  const { userLoggedIn } = useAuth( ); 
  const router = useRouter(); 

  const handleLogout = async () => {
    try {
      await doSignOut(); 
      router.push('/login'); 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

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
      {userLoggedIn && <Link href="/client-list">Client List</Link>}
      {userLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </nav>
  );
}
