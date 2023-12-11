import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';


export const metadata = {
  title: 'Data Depersonalization | ABLUVA',
  // description: 'Page description',
};


export default function GrapheneDepersonalization() {
  return (
    <>
      
      <section className='founder'>
        <div className="bg-black text-black text-center py-20">
          <div className="px-4 sm:px-8 lg:px-16 xl:px-20">
            <h1 className="text-5xl sm:text-5xl text-gradient lineht">Democratize Data without fear of
              data misappropriation and compliance</h1>

            <p className="mb-4 md:px-20 text-2xl py-10 text-gray-300 darkText">
              Offering comprehensive choices for data masking, Graphene enables the secure sharing of data both within and outside the organisation, mitigating concerns of potential misuse. By facilitating organisations to harness data intelligently, Graphene ensures compliance with regulatory standards.
            </p>
            <div className='pb-28'>
              <Link href="/contact" className="btn-md  font-semibold text-xl text-white bg-violet-950 py-4 p-3 rounded-md">
                Request to Demo
              </Link>
            </div>
            <video className="w-full  h-auto rounded-2xl" controls poster="https://img.freepik.com/free-photo/3d-plexus-background_1048-12381.jpg?w=740&t=st=1702040232~exp=1702040832~hmac=2cb878a43a38ecf9860bba17715ec940c319acd9e6a6453af12a002faad0d2fa" >
              <source src="/videos/Graphene.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className='bg-[#f2f3f5] px-4 lg:px-28 pb-10'>
          <div>
            <h1 className="text-5xl  text-center textgradient lineht pt-20">Empowering Secure Data Sharing :<br></br> Cultivating Value Through Advanced Data Masking</h1>
            <p className="mb-4 md:px-64 text-2xl py-10 text-gray-700 text-center">
              Graphene dynamic data masking eliminates the need for data duplication reducing the attack surface and improving security with minimal performance overhead.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="max-w-xl p-10 border-b border-gray-300 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/dynamic.png" className='h-8 mx-auto' /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center">Dynamic Data Masking eliminating the need for data duplication</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 border-l border-r border-b border-gray-300 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/encryption.png" className='h-8 mx-auto' /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center">Fine-grained masking and Encryption</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 border-b border-gray-300 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/skills.png" className='h-8 mx-auto' /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center">No specialized skills needed to implement advanced masking controls</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/solution.png" className='h-8 mx-auto' /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center">Sophisticated masking solutions tailored to diverse security and compliance requirements</li>
              </ul>
            </div>

            <div className="max-w-xl p-10  border-r border-l border-gray-300 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/security.png" className='h-8 mx-auto' /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center">Easily prove security compliance and audits</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/securedData.png" className='h-8 mx-auto' /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center">Achieve the full potential of data collaborations with secure data</li>
              </ul>
            </div>
          </div>

        </div>

        <div className='pt-10 px-28 bg-[#f2f3f5]' >
          <div className="link-wrapper  text-center">
            <Link className="hover-2 text-gradient-light text-3xl font-semibold" href="/contact">Talk to us to know more about Graphene’s Data Depersonalization capabilities  &#x2192;</Link>
          </div>
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-28 py-20'>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl text-gradient-light">Fast Dynamic Masking</h5>
            <p className='mb-4 text-2xl text-gray-700'>
              A diverse array of pre-configured Encryption and Masking techniques empowers you to choose the precise methods that align with your specific data usage and security requirements. Our support includes Format Preserving Encryption (FPE), hashing, as well as various forms of data redaction and nullification for comprehensive masking.
            </p>
          </div>
          <div className='image-container flex items-center'>
            <img src="https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-background_23-2150914053.jpg?t=st=1700496337~exp=1700499937~hmac=1f8f1b94f5d3aabd4fe4eb6a12e37235458b02c73474bce1cb48050e309064f3&w=826" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-28 py-10'>
        <div className=' flex items-center'>
          <div className='image-container'>
            <img src="https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-background_23-2150914053.jpg?t=st=1700496337~exp=1700499937~hmac=1f8f1b94f5d3aabd4fe4eb6a12e37235458b02c73474bce1cb48050e309064f3&w=826" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
          </div>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl text-gradient-light">Fine Grain Data Masking</h5>
            <p className='mb-4 text-2xl text-gray-700'>
            Graphene recognizes that only sensitive data, dictated by internal security policies, external compliance regulations, or business models, requires protection. With fine-grained data masking and encryption at row, column, node, and property levels, Graphene enables pinpoint protection. Our support includes masking and encryption based on data attributes like classification and tags, ensuring tailored security measures for your specific needs.
            </p>
          </div>  
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-28 py-20'>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl text-gradient-light">Closer to Zero Trust Environment</h5>
            <p className='mb-4 text-2xl text-gray-700'>
            Leverage Deep Randomization algorithms and K-Anonymization to generalise data effectively, preserving its structure and meaning. By eliminating data identifiability, instil a heightened sense of trust and security, ensuring confidentiality without compromising the integrity and utility of the information.
            </p>
          </div>
          <div className='image-container flex items-center'>
            <img src="https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-background_23-2150914053.jpg?t=st=1700496337~exp=1700499937~hmac=1f8f1b94f5d3aabd4fe4eb6a12e37235458b02c73474bce1cb48050e309064f3&w=826" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
        </div>



        
        
      
        <div className='bg-[#f2f3f5] px-28 pb-20'>
          <h1 className="text-4xl  text-center text-gradient "> <span className='text-gradient-light'> &#11041; </span>Unleashing powerful data depersonalization, preserving integrity, and ensuring privacy without compromise.</h1>
        </div>
      </section>
    
    </>
  );
}
