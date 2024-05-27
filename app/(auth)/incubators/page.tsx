import React from 'react';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';

import IncubatorIntrusionDetection from './intrusion-detection/page';
import IncubatorAttackPathDiscovery from './attack-vector-discovery/page';
import IncubatorDataGovernance from './data-governance/page';
import IncubatorSecureKnowledgeGraph from './secure-knowledge-graph/page';
import IncubatorBreathingSecurity from './breathing-security/page';
import BgLanding from '@/components/widgets/bgLandingPage';


export const metadata = {
  title: 'Incubators | ABLUVA',
  description: 'Explore innovative product incubators at ABLUVA, shaping the future of data security with cutting-edge technologies and solutions',
};

export default function Incubators() {
  return (
    <>
      <section>
        <BgLanding
        bgImage="bg-research"
        title={<>product<br></br>incubators</>}
        subtitle={<>We're Not Only Building Products, <br></br>we're Shaping the Future of Data Security.</>}
        />   
      <div className='py-5'>      
<IncubatorIntrusionDetection/>
<IncubatorAttackPathDiscovery/>
<IncubatorDataGovernance/>
<IncubatorSecureKnowledgeGraph/>
<IncubatorBreathingSecurity/>
      </div>    
      </section>
  
    </>
  );
}
