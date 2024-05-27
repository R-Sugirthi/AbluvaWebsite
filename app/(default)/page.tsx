
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


const Home: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Abluva | Where Trust and Data Security Unite</title>
        <meta name="description" content="ABLUVA: Data security startup, integrating seamless protection into enterprise ecosystems using advanced neural networks and contextual graphs."></meta>
        {/* <link rel="icon" href="/images/logo_title.png" type="image/png" /> */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      </Helmet>
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
          <Footer customMainText="Reach out to Abluva & explore
how we can help elevate your Data Protection" customSubText="Learn more about Abluva's potential benefits for your business." />
        </>
      )}
    </>
  );
};

export default Home;
