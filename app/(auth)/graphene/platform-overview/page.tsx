"use client"
import React from 'react';
import { Helmet } from 'react-helmet';
import InnerLandingPage from '@/components/widgets/innerLandingPage';


const Overview: React.FC = () => {
  return (
    <>
     <Helmet>
        <title>Platform Overview | ABLUVA</title>
        <meta name="description" content="Graphene - Abluva’s Data Protection Platform for Identification, Protection, and Propagation Control of Data." />
      </Helmet>
<div>
      <InnerLandingPage
       id='PlatformOverview'
        title='GRAPHENE PLATFORM OVERVIEW'
        subtitle='abluva’s data protection platform for identification, protection and propagation control of data'
        product='graphene'
        group='product research group'
      />
    </div>
      <section className='md:px-36 px-5' style={{ scrollMarginTop: '70px' }} id="PlatformOverview">
        <div className="text-white text-center pb-20 pt-20">
          <div>
          {/* <h1 className="md:text-7xl text-6xl"><span className='primary-color-g'>Graphene</span> <br></br></h1> */}
            {/* <p className='md:text-lg text-gray-600 letterspace'> Strong <span className='primary-color-g'> &#183; </span>  Flexible <span className='primary-color-g'> &#183; </span> Impenetrable</p> */}
            {/* <p className="md:text-4xl text-lg py-10 text-gray-300 founder">
               Abluva’s Data Protection Platform
              For Identification, Protection and Propagation Control of Data
            </p> */}
            <p className="mb-4 text-xl text-gray-300 md:pb-20 ">
              Graphene helps organizations democratize their data by providing robust
              Access Management, Data Depersonalization and Governance solutions.
              With better protection and simple Access and depersonalization controls,
              organizations can share their data in fast and secure and enable themselves to
              discover new revenue streams.
            </p>
            <div className='md:px-20'>
            <video className="w-full rounded-2xl videoposter" controls poster="https://img.freepik.com/free-photo/abstract-blue-pattern-wet-drops-glass-reflects-light-generated-by-artificial-intelligence_24877-80938.jpg?t=st=1700477560~exp=1700481160~hmac=12d435a8f5aee076939605243327eb210c825032b0c84252bb41f5d81295f414&w=826" loop>
              <source src="/videos/Graphene.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
            
          </div>
        </div>

        <div className='md:py-20 py-5'>
          <h1 className="text-4xl text-center primary-color-g">Graphene Benefits</h1>

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
            <span className="accordion-heading font-thin text-lg">Breathing</span>
          </label>
          <div className="accordion-content">
            <div>
          <p className="text-lg">
              Fine Grain Access Control Tools for Deepest Level of Control 
          </p>
            <p className='pt-3 text-lg'><span className='mr-3 text-sm'>&#10003;</span>Comprehensive Access Management</p>
            <p className='text-lg'><span className='mr-3 text-sm'>&#10003;</span>Elaborate Data Depersonalization Controls</p>
            <p className='text-lg'><span className='mr-3 text-sm'>&#10003;</span>Extensive Audit and Compliance Reporting</p>
            </div>     
          </div>
        </li>
        <li data-radio="content2">
          <label htmlFor="content2" className="accordion-title">
            <span>02</span>
            <span className="accordion-heading font-thin text-lg">Observable</span>
          </label>
          <div className="accordion-content">
          <div>
          <p className="text-lg">
          Real-time Policy Status
          </p>
            <p className='pt-3 text-lg'><span className='mr-3 text-sm'>&#10003;</span>Well established Metrics
</p>
            <p className='text-lg'><span className='mr-3 text-sm'>&#10003;</span>Auditable Policies</p>
            <p className='text-lg'><span className='mr-3 text-sm'>&#10003;</span>Alerts for Policy Violations</p>
            </div>
          </div>
        </li>
        <li data-radio="content3">
          <label htmlFor="content3" className="accordion-title">
            <span>03</span>
            <span className="accordion-heading font-thin text-lg">Centralized</span>
          </label>
          <div className="accordion-content">
          <div>
          <p className="text-lg ">
          Single Easy to Manage UI for
          </p>
            <p className='pt-3 text-lg'><span className='mr-3 text-sm'>&#10003;</span>Hybrid Cloud Environment
</p>
            <p className=' text-lg'><span className='mr-3 text-sm'>&#10003;</span>Hetrogenous Systems</p>
            <p className='text-lg'><span className='mr-3 text-sm'>&#10003;</span>Directly by Data Custodians</p>
            </div>
          </div>
        </li>
        <li data-radio="content4">
          <label htmlFor="content4" className="accordion-title">
            <span>04</span>
            <span className="accordion-heading font-thin text-lg">Comprehensive
</span>
          </label>
          <div className="accordion-content">
          <div>
          <p className="text-lg pt-3">
          Fine Grain Access Control Tools for Deepest Level of Control
          </p>
            <p className='text-lg pt-3'><span className='mr-3 text-sm'>&#10003;</span>Comprehensive Access Management
</p>
            <p className='text-lg'><span className='mr-3 text-sm'>&#10003;</span>Elaborate Data Depersonalization Controls
</p>
            <p className='text-lg'><span className='mr-3 text-sm'>&#10003;</span>Extensive Audit and Compliance Reporting</p>
            </div>
          </div>
        </li>
      </ul>
          </div>
        </div>
        <div className=' px-5 py-20 py-5'>
          <h1 className="text-4xl  text-center primary-color-g">Graphene Platform</h1>
          <p className="mb-4 text-lg text-gray-300 md:py-10 py-5">
            Graphene requires no code changes to your API
            or any additional API to integrate with your environment.
            It seamlessly integrates and provides data protection with
            minimal disruptions to your business operations.
          </p>
          <div className='pb-10'>
          <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-lg text-center text-gray-300">Data Discovery</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">Locate and categorize sensitive data across your entire data infrastructure using advanced algorithms for streamlined and comprehensive data Protection.</p>
            </div>
          </div>
          </div>

          <div className='pb-10 '>
          <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-lg text-center text-gray-300">Data Protection</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">Extensive Data Depersonalization options such as Encryption, Masking and advanced Anonymization algorithms ensure private data is always scrambled.</p>
            </div>
          </div>
          </div>

          <div className='pb-10 '>
          <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-lg text-center text-gray-300">Data Access Control</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">Elaborate Fine Grain Access Control Options with intuitive Access Control Management interface. Consolidated Interface solution for Access Control for Hybrid Cloud Applications.</p>
            </div>
          </div>
          </div>

          <div className='pb-20'>
          <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-lg text-center text-gray-300">Data Audit & <br className='md:block hidden'></br>Compliance Reporting</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">Detailed Audit Reports on Data Location and Access for Smooth Audits and Compliance Reporting.</p>
            </div>
          </div>
          </div>
          
        </div>

          <div className=' md:px-36 px-5 pb-20'>
          <h1 className="md:text-3xl text-lg  text-center primary-color-g"> <span className='primary-color-g'> &#11041; </span>Ensure Compliance Without Compromising Perfomance.</h1>
        </div>
    
      </section>
      
      
    </>
  );
}
export default Overview;