// Import necessary modules and components
"use client"
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Loader from '@/components/Loader';
import LandingPage from '@/components/pages/LandingPage';
import Layers from '@/components/pages/second page/layers';
import Parallax from '@/components/pages/parallax/parallax';
import TopHeader from '@/components/Layout/TopHeader';
import Header from '@/components/Layout/Header';
import Card from '@/components/pages/card';
import Footer from '@/components/Layout/Footer';
import "./globals.css";

const metadata = {
  title: 'Abluva | Where Trust and Data Security Unite'
}

// Define the Home component
const Home: React.FC = () => {
  // State to manage loading
  const [loading, setLoading] = React.useState(true);

  // Simulate fetching data with a delay
  React.useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  // Render the component
  return (
    <>
    <title>{metadata.title}</title>
      {/* Helmet component for managing head elements */}
      <Helmet>
        {/* HubSpot script */}
        <script
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/43888896.js"
        />
        
        {/* Google Tag Manager script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DPFKQ7JY2Q"></script>

        {/* Google Analytics Configuration */}
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-DPFKQ7JY2Q');
          `}
        </script>

        {/* Google Site Verification meta tag */}
        <meta name="google-site-verification" content="1jF2DUuBHighu-2l57LxWPfTzmfeAJOtMxo5JUWN4Mc" />

        {/* Add a link to your logo */}
        <link rel="icon" href="/images/logo_title.png" type="image/png" sizes="16x16" />
       
      </Helmet>
      
      {/* Components for the page layout */}
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
          <Footer customMainText="Reach out to Abluva to explore How Graphene Can Help Elevate Your Data Protection" customSubText="Learn more about Abluva's potential benefits for your business"/>
        </>
      )}
    </>
  );
};

// Export the Home component
export default Home;
