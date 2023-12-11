import React from 'react';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';


export const metadata = {
  title: 'Data Governance | ABLUVA',
  // description: 'Page description',
};

export default function IncubatorDataGovernance() {
  return (
    <>
      
      <section className='founder'>

        <div className='bg-black md:px-28 py-20 text-2xl text-gray-300 darkText ' id="DataGovernance">
        <h1 className="md:text-5xl text:3xl text-gradient lineht text-center">Data Governance</h1>
        <h1 className="md:text-3xl text:3xl text-gray-300  text-center">Setting the stage for innovation and reliability</h1>
        <p className='pt-20'>
        Graphene redefines Data Governance with a comprehensive suite of capabilities. With a keen focus on metadata, retention policies, and audit trails, Graphene ensures a secure, compliant, and optimized data landscape. Experience the power of streamlined governance, where every byte is a strategic asset.  
        </p>
        
        <div className='pt-10'>
        <div className='border border-gray-500 rounded-lg p-10'>
        <h1 className="md:text-3xl text:2xl text-gray-300 font-semibold">Graphene’s data governance key features: </h1>
          <ul className='list-disc ml-10'>
            <li className='py-2'><span className='font-semibold'>Sensitive data discovery : </span>Graphene excels in efficient identification and management of sensitive data within the system.</li>
            <li className='py-2'><span className='font-semibold'>Data classification : </span>Graphene provides robust capabilities for categorizing and organizing data, enhancing overall information management.</li>
            <li className='py-2'><span className='font-semibold'>Data catalog : </span>With Graphene's data catalog, users gain a comprehensive overview and easy access to the organization's data assets.</li>
            <li className='py-2'><span className='font-semibold'>Data access control : </span>Graphene ensures precise control over data access, allowing organizations to manage and restrict information based on defined parameters. <br></br><span><Link href="GrapheneAccessControl" className='underline text-violet-300'>Read more about Grahphene’s data access control</Link></span></li>
            <li className='py-2'><span className='font-semibold'>Data privacy and compliance : </span>Graphene prioritizes data privacy and compliance, aligning seamlessly with regulatory requirements for enhanced security measures.<br></br><span><Link href="ComplianceEnablement" className='underline text-violet-300'>Read more about Graphene’s data privacy and Compliance capabilities</Link></span></li>
          </ul>
        </div>
        </div>
        <h1 className="text-4xl  text-gradient text-center pt-20">Graphene - Where data isn’t governed, It is revered</h1>     
        <div className="link-wrapper  text-center">
            <Link className="hover-2 text-gradient text-3xl font-semibold pt-5" href="/contact">Contact us to know more about Graphene's data governance capabilities  &#x2192;</Link>
          </div>
        </div>

      </section>
      
    </>
  );
}
