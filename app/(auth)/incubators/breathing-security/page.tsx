"use client"
import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import InnerLandingPage from '@/components/widgets/innerLandingPage';


export default function IncubatorBreathingSecurity() {
  return (
    <>     
    <Helmet>
        <title>Breathing Security | ABLUVA</title>
        <meta name="description" content="Breathing Security: Autonomous, event-driven data protection. Real-time, granular control." />
      </Helmet>
      <InnerLandingPage
    id='BreathingSecurity'
    title='BREATHING SECURITY'
    subtitle={`autonomously enhances data protection through dynamic monitoring and adaptive security measures`}
    product='incubator'
    group='advanced research group'
  />


      <section>
      <div className='md:px-36 px-5 pb-20 pt-20 text-2xl text-gray-300'  id='BreathingSecurity' style={{ scrollMarginTop: '70px' }}>
        {/* <h1 className="text-5xlprimary-color-glineht text-center">Breathing Security <sup className="text-gradient text-2xl">TM</sup></h1> */}
        <p className=' text-xl text-gray-300'>
        Breathing Security<sup className="text-xs">TM</sup> embodies an event-based, observability-driven model, consistently monitoring the digital landscape to comprehend user activities and ongoing tasks. This innovative approach establishes a dynamic and adaptive security paradigm, showcasing its autonomy through automatic security measure updates. For instance, it effortlessly removes write access to SDTM data when a study advances to the database lock stage. This autonomous security model precisely aligns access privileges with the evolving dynamics of the data landscape, heightening security without the need for manual intervention and fostering a proactive data protection strategy. 
        </p>

        <h1 className="md:text-3xl text:2xl text-gray-300  text-left pt-10 pb-5">Breathing Security Key Features</h1>
       
        <div className='pt-10'>
  <input type="radio" id="content1" name="wiki" value="Content1" defaultChecked />
  <input type="radio" id="content2" name="wiki" value="Content2" />
  <input type="radio" id="content3" name="wiki" value="Content3" />
  <input type="radio" id="content4" name="wiki" value="Content4" />

  <ul className="accordion">
    <li data-radio="content1">
      <label htmlFor="content1" className="accordion-title">
        <span>01</span>
        <span className="accordion-heading font-thin text-lg">Event-driven autonomy</span>
      </label>
      <div className="accordion-content  text-lg">
        Access modification seamlessly aligns with event occurrences.
      </div>
    </li>
    <li data-radio="content2">
      <label htmlFor="content2" className="accordion-title">
        <span>02</span>
        <span className="accordion-heading font-thin text-lg">Fire and Forget</span>
      </label>
      <div className="accordion-content  text-lg">
        No manual intervention is required, ensuring a streamlined security process.
      </div>
    </li>
    <li data-radio="content3">
      <label htmlFor="content3" className="accordion-title">
        <span>03</span>
        <span className="accordion-heading font-thin text-lg">Instant data control</span>
      </label>
      <div className="accordion-content  text-lg">
        Access to data objects is promptly modified upon the observation of event occurrences, providing real-time security management.
      </div>
    </li>
    <li data-radio="content4">
      <label htmlFor="content4" className="accordion-title">
        <span>04</span>
        <span className="accordion-heading font-thin text-lg">Granular Access Control</span>
      </label>
      <div className="accordion-content  text-lg">
        Breathing Security enables granular control over access permissions, allowing organizations to define and refine access policies at a fine-grained level. This ensures that data access is tailored precisely to the requirements of different events, enhancing overall data security and compliance.
      </div>
    </li>
  </ul>
</div>

         
        <div className='pt-10'>
        <div className="link-wrapper text-center">
            <Link className="hover-2 primary-color-g md:text-3xl text-lg py-5" href="/company/contact">Contact us to know more about Breathing Security &#x2192;</Link>
          </div>
        </div> 
        </div>
      </section>
    
    </>
  );
}
