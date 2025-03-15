'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  // Get the base path from environment or use empty string
  const basePath = process.env.NODE_ENV === "production" ? "/osintmao" : "";

  return (
    <footer className="py-6 px-4 border-t border-gray-800">
      <div className="flex flex-wrap gap-4 justify-center items-center text-sm">
        <Link href={`${basePath}/`} className="flex items-center text-red-500 font-bold px-2">
          <span className="mr-1">!!!!</span> OSINTMAO APP
        </Link>

        <Link href={`${basePath}/store`} className="flex items-center text-yellow-500 font-bold px-2">
          <span className="mr-1">🔶</span> OSINTMAO STORE
        </Link>

        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="px-2">
          INSTAGRAM
        </Link>

        <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="px-2">
          TIKTOK
        </Link>

        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="px-2">
          TWITTER
        </Link>

        <Link href="mailto:contact@osintmao.com" className="px-2 text-gray-400">
          CONTACT@OSINTMAO.COM
        </Link>

        <Link href={`${basePath}/privacy`} className="px-2 text-gray-400">
          PRIVACY
        </Link>

        <Link href={`${basePath}/contact`} className="px-2 text-gray-400">
          CONTACT
        </Link>

        <Link href={`${basePath}/terms`} className="px-2 text-gray-400">
          TERMS
        </Link>

        <Link href={`${basePath}/shipping`} className="px-2 text-gray-400">
          SHIPPING
        </Link>

        <Link href={`${basePath}/refund`} className="px-2 text-gray-400">
          REFUND
        </Link>
      </div>
    </footer>
  );
}
