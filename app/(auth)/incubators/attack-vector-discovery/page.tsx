import React from 'react';
import Link from 'next/link';


export const metadata = {
  title: 'Attack Vector Discovery | ABLUVA',
  description: 'Graphene: Discover and protect against cyber threats with innovative Attack Vector Discovery.',
};

export default function IncubatorAttackPathDiscovery() {
  return (
    <>
      
      <section className='founder'>
      <div className='bg-[#f2f3f5] md:px-28 px-5 pt-20 pb-20 text-2xl text-gray-900 ' id="AttackPath">
          <h1 className="text-5xl  text-gradient lineht text-center">Attack Vector Discovery</h1>
          <h1 className="text-3xl text-gray-900 text-center">Intruders Need Only One Path to Your Assets, <br></br>
          Our mission is to Discover and Protect Every Single One.
          </h1>
          <p className='pt-20'>Leveraging graph theory, Graphene identifies the chain of access whose elimination would most significantly disrupt the largest number of pathways that attackers can take.</p>
          <div>
          <img src= "/images/AttackPath.jpg" className='w-full pt-5' alt="attack-vector-discovery"/>
          <p className='text-xl text-center py-3'>Real attack surface trace from Graphene for a cloud based organisation. 
          (Printed with permission)
          </p>
          </div>
          <div>
          <h1 className="text-3xl  text-gray-900 font-semibold pt-5 text-center">Graphene Gives a Detailed View of Holes in Your Data Security Architecture</h1>
          <div className='grid md:grid-cols-4 grid-cols-1 gap-2 py-10 text-center'>
            <div className='border border-gray-500 p-3 rounded-md'>
              <p className='font-semibold pb-3'>Attack Path Mapping</p>
              <p>Every relationship or connection is charted and traversed to discover and identify possible attack paths.</p>
            </div>
            <div className='border border-gray-500 p-3 rounded-md'>
            <p className='font-semibold pb-3'>Attack Exposure Score </p>
              <p>A measure of how  exposed is a resource instance to potential cyberattacks.</p>
            </div>
            <div className='border border-gray-500 p-3 rounded-md'>
            <p className='font-semibold pb-3'>Choke Points </p>
              <p>Places where potential attack paths come together, and it is a major gateway to sensitive data and assets.</p>
            </div>
            <div className='border border-gray-500 p-3 rounded-md'>
            <p className='font-semibold pb-3'>High Value Targets </p>
              <p>Assets that are of maximum value in forging and success of attack or defence.</p>
            </div>
          </div>
            <h1 className="text-4xl  text-gradient-light lineht text-center pt-10">Graphene: Fortifying Defense with Continuous Innovation</h1>
            <div className="link-wrapper  text-center">
            <Link className="hover-2 text-gradient-light text-3xl font-semibold" href="/company/contact">Contact us to know more on Attack surface trace and attack path identification &#x2192;</Link>
          </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
