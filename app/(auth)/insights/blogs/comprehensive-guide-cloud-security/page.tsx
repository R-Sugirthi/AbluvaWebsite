
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';
import Blog1 from '@/components/pages/blog/blog1';
import Blog2 from '@/components/pages/blog/blog2';
import Blog3 from '@/components/pages/blog/blog3';

export const metadata = {
  title: 'A Comprehensive Guide to Cloud Security | ABLUVA',
  description: 'Discover \'A Comprehensive Guide to Cloud Security\' in ABLUVA\'s blog series. Explore essential data protection technologies ',
};

export default function Blog() {
  return (
    <>

      <div className="bg-black py-5 md:py-10 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10">
  
        <div className="container mx-auto px-5 py-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/4 text-white">
          <div className="py-4">
              <div className="text-[#d9dbe2] pb-2 font-semibold text-sm">Blog . <span className='link'>Security</span> <span className='link'>Access</span></div>
            </div>
            <p className="text-4xl md:text-5xl founder text-gradient">A Comprehensive Guide to <br></br>Cloud Security</p>
            <p className="text-xl md:text-2xl founder pt-2 darkText">Data protection technologies are essential for protecting data from unauthorized access, use, disclosure, disruption, modification, or destruction.</p>
            <p className="mark pt-7 text-sm text-[#d9dbe2]">Abluva . 03 Dec 2023</p>
          </div>
        </div>
      </div>
      <Blog3/>
    </>
  );
}
