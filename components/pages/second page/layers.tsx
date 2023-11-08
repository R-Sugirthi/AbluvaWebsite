"use client"
import MobileLayers from "./MobileLayers";
import "./style.css"
import React, { useEffect } from 'react';

const Layers: React.FC = () => {
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
            }

            if (currentSectionId === 'section3' && imagesContainer) {
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
    const section3 = document.getElementById('section3');
    const images = document.querySelectorAll('.fixed');
    const imagesContainer = document.querySelector('.images-container');

    if (section3) {
      const section3Top = section3.getBoundingClientRect().top;
      if (section3Top < 0) {
        images.forEach((img) => {
          (img as HTMLElement).style.position = 'absolute';
          (img as HTMLElement).style.top = '100%';
          (img as HTMLElement).style.transform = 'translateY(-130%)';
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

  return (
    <>
      {isMobileScreen ? (
        <MobileLayers />
      ) : (
        <div className="flex relative index">
          <div className="w-1/5">
            <nav className="nav fixed p-40">
              <ul>
                <li className="nav-item">
                  <a href="#section1">Section 1</a>
                </li>
                <li className="nav-item">
                  <a href="#section2">Section 2</a>
                </li>
                <li className="nav-item">
                  <a href="#section3">Section 3</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-1/3">
            <main>
              <section id="section1">
                {/* Content for Section 1 */}
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </div>
              </section>
              <section id="section2">
                {/* Content for Section 2 */}
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </div>
              </section>
              <section id="section3">
                {/* Content for Section 3 */}
                <div>
                  Lorem ipsum dolor sit,  amet consectetur adipisicingamet consectetur elit.
                </div>
              </section>
            </main>
          </div>
          <div className="w-1/2 pt-30 pr-10">
            <div
              className='bg-[url("https://img.freepik.com/free-photo/medium-shot-man-working-late-night_23-2150170834.jpg?w=740&t=st=1698926421~exp=1698927021~hmac=75fffe9125abbef6e81d23b4c9697be49c88ebc5c5c0d1d0475219417c54c72b")] fixed image1 rounded-3xl'>
              <div className="text-white description text-md"><span className="text-xs font-bold">Section 1</span><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, magnam quo</div>
            </div>
            <div
              className='bg-[url("https://img.freepik.com/premium-photo/young-business-people-group-have-meeting-working-modern-bright-office-indoor_530697-11140.jpg?w=740")] h-96 fixed image2 rounded-3xl'>
              <div className="text-white description text-md"><span className="text-xs font-bold">Section 2</span><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, magnam quo</div>
            </div>
            <div
              className='bg-[url("https://img.freepik.com/premium-photo/photo-group-people-working-out-business-plan-office_812426-66910.jpg?w=740")] h-96 fixed image3 rounded-3xl'>
              <div className="text-white description text-md"><span className="text-xs font-bold">Section 3</span><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, magnam quo</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layers;
