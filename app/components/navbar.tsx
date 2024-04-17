import Link from 'next/link'
import Image  from "next/image";
import Logo from './sail-logo.png'

export default function Navbar() {
  return (
    <nav className='bg-[#0C3854]'>
      <Image
        src={Logo}
        alt='Sail logo'
        width={50}
        quality={100}
        placeholder='blur' 
      />
    <Link href="/">Home</Link>
    <a href="#first-section">Schedule</a>
    <a href="#third-section">Contact</a>
    <a href="#fourth-section">Captain&apos;s Log</a>
    <Link href="/client-list">Client List</Link>
    <Link href="/login">Login</Link>
  </nav>
  )
}
