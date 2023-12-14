import React from 'react';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';

export const metadata = {
  title: 'Protect | ABLUVA',
  // description: 'Page description',
};

export default function Protect() {
  return (
    <>
  
      <section className='founder'>
       
<div className='bg-[#f2f3f5] md:px-28 px-5 py-20 text-2xl text-gray-900'>
        <h1 className="text-5xl text-gradient-light text-center">Data Security Essentials</h1>
        <p className='text-2xl text-gray-700 letterspace text-center'> Shield <span className='text-gradient-light'> &#183; </span> Conceal  <span className='text-gradient-light'> &#183; </span> Alert</p>
        <p className='pt-20 text-justify'>
        Safeguard your data with a quiet assurance, utilizing strategies that operate subtly yet effectively. From unobtrusive data access controls to the delicate art of depersonalization and the discreet vigilance of intrusion detection, Graphene’s focus is on implementing measures that speak softly and carry a robust shield. Welcome to a space where security is a silent, steadfast presence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-20">
            <div className="max-w-xl p-3 flex flex-col text-center">
                <img src="/icons/dataAccess.png" className='h-10 mx-auto' />
                <div className='py-5'>
              <Link href="graphene-data-access-control" ><span className='underline text-violet-950'>Data Access Controls</span></Link>
                </div>
                <p className="mb-2 text-2xl text-gray-900 text-center">Define and enforce access policies, ensuring that only authorized individuals can interact with sensitive information.</p>
            </div>
            <div className="max-w-xl p-3 md:border-l md:border-r border-gray-300 flex flex-col text-center">
                <img src="/icons/depersonalization.png" className='h-10 mx-auto' />
                <div className='py-5'>
              <Link href="graphene-depersonalization" ><span className='underline text-violet-950'>Data Depersonalization</span></Link>
                </div>
                <p className="mb-2 text-2xl text-gray-900 text-center">Strike the delicate balance between data utility and protection, securing your information while respecting privacy principles.</p>
            </div>
            <div className="max-w-xl p-3  flex flex-col text-center">
                <img src="/icons/intrusionDetection.png" className='h-10 mx-auto' />
                <div className='py-5'>
              <Link href="incubators-intrusion-detection" ><span className='underline text-violet-950'>Intrusion Detection</span></Link>
                </div>
                <p className="mb-2 text-2xl text-gray-900 text-center">Enhance your security posture by swiftly detecting and mitigating potential intrusions before they escalate.</p>
            </div>

            
          </div>
        <h1 className="text-4xl  text-gradient-light text-center">Simple controls, powerful protection.<br></br>Data protection made easy.</h1>     
        </div>





      </section>
    
    </>
  );
}
