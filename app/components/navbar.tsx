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
    <Link href="/schedule">Schedule</Link>
    <Link href="/contact">Contact</Link>
    <Link href="/captains-log">Captain&apos;s Log</Link>
    <Link href="/client-list">Client List</Link>
    <Link href="/login">Login</Link>
  </nav>
  )
}
