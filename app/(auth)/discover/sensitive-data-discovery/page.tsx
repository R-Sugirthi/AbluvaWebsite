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

        <div className='bg-[#f2f3f5] md:px-28 pt-20 text-2xl text-gray-900'>
          <h1 className="md:text-5xl text:3xl text-gradient-light text-center lineht">Discover, Classify, and Fortify
            <br></br>your Sensitive Information with Ease and Precision.
          </h1>
          <p className='md:text-3xl text-gray-900 text-center'> Empower your organization with Graphene's Sensitive Data Discovery</p>
          <p className='pt-20 pb-5'>
            Graphene's Sensitive Data Discovery is a sophisticated solution crafted to provide unparalleled insights into your data landscape. Discover, classify, and fortify your sensitive information with ease and precision.
          </p>
          <p>
            In the data-driven world, organizations grapple with managing a vast trove of sensitive information, from customer PII to confidential financial records and intellectual property. Protecting this data is not just about safeguarding reputation; it's a legal imperative under stringent data privacy regulations. Graphene's comprehensive Sensitive Data Discovery (SDD) solution identifies, classifies, and protects sensitive data across your entire data landscape.
          </p>

          <div className='pt-10'>
            <div className='border border-gray-500 rounded-lg p-10'>
              <h1 className="md:text-3xl text:2xl text-gray-900 font-semibold">Key features </h1>
              <ul className='list-disc ml-10'>
                <li className='py-2'><span className='font-semibold'>Uncover Hidden Vulnerabilities : </span>Employ deep scanning capabilities to meticulously scan your data repositories, to uncover hidden instances of sensitive data.</li>
                <li className='py-2'><span className='font-semibold'>Classify Data with Precision :  </span>Leverage advanced machine learning algorithms to accurately classify sensitive data based on predefined data types, industry standards, and regulatory requirements.</li>
                <li className='py-2'><span className='font-semibold'>Gain Comprehensive Data Visibility : </span>Achieve unprecedented visibility into your sensitive data landscape, enabling you to understand where sensitive data resides, who has access to it, and how it is being used.</li>
                <li className='py-2'><span className='font-semibold'>Prioritize Data Protection Efforts : </span>Prioritize your data protection efforts by identifying and addressing the most critical data security risks first.</li>
                <li className='py-2'><span className='font-semibold'>Strengthen Data Governance : </span>Implement robust data governance practices to ensure that sensitive data is handled securely and responsibly throughout its lifecycle.</li>
              </ul>
            </div>
          </div>

          <div className='grid md:grid-cols-2 grid-cols-1 py-10'>
            <div className='flex flex-col justify-center text-center'>
              <p className='text-3xl font-semibold'>GRAPHENE</p>
              <p>Empowering Security Through<br></br> Strategic Data Discovery</p>
            </div>
            <div className='border border-gray-500 rounded-lg p-5'>
              <h1 className="md:text-3xl text:2xl text-gray-900 font-semibold text-center">Graphene Protection Edge</h1>
              <ul className='list-disc ml-10 text-xl'>
                <li className='py-1'><span className='font-semibold'>Proactive Data Protection : </span> Identify and protect sensitive data before it falls into the wrong hands.</li>
                <li className='py-1'><span className='font-semibold'>Enhanced Compliance :  </span>Adhere to stringent data privacy regulations with confidence and ease.</li>
                <li className='py-1'><span className='font-semibold'>Reduced Risk of Data Breaches : </span>Minimize the risk of costly data breaches and reputational damage.</li>
                <li className='py-1'><span className='font-semibold'>Improved Data Security Posture : </span>Elevate your overall data security posture and reduce your organization's vulnerability to cyberattacks.</li>
              </ul>
            </div>
          </div>

          <div>
            <div className='border border-gray-500 rounded-lg p-10'>
              <h1 className="md:text-3xl text:2xl text-gray-900 font-semibold">Benefits </h1>
              <ul className='list-disc ml-10'>
                <li className='py-2'><span className='font-semibold'>Unparalleled Data Discovery : </span>Uncover hidden sensitive data with unmatched precision and accuracy.</li>
                <li className='py-2'><span className='font-semibold'>Intelligent Data Classification :  </span>Leverage machine learning to classify sensitive data accurately and efficiently.</li>
                <li className='py-2'><span className='font-semibold'>Comprehensive Data Visibility : </span>Gain unprecedented insights into your sensitive data landscape.</li>
                <li className='py-2'><span className='font-semibold'>Risk-Based Data Protection : </span>Prioritize your data protection efforts based on real data risks.</li>
                <li className='py-2'><span className='font-semibold'>Enhanced Data Governance : </span>Implement robust data governance practices to safeguard sensitive data.</li>
              </ul>
            </div>
          </div>

          <div className='py-20'>
            <h1 className="text-4xl font-semibold">Get Started</h1>
            <div className="link-wrapper">
              <Link className="hover-2 text-gradient-light text-3xl font-semibold" href="/company/contact">Get in touch with our team to schedule a personalized demo or start your free trial today &#x2192;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
