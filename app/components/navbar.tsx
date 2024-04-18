"use client"

import Link from 'next/link';
import Image from 'next/image';
import Logo from './sail-logo.png';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../firebase/auth';

export default function Navbar() {
  const router = useRouter();
  const { userLoggedIn } = useAuth();

  const handleSignOut = async () => {
    await doSignOut();
    router.push('/login');
  };

  return (
    <nav className="flex items-center justify-between p-3 flex-wrap">
      {userLoggedIn && (
        <button onClick={handleSignOut}></button>
      )}
      <div className="flex items-center">
        <Image
          className='logo'
          src={Logo}
          alt='Sail logo'
          width={50}
          quality={100}
          placeholder='blur'
        />
        <Link href="/" className="links">Home</Link>
        <Link href="/schedule" className="links">Schedule</Link>
        <Link href="/contact" className="links">Contact</Link>
        <Link href="/captains-log" className="links">Captain&apos;s Log</Link>
        <Link href="/client-list" className="links">Client List</Link>
      </div>
      <div>
        <Link href="/login" className="links">Login</Link>
      </div>
    </nav>
  );
}
