import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'BI Integration | ABLUVA',
  description: 'Graphene BI Integration: Analyze NoSQL data seamlessly, ensuring security and unified access. Empower your organization\'s data-driven transformation today.',
};

export default function BI_Integration() {
  return (
    <>

      <section className='founder'>
        <div className=' md:px-28 px-5 pt-20 text-2xl text-gray-300'>
          <h1 className="md:text-5xl text:4xl primary-color text-center lineht">Securely Integrate and<br></br> Analyze Graph Data from Any Source</h1>
          <div className=''>
            <h1 className='text-3xl text-gray-300 text-center pt-5'>Empower your BI with the power of Graphene, the secure and <br></br>seamless data access tool for ALL types of databases.</h1>
            <p className='pt-20 pb-10 text-lg'>
              Leverage the power of Graphene to unveil the hidden insights within your NoSQL data, seamlessly integrating and analyzing graph information across diverse databases, regardless of their native query language. Graphene provides a unified platform for accessing and comprehending the intricate relationships within your data, empowering you to unlock new levels of understanding and value.
            </p>
          </div>
          <h1 className="md:text-3xl text:2xl text-gray-300  text-left pt-10 pb-5">Simplified BI Integration</h1>
          <div className='grid md:grid-cols-2 gap-8 grid-cols-1'>
            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Native SQL Queries</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Issue queries in the familiar SQL language, maximizing user efficiency and minimizing training requirements.</p>
            </div>

            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Automated Security Checks</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Graphene automatically verifies security constraints on all SQL queries before execution, ensuring data integrity.</p>
            </div>

            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Transparent Data Access</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Gain comprehensive visibility into data access and manipulation activities through transparent auditing logs.</p>
            </div>
          </div>

          <h1 className="text-3xl primary-color text-center py-20">Unleash the hidden potential within your data and unlock new possibilities for informed decision-making and collaborative success.</h1>

          <h1 className="md:text-3xl text:2xl text-gray-300  text-left pt-10 pb-5">Unparalleled NoSQL data integration</h1>
          <div className='grid md:grid-cols-2 gap-8 grid-cols-1'>
            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Seamless Analysis</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Graphene rises above the query language limitations, allowing you to analyze graph data effortlessly across an array of NoSQL databases.</p>
            </div>

            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Unified Platform</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Access and analyze all your valuable graph data through a single, intuitive interface, streamlining your data analysis workflows.</p>
            </div>

            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Enhanced Security</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'> Graphene enforces strict security constraints on all SQL queries, ensuring the integrity and confidentiality of your data.</p>
              <ul className='text-gray-400 text-lg ml-16'>
                <li>
                  - Control access to specific nodes, relationships, and properties based on user roles and permissions.
                </li>
                <li>
                  - Define fine grained access controls to ensure data is only accessible to authorized users.
                </li>
              </ul>
            </div>
          </div>
          <h1 className="text-3xl primary-color text-center py-10">Empower your organization with the unparalleled NoSQL data integration capabilities of Graphene.</h1>

          <div className='pb-20'>
            <div className="link-wrapper text-center">
              <Link className="hover-2 primary-color md:text-3xl text-lg font-semibold" href="/company/contact">Start Your Transformation Today &#x2192;</Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
