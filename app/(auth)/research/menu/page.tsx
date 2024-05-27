"use client";
import React, { useState, useEffect } from 'react';
import Leaderboards from '../leaderboards/page';
import Datasets from '../datasets/page';
import ResearchPapers from '../research-papers/page';
import Patents from '../patents/page';


const MyMenu: React.FC = () => {
  const [menuOpacity, setMenuOpacity] = useState<number>(0);
  const [selectedComponent, setSelectedComponent] = useState<string>('Leaderboards');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollThreshold = windowHeight * 0.95;
    const opacity = Math.min(1, scrollY / scrollThreshold);

    setMenuOpacity(opacity);
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (item: string) => {
    setSelectedComponent(item);
  };

  const renderMenuItems = () => {
    const menuItems = ['Leaderboards', 'Synthetic Datasets', 'Research Papers', 'Patents'];

    return menuItems.map((item) => (
      <li
        key={item}
        className={`p-3 cursor-pointer ${selectedComponent === item ? 'menu-bg rounded-full' : ''}`}
        onClick={() => handleItemClick(item)}
      >
        {item}
      </li>
    ));
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'Synthetic Datasets':
        return <Datasets />;
      case 'Research Papers':
        return <ResearchPapers />;
      case 'Patents':
        return <Patents />;
      default:
        return <Leaderboards />;
    }
  };

  return (
    <>
    <div className='flex items-center justify-center research-menu' style={{ opacity: menuOpacity }}>
      <nav className='border border-gray-700 rounded-full text-gray-300 menu-bg1 font'>
      <ul className='flex items-center justify-center space-x-10 p-3 px-5'>{renderMenuItems()}</ul>
      </nav>
    </div>
      <div className="fade-up">
        {renderSelectedComponent()}
      </div>
    </>
  );
};
export default MyMenu;
