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
            <h1 className="text-5xl sm:text-5xl text-gradient lineht">Democratize Data without Fear of
              Data Misappropriation and Compliance</h1>

            <p className="mb-4 md:px-20 text-2xl py-10 text-gray-300 darkText">
              Offering comprehensive choices for data masking, Graphene enables the secure sharing of data both within and outside the organisation, mitigating concerns of potential misuse. By facilitating organisations to harness data intelligently, Graphene ensures compliance with regulatory standards.
            </p>
            <div className='pb-28'>
              <Link href="/contact" className="btn-md  font-semibold text-xl text-white bg-violet-950 py-4 p-3 rounded-md">
                Request to Demo
              </Link>
            </div>
            <video className="w-full  h-auto rounded-2xl" controls poster="https://img.freepik.com/free-photo/3d-plexus-background_1048-12381.jpg?w=740&t=st=1702040232~exp=1702040832~hmac=2cb878a43a38ecf9860bba17715ec940c319acd9e6a6453af12a002faad0d2fa" loop>
              <source src="/videos/DataDepersonlization.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className='bg-[#f2f3f5] px-4 lg:px-28 md:pb-10'>
          <div>
            <h1 className="text-5xl  text-center text-gradient-light lineht pt-20">Empowering Secure Data Sharing :<br></br> Cultivating Value Through Advanced Data Masking</h1>
            <p className="mb-4 md:px-64 text-2xl py-10 text-gray-700 text-center">
              Graphene dynamic data masking eliminates the need for data duplication reducing the attack surface and improving security with minimal performance overhead.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="max-w-xl p-10 md:border-b border-gray-300 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/dynamic.png" className='h-8 mx-auto' /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center">Dynamic Data Masking eliminating the need for data duplication</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 md:border-l md:border-r md:border-b border-gray-300 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/encryption.png" className='h-8 mx-auto' /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center">Fine-grained masking and Encryption</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 md:border-b border-gray-300 flex flex-col justify-center items-center">
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

            <div className="max-w-xl p-10  md:border-r md:border-l border-gray-300 flex flex-col justify-center items-center">
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

        <div className='md:pt-10 md:px-28 px-5 bg-[#f2f3f5]' >
          <div className="link-wrapper  text-center">
            <Link className="hover-2 text-gradient-light text-3xl font-semibold" href="/contact">Talk to us to know more about Graphene’s Data Depersonalization capabilities  &#x2192;</Link>
          </div>
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-28 px-5 md:py-20 py-5'>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl text-gradient-light">Fast Dynamic Masking</h5>
            <p className='mb-4 text-2xl text-gray-700 text-justify'>
              A diverse array of pre-configured Encryption and Masking techniques empowers you to choose the precise methods that align with your specific data usage and security requirements. Our support includes Format Preserving Encryption (FPE), hashing, as well as various forms of data redaction and nullification for comprehensive masking.
            </p>
          </div>
          <div className='image-container flex items-center'>
            <img src="https://img.freepik.com/premium-photo/computer-security-vulnerability-concept-open-padlock-laptop-with-colorful-lights_136875-3399.jpg?w=740" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-28 px-5 md:py-10 py-5'>
        <div className=' flex items-center order-2 md:order-1'>
          <div className='image-container'>
            <img src="https://img.freepik.com/free-vector/computer-with-big-data-stream-isometric-banner_107791-248.jpg?w=826&t=st=1702400205~exp=1702400805~hmac=04b7685f08c018184e42ea3604d13b3aa8bb567bf1bd98630528bb5b86923bb2" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
          </div>
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h5 className="text-4xl text-gradient-light">Fine Grain Data Masking</h5>
            <p className='mb-4 text-2xl text-gray-700 text-justify'>
            Graphene recognizes that only sensitive data, dictated by internal security policies, external compliance regulations, or business models, requires protection. With fine-grained data masking and encryption at row, column, node, and property levels, Graphene enables pinpoint protection. Our support includes masking and encryption based on data attributes like classification and tags, ensuring tailored security measures for your specific needs.
            </p>
          </div>  
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-28 px-5 md:py-20 py-5'>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl text-gradient-light">Closer to Zero Trust Environment</h5>
            <p className='mb-4 text-2xl text-gray-700 text-justify'>
            Leverage Deep Randomization algorithms and K-Anonymization to generalise data effectively, preserving its structure and meaning. By eliminating data identifiability, instil a heightened sense of trust and security, ensuring confidentiality without compromising the integrity and utility of the information.
            </p>
          </div>
          <div className='image-container flex items-center'>
            <img src="https://img.freepik.com/premium-photo/futuristic-industry-40-engineering-conceptual_31965-32018.jpg?w=900" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
        </div>



        
        
      
        <div className='bg-[#f2f3f5] md:px-28 px-5 py-20'>
          <h1 className="text-4xl  text-center text-gradient-light"> <span className='text-gradient-light'> &#11041; </span>Unleashing powerful data depersonalization, preserving integrity, and ensuring privacy without compromise.</h1>
        </div>
      </section>
    
    </>
  );
}
