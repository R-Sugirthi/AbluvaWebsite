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

        <div className='bg-[#f2f3f5] md:px-28 pt-20 text-2xl text-gray-900'>
          <h1 className="md:text-5xl text:3xl text-gradient-light text-center lineht">Securely Integrate and<br></br> Analyze Graph Data from Any Source</h1>
          <div className=''>
            <h1 className='md:text-3xl text-gray-900 font-semibold text-center pt-5'>Empower your BI with the power of Graphene, the secure and <br></br>seamless data access tool for ALL types of databases.</h1>
            <p className='pt-20 pb-10'>
              Leverage the power of Graphene to unveil the hidden insights within your NoSQL data, seamlessly integrating and analyzing graph information across diverse databases, regardless of their native query language. Graphene provides a unified platform for accessing and comprehending the intricate relationships within your data, empowering you to unlock new levels of understanding and value.
            </p>
          </div>

          <div>
            <div className='border border-gray-500 rounded-lg p-10'>
              <h1 className="md:text-3xl text:2xl text-gray-900 font-semibold">Simplified BI Integration</h1>
              <ul className='list-disc ml-10'>
                <li className='py-2'><span className='font-semibold'>Native SQL Queries : </span>Issue queries in the familiar SQL language, maximizing user efficiency and minimizing training requirements.</li>
                <li className='py-2'><span className='font-semibold'>Automated Security Checks : </span>Graphene automatically verifies security constraints on all SQL queries before execution, ensuring data integrity.</li>
                <li className='py-2'><span className='font-semibold'>Transparent Data Access : </span>Gain comprehensive visibility into data access and manipulation activities through transparent auditing logs.</li>
              </ul>
            </div>
          </div>

          <h1 className="text-4xl  text-gradient-light text-center py-20">Unleash the hidden potential within your data and unlock new possibilities for informed decision-making and collaborative success.</h1>

          <div>
            <div className='border border-gray-500 rounded-lg p-10'>
              <h1 className="md:text-3xl text:2xl text-gray-900 font-semibold">Unparalleled NoSQL data integration</h1>
              <ul className='list-disc ml-10'>
                <li className='py-2'><span className='font-semibold'>Seamless Analysis : </span>Graphene rises above the query language limitations, allowing you to analyze graph data effortlessly across an array of NoSQL databases.</li>
                <li className='py-2'><span className='font-semibold'>Unified Platform : </span> Access and analyze all your valuable graph data through a single, intuitive interface, streamlining your data analysis workflows.</li>
                <li className='py-2'><span className='font-semibold'>Enhanced Security : </span>Graphene enforces strict security constraints on all SQL queries, ensuring the integrity and confidentiality of your data.
                  <ul className='ml-10 list-circle'>
                    <li className='py-2'> Control access to specific nodes, relationships, and properties based on user roles and permissions.</li>
                    <li className='py-2'> Define fine-grained access controls to ensure data is only accessible to authorized users.</li>
                  </ul>

                </li>
              </ul>
            </div>
          </div>

          <h1 className="text-4xl  text-gradient-light text-center py-10">Empower your organization with the unparalleled NoSQL data integration capabilities of Graphene.</h1>

          <div className='pb-20'>
            <div className="link-wrapper text-center">
              <Link className="hover-2 text-gradient-light text-3xl font-semibold" href="/company/contact">Start Your Transformation Today &#x2192;</Link>
            </div>
          </div>





        </div>





      </section>

    </>
  );
}
