"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import "./style.css";

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
      <div className="mobile-nav bg-[#131318]">
        <nav className="">
          <ul className="navItems">
          <li
              style={{ color: activeSection === 'sec1' ? '#6d28d9' : '' }}
              className="navItem cursor-pointer"
              onClick={() => scrollToSection('sec1')}
            >
              <span>Discover</span>
            </li>
            <li
              style={{ color: activeSection === 'sec2' ? '#6d28d9' : '' }}
              className="navItem cursor-pointer"
              onClick={() => scrollToSection('sec2')}
            >
              <span>Protect</span>
            </li>
            <li
              style={{ color: activeSection === 'sec3' ? '#6d28d9' : '' }}
              className="navItem cursor-pointer"
              onClick={() => scrollToSection('sec3')}
            >
              <span>Monitor</span>
            </li>
            <li
              style={{ color: activeSection === 'sec4' ? '#6d28d9' : '' }}
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
              <p className='text-xl'>Uncover strategic insights and actionable intelligence through thorough data and behaviour discovery.</p>
              <div className='mt-5'>
              <Link href="/discover" className="text-lg text-white bg-violet-950 font-bold p-3 rounded-md mark mt-3">
                Learn more
              </Link>
              </div>
            </div>
           <div>
            <img src="https://img.freepik.com/free-photo/metaverse-avatar-collage-concept_52683-96425.jpg?w=740&t=st=1701764690~exp=1701765290~hmac=16c8db539b66322b9084e469a2ac3bab74f76edc4db24f6fa4ae86ac050fd04d" className='rounded-2xl'/>
           </div> 
          </section>
          <section id="sec2" className="section py-5">
          <div className="py-5">
          <p className='text-2xl font-semibold'>Protect</p>
              <p className='text-xl'>Secure your data with fine-grain access controls, dynamic masking, and advanced safeguards for unmatched protection with no performance penalty.</p>
              <div className='mt-5'>
              <Link href="/protect" className="text-lg text-white bg-violet-950 font-bold p-3 rounded-md mark mt-3">
                Learn more
              </Link>
              </div>
            </div>
            <div>
            <img src="https://img.freepik.com/premium-photo/access-personal-financial-data-with-futuristic-biometric-fingerprint-scanner-smartphone-surveillance-security-scanning-digital-programs-cyber-applications-future-secure-identity_143683-12503.jpg?w=740" className='rounded-2xl'/>
           </div> 
          </section>
          <section id="sec3" className="section py-5">
          <div className="py-5">
          <p className='text-2xl font-semibold'>Monitor</p>
              <p className='text-xl'>Comprehensive oversight, real-time reporting, and intuitive dashboards for regulatory adherence and peace of mind.</p>
              <div className='mt-5'>
              <Link href="/graphene/compliance-enablement" className="text-lg text-white bg-violet-950 font-bold p-3 rounded-md mark mt-3">
                Learn more
              </Link>
              </div>
            </div>
            <div>
            <img src="https://img.freepik.com/premium-photo/attractive-young-woman-working-home-night_688382-1477.jpg?w=740" className='rounded-2xl'/>
           </div> 
          </section>
          <section id="sec4" className="section py-5">
          <div className="py-5">
          <p className='text-2xl font-semibold'>Extend</p>
              <p className='text-xl'>Uncover new revenue streams, optimize processes, and foster collaboration for unparalleled value extraction from every byte.</p>
              <div className='mt-5'>
              <Link href="/extend" className="text-lg text-white bg-violet-950 font-bold p-3 rounded-md mark mt-3">
                Learn more
              </Link>
              </div>
            </div>
            <div>
            <img src="https://img.freepik.com/premium-photo/beautiful-blonde-girl-pinkblue-lighting-presses-checkmark-button-virtual-display-with-neon-purple-hologram-air_136863-3535.jpg?w=740" className='rounded-2xl'/>
           </div> 
          </section>
        </main>
      </div>
    </div>
  );
};

export default MobileLayers;
