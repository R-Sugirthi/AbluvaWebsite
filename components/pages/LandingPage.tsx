"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "../style.css";
import Link from 'next/link';
import MobileLandingPage from './MobileLandingPage';

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

  const isMobileScreen = window.innerWidth <= 768;

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
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1), transparent), url("https://img.freepik.com/premium-photo/futuristic-dark-background-ripple-effect-web-pink-dots-big-data-illustration-technologies-artificial-intelligence-effect-particle-oscillation-3d-rendering_710001-333.jpg?w=900")',
            backgroundSize: '100% 100%',
          }}
        >
          <div className="max-w-2xl ml-32 py-20 sm:px-6">
            <div className="pt-32 pb-10 md:pt-40 md:pb-16">
              <div className="max-w-3xl mx-auto text-left pb-12 md:pb-16">
                <h1 className="text-3xl text-white markBold">ALL DATA BELONGS TO YOU</h1>
                <p className="md:text-xl mb-14 text-gray-200 mark">
                  "Experience Next-Level Data Security: An AI-Powered, Multi-Layered Fortress for Your Valuables."
                </p>
                <Link href="/" className="btn-md text-lg text-white bg-violet-950 font-bold py-4 p-3 rounded-md">
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
