import ProductCard from '@/components/pages/productcard';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';
import './blog.css';
import Blog1 from '@/components/pages/blog/blog1';

export const metadata = {
  title: 'Abluva-Product',
  description: 'Page description',
};

export default function Product() {
  return (
    <>
      <Header />
      <div className="bg-black py-10 md:py-40 md:pl-48 md:pr-12 lg:pr-32 sm:px-10">
        <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/4 text-white">
            <div className="py-4">
              <div className="text-[#d9dbe2] pb-2 font-semibold text-sm">Blog . <a href="" className="link">Data Security</a></div>
            </div>
            <p className="text-4xl md:text-5xl founder text-gradient">Changing Paradigms in Data Security</p>
            <p className="text-xl md:text-2xl founder pt-2">Data security is a critical concern for organizations of all sizes, but the landscape is constantly evolving. New technologies, new threats, and new regulations are all driving changes in the way that organizations protect their data.</p>
            <p className="mark pt-7 text-sm text-[#d9dbe2]">Abluva . 06 11 2023</p>
          </div>
        </div>
      </div>
      <Blog1 />
      <Footer />
    </>
  );
}
