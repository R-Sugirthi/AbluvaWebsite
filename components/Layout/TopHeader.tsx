import Link from 'next/link';
import './style.css';


export default function TopHeader() {
  return (
    <header className="w-full z-30 bg-[#131318] top hidden-mobile">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-10">
          <nav className='md:flex md:grow'>
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/company/about"
                  className="font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out text-[#c4c8d3] hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/company/news"
                  className="font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out text-[#c4c8d3] hover:text-white"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/company/careers"
                  className="font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out text-[#c4c8d3] hover:text-white"
                >
                  Careers
                </Link>
              </li>
              
              <li>
                <Link
                  href="https://abluva.freshdesk.com/support/home" rel='noopener noreferrer'
                  className="font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out text-[#c4c8d3] hover:text-white">
                
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/company/contact"
                  className="font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out text-[#c4c8d3] hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
