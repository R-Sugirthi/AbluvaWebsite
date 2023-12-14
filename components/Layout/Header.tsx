"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';



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
    <header className="sticky top-0 w-full z-30 bg-[#131318] text-lg mq">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-cenenlarge md:flex-wrap sm:px-0 items-center justify-between">
          <div className="shrink-0 mr-4 flex">
            <Link href="/" aria-label="Cruip">
              <div className="flex">
                <div>
                  <Image src="/images/Logo.png" alt="Logo" width={60} height={50} priority />
                </div>
                <div>
                  <Image src="/images/abluva_logo.png" className="pt-2 pl-1" alt="Logo" width={85} height={50} priority />
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center max-w-full">
              <li>
                <button
                  onClick={toggleProductSubMenu}
                  className="font-medium text-white px-4 py-8 flex items-center transition duration-150 ease-in-out item"
                >
                  Product
                </button>
                {isProductSubMenuVisible && (
                  <div
                    className="bg-black absolute top-30 left-0  grid grid-cols-2 gap-2 mark" >

                    {/* Left column for text */}
                    <div className="p-8 bg-[#131318]">
                      <div className="text-3xl text-gradient founder">
                        Ease the Data Protection Challenge. Get the Delicate Balance Between Fortifying Your Data and Ensuring Seamless Access.
                      </div>
                     
                      <hr className='border-b border-gray-500 my-7' />
                      <div className='grid md:grid-cols-2 gap-10'>
                        <div>
                          <div className='mark'>
                          <p className="text-2xl">Products</p>
                            <Link href="graphene-platform-overview" className="text-lg">Graphene</Link>
                            <ul className='ml-10 submenulist'>
                              <li>
                                <Link href="graphene-platform-overview" className="text-md text-gray-400 hover:text-white"  onClick={handleProductSubMenuItemClick}>
                                  Platform Overview  <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="graphene-data-access-control" className="text-md text-gray-400 hover:text-white"  onClick={handleProductSubMenuItemClick}>
                                  Data Access Control<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="graphene-depersonalization" className="text-md text-gray-400 hover:text-white"  onClick={handleProductSubMenuItemClick}>
                                  Data Depersonalization<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="graphene-compliance-enablement" className="text-md text-gray-400 hover:text-white"  onClick={handleProductSubMenuItemClick}>
                                  Compliance Enablement <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div className='mark'>
                          <p className="text-2xl">Incubators</p>
                            <ul className='submenulist'>
                              <li><Link href="/incubators-intrusion-detection" className="text-lg text-gray-400 hover:text-white"  onClick={handleProductSubMenuItemClick}> Intrusion Detection<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link></li>
                              <li><Link href="/incubators-attack-vector-discovery" className="text-lg text-gray-400 hover:text-white"  onClick={handleProductSubMenuItemClick}> Attack Vector Discovery<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link></li>
                              <li><Link href="/incubators-data-governance" className="text-lg text-gray-400 hover:text-white"  onClick={handleProductSubMenuItemClick}> Data Governance<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link></li>
                              <li><Link href="/incubators-secure-knowledge-graph" className="text-lg text-gray-400 hover:text-white"  onClick={handleProductSubMenuItemClick}> Secure Knowledge Graph<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link></li>
                              <li><Link href="/incubators-breathing-security" className="text-lg text-gray-400 hover:text-white"  onClick={handleProductSubMenuItemClick}> Breathing Security<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=' bg-black p-10'>
                      <div className='image-container'>
                       
                     <img className=" rounded-md " src="https://img.freepik.com/premium-photo/discussion-young-caucasian-business-woman-modern-office-with-team-meeting-tasks-giving-women-front-office-working-concept-finance-business-girl-power-inclusion-diversity-feminism_155003-39900.jpg?w=740" alt="image" />
                      <div className='image-overlay rounded-md'></div>
                      </div>
                      <div>
                      <p className='text-2xl pt-5'>Data Protection</p>
                      <Link href="changing-paradigms-data-security" className='py-2 text-lg text-gray-400 hover:text-white' onClick={handleProductSubMenuItemClick}>The changing paradigms in changing times <span className='text-sm' > <FontAwesomeIcon icon={faAngleRight} /> </span></Link>
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
                  className="font-medium text-white px-4 py-8 flex items-center transition duration-150 ease-in-out item"
                >
                 Research
                </button>
                {isResearchSubMenuVisible && (
                  <div
                    className="bg-black absolute top-30 left-0 w-full transition duration-300 ease-in-out flex grid grid-cols-2 gap-2 mark">

                    {/* Left column for text */}
                    <div className="p-8 bg-[#131318]">
                      <div className="text-3xl text-gradient founder">
                      In the Ever-Evolving Landscape of Data Threats, Our Research is the Compass Guiding Us to Innovative Solutions.
                      </div>
                      <hr className='border-b border-gray-500 my-7' />
                      <div className='grid md:grid-cols-2 gap-10'>
                        <div>
                          <div className='mark'>

                            <ul className='submenulist'>
                             
                              <li>
                              <Link
            href="/research#leaderboards"
            className="text-md text-gray-400 hover:text-white"
            onClick={handleResearchSubMenuItemClick}
          >
                                   Leaderboards<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                              <Link href="/research#datasets" className="text-md text-gray-400 hover:text-white"  onClick={handleResearchSubMenuItemClick}>
                              Synthetic Datasets<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                              <Link href="/research#research-papers" className="text-md text-gray-400 hover:text-white" onClick={handleResearchSubMenuItemClick}>
                                   Research Papers<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                              <Link href="/research#patents" className="text-md text-gray-400 hover:text-white" onClick={handleResearchSubMenuItemClick}>
                                   Patents<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='p-10'>
                      <div className='image-container'>
                        <img className="bg-black rounded-md sub-menu-image" src="https://img.freepik.com/free-photo/group-people-with-laptops_23-2147993343.jpg?w=740&t=st=1701942478~exp=1701943078~hmac=be64ef6d595dc662a8486c06cdea82c3fb4e24dbc7d8cd71017eb3a87b14eb63" alt="image" />
                        <div className='image-overlay rounded-md'></div>
                      </div>
                      <div>
                      <p className='text-2xl pt-5'>Data Protection Technologies</p>
                      <Link href="selecting-right-data-protection-technologies" className='py-2 text-lg text-gray-400 hover:text-white' onClick={handleResearchSubMenuItemClick} >Selecting Right Data Protection Technologies<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link>
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
                  className="font-medium text-white px-4 py-8 flex items-center transition duration-150 ease-in-out item"
                >
                  Resources
                </button>
                {isResourcesSubMenuVisible && (
                  <div
                    className="bg-black absolute top-30 left-0 w-full transition duration-300 ease-in-out flex grid grid-cols-2 gap-2 mark">

                    {/* Left column for text */}
                    <div className="p-8 bg-[#131318]">
                      <div className="text-3xl text-gradient founder">
                      In the Vast Expanse of Digital Knowledge, Written Insights Serve as Guiding Stars, Illuminating the Path to Data Security Excellence.
                      </div>
                      <hr className='border-b border-gray-500 my-7' />
                      <div className='grid md:grid-cols-2 gap-10'>
                        <div>
                          <div className='mark'>

                            <ul className='submenulist'>
                              <li>
                                <Link href="blogs" className="text-md text-gray-400 hover:text-white" onClick={handleResourcesSubMenuItemClick}>
                                  Blogs  <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="ebook-evolving-landscape-data-privacy-regulations" className="text-md text-gray-400 hover:text-white"  onClick={handleResourcesSubMenuItemClick}>
                                  eBook<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                             
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='p-10'>
                      <div className='image-container'>
                        <img className="bg-black rounded-md" src="https://img.freepik.com/premium-photo/young-business-people-group-have-meeting-working-modern-bright-office-indoor_530697-11140.jpg?w=740" alt="image" />
                        <div className='image-overlay rounded-md'></div>
                      </div>
                      <div>
                      <p className='text-2xl pt-5'>Cloud Security</p>
                      <Link href="comprehensive-guide-cloud-security" className='py-2 text-lg text-gray-400 hover:text-white' onClick={handleResourcesSubMenuItemClick}>A Comprehensive Guide to Cloud Security<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight}  /> </span></Link>
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
                  className="font-medium text-white px-4 py-8 flex items-center transition duration-150 ease-in-out item"
                >
                  Company
                </button>
                {isCompanySubMenuVisible && (
                  <div
                    className="bg-black absolute top-30 left-0 w-full transition duration-300 ease-in-out flex grid grid-cols-2 gap-2 mark">

                    {/* Left column for text */}
                    <div className="p-8 bg-[#131318]">
                      <div className="text-3xl text-gradient founder">
                      In the Vast Landscape of Data, We Carve Out Secure Havens, Ensuring Your Information Remains Untouchable.
                      </div>
                      
                      <hr className='border-b border-gray-500 my-7' />
                      <div className='grid md:grid-cols-2 gap-10'>
                        <div>
                          <div className='mark'>

                            <ul className='submenulist'>
                              <li>
                                <Link href="about" className="text-md text-gray-400 hover:text-white"  onClick={handleCompanySubMenuItemClick}>
                                  About  <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="philosophy" className="text-md text-gray-400 hover:text-white" onClick={handleCompanySubMenuItemClick}>
                                  Philosophy <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="news" className="text-md text-gray-400 hover:text-white" onClick={handleCompanySubMenuItemClick}>
                                  News & Events <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="careers" className="text-md text-gray-400 hover:text-white" onClick={handleCompanySubMenuItemClick}>
                                  Careers<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="contact" className="text-md text-gray-400 hover:text-white" onClick={handleCompanySubMenuItemClick}>
                                  Contact<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='p-10'>
                      <div className='image-container'>
                        <img className="bg-black rounded-md sub-menu-image" src="https://img.freepik.com/free-photo/young-thief-working-hack-computer-system-multi-monitors-using-server-malware-plant-virus-dangerous-hacker-doing-phishing-committing-cyberterrorism-stealing-passwords_482257-68986.jpg?w=740&t=st=1702110940~exp=1702111540~hmac=b964641f359815c2294a698008b60bda7f6df19dadd524aa30ad5ab6cdbc622a" alt="image" />
                        <div className='image-overlay rounded-md'></div>
                      </div>
                      <div>
                      <p className='text-2xl pt-5'> Cybersecurity Defences</p>
                      <Link href="understanding-security-posture" className='py-2 text-lg text-gray-400 hover:text-white' onClick={handleCompanySubMenuItemClick}>Understanding Security Posture: Strengthening Your Cybersecurity Defences<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span></Link>
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
                <Link href="/contact" className="text-white bg-gray-800 hover:bg-gray-600 ml-3 p-2 rounded-md">
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
