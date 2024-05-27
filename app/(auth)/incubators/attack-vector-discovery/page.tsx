"use client"
import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import InnerLandingPage from '@/components/widgets/innerLandingPage';

export default function IncubatorAttackPathDiscovery() {
  return (
    <>
    <Helmet>
        <title>Attack Vector Discovery | ABLUVA</title>
        <meta name="description" content="Graphene: Discover and protect against cyber threats with innovative Attack Vector Discovery." />
      </Helmet>

      <InnerLandingPage
    id='AttackPath'
    title='ATTACK VECTOR DISCOVERY'
    subtitle={`intruders need only one path to your assets, our mission is to discover and protect every single one.`}
    product='incubator'
    group='advanced research group'
  />
      <section>
       

        <div className='md:px-36 px-5 pb-20 text-2xl text-gray-300 ' id='AttackPath' style={{ scrollMarginTop: '70px' }}>
          <p className='pt-20 text-xl text-gray-300'>
            Leveraging graph theory, Graphene identifies the chain of access whose elimination would most significantly
            disrupt the largest number of pathways that attackers can take.
          </p>
          <div className='py-10'>
            {/* Placeholder image, replace with your actual image */}
            <img src='/images/AttackPath.jpg' className='w-full pt-5 filter invert' alt='attack-vector-discovery' />
            <p className='text-lg text-gray-400 text-center pt-10'>
              Real attack surface trace from Graphene for a cloud-based organization. (Printed with permission)
            </p>
          </div>
          <div>
            <h1 className='text-3xl text-gray-300 pt-10 text-center'>
              Graphene Gives a Detailed View of Holes in Your Data Security Architecture
            </h1>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-2 py-10 text-center text-gray-400'>
            
              <div className='bg-green-border p-3 rounded-md'>
                <p className='pb-3 text-gray-300'>Attack Path Mapping</p>
                <p className='text-lg'>Every relationship or connection is charted and traversed to discover and identify possible attack paths.</p>
              </div>
              <div className='bg-green-border p-3 rounded-md'>
                <p className=' pb-3 text-gray-300'>Attack Exposure Score </p>
                <p className='text-lg'>A measure of how exposed is a resource instance to potential cyberattacks.</p>
              </div>
              <div className='bg-green-border p-3 rounded-md'>
                <p className='text-gray-300 pb-3'>Choke Points </p>
                <p className='text-lg'>Places where potential attack paths come together, and it is a major gateway to sensitive data and assets.</p>
              </div>
              <div className='bg-green-border p-3 rounded-md'>
                <p className='text-gray-300 pb-3'>High-Value Targets </p>
                <p className='text-lg'>Assets that are of maximum value in forging and success of attack or defense.</p>
              </div>
            </div>
            <h1 className='md:text-3xl text-2xl primary-color-g text-center pt-10'>
              &#11041; Graphene: Fortifying Defense with Continuous Innovation
            </h1>
            <div className='link-wrapper text-center'>
              <Link className='hover-2 primary-color-g md:text-3xl text-lg text-gray-300' href='/company/contact'>
                Contact us to know more on Attack surface trace and attack path identification &#x2192;
              </Link>
            </div>
          </div>
        </div>

       
      </section>
    </>
  );
}
