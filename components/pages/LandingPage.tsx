import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MobileLandingPage from './MobileLandingPage';
import Blob from '../blob/blob';

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

  useEffect(() => {
    let cursor = document.getElementById('cursor');
  
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.display = 'block'; 
      }
    };
  
    window.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  

  const isMobileScreen = typeof window !== 'undefined' && window.innerWidth <= 768;



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
            opacity: scrollPosition > 0 ? 0 : 1,
            zIndex: scrollPosition > 0 ? -1 : 1,
          }}
        >
          <div className='landing'>
            <div className="hex-container land">
              <Blob/>
            </div>
            <div className="" id="cursor"></div>
          </div>
          <div className="text-container">
            <div className="text-left">
              <h1 className="landingText anime">all your <span className='italictext'>data</span> <br></br>belongs to you<sup><span className='tm'>TM</span></sup></h1>
              <p className="md:text-lg text-gray-300 font mt-2 anime1">
                Experience Next-Level Data Security : An AI-Powered,<br></br> Multi-Layered Fortress for Your Valuables.
              </p>
              <div className='mt-14'>
                <Link href="/company/contact" className="btnland">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
}
