import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Breathing Security | ABLUVA',
  description: 'Breathing Security: Autonomous, event-driven data protection. Real-time, granular control.',
};


export default function IncubatorBreathingSecurity() {
  return (
    <>
      
      <section className='founder'>
      <div className='bg-black md:px-28 px-5 py-20 text-2xl text-gray-300 darkText'>
        <h1 className="text-5xl text-gradient lineht text-center">Breathing Security <sup className="text-gradient text-2xl">TM</sup></h1>
        <p className='pt-20 text-justify'>
        Breathing Security<sup className="text-xs">TM</sup> embodies an event-based, observability-driven model, consistently monitoring the digital landscape to comprehend user activities and ongoing tasks. This innovative approach establishes a dynamic and adaptive security paradigm, showcasing its autonomy through automatic security measure updates. For instance, it effortlessly removes write access to SDTM data when a study advances to the database lock stage. This autonomous security model precisely aligns access privileges with the evolving dynamics of the data landscape, heightening security without the need for manual intervention and fostering a proactive data protection strategy. 
        </p>
        
        <div className='pt-10 pb-20'>
        <div className='border border-gray-500 rounded-lg p-10 text-left'>
        <h1 className="text-3xl text:2xl text-gray-300 font-semibold"> Key Benefits: </h1>
          <ul className='list-disc md:ml-10'>
            <li className='py-2'><span className='font-semibold'>Event-based Autonomous Execution : </span>Access modification seamlessly aligns with event occurrences.</li>
            <li className='py-2'><span className='font-semibold'>Fire and Forget : </span>No manual intervention is required, ensuring a streamlined security process.</li>
            <li className='py-2'><span className='font-semibold'>Real-time Data Access Management : </span>Access to data objects is promptly modified upon the observation of event occurrences, providing real-time security management.</li>
            <li className='py-2'><span className='font-semibold'>Granular Access Control : </span>Breathing Security enables granular control over access permissions, allowing organizations to define and refine access policies at a fine-grained level. This ensures that data access is tailored precisely to the requirements of different events, enhancing overall data security and compliance.</li>
          </ul>
        </div>
        </div>
         
        <div className="link-wrapper  text-center">
            <Link className="hover-2 text-gradient text-3xl font-semibold pt-5" href="/company/contact">Contact us to know more about Breathing Security &#x2192;</Link>
          </div>
        </div>
      </section>
    
    </>
  );
}
