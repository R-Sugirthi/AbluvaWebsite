"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MobileLandingPage from './MobileLandingPage';
import "../style.css";

export default function LandingPage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobileScreen = typeof window !== 'undefined' && window.innerWidth <= 768;

  // Import content.json from the public folder
  const content = require('../../public/json/LandingPage.json');

  const {
    desktopLandingPage,
    backgroundImage,
  } = content;

  return (
    <>
      {isMobileScreen ? (
        <MobileLandingPage />
      ) : (
        <motion.section
          initial={{
            paddingBottom: '150px',
            paddingTop: '60px',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            opacity: 1,
          }}
          animate={{
            opacity: 1 - scrollPosition / 100,
            zIndex: 1 - (1 - (1 - scrollPosition / 100))
          }}
          style={{
            backgroundImage: `linear-gradient(to right, rgb(0, 0, 0)30%, transparent), url("${backgroundImage}")`,
            backgroundSize: '100% 100%',
          }}
        >
          <div className="max-w-3xl ml-32 py-20 sm:px-6">
            <div className="pt-32 pb-10 md:pt-40 md:pb-16">
              <div className="max-w-3xl mx-auto text-left pb-12 md:pb-16">
                <h1 className="text-3xl text-white font-bold relative">
                  ALL YOUR DATA BELONGS TO YOU
                  <span className='font-thin text-xl align-top absolute top-0.5 founder'><sup>TM</sup></span>
                </h1>

                <p className="md:text-2xl mb-14 text-gray-200 founder">
                Experience Next-Level Data Security : An AI-Powered,<br></br> Multi-Layered Fortress for Your Valuables.
                </p>
                <Link href="/contact" className="btn-md text-lg text-white bg-violet-950 font-bold py-4 p-3 rounded-md mark">
                  {desktopLandingPage.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
}
