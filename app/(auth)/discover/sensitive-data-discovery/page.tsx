import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Sensitive Data Discovery | ABLUVA',
  description: 'Graphene: Discover, classify, and fortify sensitive data for enhanced security.',
};

export default function SensitiveDataDiscovery() {
  return (
    <>

      <section className='founder'>

        <div className='bg-dark md:px-28 px-5 pt-20 text-2xl text-gray-300'>
          <h1 className="md:text-5xl text-4xl primary-color text-center lineht">Discover, Classify, and Fortify
            <br></br>your Sensitive Information with Ease and Precision.
          </h1>
          <p className='text-3xl text-gray-300 text-center'> Empower your organization with Graphene's Sensitive Data Discovery</p>
          <p className='pt-20 pb-5  text-lg text-gray-400'>
            Graphene's Sensitive Data Discovery is a sophisticated solution crafted to provide unparalleled insights into your data landscape. Discover, classify, and fortify your sensitive information with ease and precision.
          </p>
          <p className=' text-lg text-gray-400'>
            In the data-driven world, organizations grapple with managing a vast trove of sensitive information, from customer PII to confidential financial records and intellectual property. Protecting this data is not just about safeguarding reputation; it's a legal imperative under stringent data privacy regulations. Graphene's comprehensive Sensitive Data Discovery (SDD) solution identifies, classifies, and protects sensitive data across your entire data landscape.
          </p>


          <h1 className="md:text-3xl text:2xl text-gray-300  text-left pt-10 pb-5">Key features</h1>
          <div className='grid md:grid-cols-2 gap-8 grid-cols-1'>
            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Uncover Hidden Vulnerabilities</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Employ deep scanning capabilities to meticulously scan your data repositories, to uncover hidden instances of sensitive data.</p>
            </div>
            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Classify Data with Precision</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Leverage advanced machine learning algorithms to accurately classify sensitive data based on predefined data types, industry standards, and regulatory requirements.</p>
            </div>
            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Gain Comprehensive Data Visibility</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Achieve unprecedented visibility into your sensitive data landscape, enabling you to understand where sensitive data resides, who has access to it, and how it is being used.</p>
            </div>
            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Prioritize Data Protection Efforts</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Prioritize your data protection efforts by identifying and addressing the most critical data security risks first.</p>
            </div>
            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Strengthen Data Governance:</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Implement robust data governance practices to ensure that sensitive data is handled securely and responsibly throughout its lifecycle.</p>
            </div>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 py-10'>
            <div className='flex flex-col justify-center text-center'>
              <p className='text-3xl '>GRAPHENE</p>
              <p className='text-gray-400'>Empowering Security Through<br></br> Strategic Data Discovery</p>
            </div>
            <div className='border border-gray-700 rounded-lg p-5'>
              <h1 className="md:text-3xl text:2xl text-gray-300  text-center">Graphene Protection Edge</h1>
              <ul className='list-disc md:ml-10 ml-5 text-lg text-gray-400'>
                <li className='py-1'><span className='text-gray-300'>Proactive Data Protection<br></br></span> Identify and protect sensitive data before it falls into the wrong hands.</li>
                <li className='py-1'><span className='text-gray-300'>Enhanced Compliance<br></br></span>Adhere to stringent data privacy regulations with confidence and ease.</li>
                <li className='py-1'><span className='text-gray-300'>Reduced Risk of Data Breaches<br></br></span>Minimize the risk of costly data breaches and reputational damage.</li>
                <li className='py-1'><span className='text-gray-300'>Improved Data Security Posture<br></br></span>Elevate your overall data security posture and reduce your organization's vulnerability to cyberattacks.</li>
              </ul>
            </div>
          </div>
          <h1 className="md:text-3xl text:2xl text-gray-300  text-left pt-10 pb-5">Benefits</h1>
          <div className='grid md:grid-cols-2 gap-8 grid-cols-1'>
            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Unparalleled Data Discovery</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Uncover hidden sensitive data with unmatched precision and accuracy.</p>
            </div>

            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Intelligent Data Classification
                </p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Leverage machine learning to classify sensitive data accurately and efficiently.</p>
            </div>

            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Comprehensive Data Visibility</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Gain unprecedented insights into your sensitive data landscape.</p>
            </div>

            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Risk-Based Data Protection</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Prioritize your data protection efforts based on real data risks.</p>
            </div>

            <div className='py-5 md:pr-10'>
              <div className='flex space-x-4'>
                <p className='primary-color'>&#10003;</p>
                <p className='text-gray-300 text-2xl'>Enhanced Data Governance</p>
              </div>
              <p className='text-gray-400 text-lg ml-9'>Implement robust data governance practices to safeguard sensitive data.</p>
            </div>
          </div>
          <div className='py-20 text-center'>
            <div className="link-wrapper">
              <Link className="hover-2 primary-color md:text-3xl text-lg" href="/company/contact">Get in touch with our team to schedule a personalized demo or start your free trial today &#x2192;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
