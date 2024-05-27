
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';

import Blog1 from '@/components/pages/blog/blog1';
import Blog2 from '@/components/pages/blog/blog2';

export const metadata = {
  title: 'Selecting Right Data Protection Technologies | ABLUVA',
  description: 'Discover ABLUVA\'s insights on selecting the right data protection technologies. Learn key practices to safeguard data from unauthorized access and potential risks.',
};

export default function Blog() {
  return (
    <>
      
      <div className="bg-dark py-5 md:py-10 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10">
      
      
        <div className="container mx-auto px-5 py-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/4 text-white">
          <div className="py-4">
          <div className="text-gray-400 text-xs font-semibold">Blog<span className='ml-2 text-gray-500 square'>&#9642;</span><span className='tag ml-2'>Access</span><span className='tag ml-2'>Privacy</span><span className='tag ml-2'>Governance</span></div>
            </div>
            <p className="insightTitle primary-color-g">Selecting Right Data<br className='md:block hidden'></br> Protection Technologies</p>
            <p className="text-xl md:text-2xl pt-2 text-gray-300">Data protection technologies are essential for protecting data from unauthorized access, use, disclosure, disruption, modification, or destruction.</p>
            <p className="pt-7 text-xs text-gray-400">10 Dec 2023</p>
          </div>
        </div>
      </div>
      <Blog2/>
  
    </>
  );
}
