'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/images/logo-no-brackets-mini.png'

export function Links() {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-center items-center relative">
        <div className="absolute left-0 flex items-center">
          <Image src={logo} alt="Logo" width={50} height={50} className="mr-4" />
        </div>
        <div className="flex">
          <Link className={`link ${pathname === '/' ? 'active' : ''} text-white mx-4 px-3 py-2 rounded hover:bg-gray-700`} href="/">
            Home
          </Link>

          <Link
            className={`link ${pathname === '/about' ? 'active' : ''} text-white mx-4 px-3 py-2 rounded hover:bg-gray-700`}
            href="/about"
          >
            About
          </Link>

          <Link
            className={`link ${pathname === '/services' ? 'active' : ''} text-white mx-4 px-3 py-2 rounded hover:bg-gray-700`}
            href="/services"
          >
            Services
          </Link>
        </div>
      </div>
    </nav>
  )
}