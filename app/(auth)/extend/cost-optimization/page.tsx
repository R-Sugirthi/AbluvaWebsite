import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Cost Optimization | ABLUVA',
  description: 'Graphene Query Optimization: Boost performance, cut costs, scale confidently.',
};

export default function CostOptimization() {
  return (
    <>

      <section className='founder'>
        <div className='md:px-28 px-5 pt-20 text-2xl text-gray-300'>
          <h1 className="md:text-5xl text-4xl primary-color text-center lineht">Cost-Efficiency Redefined : <br></br>Graphene's Query Optimization</h1>
          <h1 className='text-3xl text-gray-300 text-center'>Boost Performance, Slash Costs, and Scale with Confidence</h1>
          <div className='pt-20'>
            <p className=' text-lg'>
              Discover the power of cost-effective graph data management. Graphene's revolutionary Query Optimization doesn't just supercharge your queries; it's your secret weapon for minimizing expenses while maximizing performance and scalability.
            </p>
            <p className='pt-3  text-lg'>
              Graphene's Query Optimization is not just about speed; it is about optimizing every operation to ensure you're getting the most out of your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-20 text-gray-300">
            <div className="max-w-xl p-3 flex flex-col text-center">
              <img src="/icons/speedtime.png" className='h-8 mx-auto filter invert' alt="icon" />
              <div className='py-5'>
                <p className=''>Speed Without High Cost</p>
              </div>
              <p className="mb-2 text-lg text-gray-400 text-center">Accelerate query performance and ensure that the applications respond in less time.</p>
            </div>
            <div className="max-w-xl p-3 md:border-l md:border-r border-gray-700 flex flex-col text-center">
              <img src="/icons/budget.png" className='h-8 mx-auto filter invert' alt="icon" />
              <div className='py-5'>
                <p className=''>Scale in Budget</p>
              </div>
              <p className="mb-2 text-lg text-gray-400 text-center">Seamlessly scale operations with minimal increase in costs. Optimize resource usage with Graphene.</p>
            </div>
            <div className="max-w-xl p-3  flex flex-col text-center">
              <img src="/icons/maintenance.png" className='h-8 mx-auto filter invert' alt="icon" />
              <div className='py-5'>
                <p className=''>Economical Maintenance</p>
              </div>
              <p className="mb-2 text-lg text-gray-400 text-center">Spend less on maintaining and troubleshooting queries, freeing up resources for strategic initiatives.</p>
            </div>
          </div>

          <h1 className="md:text-3xl text:2xl text-gray-300  text-left pt-10 pb-5">Realize Cost Savings and More</h1>
          <div className='grid md:grid-cols-2 gap-8 grid-cols-1'>
            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-400 text-lg'>Gain a competitive edge with a cost-efficient graph database that outperforms in both speed and savings.</p>
              </div>

            </div>

            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>

                <p className='text-gray-400 text-lg ml-9'>Delight users with a responsive experience while keeping your budget in check with Graphene's streamlined costs.</p>
              </div>
            </div>
          </div>
          <div>
            <div className='py-20'>
              <div className="link-wrapper text-center">
                <Link className="hover-2 primary-color md:text-3xl text-lg" href="/company/contact">Contact our team for insights into how Graphene's cost-effective Query Optimization can reshape your database strategy &#x2192;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
