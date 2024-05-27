import React, { ReactNode } from 'react';

interface BgLandingProps {
  bgImage: string;
  title: ReactNode;
  subtitle: ReactNode;
}

const BgLanding: React.FC<BgLandingProps> = ({ bgImage, title, subtitle }) => {
  return (
    <div className={`py-28 md:py-28 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10 ${bgImage}`}>
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 text-white py-20">
          <p className="md:text-8xl text-7xl font-bold"><span className='primary-color-g'>{title}</span></p>
          <p className="text-xl text-gray-400 pt-5">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default BgLanding;
