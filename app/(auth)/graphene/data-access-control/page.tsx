"use client"
import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import InnerLandingPage from '@/components/widgets/innerLandingPage';


export default function GrapheneAccessControl() {
  return (
    <>
    <Helmet>
        <title>Data Access Control | ABLUVA</title>
        <meta name="description" content="Graphene Access Control: Democratize data securely with fine-grain access, intuitive policy editing, and simplified database management." />
      </Helmet>
      <div>
      <InnerLandingPage
       id='DataAccessControl'
        title='DATA ACCESS CONTROL'
        subtitle='unlock hidden potential
        of your data with streamlined access control'
        product='graphene'
        group='product research group'
      />
    </div> 
      <section>    
        <div className="text-black text-center pt-20 pb-20" style={{ scrollMarginTop: '70px' }} id="DataAccessControl">

          <div className="px-5 md:px-36">
            {/* <h1 className="md:text-5xl text-4xlprimary-color-glineht">Unlock Hidden Potential
              of Your Data</h1> */}

            <p className="mb-4 md:px-20 text-xl pb-10 text-gray-300 darkText ">
              Graphene streamlines data security and access control, allowing organizations to safeguard their data without compromising performance. Its intuitive policy creation interface, seamless orchestration, scalable access controls, and dynamic data masking ensure data protection without slowing down operations.
            </p>
            <div className='pb-40'>
              <Link href="/company/contact" className="btn">
                Request to Demo
              </Link>
            </div>
            <img src="/videos/DataAccessControl.gif" className="w-full  h-auto rounded-2xl pb-20" alt="data-access-control" />

          </div>
        </div>
        <div className=' px-5 md:px-36 md:py-20 py-10 '>
          <h1 className="text-4xl text-center primary-color-g lineht">Democratize Data with <br className="hidden md:block"></br>
            Graphene’s Breathing Security™</h1>
          <div>
            <p className="mb-4 text-lg py-10 text-gray-300">
              Graphene enables multi-dimensional data access control to enable organization to democratize their data and further extract value from it, in ways that was previously not possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="max-w-xl p-10 bg-green-border-b flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/policy.png" className='h-6 mx-auto filter invert opacity-80' alt="icon" /></li>
                <li className="mb-2 text-lg text-gray-400 text-center">Minimize the data access policies</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 bg-green-border-r-l-b flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/RealTime.png" className='h-6 mx-auto filter invert opacity-80' alt="icon" /></li>
                <li className="mb-2 text-lg text-gray-400 text-center">Implement near real time data access rights</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 bg-green-border-b flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/reduceDependency.png" className='h-6 mx-auto filter invert opacity-80' alt="icon" /></li>
                <li className="mb-2 text-lg text-gray-400 text-center">Reduce dependency on technical staff to implement policies</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/multipleSystem.png" className='h-6 mx-auto filter invert opacity-80' alt="icon" /></li>
                <li className="mb-2 text-lg text-gray-400 text-center">Control Access polices for all systems from single Interface
                </li>
              </ul>
            </div>

            <div className="max-w-xl p-10  bg-green-border-r-l flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/security.png" className='h-6 mx-auto filter invert opacity-80' alt="icon" /></li>
                <li className="mb-2 text-lg text-gray-400 text-center">Implement Fine Grain Access in multiple dimensions</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/valueFromData.png" className='h-6 mx-auto filter invert opacity-80' alt="icon" /></li>
                <li className="mb-2 text-lg text-gray-400 text-center">Extract value from data, securely</li>
              </ul>
            </div>
          </div>
        </div>
          <div className='md:pb-20 pb-10  md:px-36 px-5'>
            <div className="link-wrapper primary-color-g text-center">
              <Link className="hover-2 primary-color-g md:text-3xl text-lg" href="/company/contact">Talk to us to know more about Graphene’s Data Depersonalization capabilities &#x2192;</Link>

            </div>
          </div>

        <div className=' md:px-36 px-5 pb-20'>
        <div className='pb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-lg text-center text-gray-300">Fine Grain Access</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">Grant access based on multiple dimensions only when and where it is needed. Implement ABAC, RBAC, ReBAC combined with additional temporal, spatial, End-point and risk bask restriction.</p>
            </div>
          </div>
        </div>


        
        <div className='pb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-lg text-center text-gray-300">Intuitive Policy Editor</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">Create, inherit, and deploy policies effortlessly without any technical coding requirement. Graphene converts your click-based instructions into code and implements the access controls seamlessly across all the integrated systems.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-lg text-center text-gray-300">Simplified Database Access Management
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">Graphene seamlessly implements security policies without requiring additional database users. All access controls are efficiently managed within Graphene, optimizing database resources.</p>
            </div>
          </div>
        </div>

        </div>




      </section>

    </>
  );
}
