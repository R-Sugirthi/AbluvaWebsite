import React from 'react'
import Link from 'next/link'
import "./style.css"

interface FooterProps {
  customMainText?: string;
  customSubText?: string;
}


const Footer: React.FC<FooterProps> = ({ customMainText, customSubText }) => {
  const currentYear = new Date().getFullYear();
  const defaultMainText = "Reach out to Abluva to proceed with the next step";
  const defaultSubText = "Learn more about Abluva's potential benefits for your business";
  return (
    <footer className='bg-[#131318] text-white'>
      <section>
        <div className="p-5 lg:p-28">
        <h1 className="text-3xl  md:text-5xl font-bold founder text-gradient" >
            {customMainText || defaultMainText}
          </h1>
          <p className="md:text-2xl text-xl pb-6 founder">
          {customSubText || defaultSubText}
          </p>
          <Link
            href="/company/contact"
            className="btn-md md:text-xl text-lg text-white bg-violet-950 font-bold font-bold py-4 p-3 rounded-md mark"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-6 grid-cols-1 gap-8 md:pb-20 mark">
            <div className="text-md md:col-span-2">
              <div className="mb-2">
                <Link href="/" className="inline-block">
                  <img src="/images/logo.png" className='h-8 w-12' alt="logo"/>
                </Link>
              </div>
              <div className="text-gray-300 text-md text-sm">Unlocking Confidence in Every Byte,<br></br>Connect with us for a fortress of data security.</div>
            </div>
            {/* products */}
            <div className="md:text-md text-sm">
              <p className="text-gray-200 font-semibold md:text-lg text-md mb-3">Products</p>
              <ul>
              <li className="mb-1">
                  <Link href="/graphene/platform-overview" className="text-gray-300 hover:text-gray-100">Graphene</Link>
                </li> 
                <li className="mb-1">
                  <Link href="/incubators" className="text-gray-300 hover:text-gray-100">Incubators</Link>
                </li> 
              </ul>
            </div>
            {/* resources */}
            <div className="md:text-md text-sm">
              <p className="text-gray-200 font-semibold md:text-lg text-md mb-3">Resources</p>
              <ul>
                
                <li className="mb-1">
                  <Link href="/insights/blogs" className="text-gray-300 hover:text-gray-100">Blogs</Link>
                </li>
                <li className="mb-1">
                  <Link href="/insights/ebook-evolving-landscape-data-privacy-regulations" className="text-gray-300 hover:text-gray-100 ">eBook</Link>
                </li>
              </ul>
            </div>
            {/* reasearch */}
            <div className="md:text-md text-sm">
              <p className="text-gray-200 font-semibold md:text-lg text-md mb-3">Research</p>
              <ul>
                <li className="mb-1">
                  <Link href="/research/leaderboards" className="text-gray-300 hover:text-gray-100 ">Leaderboards</Link>
                </li>
                <li className="mb-1">
                  <Link href="/research/datasets" className="text-gray-300 hover:text-gray-100 ">Synthetic Datasets</Link>
                </li>
                <li className="mb-1">
                  <Link href="/research/research-papers" className="text-gray-300 hover:text-gray-100 ">Research Papers</Link>
                </li>
                <li className="mb-1">
                  <Link href="/research/patents" className="text-gray-300 hover:text-gray-100 ">Patents</Link>
                </li>
              </ul>
            </div>
            {/* company */}
            <div className="md:text-md text-sm">
              <p className="text-gray-200 font-semibold md:text-lg text-md mb-1">Company</p>
              <ul>
                <li className="mb-1">
                  <Link href="/company/about" className="text-gray-300 hover:text-gray-100 ">About</Link>
                </li>
                <li className="mb-1">
                  <Link href="/company/news" className="text-gray-300 hover:text-gray-100 ">News & Events</Link>
                </li>
                <li className="mb-1">
                  <Link href="/company/philosophy" className="text-gray-300 hover:text-gray-100 ">Philosophy</Link>
                </li>
                <li className="mb-1">
                  <Link href="/company/careers" className="text-gray-300 hover:text-gray-100 ">Careers</Link>
                </li>
                <li className="mb-1">
                  <Link href="/company/contact" className="text-gray-300 hover:text-gray-100 ">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* social media links */}
          <div className="md:flex md:items-center md:justify-between">
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0 mt-5">
              <li>
                <Link href="https://twitter.com/abluvaInc" rel='noopener noreferrer' className="flex justify-center items-center text-gray-300 bg-gray-800 hover:text-gray-100 hover:bg-violet-950 rounded-full " aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>

              {/* <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-gray-300 bg-gray-800 hover:text-gray-100 hover:bg-violet-950 rounded-full " aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li> */}
              {/* <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-gray-300 bg-gray-800 hover:text-gray-100 hover:bg-violet-950 rounded-full " aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li> */}
              <li className="ml-4">
                <Link href="https://www.linkedin.com/company/abluva" rel='noopener noreferrer' className="flex justify-center items-center text-gray-300 bg-gray-800 hover:text-gray-100 hover:bg-violet-950 rounded-full " aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>
            {/* copyRight */}
            <div className="text-gray-300 text-sm md:text-md mr-4 mt-5 mark">&copy; {currentYear} Abluva. All rights reserved.</div>
            {/* support */}
            <div className="text-gray-300 text-sm md:text-md mr-4 mt-5 mark">
              <Link href="/support/legal" className="text-gray-300 hover:text-gray-100 ">
                Legal
              </Link>
              <span className="mx-2">|</span>
              <Link href="/support/privacy-policy" className="text-gray-300 hover:text-gray-100 ">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link href="/support/terms" className="text-gray-300 hover:text-gray-100 ">
                Terms of Service
              </Link>
              <span className="mx-2">|</span>
              <Link href="/support/cookie-policy" className="text-gray-300 hover:text-gray-100 ">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;