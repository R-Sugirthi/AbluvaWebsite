
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';

import Blog1 from '@/components/pages/blog/blog1';

export const metadata = {
  title: 'Changing Paradigms in Data Security | ABLUVA',
  description: 'Explore the evolving landscape of data security in ABLUVA\'s blog, \'Changing Paradigms in Data Security.\'',
};

export default function Blog() {
  return (
    <>    
      <div className="bg-dark py-5 md:py-10 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10">
        <div className="container mx-auto px-5 py-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/4 text-white">
            <div className="py-4">
              <div className="text-gary-400 text-xs font-semibold">Blog<span className='ml-2 text-gray-500 square'>&#9642;</span><span className='tag ml-2'>Security</span><span className='tag ml-2'>Compliance</span></div>
            </div>
            <p className="text-4xl insightTitle font primary-color-g">Changing Paradigms<br className='md:block hidden'></br>in Data Security</p>
            <p className="text-xl md:text-2xl fontpt-2 text-gray-300">Data security is a critical concern for organizations of all sizes, but the landscape is constantly evolving. New technologies, new threats, and new regulations are all driving changes in the way that organizations protect their data.</p>
            <p className="font pt-7 text-xs text-gray-400">14 Dec 2023</p>
          </div>
        </div>
      </div>
      <Blog1 />
    </>
  );
}
