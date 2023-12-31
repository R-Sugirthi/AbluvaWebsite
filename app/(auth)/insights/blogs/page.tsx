
import React, { useState } from 'react';
import BlogPage from '@/components/pages/blogs';
import Link from 'next/link';

export const metadata = {
  title: 'Blogs | ABLUVA',
  description:'Discover ABLUVA\'s latest blogs covering cutting-edge topics',
};

export default function Blogs() {
  return (
    <>
      
      <div className='bg-black sm:px-52 py-20'>
        {/* <div>
        <p className='text-sm py-10'>
  <span className='text-gray-500'><Link href="/">Home </Link></span>
  <span className='text-gray-500 px-2'> &#128898; </span>
  <span className='text-gray-200'> Insights</span>
</p>
        </div> */}
        <div>
          <p className='text-3xl text-gradient px-5'>Latest insights</p>
        </div>
        <div className='container mx-auto flex flex-col sm:flex-row items-center py-12 px-5'>
          <div className='w-full sm:w-1/2'>
            <img
              src='https://img.freepik.com/premium-photo/discussion-young-caucasian-business-woman-modern-office-with-team-meeting-tasks-giving-women-front-office-working-concept-finance-business-girl-power-inclusion-diversity-feminism_155003-39900.jpg?w=740'
              alt='Product Image'
              className='w-full rounded-xl latestimage'
            />
          </div>
          <div className='w-full sm:w-1/2 mt-4 sm:mt-0 sm:px-10 text-white'>
            <div className='py-4'>
              <div className='text-white pb-4 font-semibold'>
                Blog .{' '}
                <Link href='' className='link mr-2'>
                Security
                </Link>
                <Link href='' className='link mr-2'>
                Compliance
                </Link>
              </div>
            </div>
            <p className='text-2xl sm:text-4xl founder gradient-text'><Link href="/insights/blogs/changing-paradigms-data-security">Changing Paradigms in Data Security</Link></p>
            <p className='mt-2 sm:mt-12 text-base sm:text-sm text-gray-500'>Abluva . 14 Dec 2023</p>
          </div>
        </div>
      </div>
      <BlogPage/>
    
      
    </>
  );
}
