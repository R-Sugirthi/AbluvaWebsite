import Link from 'next/link';
import Image from 'next/image';
import './style.css';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-30 bg-[#131318] text-md mq">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-cenenlarge md:flex-wrap sm:px-0 items-center justify-between">
          {/* Site branding */}
          <div className="shrink-0 mr-4 flex">
            {/* Logo */}
            <Link href="/" aria-label="Cruip">
              <div className="flex">
                <div>
                  <Image src="/images/Logo.png" alt="Logo" width={60} height={50} priority />
                </div>
                <div>
                  <Image src="/images/abluva_logo.png" className="pt-2 pl-1" alt="Logo" width={85} height={50} priority />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign-in links */}
            <ul className="flex grow justify-end flex-wrap items-center max-w-full">
              {/* Your navigation links */}
              <li>
                <Link
                  href="/product"
                  className="font-medium text-white px-4 py-8 flex items-center transition duration-150 ease-in-out item"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-white px-4 py-8  flex items-center transition duration-150 ease-in-out item"
                >
                  Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-white px-4 py-8 flex items-center transition duration-150 ease-in-out item"
                >
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-white px-4 py-8 flex items-center transition duration-150 ease-in-out item"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-white px-4 py-8 flex items-center transition duration-150 ease-in-out item"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-white px-4 py-8 flex items-center transition duration-150 ease-in-out item"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link href="/" className="btn-sm text-white bg-gray-800 hover-bg-gray-600 ml-3 p-2 rounded-md">
                  Request a Demo
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
