"use client"
import React, { useState } from 'react';
import DropdownWithCheckbox from '@/components/pages/dropdownType';
import Blogs from '@/components/pages/blogs';
import ResourcesCard from '@/components/pages/resourcesCard';
import Ebook from '@/components/pages/ebook';
import Link from 'next/link';
import DropdownWithCheckbox1 from '@/components/pages/dropdownTopic';
import DropdownWithCheckbox2 from '@/components/pages/dropdownTags';

const options = ['Blog', 'eBook', 'Clear'];
const options1 = ['Option1', 'Option2', 'Option3'];
const options2 = ['Security', 'Compliance', 'Privacy', 'Governance', 'Access'];


export default function Allsights() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (selected: string[]) => {
    setSelectedOptions(selected);
  };

  const renderProductCards = () => {
    if (selectedOptions.includes('Blog')) {
      return <Blogs />;
    } else if (selectedOptions.includes('eBook')) {
      return <Ebook />;
    } else if (selectedOptions.includes('Clear')) {
      return <ResourcesCard />;
    } else {
      // If no option is selected, you can decide what to render or render nothing.
      return <ResourcesCard />
    }
  };

  return (
    <>

      <div className='bg-black sm:px-52 pb-20'>
        <div>
          <p className='text-sm py-10'>
            <span className='text-gray-500'><Link href="/">Home </Link></span>
            <span className='text-gray-500 px-2'> &#128898; </span>
            <span className='text-gray-200'> Insights</span>
          </p>
        </div>
        <div>
          <p className='text-3xl text-gradient'>Latest insights</p>
        </div>
        <div className='container mx-auto flex flex-col sm:flex-row items-center py-12'>
          <div className='w-full sm:w-1/2'>
            <img
              src='https://img.freepik.com/free-photo/discussion-young-caucasian-business-woman-modern-office-with-team-meeting-tasks-giving-women-front-office-working-concept-finance-business-girl-power-inclusion-diversity-feminism_155003-38883.jpg?w=740&t=st=1701942946~exp=1701943546~hmac=6ff7840203cbda8e9b20b1b79eca49b11631f61f7004a6cc6155caeccf561884'
              alt='Product Image'
              className='w-full rounded-xl latestimage'
            />
          </div>
          <div className='w-full sm:w-1/2 mt-4 sm:mt-0 sm:px-10 text-white'>
            <div className='py-4'>
              <div className='text-white pb-4 font-semibold'>
                Blog .{' '}
                <Link href='' className='link'>
                  Data Security
                </Link>
              </div>
            </div>
            <p className='text-2xl sm:text-4xl founder'><Link href="/blog">Changing Paradigms in Data Security</Link></p>
            <p className='mt-2 sm:mt-12 text-base sm:text-sm text-gray-500'>Abluva . Nov 17 2023</p>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='sticky top-0 z-50 bg-gray-200 h-20 flex'>
          <div>
            <p className='text-black pt-5 sm:pl-52 pr-20 text-2xl'>All Insights</p>
          </div>
          <div>
            <p>
              <DropdownWithCheckbox options={options} onChange={handleOptionChange} />
              {/* <DropdownWithCheckbox1 options={options1} onChange={handleOptionChange} /> */}
              <DropdownWithCheckbox2 options={options2} onChange={handleOptionChange} />
            </p>
          </div>
        </div>
      </div>
      {renderProductCards()}

    </>
  );
}
