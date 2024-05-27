"use client"
// Research.tsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Leaderboard from './leaderboard/page';
import Datasets from './datasets/page';
import ResearchPapers from './research-papers/page';
import Patents from './patents/page';
import BgLanding from '@/components/widgets/bgLandingPage';


const metadata = {
  title: 'Research | ABLUVA',
  description: 'Unveiling Innovation: Explore ABLUVA\'s research in AI, machine learning, and cybersecurity.',
}

const Research: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('Leaderboards');
  const [menuOpacity, setMenuOpacity] = useState<number>(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const pageHeight = document.body.scrollHeight - window.innerHeight;

    const getOffset = (id: string) => (document.getElementById(id)?.offsetTop || 0) - 150;

    const leaderboardsOffset = getOffset('Leaderboards');
    const datasetsOffset = getOffset('Synthetic Datasets');
    const researchPapersOffset = getOffset('Research Papers');
    const patentsOffset = getOffset('Patents');

    if (scrollY >= leaderboardsOffset && scrollY < datasetsOffset) {
      setActiveSection('Leaderboards');
    } else if (scrollY >= datasetsOffset && scrollY < researchPapersOffset) {
      setActiveSection('Synthetic Datasets');
    } else if (scrollY >= researchPapersOffset && scrollY < patentsOffset) {
      setActiveSection('Research Papers');
    } else if (scrollY >= patentsOffset) {
      setActiveSection('Patents');
    }

    const scrollThreshold = windowHeight * 0.20;
    const opacity = Math.min(1, scrollY / scrollThreshold);
    setMenuOpacity(opacity);

    if (opacity === 1 && scrollY > pageHeight * 0.96) {
      setMenuOpacity(0);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (item: string) => {
    setActiveSection(item);

    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderMenuItems = () => {
    const menuItems = ['Leaderboards', 'Synthetic Datasets', 'Research Papers', 'Patents'];

    return menuItems.map((item) => (
      <li
        key={item}
        className={`md:px-5 md:py-2 px-4 py-1 text-center cursor-pointer ${activeSection === item ? 'menu-bg rounded-full' : ''}`}
        onClick={() => handleItemClick(item)}
      >
        {item}
      </li>
    ));
  };

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      <BgLanding
        bgImage="bg-research"
        title="research"
        subtitle="Unveiling Innovation: Our Research Odyssey"
      />
      <div className=''>      
        <div className='flex items-center justify-center research-menu ' style={{ opacity: menuOpacity }} >
          <nav className='border border-gray-700 rounded-full text-gray-200 menu-bg1 font'>
            <ul className='flex items-center justify-center space-x-1 md:py-3 md:px-5 py-2 px-1'>{renderMenuItems()}</ul>
          </nav>
        </div>
      
        <div className="fade-up">
          <Leaderboard/>
          <Datasets />
          <ResearchPapers />
          <Patents />
        </div>
      </div>
    </>
  );
};

export default Research;
