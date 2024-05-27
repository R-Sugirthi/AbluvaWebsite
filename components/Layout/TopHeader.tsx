import Link from 'next/link';

export default function TopHeader() {
  return (
    <header className="w-full hidden-mobile top-header">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-10">
          <nav className='md:flex md:grow topheader'>
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/company/about"                 
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/company/news"    
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/company/careers"
                  
                >
                  Careers
                </Link>
              </li>
              
              <li>
                <Link
                  href="https://abluva.freshdesk.com/support/home" rel='noopener noreferrer' target="_blank"
                  >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/company/contact" 
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
