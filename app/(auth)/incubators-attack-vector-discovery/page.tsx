import React from 'react';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';


export const metadata = {
  title: 'Attack Vector Discovery | ABLUVA',
  // description: 'Page description',
};


export default function IncubatorAttackPathDiscovery() {
  return (
    <>
      
      <section className='founder'>
        {/* <div className="py-28 md:py-28 md:pb-28 md:pl-48 md:pr-12 lg:pr-32 sm:px-10 bg">
          <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
            <div className="w-full text-white pt-20 pb-40 w-3/4">
              <p className="text-5xl font-bold text-gray-100 founder"><span className='text-7xl'>P</span>roduct - Incubators</p>
              <p className="text-3xl founder text-gray-300">We're not only building products, <br></br>we're shaping the future of data security.</p>
            </div>
          </div>
        </div> */}

<div className='bg-[#f2f3f5] md:px-28 py-20 text-2xl text-gray-900 ' id="AttackPath">
          <h1 className="text-5xl  text-gradient lineht text-center">Attack Vector Discovery</h1>
          <h1 className="text-3xl text-gray-900 text-center">Intruders need only one path to your assets, <br></br>
          Our mission is to discover and protect every single one.
          </h1>
          <p className='pt-20'>Leveraging graph theory, Graphene identifies the chain of access whose elimination would most significantly disrupt the largest number of pathways that attackers can take.</p>
          <div>
          <img src= "/images/AttackPath.jpg" className='w-full pt-5'/>
          <p className='text-xl text-center py-3'>Real attack surface trace from Graphene for a cloud based organisation. 
          (Printed with permission)
          </p>
          </div>
          <div>
          <h1 className="text-3xl  text-gray-900 font-semibold pt-5">Graphene gives a detailed view of holes in your data security architecture</h1>
          <div className='grid md:grid-cols-4 grid-cols-1 gap-2 py-10 text-center'>
            <div className='border border-gray-500 p-3 rounded-md'>
              <p className='font-semibold pb-3'>Attack path mapping</p>
              <p>Every relationship or connection is charted and traversed to discover and identify possible attack paths.</p>
            </div>
            <div className='border border-gray-500 p-3 rounded-md'>
            <p className='font-semibold pb-3'>Attack exposure score </p>
              <p>A measure of how  exposed is a resource instance to potential cyberattacks.</p>
            </div>
            <div className='border border-gray-500 p-3 rounded-md'>
            <p className='font-semibold pb-3'>Choke points </p>
              <p>Places where potential attack paths come together, and it is a major gateway to sensitive data and assets.</p>
            </div>
            <div className='border border-gray-500 p-3 rounded-md'>
            <p className='font-semibold pb-3'>High value targets </p>
              <p>Assets that are of maximum value in forging and success of attack or defence.</p>
            </div>
          </div>
            <h1 className="text-4xl  text-gradient-light lineht text-center pt-10">Graphene: Fortifying defense with continuous innovation</h1>
            <div className="link-wrapper  text-center">
            <Link className="hover-2 text-gradient-light text-3xl font-semibold" href="/contact">Contact us to know more on Attack surface trace and attack path identification &#x2192;</Link>
          </div>
          </div>
        </div>


        








      </section>
      
    </>
  );
}
