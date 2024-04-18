import Link from 'next/link';
import Image from 'next/image';
import Logo from './sail-logo.png';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-3 flex-wrap">
      <div className="flex items-center">
        <Image
          className='logo'
          src={Logo}
          alt='Sail logo'
          width={50}
          quality={100}
          placeholder='blur'
        />
        <Link className="links" href="/">Home</Link>
        <Link className="links" href="/schedule">Schedule</Link>
        <Link className="links" href="/contact">Contact</Link>
        <Link className="links" href="/captains-log">Captain&apos;s Log</Link>
        <Link className="links" href="/client-list">Client List</Link>
      </div>
      <div>
        <Link className="links" href="/login">Login</Link>
      </div>
    </nav>
  );
}
