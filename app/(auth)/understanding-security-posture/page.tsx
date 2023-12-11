
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';

import Blog4 from '@/components/pages/blog/blog4';

export const metadata = {
  title: 'Understanding Security Posture | ABLUVA',
  // description: 'Page description',
};

export default function Blog() {
  return (
    <>
    
      <div className="bg-black py-5 md:py-10 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10">
      {/* <div>
        <p className='text-sm px-5 '>
  <span className='text-gray-500'><Link href="/">Home </Link></span>
  <span className='text-gray-500 px-2'> &#128898; </span>
  <span className='text-gray-500'><Link href="/allinsights">insights </Link></span>
  <span className='text-gray-500 px-2'> &#128898; </span>
  <span className='text-gray-200'>Blog</span>
</p>
        </div> */}

        <div className="container mx-auto px-5 py-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/4 text-white">
          <div className="py-4">
              <div className="text-[#d9dbe2] pb-2 font-semibold text-sm">Blog . <span className='link'>Access</span> <span className='link'>Privacy</span> <span className='link'>Governance</span></div>
            </div>
            <p className="text-4xl md:text-5xl founder text-gradient">Understanding Security Posture: Strengthening Your <br></br>Cybersecurity Defences</p>
            <p className="text-xl md:text-2xl founder pt-2 darkText">In an era where digital vulnerabilities are a pervasive threat, one undeniable truth remains: Cybersecurity isn't a matter of choice; it's an indispensable necessity.</p>
            <p className="mark pt-7 text-sm text-[#d9dbe2]">Abluva . 06 11 2023</p>
          </div>
        </div>
      </div>
      <Blog4/>
  
    </>
  );
}
