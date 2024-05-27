// 

// InnerLandingPage.tsx
import React from 'react';
import DownArrowButton from './downArrowButton'; // Assuming DownArrowButton is in the same directory

interface InnerLandingPageProps {
  id: string;
  title: string;
  subtitle: string;
  product: string;
  group: string;
 
}

const InnerLandingPage: React.FC<InnerLandingPageProps> = ({ id, title, subtitle, product, group}) => {
  const handleScrollDown = () => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className='innerpage-section'>
    <div className='relative background-image' >

        <div className='innerpage-landing'>
          <div className='md:ml-56 md:mr-28 mx-10'>
            <p className='text-lg pb-3 boldfont'>
              <span className='innerpage-titlebg'>{title}</span>
            </p>
            <p className='subheading'>{subtitle}</p>
          </div>
          <div className='position w-full md:px-14 px-5'>
            <div className='pb-2 text-right md:block hidden'>
              <DownArrowButton onClick={handleScrollDown} />
            </div>
            <hr className='innerpage-border' />
            <div className='flex pt-5 product-group'>
              <p>{product}</p>
              <p className='ml-24 md:block hidden'>{group}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default InnerLandingPage;
