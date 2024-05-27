"use client"
import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import InnerLandingPage from '@/components/widgets/innerLandingPage';

export default function IncubatorDataGovernance() {
  return (
    <>
<Helmet>
        <title>Data Governance | ABLUVA</title>
        <meta name="description" content="Graphene: Elevating data governance—secure, compliant, and efficient." />
      </Helmet>
      <InnerLandingPage
    id='DataGovernance'
    title='DATA GOVERNANCE'
    subtitle={`setting the stage for innovation and reliability`}
    product='incubator'
    group='advanced research group'
  />
      <section>
     
        <div className='md:px-36 pb-20 px-5 text-2xl text-gray-300' id="DataGovernance"  style={{ scrollMarginTop: '70px' }}>
          {/* <h1 className="md:text-5xl text-4xlprimary-color-glineht text-center">Data Governance</h1> */}
          {/* <h1 className="text-3xl text-gray-300  text-center">Setting the Stage for Innovation and Reliability</h1> */}

          <p className='pt-20  text-xl text-gray-300'>
            Graphene redefines Data Governance with a comprehensive suite of capabilities. With a keen focus on metadata, retention policies, and audit trails, Graphene ensures a secure, compliant, and optimized data landscape. Experience the power of streamlined governance, where every byte is a strategic asset.
          </p>


          <h1 className="md:text-3xl text:2xl text-gray-300  text-left pt-10 pb-5">Graphene’s Data Governance Key Features</h1>
          {/* <div className='grid md:grid-cols-2 gap-8 grid-cols-1'>
          <div className='py-5 md:pr-10'>
            <div className='flex space-x-4'>
            <p className='text-[#5B21B6]'>&#10003;</p>
            <p className='text-gray-300 text-2xl'>Sensitive Data Discovery</p>
            </div>
            <p className='text-gray-400 text-lg ml-9'>Graphene excels in efficient identification and management of sensitive data within the system.</p>
          </div>
          <div className='py-5 md:pr-10'>
            <div className='flex space-x-4'>
            <p className='text-[#5B21B6]'>&#10003;</p>
            <p className='text-gray-300 text-2xl'>Data Classification</p>
            </div>
            <p className='text-gray-400 text-lg ml-9'>Graphene provides robust capabilities for categorizing and organizing data, enhancing overall information management.</p>
          </div>
          <div className='py-5 md:pr-10'>
            <div className='flex space-x-4'>
            <p className='text-[#5B21B6]'>&#10003;</p>
            <p className='text-gray-300 text-2xl'>Data Catalog</p>
            </div>
            <p className='text-gray-400 text-lg ml-9'>With Graphene's data catalog, users gain a comprehensive overview and easy access to the organization's data assets.</p>
          </div>
          <div className='py-5 md:pr-10'>
            <div className='flex space-x-4'>
            <p className='text-[#5B21B6]'>&#10003;</p>
            <p className='text-gray-300 text-2xl'>Data Access Control </p>
            </div>
            <p className='text-gray-400 text-lg ml-9'>Graphene ensures precise control over data access, allowing organizations to manage and restrict information based on defined parameters.
            <br></br><span><Link href="/graphene/data-access-control" className='underline text-gray-300'>Read more about Grahphene’s data access control</Link></span></p>
          </div>
          <div className='py-5 md:pr-10'>
            <div className='flex space-x-4'>
            <p className='text-[#5B21B6]'>&#10003;</p>
            <p className='text-gray-300 text-2xl'>Data Privacy and Compliance</p>
            </div>
            <p className='text-gray-400 text-lg ml-9'>Graphene prioritizes data privacy and compliance, aligning seamlessly with regulatory requirements for enhanced security measures.
            <br></br><span><Link href="/graphene/compliance-enablement" className='underline text-gray-300  text-left'>Read more about Graphene’s data privacy and Compliance capabilities</Link></span></p>
          </div>
        </div> */}
          <div className='pt-10'>
            <input type="radio" id="content1" name="wiki" value="Content1" defaultChecked />
            <input type="radio" id="content2" name="wiki" value="Content2" />
            <input type="radio" id="content3" name="wiki" value="Content3" />
            <input type="radio" id="content4" name="wiki" value="Content4" />
            <input type="radio" id="content5" name="wiki" value="Content5" />

            <ul className="accordion">
              <li data-radio="content1">
                <label htmlFor="content1" className="accordion-title">
                  <span>01</span>
                  <span className="accordion-heading font-thin text-lg">Sensitive Data Discovery</span>
                </label>
                <div className="accordion-content  text-lg">
                Graphene excels in efficient identification and management of sensitive data within the system.
                </div>
              </li>
              <li data-radio="content2">
                <label htmlFor="content2" className="accordion-title">
                  <span>02</span>
                  <span className="accordion-heading font-thin text-lg">Data Classification</span>
                </label>
                <div className="accordion-content  text-lg">
                Graphene provides robust capabilities for categorizing and organizing data, enhancing overall information management.
                </div>
              </li>
              <li data-radio="content3">
                <label htmlFor="content3" className="accordion-title">
                  <span>03</span>
                  <span className="accordion-heading font-thin text-lg">Data Catalog</span>
                </label>
                <div className="accordion-content  text-lg">
                With Graphene's data catalog, users gain a comprehensive overview and easy access to the organization's data assets.
                </div>
              </li>
              <li data-radio="content4">
                <label htmlFor="content4" className="accordion-title">
                  <span>04</span>
                  <span className="accordion-heading font-thin text-lg">Data Access Control
                  </span>
                </label>
                <div className="accordion-content  text-lg">
                  <div>
                Graphene ensures precise control over data access, allowing organizations to manage and restrict information based on defined parameters.
            <br></br><Link href="/graphene/data-access-control" className='underline text-gray-300'>Read more about Grahphene’s data access control</Link>
                  </div>
                </div>
              </li>
              <li data-radio="content5">
                <label htmlFor="content5" className="accordion-title">
                  <span>05</span>
                  <span className="accordion-heading font-thin text-lg">Data Privacy & Compliance
                  </span>
                </label>
                <div className="accordion-content text-lg">
                  <div>

                Graphene prioritizes data privacy and compliance, aligning seamlessly with regulatory requirements for enhanced security measures.<br></br>
            <Link href="/graphene/compliance-enablement" className='underline text-gray-300  text-left'>Read more about Graphene’s data privacy and Compliance capabilities</Link> 
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <h1 className="md:text-3xl text-2xl primary-color-g text-center pt-20">&#11041; Graphene - Where Data isn’t Governed, It is Revered</h1>
          <div className="link-wrapper  text-center">
            <Link className="hover-2 primary-color-g md:text-3xl text-lg  pt-5" href="/company/contact">Contact us to know more about Graphene's data governance capabilities  &#x2192;</Link>
          </div>
        </div>
      </section>

    </>
  );
}
