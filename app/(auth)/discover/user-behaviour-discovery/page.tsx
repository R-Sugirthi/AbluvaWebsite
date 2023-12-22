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
        <div className='bg-[#f2f3f5] md:px-28 pt-20 text-2xl text-gray-900'>
          <h1 className="md:text-5xl text:3xl text-gradient-light text-center lineht pb-20">User Behavior Discovery</h1>
          <h1 className='md:text-3xl text-gray-900 font-semibold'>Behavioral Insights for Informed Defenses</h1>
          <div className='py-5'>
            <p>
              Graphene's Behavior Analysis—a cutting-edge solution harnesses the strength of graph-based modeling to provide unparalleled insights into user interactions and access patterns within complex systems.
            </p>
            <p className='py-3'>
              Understanding user behavior is paramount in optimizing cybersecurity. Graphene's Behavior Analysis stands at the forefront, employing advanced graph-based modeling to unveil unparalleled insights into user interactions and access patterns.
            </p>
          </div>

          <h1 className='md:text-3xl font-semibold'>Graphs : A Dynamic Lens into User Behavior</h1>
          <p className='py-5'>
            User behavior modeling using graphs introduces a transformative approach to understanding access patterns and context in intricate systems. By leveraging graph-based representations, Graphene propels behavior analysis to new heights, offering a nuanced understanding of the relationships between users, resources, and their interactions.
          </p>

          <h1 className='md:text-3xl font-semibold pt-3'>Key Features</h1>
          <h1 className='md:text-2xl font-semibold pt-5'>Uncover Patterns and Anomalies</h1>
          <p className=''>
            Advanced algorithms to uncover patterns and detect anomalies in user behavior, that allow you to recognize normal activities and swiftly identify potential security threats.
          </p>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-2 text-center py-5'>
            <div className='border border-gray-500 p-3 rounded-md'>
              <p className='font-semibold pb-3'>Sequential Patterns</p>
              <p>Uncover user intentions and habits by analyzing the order in which resources are accessed.</p>
            </div>
            <div className='border border-gray-500 p-3 rounded-md'>
              <p className='font-semibold pb-3'>Temporal Patterns</p>
              <p>Identify typical interaction times and detect suspicious activities deviating from normal patterns.</p>
            </div>
            <div className='border border-gray-500 p-3 rounded-md'>
              <p className='font-semibold pb-3'>Resource Co-occurrence </p>
              <p>Discover relationships between resources and detect anomalous resource associations.</p>
            </div>
          </div>
          <h1 className='md:text-2xl font-semibold'>Discover Insights from Access Context Analysis</h1>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-2 text-center py-5'>
            <div className='border border-gray-500 p-3 rounded-md'>
              <p className='font-semibold pb-3'>User Attributes</p>
              <p>Precise user  attributes such as  location, device, and role, fortifying your security against unauthorized attempts.</p>
            </div>
            <div className='border border-gray-500 p-3 rounded-md'>
              <p className='font-semibold pb-3'>Resource Attributes</p>
              <p>Resource Categories  based on sensitivity and access permissions, enabling focused security measures where they matter most.</p>
            </div>
            <div className='border border-gray-500 p-3 rounded-md'>
              <p className='font-semibold pb-3'>Interaction Attributes</p>
              <p>User actions, time spent on resources, and interaction frequency to reveal behavior patterns, crucial for detecting anomalies and potential threats.</p>
            </div>
          </div>

          <h1 className='md:text-2xl font-semibold pt-5'>Comprehensive User Profiles</h1>
          <p>
            Build comprehensive profiles for each user, understanding their typical behaviors, access patterns, and interactions within the digital environment.
          </p>

          <div className='pt-10'>
            <div className='border border-gray-500 rounded-lg p-10'>
              <h1 className="md:text-3xl text:2xl text-gray-900 font-semibold">Benefits </h1>
              <ul className='list-disc ml-10'>
                <li className='py-2'><span className='font-semibold'>Enhanced Precision : </span>Elevate security precision with granular insights from Access Context Analysis, ensuring a targeted response to potential threats.</li>
                <li className='py-2'><span className='font-semibold'>Risk Prioritization : </span> Prioritize security efforts based on resource criticality and risk levels, optimizing your defense strategy.</li>
                <li className='py-2'><span className='font-semibold'>Tailored Security Responses : </span>Customize security responses based on unique user behavior characteristics, fostering an adaptive and effective security framework.</li>
              </ul>
            </div>
          </div>

          <div className='grid md:grid-cols-2 grid-cols-1 py-10'>
            <div className='flex flex-col justify-center text-center'>
              <p className='text-3xl font-semibold'>GRAPHENE</p>
              <p>Empower Your Defenses with Strategic<br></br> Insights into Digital Behavior</p>
            </div>
            <div className='border border-gray-500 rounded-lg p-5'>
              <h1 className="md:text-3xl text:2xl text-gray-900 font-semibold text-center">Graphene Protection Edge</h1>
              <ul className='list-disc ml-10 text-xl'>
                <li className='py-1'><span className='font-semibold'>Early Threat Identification : </span> Identify and mitigate potential threats in their early stages by understanding deviations from normal user behavior.</li>
                <li className='py-1'><span className='font-semibold'>Optimized Resource Allocation :  </span> Tailor security measures based on real user activities for efficient resource allocation.</li>
                <li className='py-1'><span className='font-semibold'>Enhanced Incident Response : </span>Bolster incident response capabilities with insights derived from comprehensive user behavior analysis.</li>
              </ul>
            </div>
          </div>

          <div>
            <div className='border border-gray-500 rounded-lg p-10'>
              <h1 className="md:text-3xl text:2xl text-gray-900 font-semibold">The Security Advantages </h1>
              <ul className='list-disc ml-10'>
                <li className='py-2'><span className='font-semibold'>Proactive Threat Detection : </span>Identify potential security threats before they escalate by recognizing deviations from normal user behavior.</li>
                <li className='py-2'><span className='font-semibold'>Operational Insights :  </span>Understand how users engage with data and applications, enabling you to optimize operations and enhance overall efficiency.</li>
                <li className='py-2'><span className='font-semibold'>Customized Security Policies : </span>Tailor security policies based on real user behavior, ensuring that your security measures align with the needs and activities of your workforce.</li>
              </ul>
            </div>
          </div>

          <h1 className="text-4xl text-gradient-light pt-10">Graphene - Unveiling Insights, Defending Today, Securing Tomorrow.</h1>


          <div className='py-10'>
            <div className='py-20 border-t border-gray-300'>
              <h1 className="text-4xl font-semibold">Get Started</h1>
              <div className="link-wrapper">
                <Link className="hover-2 text-gradient-light text-3xl font-semibold" href="/company/contact">Contact our team for a personalized demo or start your free trial today &#x2192;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
