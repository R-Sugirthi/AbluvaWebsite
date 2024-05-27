"use client"
import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import InnerLandingPage from '@/components/widgets/innerLandingPage';



export default function ComplianceEnablement() {
  return (
    <>
    <Helmet>
        <title>Compliance Enablement | ABLUVA</title>
        <meta name="description" content="Graphene: Simplify compliance, enhance data security." />
      </Helmet>
      <div>
  <InnerLandingPage
    id='ComplianceEnablement'
    title='COMPLIANCE ENABLEMENT'
    subtitle={`simplify compliance with graphene's data access management for efficient regulatory adherence`}
    product='graphene'
    group='product research group'
  />
</div>
      <section>
        <div className=" text-black text-center pb-20 pt-20" style={{ scrollMarginTop: '70px' }} id="ComplianceEnablement">
          <div className="px-5 md:px-36">
            {/* <h1 className="md:text-5xl text-4xlprimary-color-glineht">Simplify Adherence to Regulatory Compliances</h1> */}
            <p className="mb-4 md:px-20 text-xl pb-10 text-gray-300 ">
            Simplify adherence to Regulatory compliances, with effective Discovery, Auditing, Easy remediation and On Demand Audit Reporting.
            Tackle intricate regulatory frameworks confidently, knowing exactly where to start. Ease the tedious task of keeping up with the expanding complexity and scale of data access management. Graphene streamlines compliance management, empowering you with real-time visibility and control over critical data, ensuring a more efficient and proactive approach. 
            </p>
            <div className=''>
              <Link href="/company/contact" className="btn">
                Request to Demo
              </Link>
            </div>
            {/* <video className="w-full  h-auto rounded-2xl" controls poster="https://img.freepik.com/free-photo/3d-render-abstract-with-connecting-lines-dots-modern-communications_1048-13763.jpg?w=740&t=st=1702040580~exp=1702041180~hmac=1eda0b78952ba10fdfe82b2e2c4bb7a4ea6e2c109ed8efd220fdb6bc766e728d" >
            <source src="/videos/Graphene.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>

        <div className='md:px-36 px-5 ' >
          <div className="link-wrapper  text-center">
            <Link className="hover-2 primary-color-g md:text-3xl text-lg" href="/company/contact">Connect with us to find out more about the compliance capabilities of Graphene  &#x2192;</Link>
          </div>
        </div>
 
        <div className=''>
            <h1 className="text-4xl lineht text-center text-gray-300 pt-10">Proactive Data Discovery and Monitoring and Reporting</h1>

            <div className='md:px-36 px-5 '>
        <div className='py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-xl text-center text-gray-300">Data Discovery and Classification</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">Discover and classify the regulated data. with pre-built, accurate classification policies, specific to regulations such as HIPAA, SOX, and GDPR.
              </p>
            </div>
          </div>
        </div>

        <div className='pb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-xl text-center text-gray-300">Least Privilege Access</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">With Graphene, embed privacy-by-design and eliminate data exposure. Graphene autonomously makes informed decisions on data access, consistently diminishing potential risks without human intervention or business disruption. No need for manual logins-Graphene seamlessly ensures robust data security.
              </p>
            </div>
          </div>
        </div>

        <div className='pb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-xl text-center text-gray-300">Audit and Forensics</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">Trace the path of sensitive data access through a searchable log capturing enriched data activity. Graphene expedites the security investigation with detailed account of every data action (CRUD, Upload/download and sharing) and detail of the data actor with action, timing and location and ease of identification and ease of data breach reporting.
              </p>
            </div>
          </div>
        </div>
        <div className='pb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-xl text-center text-gray-300">Compliance Dashboards and Reports</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">Graphene provides dynamic risk dashboards and generates compliance reports on demand, offering auditors and compliance teams immediate insights into exposure, usage, ownership, and staleness in real time.
              </p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-xl text-center text-gray-300">User and Entity Behaviour Analytics</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">Graphene's threat models identify abnormal data activity in real time, preventing potential breaches before they occur. Our User and Entity Behavior Analytics (UEBA) continually enhances its capabilities by learning and adapting to customers' data, ensuring robust detection of anomalous access behaviour and insider threats.
              </p>
            </div>
          </div>
        </div>
        </div>
</div>
        <div className=' md:px-28 px-5 py-20'>
          <h1 className="md:text-3xl text-xl text-center primary-color-g"> <span className='primary-color-g'> &#11041; </span>Ensuring Compliance and Safeguarding Data Integrity.</h1>
        </div>

      </section>
    
    </>
  );
}
