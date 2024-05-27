"use client"
import MobileLayers from "./MobileLayers";
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
          <div className="w-1/6 vertical-nav">
            <nav className="nav fixed py-40 ">
              <ul className="text-gray-200">
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
                    <Link href="/discover" className="btn">
                      Learn more
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
                      className="btn">
                      Learn more
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
                    <Link href="/graphene/compliance-enablement" className="btn">
                      Learn more
                    </Link>
                  </div>
                </div>
              </section>
              <section id="section4">

                <div>
                Uncover new revenue streams, optimize processes, and foster collaboration for unparalleled value extraction from every byte.<br />
                  <div className="py-5">
                    <Link href="/extend" className="btn">
                      Learn more
                    </Link>
                  </div>
                </div>
              </section>
            </main>
          </div>
          <div className="w-1/2 pr-10">
            <div className='bg-[url("/images/pattern2.jpg")] fixed image1 rounded-3xl transition-opacity'>
              <div className="ml-4">
              <div className="description">
                <p className="text-xs mb-3 text-gray-300">Discover</p>
                <p  className=" text-md founder"> Transform data into strategy with Graphene, unlocking insights for decisive action.</p>
              </div>
              </div>
            </div>
            <div className='bg-[url("/images/pattern16.jpg")] h-96 fixed image2 rounded-3xl transition-opacity'>
              
              <div className="ml-4">
              <div className="description">
                <p className="text-xs mb-3 text-gray-300 ">Protect</p>
                <p  className="text-md founder">Guardian of Data: Graphene shields your information with precision and strength. </p>
              </div>
              </div>

            </div>
            <div className='bg-[url("/images/wave4.jpg")] h-96 fixed image3 rounded-3xl transition-opacity'>
              <div className="ml-4">
              <div className="description">
                <p className="text-xsmb-3 text-gray-300">Monitor</p>
                <p  className=" text-md founder">Navigate Compliance effortlessly: Graphene's real-time insights, your peace of mind.</p>
              </div>
              </div>
            </div>
            <div className='bg-[url("/images/pattern8.jpg")] h-96 fixed image4 rounded-3xl transition-opacity'>
              <div className="ml-4">
              <div className="description">
                <p className="text-xsmb-3 text-gray-300">Extend</p>
                <p  className=" text-md founder"> Graphene - Elevate your data game, turning insights into opportunities.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layers;
