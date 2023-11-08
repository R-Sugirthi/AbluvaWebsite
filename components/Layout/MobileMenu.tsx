'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })


  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      <button
        ref={trigger}
        className={`menu ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        Menu
      </button>

      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="bg-black px-4 py-2">
          <li>
            <Link href="/" className="flex font-medium w-full text-white py-3" onClick={() => setMobileNavOpen(false)}>
              Product
            </Link>
          </li>
          <li>
            <Link href="/" className="flex font-medium w-full text-white py-3" onClick={() => setMobileNavOpen(false)}>
              Customer
            </Link>
          </li>
          <li>
            <Link href="/" className="flex font-medium w-full text-white py-3" onClick={() => setMobileNavOpen(false)}>
              Solution
            </Link>
          </li>
          <li>
            <Link href="/" className="flex font-medium w-full text-white py-3" onClick={() => setMobileNavOpen(false)}>
              Resources
            </Link>
          </li>
          <li>
            <Link href="/" className="flex font-medium w-full text-white py-3" onClick={() => setMobileNavOpen(false)}>
              Company
            </Link>
          </li>
          <li>
            <Link href="/" className="flex font-medium w-full text-white py-3" onClick={() => setMobileNavOpen(false)}>
              Career
            </Link>
          </li>
          <hr></hr>
          <li>
            <Link href="/" className="flex font-medium w-full text-white py-3" onClick={() => setMobileNavOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="flex font-medium w-full text-white py-3" onClick={() => setMobileNavOpen(false)}>
              Our Partners
            </Link>
          </li>
          <li>
            <Link href="/" className="flex font-medium w-full text-white py-3" onClick={() => setMobileNavOpen(false)}>
              Support
            </Link>
          </li>
          <li>
            <Link href="/" className="flex font-medium w-full text-white py-3" onClick={() => setMobileNavOpen(false)}>
              Login
            </Link>
          </li>
          <li>
            <Link href="/" className="flex font-medium w-full text-white py-3" onClick={() => setMobileNavOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
