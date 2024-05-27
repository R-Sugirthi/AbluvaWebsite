
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';

import Blog4 from '@/components/pages/blog/blog4';

export const metadata = {
  title: 'Understanding Security Posture | ABLUVA',
  description: 'Explore ABLUVA\'s latest blog on \'Understanding Security Posture.\' Gain insights into strengthening your cybersecurity defenses and navigating the evolving landscape of digital vulnerabilities.',
};

export default function Blog() {
  return (
    <>
    
      <div className="bg-dark py-5 md:py-10 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10">
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
              <div className="text-gray-400 text-xs font-semibold">Blog<span className='ml-2 text-gray-500 square'>&#9642;</span><span className='tag ml-2'>Access</span><span className='tag ml-2'>Privacy</span><span className='tag ml-2'>Governance</span></div>
            </div>
            <p className="insightTitle primary-color-g">Understanding Security Posture: Strengthening Your Cybersecurity Defences</p>
            <p className="text-xl md:text-2xl pt-2 text-gray-300">In an era where digital vulnerabilities are a pervasive threat, one undeniable truth remains: Cybersecurity isn't a matter of choice; it's an indispensable necessity.</p>
            <p className="pt-7 text-xs text-gray-400">28 Nov 2023</p>
          </div>
        </div>
      </div>
      <Blog4/>
  
    </>
  );
}
