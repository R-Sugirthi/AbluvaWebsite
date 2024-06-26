import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Discover | ABLUVA',
  description: 'Explore advanced data security insights with Graphene for proactive protection and robust defenses',
};

export default function Discover() {
  return (
    <>

      <section className='founder'>

        <div className='md:px-28 px-5 py-20 text-2xl text-gray-300'>
          <h1 className="md:text-5xl text-4xl primary-color text-center">Unlock The Power of Discovery in Data Security</h1>
          <p className='md:text-2xl text-gray-500 letterspace text-center'> Explore <span className='text-gradient'> &#183; </span> Understand  <span className='text-gradient'> &#183; </span> Fortify</p>
          <p className='pt-20 text-justify text-lg'>
            Graphene's foundational discovery capabilities underscore our commitment to bolstering data protection strategies. Through seamless integration, we empower organizations to proactively identify potential threats, glean insights into user behaviors, and safeguard sensitive information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-20">
            <div className="max-w-xl p-3 flex flex-col text-center">
              <img src="/icons/interaction.png" className='h-8 mx-auto filter invert opacity-80 opacity-80' alt="icon" />
              <div className='py-5'>
                <Link href="/discover/user-behaviour-discovery" ><span className='underline hover:text-gray-500'>User Behaviour Discovery</span></Link>
              </div>
              <p className="mb-2 text-lg text-gray-400 text-center">Uncover patterns, anomalies, and trends that offer invaluable insights into user interactions within your data ecosystem.</p>
            </div>
            <div className="max-w-xl p-3 md:border-l md:border-r border-gray-700 flex flex-col text-center">
              <img src="/icons/defense.png" className='h-8 mx-auto filter invert opacity-80' alt="icon" />
              <div className='py-5'>
                <Link href="/incubators/attack-vector-discovery" ><span className='underline hover:text-gray-500'>Attack Vector Discovery</span></Link>
              </div>
              <p className="mb-2 text-lg text-gray-400 text-center">Comprehend potential entry points and vulnerabilities in your system, enabling proactive defense measures.</p>
            </div>
            <div className="max-w-xl p-3  flex flex-col text-center">
              <img src="/icons/dynamic.png" className='h-8 mx-auto filter invert opacity-80' alt="icon" />
              <div className='py-5'>
                <Link href="/discover/sensitive-data-discovery" ><span className='underline hover:text-gray-500'>Sensitive Data Discovery</span></Link>
              </div>
              <p className="mb-2 text-lg text-gray-400 text-center">Identify and classify sensitive information across your databases, ensuring compliance with regulatory standards and mitigating the risk of data breaches.</p>
            </div>
          </div>
          <h1 className="text-3xl primary-color text-center">True security begins with insightful discovery. <br></br>Elevate your data protection posture with Graphene.</h1>
        </div>
      </section>

    </>
  );
}
