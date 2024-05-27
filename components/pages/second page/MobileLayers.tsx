"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const MobileLayers: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSectionId: string | null = null;

      // Logic to determine the current active section
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 70 && rect.bottom >= 70) {
          currentSectionId = section.id;
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };


  return (
    <div className="mobile-layout founder">
      <div className="mobile-nav bg-defaultdark">
        <nav className="">
          <ul className="navItems">
          <li
              style={{ color: activeSection === 'sec1' ? '#6337d4' : '' }}
              className="navItem cursor-pointer"
              onClick={() => scrollToSection('sec1')}
            >
              <span>Discover</span>
            </li>
            <li
              style={{ color: activeSection === 'sec2' ? '#6337d4' : '' }}
              className="navItem cursor-pointer"
              onClick={() => scrollToSection('sec2')}
            >
              <span>Protect</span>
            </li>
            <li
              style={{ color: activeSection === 'sec3' ? '#6337d4' : '' }}
              className="navItem cursor-pointer"
              onClick={() => scrollToSection('sec3')}
            >
              <span>Monitor</span>
            </li>
            <li
              style={{ color: activeSection === 'sec4' ?  '#6337d4' : '' }}
              className="navItem cursor-pointer"
              onClick={() => scrollToSection('sec4')}
            >
              <span>Extend</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mobile-content px-5 founder">
        <main>
          <section id="sec1" className="section py-5">
            <div className="py-5">
            <p className='text-2xl font-semibold'>Discover</p>
              <p className='text-xl text-gray-300 py-2'>Uncover strategic insights and actionable intelligence through thorough data and behaviour discovery.</p>
              <div className='py-2'>
              <Link href="/discover" className="btn">
                Learn more
              </Link>
              </div>
            </div>
           <div className='image-container rounded-2xl'>
            <img src="/images/vm1.jpg" className='rounded-2xl ' alt="image"/>
            <div className='image-overlay rounded-2xl'></div>
            
           </div> 
          </section>
          <section id="sec2" className="section py-10">
          <div className="py-5">
          <p className='text-2xl font-semibold'>Protect</p>
              <p className='text-xl text-gray-300 py-2'>Secure your data with fine-grain access controls, dynamic masking, and advanced safeguards for unmatched protection with no performance penalty.</p>
              <div className='py-2'>
              <Link href="/protect" className="btn">
                Learn more
              </Link>
              </div>
            </div>
            <div className='image-container rounded-2xl'>
            <img src="/images/vm2.jpg" className='rounded-2xl ' alt="image"/>
            <div className='image-overlay rounded-2xl'></div>
           
           </div> 
          </section>
          <section id="sec3" className="section py-10">
          <div className="py-5">
          <p className='text-2xl font-semibold'>Monitor</p>
              <p className='text-xl text-gray-300 py-2'>Comprehensive oversight, real-time reporting, and intuitive dashboards for regulatory adherence and peace of mind.</p>
              <div className='py-2'>
              <Link href="/graphene/compliance-enablement" className="btn">
                Learn more
              </Link>
              </div>
            </div>
            
            <div className='image-container rounded-2xl'>
            <img src="/images/vm3.jpg" alt="image" className='rounded-2xl '/>
            <div className='image-overlay rounded-2xl'></div>
           </div> 
          
          </section>
          <section id="sec4" className="section py-10">
          <div className="py-5">
          <p className='text-2xl font-semibold'>Extend</p>
              <p className='text-xl text-gray-300 py-2'>Uncover new revenue streams, optimize processes, and foster collaboration for unparalleled value extraction from every byte.</p>
              <div className='py-2'>
              <Link href="/extend" className="btn">
                Learn more
              </Link>
              </div>
            </div>
            
            <div className='image-container rounded-2xl'>
            <img src="/images/vm4.jpg" alt="image" className='rounded-2xl '/>
            <div className='image-overlay rounded-2xl'></div>
           </div> 
          </section>
        </main>
      </div>
    </div>
  );
};

export default MobileLayers;
