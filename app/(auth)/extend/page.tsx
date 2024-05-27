import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Extend | ABLUVA',
  description: 'Graphene: Unlock value beyond security. BI integration, cost optimization, knowledge graphs.',
};

export default function Extend() {
  return (
    <>
      
      <section className='founder'>
       
<div className='md:px-28 px-5 py-20 text-2xl text-gray-300'>
        <h1 className="md:text-5xl text-4xl primary-color text-center">Unlock Extended Value With Graphene</h1>
        
        <p className='pt-20 text-justify text-lg'>
        Beyond being a robust data security solution, Graphene extends its capabilities to empower you in new dimensions. Explore the avenues below to see how Graphene goes beyond the ordinary, helping you derive exceptional value from your data.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-20">
            <div className="max-w-xl p-3 flex flex-col text-center">
                <img src="/icons/power.png" className='h-8 mx-auto filter invert opacity-80' alt="icon"/>
                <div className='py-5'>
              <Link href="/extend/bi-integration"><span className='underline hover:text-gray-500'>BI Integration</span></Link>
                </div>
                <p className="mb-2 text-lg text-gray-400 text-center">Integrates your BI tools and unleash the power of insights even with NoSQL databases.</p>
            </div>
            <div className="max-w-xl p-3 md:border-l md:border-r border-gray-700 flex flex-col text-center">
                <img src="/icons/costoptimization.png" className='h-8 mx-auto filter invert opacity-80' alt="icon"/>
                <div className='py-5'>
              <Link href="/extend/cost-optimization" ><span className='underline hover:text-gray-500'>Cost Optimization</span></Link>
                </div>
                <p className="mb-2 text-lg text-gray-400 text-center">Boost performance but strategically minimizes costs. Experience efficiency that directly impacts your bottom line.</p>
            </div>
            <div className="max-w-xl p-3  flex flex-col text-center">
                <img src="/icons/graph.png" className='h-8 mx-auto filter invert opacity-80' alt="icon"/>
                <div className='py-5'>
              <Link href="/incubators/secure-knowledge-graph"><span className='underline hover:text-gray-500'>Knowledge Graphs</span></Link>
                </div>
                <p className="mb-2 text-lg text-gray-400 text-center">Uncover the layers of intelligence within your data, fostering a deeper understanding and utilization of knowledge graphs.</p>
            </div> 
          </div>
          
        <h1 className="text-3xl primary-color text-justify">Stay Tuned for More :</h1>
        <p className="text-lg text-gray-400">Graphene is continuously evolving to offer more value. Keep an eye out for upcoming features and applications that extend the capabilities of Graphene, opening new possibilities for your data-driven success.</p>

        </div>
      </section>
      
    </>
  );
}
