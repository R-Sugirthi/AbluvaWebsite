"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MobileLayers: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Function to handle scroll event and update the active section
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSectionId: string | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 130 && rect.bottom > 0) {
          currentSectionId = section.id;
        }
      });

      setActiveSection(currentSectionId);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="mobile-layout">
      <div className="mobile-nav bg-[#232630]">
        <nav className="nav">
          <ul className="navItems">
            <li className={`navItem ${activeSection === 'sec1' ? 'act' : ''}`}>
              <Link href="#sec1">Section 1</Link>
            </li>
            <li className={`navItem ${activeSection === 'sec2' ? 'act' : ''}`}>
              <Link href="#sec2">Section 2</Link>
            </li>
            <li className={`navItem ${activeSection === 'sec3' ? 'act' : ''}`}>
              <Link href="#sec3">Section 3</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mobile-content">
        <main>
          <section id="sec1" className="section">
            <div className="content">
              {/* Content for Section 1 */}
              <h2 className='text-2xl'>Section 1 Content</h2>
              <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="rounded-2xl">
              {/* Image for Section 1 */}
              <img src="https://img.freepik.com/free-photo/medium-shot-man-working-late-night_23-2150170834.jpg?w=740&t=st=1698926421~exp=1698927021~hmac=75fffe9125abbef6e81d23b4c9697be49c88ebc5c5c0d1d0475219417c54c72b" alt="Section 1 Image" className='py-5' />
            </div>
          </section>
          <section id="sec2" className="section">
            <div className="content">
              {/* Content for Section 2 */}
              <h2 className='text-2xl'>Section 2 Content</h2>
              <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="rounded-2xl">
              {/* Image for Section 2 */}
              <img src="https://img.freepik.com/premium-photo/young-business-people-group-have-meeting-working-modern-bright-office-indoor_530697-11140.jpg?w=740" alt="Section 2 Image" className='py-5' />
            </div>
          </section>
          <section id="sec3" className="section">
            <div className="content">
              {/* Content for Section 3 */}
              <h2 className='text-2xl'>Section 3 Content</h2>
              <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="rounded-2xl">
              {/* Image for Section 3 */}
              <img src="https://img.freepik.com/premium-photo/photo-group-people-working-out-business-plan-office_812426-66910.jpg?w=740" alt="Section 3 Image" className='py-5' />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MobileLayers;
