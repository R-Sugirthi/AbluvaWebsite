import NewsPage from '@/components/pages/newscard';
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'News & Events | Abluva',
  // description: 'Page description',
};


export default function News() {

  return (
    <>
      <div className='bg-black h-full sm:px:10 md:px-52 py-20'>

        <div>
          <p className='text-3xl text-gradient px-5'>Latest News</p>
        </div>
        <div className='container mx-auto flex flex-col sm:flex-row items-center py-12 px-5'>
          <div className='w-full sm:w-1/2'>
            <img
              src='https://img.freepik.com/free-photo/cloud-technology-with-futuristic-hologram-smartwatch_53876-124625.jpg?w=740&t=st=1702108318~exp=1702108918~hmac=1453116006523a8359bd00dcb684252a83d313350bfd5409a9c7da733977940a'
              alt='News Image'
              className='w-full rounded-xl latestimage '
            />
          </div>
          <div className='w-full sm:w-1/2 mt-4 sm:mt-0 sm:px-10 text-white'>
            <div className='py-4'>
              <div className='text-white pb-4 font-semibold'>
                News .{' '}
                <Link href='' className='link mr-2'>
                  AWS
                </Link>
                <Link href='' className='link mr-2'>
                  Security Community
                </Link>
              </div>
            </div>
            <p className='text-2xl sm:text-4xl founder gradient-text'><Link href="abluva-initiates-aws-security-ug-apac">Abluva Initiates ‘AWS Security UG-APAC’</Link></p>
            <p className='mt-2 sm:mt-12 text-base sm:text-sm text-gray-500'>Abluva . 04 Dec 2023</p>
          </div>
        </div>
      </div>
      <NewsPage />

    </>
  );
}