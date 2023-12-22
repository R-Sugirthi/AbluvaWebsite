import React from 'react';
import './graphene.css';

export const metadata = {
  title: 'Platform Overview | ABLUVA',
  // description: 'Page description',
};

export default function Overview() {
  return (
    <>
      <section className='founder'>
        <div className="bg-black text-white text-center py-20">
          <div className=" px-4 sm:px-8 lg:px-16 xl:px-20">
            <h1 className="text-5xl sm:text-7xl "><span className='text-gradient'>Graphene</span> <br></br></h1>
            <p className='md:text-2xl text-gray-600 letterspace'> Strong <span className='text-gradient'> &#183; </span>  Flexible <span className='text-gradient'> &#183; </span> Impenetrable</p>
            <p className=" md:px-20 md:text-4xl text-3xl py-10 text-gray-300 mark font-semibold">
               Abluva’s Data Protection Platform
              For Identification, Protection and Propagation Control of Data.
            </p>
            <p className="mb-4 md:px-20 text-2xl text-gray-300 md:pb-20 darkText">
              Graphene helps organizations democratize their data by providing robust
              Access Management, Data Depersonalization and Governance solutions.
              With better protection and simple Access and depersonalization controls,
              organizations can share their data in fast and secure and enable themselves to
              discover new revenue streams.
            </p>

            <video className="w-full rounded-2xl videoposter" controls poster="https://img.freepik.com/free-photo/abstract-blue-pattern-wet-drops-glass-reflects-light-generated-by-artificial-intelligence_24877-80938.jpg?t=st=1700477560~exp=1700481160~hmac=12d435a8f5aee076939605243327eb210c825032b0c84252bb41f5d81295f414&w=826" loop>
              <source src="/videos/Graphene.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className='border-b border-gray-500'></div>
          </div>
        </div>

        <div className='bg-[#f2f3f5] px-4 lg:px-28 pt-10'>
          <h1 className="text-5xl  text-center text-gradient-light pb-10">Graphene Benefits</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="max-w-xl md:p-10 p-5 md:border-b md:border-r lg:border-b lg:border-r border-gray-300">
              <h5 className="mb-2 text-4xl text-gray-900">Breathing</h5>
              <p className="text-2xl text-gray-700">
                Every Evolving Security as Against Static Access Control Flags:
                <ul className='list ml-10'>
                  <li className="text-2xl text-gray-700 "> Dynamic Access Control</li>
                  <li className="text-2xl text-gray-700 "> Environment Based Access Control</li>
                </ul>
              </p>
            </div>
            <div className="max-w-xl md:p-10 p-5 md:border-b lg:border-b border-gray-300">
              <h5 className="mb-2 text-4xl text-gray-900">Observable</h5>
              <p className="text-2xl text-gray-700">
              Real-time Policy Status :
                <ul className='list ml-10'>
                  <li className="text-2xl text-gray-700 ">Well established Metrics </li>
                  <li className="text-2xl text-gray-700 "> Auditable Policies </li>
                  <li className="text-2xl text-gray-700 "> Alerts for Policy Violations </li>
                </ul>
              </p>
            </div>
            <div className="max-w-xl md:p-10 p-5 md:border-r lg:border-r border-gray-300">
              <h5 className="mb-2 text-4xl text-gray-900">Centralized</h5>
              <p className="text-2xl text-gray-700">
                Single Easy to Manage UI for:
                <ul className='list ml-10'>
                  <li className="text-2xl text-gray-700 "> Hybrid Cloud Environment</li>
                  <li className="text-2xl text-gray-700 "> Hetrogenous Systems</li>
                  <li className="text-2xl text-gray-700 "> Directly by Data Custodians</li>
                </ul>
              </p>
            </div>
            <div className="max-w-xl md:p-10 p-5 pb-20">
              <h5 className="mb-2 text-4xl text-gray-900">Comprehensive</h5>
              <p className="text-2xl text-gray-700">
              Fine Grain Access Control Tools for Deepest Level of Control : 
                <ul className='list ml-10'>
                  <li className="text-2xl text-gray-700 "> Comprehensive Access Management</li>
                  <li className="text-2xl text-gray-700 "> Elaborate Data Depersonalization Controls</li>
                  <li className="text-2xl text-gray-700 ">Extensive Audit and Compliance Reporting</li>
                </ul>
              </p>
            </div>

          </div>
        </div>
        <div className='bg-black px-4 lg:px-28 pb-20 text-center pt-10'>
          <h1 className="text-5xl  text-center text-gradient">Graphene Platform</h1>
          <p className="mb-4 md:px-20 text-2xl text-gray-300 py-10 darkText ">
            Graphene requires no code changes to your API
            or any additional API to integrate with your environment.
            It seamlessly integrates and provides data protection with
            minimal disruptions to your business operations.
          </p>
          <div className='pb-10'>
          <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[#f2f3f5] rounded-tl-3xl rounded-br-3xl white-shadow p-5'>
            <div className='flex justify-center items-center md:border-r border-gray-300'>
            <p className="text-4xl text-center text-gradient-light">Data Discovery</p>
            </div>
            <div>
              <p className="text-xl text-gray-900 text-left p-5 text-justify">Locate and categorize sensitive data across your entire data infrastructure using advanced algorithms for streamlined and comprehensive data Protection.</p>
            </div>
          </div>
          </div>

          <div className='pb-10'>
          <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[#f2f3f5] rounded-tl-3xl rounded-br-3xl white-shadow p-5'>
            <div className='flex justify-center items-center md:border-r border-gray-300'>
            <p className="text-4xl text-center text-gradient-light">Data Protection</p>
            </div>
            <div>
              <p className="text-xl text-gray-900 text-left p-5 text-justify">Extensive Data Depersonalization options such as Encryption, Masking and advanced Anonymization algorithms ensure private data is always scrambled.</p>
            </div>
          </div>
          </div>

          <div className='pb-10'>
          <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[#f2f3f5] rounded-tl-3xl rounded-br-3xl white-shadow p-5'>
            <div className='flex justify-center items-center md:border-r border-gray-300'>
            <p className="text-4xl text-center text-gradient-light">Data Access Control</p>
            </div>
            <div>
              <p className="text-xl text-gray-900 text-left p-5 text-justify">Elaborate Fine Grain Access Control Options with intuitive Access Control Management interface. Consolidated Interface solution for Access Control for Hybrid Cloud Applications.</p>
            </div>
          </div>
          </div>

          <div className='pb-20'>
          <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[#f2f3f5] rounded-tl-3xl rounded-br-3xl white-shadow p-5'>
            <div className='flex justify-center items-center md:border-r border-gray-300'>
            <p className="text-4xl text-center text-gradient-light">Data Audit & <br className='md:block hidden'></br>Compliance Reporting</p>
            </div>
            <div>
              <p className="text-xl text-gray-900 text-left p-5 text-justify">Detailed Audit Reports on Data Location and Access for Smooth Audits and Compliance Reporting.</p>
            </div>
          </div>
          </div>
          
          <div>
          <h1 className="text-4xl  text-center text-gradient"> <span className='text-gradient'> &#11041; </span> Ensure Compliance Without Compromising Perfomance.</h1>
          </div>
        </div>
      </section>
      
    </>
  );
}
