import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';


export const metadata = {
  title: 'Compliance Enablement | ABLUVA',
  // description: 'Page description',
};

export default function ComplianceEnablement() {
  return (
    <>
    
      <section className='founder'>
        <div className="bg-black text-black text-center py-20">
          <div className="px-4 sm:px-8 lg:px-16 xl:px-20">
            <h1 className="text-5xl sm:text-5xl text-gradient lineht">Simplify Adherence to Regulatory Compliances</h1>

            <p className="mb-4 md:px-20 text-2xl py-10 text-gray-300 darkText">
            Simplify adherence to Regulatory compliances, with effective Discovery, Auditing, Easy remediation and On Demand Audit Reporting.
            Tackle intricate regulatory frameworks confidently, knowing exactly where to start. Ease the tedious task of keeping up with the expanding complexity and scale of data access management. Graphene streamlines compliance management, empowering you with real-time visibility and control over critical data, ensuring a more efficient and proactive approach. 
            </p>
            <div className='pb-28'>
              <Link href="/contact" className="btn-md text-xl font-semibold text-white bg-violet-950 py-4 p-3 rounded-md">
                Request to Demo
              </Link>
            </div>
            {/* <video className="w-full  h-auto rounded-2xl" controls poster="https://img.freepik.com/free-photo/3d-render-abstract-with-connecting-lines-dots-modern-communications_1048-13763.jpg?w=740&t=st=1702040580~exp=1702041180~hmac=1eda0b78952ba10fdfe82b2e2c4bb7a4ea6e2c109ed8efd220fdb6bc766e728d" >
            <source src="/videos/Graphene.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>

        
        <div className='bg-[#f2f3f5]'>
            <h1 className="text-5xl lineht text-center text-gradient-light pt-20">Proactive Data Discovery <br></br>and Monitoring and Reporting</h1>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-28 px-5 md:py-20 py-10'>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl text-gradient-light">Data Discovery and Classification</h5>
            <p className='mb-4 text-2xl text-gray-700 text-justify'>
            Discover and classify the regulated data. with pre-built, accurate classification policies, specific to regulations such as HIPAA, SOX, and GDPR.
            </p>
          </div>
          <div className='image-container flex items-center'>
            <img src="https://img.freepik.com/premium-vector/isometric-security-data-protection-concept-server-pc-monitor-tablet-phone-laptop-cloud-network-illustration_114482-90.jpg?w=826" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-28 md:py-10 px-5 py-5'>
        <div className=' flex items-center md:order-1 order-2'>
          <div className='image-container'>
            <img src="https://img.freepik.com/premium-vector/landing-page-data-security-vector-based_607987-5.jpg?w=900" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
          </div>
          <div className="flex flex-col justify-center md:order-2 order-1">
            <h5 className="text-4xl text-gradient-light">Least Privilege Access</h5>
            <p className='mb-4 text-2xl text-gray-700 text-justify'>
            With Graphene, embed privacy-by-design and eliminate data exposure. Graphene autonomously makes informed decisions on data access, consistently diminishing potential risks without human intervention or business disruption. No need for manual logins-Graphene seamlessly ensures robust data security.
            </p>
          </div>  
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-28 px-5 md:py-10 py-5'>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl text-gradient-light">Audit and Forensics</h5>
            <p className='mb-4 text-2xl text-gray-700 text-justify'>
            Trace the path of sensitive data access through a searchable log capturing enriched data activity. Graphene expedites the security investigation with detailed account of every data action (CRUD, Upload/download and sharing) and  detail of the data actor with action, timing and location and ease of identification and ease of data breach reporting.
            </p>
          </div>
          <div className='image-container flex items-center'>
            <img src="https://img.freepik.com/free-vector/biometrics-blockchain-technology-illustration-digital-fingerprint-security-cryptocurrency_33099-345.jpg?w=740&t=st=1702400381~exp=1702400981~hmac=cb74cabd0c4af7d9837e50a252466667889f1f6927f8f3447d00c3f67a3f8422" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
          </div>

          <div className='md:px-28 px-5 bg-[#f2f3f5] py-5' >
          <div className="link-wrapper  text-center">
            <Link className="hover-2 text-gradient-light text-3xl font-semibold" href="/contact">Connect with us to find out more about the compliance capabilities of Graphene  &#x2192;</Link>
          </div>
        </div>

          <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-28 md:py-10 py-5 px-5'>
        <div className=' flex items-center md:order-1 order-2'>
          <div className='image-container'>
            <img src="https://img.freepik.com/premium-photo/document-management-system-dms-being-setup-it-consultant-working-laptop-computer-office-software-archiving-searching-managing-corporate-files-information_35148-4647.jpg?w=900" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
          </div>
          <div className="flex flex-col justify-center md:order-2 order-1">
            <h5 className="text-4xl text-gradient-light">Compliance Dashboards and Reports</h5>
            <p className='mb-4 text-2xl text-gray-700 text-justify'>
            Graphene provides dynamic risk dashboards and generates compliance reports on demand, offering auditors and compliance teams immediate insights into exposure, usage, ownership, and staleness in real time.
            </p>
          </div>  
        </div>
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-28 md:pt-20 pt-10 px-5'>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl text-gradient-light">User and Entity Behaviour Analytics</h5>
            <p className='mb-4 text-2xl text-gray-700 text-justify'>
            Graphene's threat models identify abnormal data activity in real time, preventing potential breaches before they occur. Our User and Entity Behavior Analytics (UEBA) continually enhances its capabilities by learning and adapting to customers' data, ensuring robust detection of anomalous access behaviour and insider threats.
            </p>
          </div>
          <div className='image-container flex items-center'>
            <img src="https://img.freepik.com/premium-vector/isometric-analysis-data-investment-project-management-business-communication-workflow-consulting-website-mobile-website-development-seo-mobile-apps-business-solutions_589019-3568.jpg?w=740" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
          </div>

       

        <div className='bg-[#f2f3f5] md:px-28 px-5 py-20'>
          <h1 className="text-4xl text-center text-gradient-light"> <span className='text-gradient-light'> &#11041; </span>Ensuring Compliance and Safeguarding Data Integrity.</h1>
        </div>

      </section>
    
    </>
  );
}
