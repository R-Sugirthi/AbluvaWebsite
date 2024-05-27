"use client"
import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import InnerLandingPage from '@/components/widgets/innerLandingPage';



export default function GrapheneDepersonalization() {
  return (
    <>
      <Helmet>
        <title>Data Depersonalization | ABLUVA</title>
        <meta name="description" content="Safely share data with Graphene's advanced masking and fine-grain controls for enhanced security and compliance." />
      </Helmet>
      <div>
      <InnerLandingPage
       id='Depersonalization'
        title='DATA DEPERSONALIZATION'
        subtitle='democratize data without fear of
        data misappropriation and compliance'
        product='graphene'
        group='product research group'
      />
    </div> 
      <section >       
        <div className=" text-black text-center pb-20 pt-20"  style={{ scrollMarginTop: '70px' }} id="Depersonalization">
          <div className="px-5 md:px-36">
            {/* <h1 className="md:text-5xl text-4xlprimary-color-glineht">Democratize Data without Fear of
              Data Misappropriation and Compliance</h1> */}

            <p className="mb-4 md:px-20 text-xl pb-10 text-gray-300 darkText">
              Offering comprehensive choices for data masking, Graphene enables the secure sharing of data both within and outside the organisation, mitigating concerns of potential misuse. By facilitating organisations to harness data intelligently, Graphene ensures compliance with regulatory standards.
            </p>
            <div className='pb-28'>
              <Link href="/company/contact" className="btn">
                Request to Demo
              </Link>
            </div>
            <div className='md:px-20'>
            <video className="w-full  h-auto rounded-2xl videoposter" controls poster="https://img.freepik.com/premium-photo/molecular-structure-high-resolutiongenerative-ai_841229-4284.jpg?w=826" loop >
              <source src="/videos/DataDepersonlization.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
          </div>
        </div>

        <div className=' px-4 md:px-36 md:pb-10'>
          <div>
            <h1 className="text-4xl  text-center primary-color-g lineht pt-20">Empowering Secure Data Sharing :<br></br> Cultivating Value Through Advanced Data Masking</h1>
            <p className="mb-4 text-lg py-10 text-gray-300">
              Graphene dynamic data masking eliminates the need for data duplication reducing the attack surface and improving security with minimal performance overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="max-w-xl p-10 bg-green-border-b flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/dynamic.png" className='h-6 mx-auto filter invert opacity-80' alt="icon"/></li>
                <li className="mb-2 text-lg text-gray-400 text-center">Dynamic Data Masking eliminating the need for data duplication</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 bg-green-border-r-l-b flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/encryption.png" className='h-6 mx-auto filter invert opacity-80' alt="icon"/></li>
                <li className="mb-2 text-lg text-gray-400 text-center">Fine-grained masking and Encryption</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 bg-green-border-b flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/skills.png" className='h-6 mx-auto filter invert opacity-80' alt="icon"/></li>
                <li className="mb-2 text-lg text-gray-400 text-center">No specialized skills needed to implement advanced masking controls</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/solution.png" className='h-6 mx-auto filter invert opacity-80' alt="icon"/></li>
                <li className="mb-2 text-lg text-gray-400 text-center">Sophisticated masking solutions tailored to diverse security and compliance requirements</li>
              </ul>
            </div>

            <div className="max-w-xl p-10  bg-green-border-r-l flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/security.png" className='h-6 mx-auto filter invert opacity-80' alt="icon"/></li>
                <li className="mb-2 text-lg text-gray-400 text-center">Easily prove security compliance and audits</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/securedData.png" className='h-6 mx-auto filter invert opacity-80' alt="icon"/></li>
                <li className="mb-2 text-lg text-gray-400 text-center">Achieve the full potential of data collaborations with secure data</li>
              </ul>
            </div>
          </div>
        </div>      

        <div className='md:pt-10 md:px-36 px-5  pb-20' >
          <div className="link-wrapper  text-center">
            <Link className="hover-2 primary-color-g md:text-3xl text-lg" href="/company/contact">Talk to us to know more about Graphene’s Data Depersonalization capabilities  &#x2192;</Link>
          </div>
        </div>

        <div className='md:px-36 px-5 '>
        <div className='pb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-xl text-center text-gray-300">Fast Dynamic Masking
</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">A diverse array of pre-configured Encryption and Masking techniques empowers you to choose the precise methods that align with your specific data usage and security requirements. Our support includes Format Preserving Encryption (FPE), hashing, as well as various forms of data redaction and nullification for comprehensive masking.
              </p>
            </div>
          </div>
        </div>

        <div className='pb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-xl text-center text-gray-300">Fine Grain Data Masking</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">Graphene recognizes that only sensitive data, dictated by internal security policies, external compliance regulations, or business models, requires protection. With fine-grained data masking and encryption at row, column, node, and property levels, Graphene enables pinpoint protection. Our support includes masking and encryption based on data attributes like classification and tags, ensuring tailored security measures for your specific needs.


              </p>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-xl text-center text-gray-300">Closer to Zero Trust Environment</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">Leverage Deep Randomization algorithms and K-Anonymization to generalise data effectively, preserving its structure and meaning. By eliminating data identifiability, instil a heightened sense of trust and security, ensuring confidentiality without compromising the integrity and utility of the information.
              </p>
            </div>
          </div>
        </div>
        </div>

        <div className=' md:px-36 px-5 py-20'>
          <h1 className="md:text-3xl text-xl  text-center primary-color-g"> <span className='primary-color-g'> &#11041; </span>Unleashing powerful data depersonalization, preserving integrity, and ensuring privacy without compromise.</h1>
        </div>
      </section>
    
    </>
  );
}
