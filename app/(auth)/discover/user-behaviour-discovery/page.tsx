import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'User Behaviour Discovery | ABLUVA',
  description: 'Graphene: Elevate cybersecurity with advanced behavior analysis. Uncover threats, tailor responses.',
};

export default function UserBehaviourDiscovery() {
  return (
    <>
      <section className='founder'>
        <div className='md:px-28 px-5 pt-20 text-2xl text-gray-300'>
          <h1 className="md:text-5xl text-4xl primary-color text-center lineht pb-20">User Behaviour Discovery</h1>
          <h1 className='text-3xl text-gray-300 '>Behavioral Insights for Informed Defenses</h1>
          <div className='py-5'>
            <p className=' text-gray-400 text-lg'>
              Graphene's Behavior Analysis - a cutting-edge solution harnesses the strength of graph-based modeling to provide unparalleled insights into user interactions and access patterns within complex systems.
            </p>
            <p className='py-3  text-gray-400 text-lg'>
              Understanding user behavior is paramount in optimizing cybersecurity. Graphene's Behavior Analysis stands at the forefront, employing advanced graph-based modeling to unveil unparalleled insights into user interactions and access patterns.
            </p>
          </div>

          <h1 className='text-3xl '>Graphs : A Dynamic Lens into User Behavior</h1>
          <p className='py-5 text-lg text-gray-400'>
            User behavior modeling using graphs introduces a transformative approach to understanding access patterns and context in intricate systems. By leveraging graph-based representations, Graphene propels behavior analysis to new heights, offering a nuanced understanding of the relationships between users, resources, and their interactions.
          </p>

          <h1 className='text-3xl  pt-3'>Key Features</h1>
          <h1 className='text-2xl  pt-5'>Uncover Patterns and Anomalies</h1>
          <p className='text-lg text-gray-400'>
            Advanced algorithms to uncover patterns and detect anomalies in user behavior, that allow you to recognize normal activities and swiftly identify potential security threats.
          </p>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-2 text-center py-5'>
            <div className='border border-gray-700 p-3 rounded-md'>
              <p className=' pb-3'>Sequential Patterns</p>
              <p className='text-lg text-gray-400'>Uncover user intentions and habits by analyzing the order in which resources are accessed.</p>
            </div>
            <div className='border border-gray-700 p-3 rounded-md'>
              <p className=' pb-3'>Temporal Patterns</p>
              <p className='text-lg text-gray-400'>Identify typical interaction times and detect suspicious activities deviating from normal patterns.</p>
            </div>
            <div className='border border-gray-700 p-3 rounded-md'>
              <p className=' pb-3'>Resource Co-occurrence </p>
              <p className='text-lg text-gray-400'>Discover relationships between resources and detect anomalous resource associations.</p>
            </div>
          </div>
          <h1 className='md:text-2xl '>Discover Insights from Access Context Analysis</h1>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-2 text-center py-5'>
            <div className='border border-gray-700 p-3 rounded-md'>
              <p className=' pb-3'>User Attributes</p>
              <p className='text-lg text-gray-400'>Precise user  attributes such as  location, device, and role, fortifying your security against unauthorized attempts.</p>
            </div>
            <div className='border border-gray-700 p-3 rounded-md'>
              <p className=' pb-3'>Resource Attributes</p>
              <p className='text-lg text-gray-400'>Resource Categories  based on sensitivity and access permissions, enabling focused security measures where they matter most.</p>
            </div>
            <div className='border border-gray-700 p-3 rounded-md'>
              <p className=' pb-3'>Interaction Attributes</p>
              <p className='text-lg text-gray-400'>User actions, time spent on resources, and interaction frequency to reveal behavior patterns, crucial for detecting anomalies and potential threats.</p>
            </div>
          </div>

          <h1 className='text-2xl  pt-5'>Comprehensive User Profiles</h1>
          <p className='text-lg text-gray-400'>
            Build comprehensive profiles for each user, understanding their typical behaviors, access patterns, and interactions within the digital environment.
          </p>


          <h1 className="md:text-3xl text:2xl text-gray-300  text-left pt-10 pb-5">Benefits</h1>
          <div className='grid md:grid-cols-2 gap-8 grid-cols-1'>
            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Enhanced Precision</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Elevate security precision with granular insights from Access Context Analysis, ensuring a targeted response to potential threats.</p>
            </div>
            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Risk Prioritization</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Prioritize security efforts based on resource criticality and risk levels, optimizing your defense strategy.</p>
            </div>
            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Tailored Security Responses</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Customize security responses based on unique user behavior characteristics, fostering an adaptive and effective security framework</p>
            </div>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 py-10'>
            <div className='flex flex-col justify-center text-center'>
              <p className='text-3xl '>GRAPHENE</p>
              <p className='text-gray-400'>Empower Your Defenses with Strategic<br></br> Insights into Digital Behavior</p>
            </div>
            <div className='border border-gray-700 rounded-lg p-5'>
              <h1 className="text-3xl text-gray-300  text-center">Graphene Protection Edge</h1>
              <ul className='list-disc md:ml-10 ml-5 text-lg text-gray-400'>
                <li className='py-1'><span className='text-gray-300'>Early Threat Identification<br></br> </span> Identify and mitigate potential threats in their early stages by understanding deviations from normal user behavior.</li>
                <li className='py-1'><span className='text-gray-300'>Optimized Resource Allocation<br></br>  </span> Tailor security measures based on real user activities for efficient resource allocation.</li>
                <li className='py-1'><span className='text-gray-300'>Enhanced Incident Response<br></br> </span>Bolster incident response capabilities with insights derived from comprehensive user behavior analysis.</li>
              </ul>
            </div>
          </div>
          <h1 className="md:text-3xl text:2xl text-gray-300  text-left pt-10 pb-5">The Security Advantages</h1>
          <div className='grid md:grid-cols-2 gap-8 grid-cols-1'>
            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Proactive Threat Detection</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Identify potential security threats before they escalate by recognizing deviations from normal user behavior.</p>
            </div>

            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Operational Insights</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Understand how users engage with data and applications, enabling you to optimize operations and enhance overall efficiency.</p>
            </div>

            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Customized Security Policies:</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Tailor security policies based on real user behavior, ensuring that your security measures align with the needs and activities of your workforce.</p>
            </div>
          </div>
          <h1 className="text-3xl primary-color pt-20 text-center">Graphene - Unveiling Insights, Defending Today, Securing Tomorrow.</h1>
          <div className='text-center pb-20'>
            <div className="link-wrapper">
              <Link className="hover-2 primary-color md:text-3xl text-lg" href="/company/contact">Contact our team for a personalized demo or start your free trial today &#x2192;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
