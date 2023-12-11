import React from 'react';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';

export const metadata = {
  title: 'Cost Optimization | ABLUVA',
  // description: 'Page description',
};

export default function CostOptimization() {
  return (
    <>
      
      <section className='founder'>   
       <div className='bg-[#f2f3f5] md:px-28 pt-20 text-2xl text-gray-900'>
        <h1 className="md:text-5xl text:3xl text-gradient-light text-center lineht">Cost-Efficiency Redefined : <br></br>Graphene's Query Optimization</h1>
        <h1 className='md:text-3xl text-gray-900 font-semibold text-center'>Boost Performance, Slash Costs, and Scale with Confidence</h1>
        <div className='pt-20'>
        <p>
        Discover the power of cost-effective graph data management. Graphene's revolutionary Query Optimization doesn't just supercharge your queries; it's your secret weapon for minimizing expenses while maximizing performance and scalability.
        </p>
        <p className='pt-3'>
        Graphene's Query Optimization is not just about speed; it is about optimizing every operation to ensure you're getting the most out of your investment.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-20">
            <div className="max-w-xl p-3 flex flex-col text-center">
                <img src="/icons/speedtime.png" className='h-10 mx-auto' />
                <div className='py-5'>
              <p className='font-semibold'>Speed Without High Cost</p>
                </div>
                <p className="mb-2 text-2xl text-gray-900 text-center">Accelerate query performance and ensure that the applications respond in less time.</p>
            </div>
            <div className="max-w-xl p-3 border-l border-r border-gray-300 flex flex-col text-center">
                <img src="/icons/budget.png" className='h-10 mx-auto' />
                <div className='py-5'>
                <p className='font-semibold'>Scale in Budget</p>
                </div>
                <p className="mb-2 text-2xl text-gray-900 text-center">Seamlessly scale operations with minimal increase in costs. Optimize resource usage with Graphene.</p>
            </div>
            <div className="max-w-xl p-3  flex flex-col text-center">
                <img src="/icons/maintenance.png" className='h-10 mx-auto' />
                <div className='py-5'>
                <p className='font-semibold'>Economical Maintenance</p>
                </div>
                <p className="mb-2 text-2xl text-gray-900 text-center">Spend less on maintaining and troubleshooting queries, freeing up resources for strategic initiatives.</p>
            </div> 
          </div>

                  
        <div className='pt-10'>
        <div className='border border-gray-500 rounded-lg p-5'>
        <h1 className="md:text-3xl text:2xl text-gray-900 font-semibold">Realize Cost Savings and More: </h1>
          <ul className='list-disc ml-10'>
            <li className='py-2'>Gain a competitive edge with a cost-efficient graph database that outperforms in both speed and savings.</li>
            <li className='py-2'>Delight users with a responsive experience while keeping your budget in check with Graphene's streamlined costs.</li>
          </ul>
        </div>
        </div>

       
    
    <div>
        <div className='py-20'>
        <div className="link-wrapper text-center">
            <Link className="hover-2 text-gradient-light text-3xl font-semibold" href="/contact">Contact our team for insights into how Graphene's cost-effective Query Optimization can reshape your database strategy &#x2192;</Link>
          </div>    
        </div>
    </div>
        </div>





      </section>
    </>
  );
}
