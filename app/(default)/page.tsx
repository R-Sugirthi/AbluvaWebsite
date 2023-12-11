"use client"
import React, { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import LandingPage from '@/components/pages/LandingPage';
import Layers from '@/components/pages/second page/layers';
import Parallax from '@/components/pages/parallax/parallax';
import TopHeader from '@/components/Layout/TopHeader';
import Header from '@/components/Layout/Header';
import Card from '@/components/pages/card';
import Footer from '@/components/Layout/Footer';
import "./globals.css"


const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., API call)
    const fetchData = async () => {
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <TopHeader />
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <LandingPage />
          <Layers />
          <Card />
          <Parallax />
          <Footer/>
        </>
      )}
    </>
  );
};

export default Home;
