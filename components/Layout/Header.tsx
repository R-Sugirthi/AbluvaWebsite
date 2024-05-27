"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons';




export default function Header() {
  const [isProductSubMenuVisible, setProductSubMenuVisible] = useState(false);
  const [isCompanySubMenuVisible, setCompanySubMenuVisible] = useState(false);
  const [isResourcesSubMenuVisible, setResourcesSubMenuVisible] = useState(false);
  const [isResearchSubMenuVisible, setResearchSubMenuVisible] = useState(false);


  const toggleProductSubMenu = () => {
    setProductSubMenuVisible(!isProductSubMenuVisible);
    setCompanySubMenuVisible(false); 
    setResourcesSubMenuVisible(false);
    setResearchSubMenuVisible(false);
  };

  const toggleCompanySubMenu = () => {
    setCompanySubMenuVisible(!isCompanySubMenuVisible);
    setProductSubMenuVisible(false); 
    setResourcesSubMenuVisible(false);
    setResearchSubMenuVisible(false);
  };

  const toggleResourcesSubMenu = () => {
    setResourcesSubMenuVisible(!isResourcesSubMenuVisible);
    setProductSubMenuVisible(false); 
    setCompanySubMenuVisible(false);
    setResearchSubMenuVisible(false);
  };

  const toggleResearchSubMenu = () => {
    setResearchSubMenuVisible(!isResearchSubMenuVisible);
    setProductSubMenuVisible(false); 
    setCompanySubMenuVisible(false);
    setResourcesSubMenuVisible(false);
  };
  const handleResearchSubMenuItemClick = () => {
    setResearchSubMenuVisible(false);
  };
  const handleProductSubMenuItemClick = () => {
    setProductSubMenuVisible(false);
  };
  const handleResourcesSubMenuItemClick = () => {
    setResourcesSubMenuVisible(false);
  };
  const handleCompanySubMenuItemClick = () => {
    setCompanySubMenuVisible(false);
  };

  return (
    <header className="sticky top-0 w-full z-30 bg-header text-lg mq">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex  md:flex-wrap sm:px-0 items-center justify-between">
          <div className="shrink-0 mr-4 flex">
            <Link href="/" aria-label="Cruip">
              <div className="flex">
              <div>
                  <Image src="/images/logo.png" alt="Logo" width={40} height={50} priority />
                </div>
                <div>
                  <Image src="/images/abluva_logo.png" className="pl-1" alt="Logo" width={85} height={50} priority />
                </div>
                {/* <div>
                  <Image src="/images/Abluva-Logo-15.png" alt="Logo" width={40} height={50} priority />
                </div>
                <div>
                  <Image src="/images/Abluva-Text-02.png" className="pt-3 pl-1" alt="Logo" width={85} height={50} priority />
                </div> */}
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex md:grow header-nav">
            <ul className="flex grow justify-end flex-wrap items-center max-w-full">
              <li>
                <button
                  onClick={toggleProductSubMenu}
                  className="header-menu item"
                >
                  Product
                </button>
                {isProductSubMenuVisible && (
                  <div
                    className="bg-header-dark absolute top-30 left-0  grid grid-cols-2 gap-2" >
                    {/* Left column for text */}
                    <div className="p-8 bg-defaultdark">
                      <div className="text-3xl  founder primary-color">
                        Ease the Data Protection Challenge. Get the Delicate Balance Between Fortifying Your Data and Ensuring Seamless Access.
                      </div>
                     
                      <div className='submenu-border my-7'></div>
                      <div className='grid md:grid-cols-2 gap-10'>
                        <div>
                          <div className=''>
                          <p className="text-2xl">Products</p>
                            <p className="text-lg pt-3">Graphene</p>
                            <ul className='ml-10 submenulist'>
                              <li className=''>
                                <Link href="/graphene/platform-overview" className="submenu-text"  onClick={handleProductSubMenuItemClick}>
                                  Platform Overview  <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/graphene/data-access-control" className="submenu-text"  onClick={handleProductSubMenuItemClick}>
                                  Data Access Control<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/graphene/depersonalization" className="submenu-text"  onClick={handleProductSubMenuItemClick}>
                                  Data Depersonalization<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/graphene/compliance-enablement" className="submenu-text"  onClick={handleProductSubMenuItemClick}>
                                  Compliance Enablement <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div className=''>
                          <p className="text-2xl">Incubators</p>
                            <ul className='submenulist'>
                              <li><Link href="/incubators/intrusion-detection" className="submenu-text"  onClick={handleProductSubMenuItemClick}> Intrusion Detection<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link></li>
                              <li><Link href="/incubators/attack-vector-discovery" className="submenu-text"  onClick={handleProductSubMenuItemClick}> Attack Vector Discovery<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link></li>
                              <li><Link href="/incubators/data-governance" className="submenu-text"  onClick={handleProductSubMenuItemClick}> Data Governance<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link></li>
                              <li><Link href="/incubators/secure-knowledge-graph" className="submenu-text"  onClick={handleProductSubMenuItemClick}> Secure Knowledge Graph<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link></li>
                              <li><Link href="/incubators/breathing-security" className="submenu-text"  onClick={handleProductSubMenuItemClick}> Breathing Security<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=' bg-header-dark p-10'>
                      <div className='image-container rounded-md'>
                       
                     <img className=" rounded-md" src="/images/menu8.jpg" alt="image" />
                      <div className='image-overlay rounded-md'></div>
                      </div>
                      <div>
                      <p className='text-2xl pt-5 pb-3'>Data Protection</p>
                      <Link href="/insights/blogs/changing-paradigms-data-security" className=' submenu-text' onClick={handleProductSubMenuItemClick}>The changing paradigms in changing times <span className='text-sm' > <FontAwesomeIcon icon={faAngleRight} /> </span></Link>
                      </div>
                    </div>
                    <button
                      className="absolute top-1 right-3 text-gray-500 cursor-pointer text-2xl"
                      onClick={toggleProductSubMenu}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                )}
              </li>

              <li>
                <button
                  onClick={toggleResearchSubMenu}
                  className="header-menu item"
                >
                 Research
                </button>
                {isResearchSubMenuVisible && (
                  <div
                    className="bg-header-dark absolute top-30 left-0 w-full transition duration-300 ease-in-out flex grid grid-cols-2 gap-2 "> 
                    {/* Left column for text */}
                    <div className="p-8 bg-defaultdark">
                      <div className="text-3xl  mb-5 primary-color">
                      In the Ever-Evolving Landscape of Data Threats, Our Research is the Compass Guiding Us to Innovative Solutions.
                      </div>
                      <Link href="/research" className="submenu-text"  onClick={handleResearchSubMenuItemClick}>
                              All Research<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                      <div className='submenu-border my-7'></div>
                      <div className='grid md:grid-cols-2 gap-10'>
                        <div>
                          <div className=''>
                            <ul className='submenulist'> 
                              <li>
                              <Link
            href="/research/leaderboards"
            className="submenu-text"
            onClick={handleResearchSubMenuItemClick}
          >
                                   Leaderboards<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                              <Link href="/research/datasets" className="submenu-text"  onClick={handleResearchSubMenuItemClick}>
                              Synthetic Datasets<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                              <Link href="/research/research-papers" className="submenu-text" onClick={handleResearchSubMenuItemClick}>
                                   Research Papers<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                              <Link href="/research/patents" className="submenu-text" onClick={handleResearchSubMenuItemClick}>
                                   Patents<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='p-10'>
                      <div className='image-container rounded-md'>
                        <img className="bg-header-dark rounded-md sub-menu-image" src="/images/menu7.jpg" alt="image" />
                        <div className='image-overlay rounded-md'></div>
                      </div>
                      <div>
                      <p className='text-2xl pt-5 pb-3 '>Data Protection Technologies</p>
                      <Link href="/insights/blogs/selecting-right-data-protection-technologies" className='submenu-text' onClick={handleResearchSubMenuItemClick} >Selecting Right Data Protection Technologies<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link>
                      </div>
                    </div>
                    <button
                      className="absolute top-1 right-3 text-gray-500 cursor-pointer text-2xl"
                      onClick={toggleResearchSubMenu}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={toggleResourcesSubMenu}
                  className="header-menu item"
                >
                  Resources
                </button>
                {isResourcesSubMenuVisible && (
                  <div
                    className="bg-header-dark absolute top-30 left-0 w-full transition duration-300 ease-in-out flex grid grid-cols-2 gap-2 ">

                    {/* Left column for text */}
                    <div className="p-8 bg-defaultdark">
                      <div className="text-3xl  founder primary-color">
                      In the Vast Expanse of Digital Knowledge, Written Insights Serve as Guiding Stars, Illuminating the Path to Data Security Excellence.
                      </div>
                      <div className='submenu-border my-7'></div>
                      <div className='grid md:grid-cols-2 gap-10'>
                        <div>
                          <div className=''>

                            <ul className='submenulist'>
                              <li>
                                <Link href="/insights/blogs" className="submenu-text" onClick={handleResourcesSubMenuItemClick}>
                                  Blogs  <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/insights/ebooks" className="submenu-text"  onClick={handleResourcesSubMenuItemClick}>
                                  eBooks<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/resources/glossary" className="submenu-text" onClick={handleResourcesSubMenuItemClick}>
                                  Glossary<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                             
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='p-10'>
                      <div className='image-container rounded-md'>
                        <img className="bg-header-dark rounded-md" src="/images/menu3.jpg" alt="image" />
                        <div className='image-overlay rounded-md'></div>
                      </div>
                      <div>
                      <p className='text-2xl pt-5 pb-3 '>Cloud Security</p>
                      <Link href="/insights/blogs/comprehensive-guide-cloud-security" className=' submenu-text' onClick={handleResourcesSubMenuItemClick}>A Comprehensive Guide to Cloud Security<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight}  /> </span></Link>
                      </div>
                    </div>
                    <button
                      className="absolute top-1 right-3 text-gray-500 cursor-pointer text-2xl"
                      onClick={toggleResourcesSubMenu}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={toggleCompanySubMenu}
                  className="header-menu item"
                >
                  Company
                </button>
                {isCompanySubMenuVisible && (
                  <div
                    className="bg-header-dark absolute top-30 left-0 w-full transition duration-300 ease-in-out flex grid grid-cols-2 gap-2 ">

                    {/* Left column for text */}
                    <div className="p-8 bg-defaultdark">
                      <div className="text-3xl  founder primary-color">
                      In the Vast Landscape of Data, We Carve Out Secure Havens, Ensuring Your Information Remains Untouchable.
                      </div>
                      
                      <div className='submenu-border my-7'></div>
                      <div className='grid md:grid-cols-2 gap-10'>
                        <div>
                          <div className=''>

                            <ul className='submenulist'>
                              <li>
                                <Link href="/company/about" className="submenu-text"  onClick={handleCompanySubMenuItemClick}>
                                  About  <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/company/team" className="submenu-text"  onClick={handleCompanySubMenuItemClick}>
                                  Team <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/company/philosophy" className="submenu-text" onClick={handleCompanySubMenuItemClick}>
                                  Philosophy <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/company/news" className="submenu-text" onClick={handleCompanySubMenuItemClick}>
                                  News & Events <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>

                              <li>
                                <Link href="/company/careers" className="submenu-text" onClick={handleCompanySubMenuItemClick}>
                                  Careers<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="/company/contact" className="submenu-text" onClick={handleCompanySubMenuItemClick}>
                                  Contact<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='p-10'>
                      <div className='image-container rounded-md'>
                        <img className="bg-header-dark rounded-md sub-menu-image" src="/images/menu6.jpg" alt="image" />
                        <div className='image-overlay rounded-md'></div>
                      </div>
                      <div>
                      <p className='text-2xl pt-5 pb-3 '> Cybersecurity Defences</p>
                      <Link href="/insights/blogs/understanding-security-posture" className='submenu-text' onClick={handleCompanySubMenuItemClick}>Understanding Security Posture: Strengthening Your Cybersecurity Defences<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link>
                      </div>
                    </div>
                    <button
                      className="absolute top-1 right-3 text-gray-500 cursor-pointer text-2xl"
                      onClick={toggleCompanySubMenu}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                )}
              </li>
              <li>
                <Link href="/company/contact" className="header-menu-button">
                  Request a Demo
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
