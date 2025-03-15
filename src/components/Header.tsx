'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  // Get the base path from environment or use empty string
  const basePath = process.env.NODE_ENV === "production" ? "/osintmao" : "";

  return (
    <header className="fixed top-0 w-full z-50 p-4 flex justify-between items-center">
      <div>
        <Link href={`${basePath}/`} className="hover:opacity-80 transition-opacity block">
          <Logo />
        </Link>
      </div>
      <Link
        href={`${basePath}/shop`}
        className="text-white hover:underline font-bold relative group"
      >
        SHOP
        <span className="ml-1 text-red-500 inline-block">!!!</span>
      </Link>
    </header>
  );
}
