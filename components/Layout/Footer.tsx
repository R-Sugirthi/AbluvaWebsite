import React from 'react'
import Link from 'next/link'


interface FooterProps {
  customMainText?: string;
  customSubText?: string;
}

const Footer: React.FC<FooterProps> = ({ customMainText, customSubText }) => {
  const currentYear = new Date().getFullYear();
  const defaultMainText = "Reach out to Abluva to Know More.";
  const defaultSubText = "Learn more about Abluva's potential benefits for your business.";
  return (
    <footer className='text-white footer-section'>
      <section className='background-image-footer '>
        <div className="px-5 md:px-52 md:py-20 py-10">
          <div className=''>
          <h1 className="font-semibold font footer-text pb-2" >
            {customMainText || defaultMainText}
          </h1>
          </div>
          <p className="md:text-2xl text-xl pb-12 pt-5 font text-gray-400">
            {customSubText || defaultSubText}
          </p>
          <Link
            href="/company/contact"
            className="btnland"
          >
            Contact us
          </Link>
        </div>
      
      <div className="py-12 md:py-16 md:px-52 px-5">
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-6 grid-cols-1 gap-8 md:pb-20 font">
            <div className="text-md md:col-span-2">
              <div className="mb-2">
                <Link href="/" className="inline-block">
                  <img src="/images/logo.png" className='h-8 w-12' alt="logo" />
                </Link>
              </div>
              <div className="text-gray-400 text-md text-sm">Unlocking Confidence in Every Byte,<br></br>Connect with us for a fortress of data security.</div>
            </div>
            {/* products */}
            <div className="md:text-md text-sm">
              <p className="text-gray-300 boldfont  md:text-lg text-md mb-3">Products</p>
              <ul>
                <li className="mb-1">
                  <Link href="/graphene/platform-overview" className="text-gray-400 hover:text-gray-100">Graphene</Link>
                </li>
                <li className="mb-1">
                  <Link href="/incubators" className="text-gray-400 hover:text-gray-100">Incubators</Link>
                </li>
              </ul>
            </div>
            {/* resources */}
            <div className="md:text-md text-sm">
              <p className="text-gray-300 boldfont  md:text-lg text-md mb-3">Resources</p>
              <ul>

                <li className="mb-1">
                  <Link href="/insights/blogs" className="text-gray-400 hover:text-gray-100">Blogs</Link>
                </li>
                <li className="mb-1">
                  <Link href="/insights/ebooks" className="text-gray-400 hover:text-gray-100 ">eBooks</Link>
                </li>
                <li className="mb-1">
                  <Link href="/resources/glossary" className="text-gray-400 hover:text-gray-100 ">Glossary</Link>
                </li>
              </ul>
            </div>
            {/* reasearch */}
            <div className="md:text-md text-sm">
              <p className="text-gray-300 boldfont  md:text-lg text-md mb-3">Research</p>
              <ul>
                <li className="mb-1">
                  <Link href="/research/leaderboards" className="text-gray-400 hover:text-gray-100 ">Leaderboards</Link>
                </li>
                <li className="mb-1">
                  <Link href="/research/datasets" className="text-gray-400 hover:text-gray-100 ">Synthetic Datasets</Link>
                </li>
                <li className="mb-1">
                  <Link href="/research/research-papers" className="text-gray-400 hover:text-gray-100 ">Research Papers</Link>
                </li>
                <li className="mb-1">
                  <Link href="/research/patents" className="text-gray-400 hover:text-gray-100 ">Patents</Link>
                </li>
              </ul>
            </div>
            {/* company */}
            <div className="md:text-md text-sm">
              <p className="text-gray-300 boldfont  md:text-lg text-md mb-1">Company</p>
              <ul>
                <li className="mb-1">
                  <Link href="/company/about" className="text-gray-400 hover:text-gray-100 ">About</Link>
                </li>
                <li className="mb-1">
                  <Link href="/company/news" className="text-gray-400 hover:text-gray-100 ">News & Events</Link>
                </li>
                <li className="mb-1">
                  <Link href="/company/philosophy" className="text-gray-400 hover:text-gray-100 ">Philosophy</Link>
                </li>
                <li className="mb-1">
                  <Link href="/company/careers" className="text-gray-400 hover:text-gray-100 ">Careers</Link>
                </li>
                <li className="mb-1">
                  <Link href="/company/contact" className="text-gray-400 hover:text-gray-100 ">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* social media links */}
          <div className="md:flex md:items-center md:justify-between">
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0 mt-5">
              <li>
                <Link href="https://twitter.com/abluvaInc" rel='noopener noreferrer'>
                  <div className='footericon hover:bg-gray-400 rounded-full p-1 flex justify-center items-center '>
                  <img src="/icons/linkedinfooter.png" alt="Twitter Logo" className="w-6 h-6 fill-current filter invert opacity-80 hover:opacity-100"/>
                  </div>
                </Link>
              </li>

              <li className="ml-4">
                <Link href="https://www.linkedin.com/company/abluva" rel='noopener noreferrer'>
                <div className='footericon rounded-full p-1 flex justify-center items-center'>
                  <img src="/icons/twitterfooter.png" alt="Twitter Logo" className="w-6 h-6 fill-current filter invert opacity-80 hover:opacity-100"/>
                  </div>
                </Link>
              </li>

            </ul>
            {/* copyRight */}
            <div className="text-gray-400 text-sm md:text-md mr-4 mt-5 font">&copy; {currentYear} Abluva. All rights reserved.</div>
            {/* support */}
            <div className="text-gray-400 text-sm md:text-md mr-4 mt-5 font">
              <Link href="/support/legal" className="text-gray-400 hover:text-gray-100 ">
                Legal
              </Link>
              <span className="mx-2">|</span>
              <Link href="/support/privacy-policy" className="text-gray-400 hover:text-gray-100 ">
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link href="/support/terms" className="text-gray-400 hover:text-gray-100 ">
                Terms of Service
              </Link>
              <span className="mx-2">|</span>
              <Link href="/support/cookie-policy" className="text-gray-400 hover:text-gray-100 ">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
  
      </section>
    </footer>
  )
}
export default Footer;