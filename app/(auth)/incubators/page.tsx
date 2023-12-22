import React from 'react';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';
import "./incubators.css";
import IncubatorIntrusionDetection from './intrusion-detection/page';
import IncubatorAttackPathDiscovery from './attack-vector-discovery/page';
import IncubatorDataGovernance from './data-governance/page';
import IncubatorSecureKnowledgeGraph from './secure-knowledge-graph/page';
import IncubatorBreathingSecurity from './breathing-security/page';


export const metadata = {
  title: 'Incubators | ABLUVA',
  description: 'Explore innovative product incubators at ABLUVA, shaping the future of data security with cutting-edge technologies and solutions',
};

export default function Incubators() {
  return (
    <>
      <section className='founder'>
        <div className="py-28 md:py-28 md:pb-28 md:pl-48 md:pr-12 lg:pr-32 sm:px-10 bg">
          <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
            <div className="w-full text-white pt-20 pb-40 w-3/4">
              <p className="text-5xl font-bold text-gray-100 founder"><span className='text-7xl'>P</span>roduct - Incubators</p>
              <p className="text-3xl founder text-gray-300">We're Not Only Building Products, <br></br>we're Shaping the Future of Data Security.</p>
            </div>
          </div>
        </div>
<IncubatorIntrusionDetection/>
<IncubatorAttackPathDiscovery/>
<IncubatorDataGovernance/>
<IncubatorSecureKnowledgeGraph/>
<IncubatorBreathingSecurity/>
      </section>
  
    </>
  );
}
