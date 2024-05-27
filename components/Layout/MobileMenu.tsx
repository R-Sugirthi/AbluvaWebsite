"use client"
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [mobileNavOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [mobileNavOpen]);

  const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, menu: string) => {
    event.preventDefault();
    if (menu === activeMenu) {
      setMobileNavOpen(!mobileNavOpen);
      setActiveMenu(null);
    } else {
      setMobileNavOpen(true);
      setActiveMenu(menu);
    }
  };

  return (
    <div className="md:hidden">
      <button
        ref={trigger}
        className={`menu ${mobileNavOpen ? 'active' : ''}boldfont `}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        Menu
      </button>

      <nav
        id="mobile-nav"
        ref={mobileNav}
        className={`absolute top-full z-20 p-3 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${mobileNavOpen ? 'visible opacity-1' : 'invisible opacity-0'}`}
      >
        <ul className="bg-dark px-4 py-2 text-md border border-gray-500 rounded-lg mobile-menu">
          <li>
            <Link href="#" className="flex font-medium w-full text-white py-3" onClick={(e) => handleMenuClick(e, 'product')}>
              Product
            </Link>
            {mobileNavOpen && activeMenu === 'product' && (
            <ul className="submenu text-sm ml-5">
            <li>
              <p className="pb-2">Graphene</p>
              <li>
                <Link href="/graphene/platform-overview" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                  Platform Overview <span className="text-sm"> <FontAwesomeIcon icon={faAngleRight} /> </span>
                </Link>
              </li>
              <li>
                <Link href="/graphene/data-access-control" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                  Data Access Control<span className="text-sm"> <FontAwesomeIcon icon={faAngleRight} /> </span>
                </Link>
              </li>
              <li>
                <Link href="/graphene/depersonalization" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                  Data Depersonalization<span className="text-sm"> <FontAwesomeIcon icon={faAngleRight} /> </span>
                </Link>
              </li>
              <li>
                <Link href="/graphene/compliance-enablement" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                  Compliance Enablement<span className="text-sm"> <FontAwesomeIcon icon={faAngleRight} /> </span>
                </Link>
              </li>
            </li>
            <li>
              <p className="py-2">Incubators</p>
              <li>
                <Link href="/incubators/intrusion-detection" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                  Intrusion Detection<span className="text-sm"> <FontAwesomeIcon icon={faAngleRight} /> </span>
                </Link>
              </li>
              <li>
                <Link href="/incubators/attack-vector-discovery" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                  Attack Vector Discovery<span className="text-sm"> <FontAwesomeIcon icon={faAngleRight} /> </span>
                </Link>
              </li>
              <li>
                <Link href="/incubators/data-governance" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                  Data Governance<span className="text-sm"> <FontAwesomeIcon icon={faAngleRight} /> </span>
                </Link>
              </li>
              <li>
                <Link href="/incubators/secure-knowledge-graph" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                  Secure Knowledge Graph<span className="text-sm"> <FontAwesomeIcon icon={faAngleRight} /> </span>
                </Link>
              </li>
              <li>
                <Link href="/incubators/breathing-security" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                  Breathing Security<span className="text-sm"> <FontAwesomeIcon icon={faAngleRight} /> </span>
                </Link>
              </li>
            </li>
          </ul>          
            )}
          </li>

          <li>
            <Link href="#" className="flex font-medium w-full text-white py-3" onClick={(e) => handleMenuClick(e, 'research')}>
              Research
            </Link>
            {mobileNavOpen && activeMenu === 'research' && (
              <ul className="submenu text-sm ml-5">
  <li>
    <Link href="/research/leaderboards" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
      Leaderboards <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
    </Link>
  </li>
  <li>
    <Link href="/research/datasets" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
      Synthetic Datasets<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
    </Link>
  </li>
  <li>
    <Link href="/research/research-papers" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
      Research Papers<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
    </Link>
  </li>
  <li>
    <Link href="/research/patents" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
      Patents<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
    </Link>
  </li>
</ul>

            
            )}
          </li>

          <li>
            <Link href="#" className="flex font-medium w-full text-white py-3" onClick={(e) => handleMenuClick(e, 'resources')}>
              Resources
            </Link>
            {mobileNavOpen && activeMenu === 'resources' && (
              <ul className="submenu text-sm ml-5">
                <li>
                  <Link href="/insights/blogs" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                    Blogs <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                  </Link>
                  </li>
                  <li>
                  <Link href="/insights/ebooks" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                    eBooks<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                  </Link>
                  
                  </li>
                  <li>
                  <Link href="/resources/glossary" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                    Glossary<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
                  </Link>
                  </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="#" className="flex font-medium w-full text-white py-3" onClick={(e) => handleMenuClick(e, 'company')}>
              Company
            </Link>
            {mobileNavOpen && activeMenu === 'company' && (
              
              <ul className="submenu text-sm ml-5">
  <li>
    <Link href="/company/about" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
      About <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
    </Link>
  </li>
  <li>
    <Link href="/company/team" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
      Team <span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
    </Link>
  </li>
  <li>
    <Link href="/company/philosophy" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
      Philosophy<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
    </Link>
  </li>
  <li>
    <Link href="/company/news" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
      News & Events<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
    </Link>
  </li>
  <li>
    <Link href="/company/careers" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
      Careers<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
    </Link>
  </li>
  <li>
    <Link href="/company/contact" className="text-gray-400 hover:text-white" onClick={() => setMobileNavOpen(false)}>
      Contact<span className='text-sm'> <FontAwesomeIcon icon={faAngleRight} /> </span>
    </Link>
  </li>
</ul>
            )}
          </li>
          <li className='py-5'>
          <Link href="/company/contact" className="btn text-center" onClick={() => setMobileNavOpen(false)}>
          Request a Demo
        </Link>
          </li>         
        </ul>
      </nav>
    </div>
  )
}
