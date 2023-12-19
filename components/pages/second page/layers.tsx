"use client"
import MobileLayers from "./MobileLayers";
import "./style.css";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

  const Layers: React.FC = () => {
    const [hasScrolled, setHasScrolled] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        setHasScrolled(false);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const imagesContainer = document.querySelector('.images-container');

    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentSectionId = entry.target.getAttribute('id');
          if (currentSectionId) {
            navLinks.forEach((link) => {
              link.classList.remove('active');
              const parent = link.parentElement;
              if (parent) {
                parent.classList.remove('active-line'); // Remove the class from all nav-items
                if (link.getAttribute('href')?.slice(1) === currentSectionId) {
                  link.classList.add('active');
                  parent.classList.add('active-line'); // Add the class to the parent (nav-item)
                }
              }
            });

            document.querySelectorAll('.image1').forEach((img) => {
              (img as HTMLElement).style.display = 'none';
            });
            document.querySelectorAll('.image2').forEach((img) => {
              (img as HTMLElement).style.display = 'none';
            });
            document.querySelectorAll('.image3').forEach((img) => {
              (img as HTMLElement).style.display = 'none';
            });
            document.querySelectorAll('.image4').forEach((img) => {
              (img as HTMLElement).style.display = 'none';
            });

            if (currentSectionId === 'section1') {
              document.querySelectorAll('.image1').forEach((img) => {
                (img as HTMLElement).style.display = 'block';
              });
            } else if (currentSectionId === 'section2') {
              document.querySelectorAll('.image2').forEach((img) => {
                (img as HTMLElement).style.display = 'block';
              });
            } else if (currentSectionId === 'section3') {
              document.querySelectorAll('.image3').forEach((img) => {
                (img as HTMLElement).style.display = 'block';
              });
            } else if (currentSectionId === 'section4') {
              document.querySelectorAll('.image4').forEach((img) => {
                (img as HTMLElement).style.display = 'block';
              });
            }

            if (currentSectionId === 'section4' && imagesContainer) {
              imagesContainer.classList.add('fixed-container');
            } else if (imagesContainer) {
              imagesContainer.classList.remove('fixed-container');
            }
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);



  

  const handleScrollImages = () => {
    const section4 = document.getElementById('section4');
    const images = document.querySelectorAll('.fixed');
    const imagesContainer = document.querySelector('.images-container');

    if (section4) {
      const section4Top = section4.getBoundingClientRect().top;
      if (section4Top < 0) {
        images.forEach((img) => {
          (img as HTMLElement).style.position = 'absolute';
          (img as HTMLElement).style.top = '100%';
          (img as HTMLElement).style.transform = 'translateY(-120%)';
        });

        if (imagesContainer) {
          imagesContainer.classList.add('fixed-container');
        }
      } else {
        images.forEach((img) => {
          (img as HTMLElement).style.position = 'fixed';
          (img as HTMLElement).style.top = 'auto';
          (img as HTMLElement).style.transform = 'translateY(0)';
        });

        if (imagesContainer) {
          imagesContainer.classList.remove('fixed-container');
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollImages);
    return () => {
      window.removeEventListener('scroll', handleScrollImages);
    };
  }, []);



  const isMobileScreen = window.innerWidth <= 768;

  const containerStyle = {
    opacity: hasScrolled ? 0 : 1,
    transition: 'opacity 0.5s ease',
  };


  return (
    <>
      {isMobileScreen ? (
        <MobileLayers />
      ) : (
         <div className="flex relative index h-full" style={containerStyle}>
          <div className="w-1/6">
            <nav className="nav fixed py-40 mark">
              <ul>
                <li className="nav-item">
                  <Link href="#section1">Discover</Link>
                </li>
                <li className="nav-item">
                  <Link href="#section2">Protect</Link>
                </li>
                <li className="nav-item">
                  <Link href="#section3">Monitor</Link>
                </li>
                <li className="nav-item">
                  <Link href="#section4">Extend</Link>
                </li>
              </ul>
              
            </nav>
          </div>
          <div className="w-1/3 p-10">
            <main className="founder">
              <section id="section1">
                {/* Content for Section 1 */}
                <div>
                Uncover strategic insights and actionable intelligence through thorough data and behaviour discovery.<br />
                  <div className="py-5">
                    <Link href="/discover" className="btn-md text-lg text-white bg-violet-950  font-bold py-4 p-3 rounded-md mark">
                      Learn More
                    </Link>
                  </div>
                </div>
              </section>
              <section id="section2">
                {/* Content for Section 2 */}
                <div>
                Secure your data with fine-grain access controls, dynamic masking, and advanced safeguards for unmatched protection with no performance penalty.<br />
                  <div className="py-5">
                    <Link href="/protect"
                      className="btn-md text-lg text-white bg-violet-950 font-bold py-4 p-3 rounded-md mark">
                      Learn More
                    </Link>
                  </div>
                </div>
              </section>
              <section id="section3">
                {/* Content for Section 3 */}
                <div>
                Comprehensive oversight, real-time reporting, and intuitive dashboards for regulatory adherence and peace of mind.
                  <br />
                  <div className="py-5">
                    <Link href="/graphene-compliance-enablement" className="btn-md text-lg text-white bg-violet-950 font-bold py-4 p-3 rounded-md mark">
                      Learn More
                    </Link>
                  </div>
                </div>
              </section>
              <section id="section4">

                <div>
                Uncover new revenue streams, optimize processes, and foster collaboration for unparalleled value extraction from every byte.<br />
                  <div className="py-5">
                    <Link href="/extend" className="btn-md text-lg text-white bg-violet-950 font-bold py-4 p-3 rounded-md mark">
                      Learn More
                    </Link>
                  </div>
                </div>
              </section>
            </main>
          </div>
          <div className="w-1/2 pr-10">
            <div className='bg-[url("https://img.freepik.com/free-photo/metaverse-avatar-collage-concept_52683-96425.jpg?w=740&t=st=1701764690~exp=1701765290~hmac=16c8db539b66322b9084e469a2ac3bab74f76edc4db24f6fa4ae86ac050fd04d")] fixed image1 rounded-3xl transition-opacity'>
              <div className="text-white description text-md">
                <span className="text-xs font-bold">Discover</span><br></br>
                Transform data into strategy with Graphene, unlocking insights for decisive action.
              </div>
            </div>
            <div className='bg-[url("https://img.freepik.com/premium-photo/access-personal-financial-data-with-futuristic-biometric-fingerprint-scanner-smartphone-surveillance-security-scanning-digital-programs-cyber-applications-future-secure-identity_143683-12503.jpg?w=740")] h-96 fixed image2 rounded-3xl transition-opacity'>
              <div className="text-white description text-md">
                <span className="text-xs font-bold">Protect</span><br></br>
                Guardian of Data: Graphene shields your information with precision and strength. 
              </div>
            </div>
            <div className='bg-[url("https://img.freepik.com/premium-photo/attractive-young-woman-working-home-night_688382-1477.jpg?w=740")] h-96 fixed image3 rounded-3xl transition-opacity'>
              <div className="text-white description text-md">
                <span className="text-xs font-bold">Monitor</span><br></br>
                Navigate Compliance effortlessly: Graphene's real-time insights, your peace of mind.
              </div>
            </div>
            <div className='bg-[url("https://img.freepik.com/premium-photo/beautiful-blonde-girl-pinkblue-lighting-presses-checkmark-button-virtual-display-with-neon-purple-hologram-air_136863-3535.jpg?w=740")] h-96 fixed image4 rounded-3xl transition-opacity'>
              <div className="text-white description text-md">
                <span className="text-xs font-bold">Extend</span><br></br>
                Graphene - Elevate your data game, turning insights into opportunities.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layers;
