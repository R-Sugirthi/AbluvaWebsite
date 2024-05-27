"use client"
import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import InnerLandingPage from '@/components/widgets/innerLandingPage';


export default function IncubatorIntrusionDetection() {
  return (
    <>
      <Helmet>
        <title>Intrusion Detection | ABLUVA</title>
        <meta name="description" content="Graphene's Intrusion Detection: AI-driven security with GNN for early threat detection. Unmatched transparency." />
      </Helmet>

      <InnerLandingPage
    id='IntrusionDetection'
    title='INTRUSION DETECTION'
    subtitle={`detect malicious activity early - prevent loss by internal and external breaches`}
    product='incubator'
    group='advanced research group'
  />

      <section className='founder'>
      {/* <img src="/images/dot.png" className='absolute top-0 right-0 filter invert dot'/> */}


      <div className=' px-5 md:px-36 pb-10 pt-20' id="IntrusionDetection"  style={{ scrollMarginTop: '70px' }}>
          <div>
            {/* <h1 className="md:text-5xl text-4xl primary-color-glineht text-center pt-20">Intrusion Detection</h1> */}
            {/* <h1 className="text-3xl text-gray-300 text-center">Detect Malicious Activity Early - Prevent Loss by Internal and External Breaches</h1> */}
            <h1 className="text-3xl text-gray-300">Contextual AI-Based Intrusion Detection</h1>
            <p className="my-3 text-lg text-gray-400 ">
            In the realm of data security, our solution employs a cutting-edge approach known as Contextual AI-based Intrusion Detection. This advanced methodology goes beyond conventional techniques, leveraging artificial intelligence and contextual analysis to fortify our clients' defenses against evolving cyber threats.
            </p>
            
            <h1 className="text-3xl  text-gray-300 pb-5 pt-10 ">Intrusion Detection Elements</h1>
            <div className='bg-green-border rounded-lg p-5'>
            <h1 className="text-lg font-semibold text-gray-300  py-5">Contextual AI</h1>
            <p className="mb-4 text-lg text-gray-400 ">
            <span className='text-gray-300'>Behavioral Analysis: </span>Our system employs machine learning algorithms to continuously monitor and analyze user behaviors, data access patterns, and resource interactions in real-time. This behavioral analysis ensures a nuanced understanding of normal activities, allowing for the prompt detection of anomalies.
            </p>
            </div>
            <div className='py-5'>
            <div className='bg-green-border rounded-lg p-5'>
            <h1 className="text-lg font-semibold text-gray-300  py-5">Resource and User Context</h1>
            <p className="mb-4 text-lg text-gray-400 ">
            <span className='text-gray-300'>Resource Context: </span> Understanding the context of accessed resources is integral to our approach. By considering the nature and sensitivity of data, our system prioritizes alerts based on the criticality of the resources involved, enabling a targeted response to potential threats.
            </p>
            <p className="mb-4 text-lg text-gray-400 ">
            <span className='text-gray-300'>User Context: </span>Analyzing user attributes, roles, and behaviors adds another layer of sophistication to our intrusion detection. This user-centric approach allows us to differentiate between legitimate actions by authorized users and potentially malicious activities, ensuring a higher level of accuracy.
            </p>
            </div>
            </div>
            <div className='bg-green-border rounded-lg p-5'>
            <h1 className="text-lg font-semibold text-gray-300 py-5">Graph Neural Networks (GNN)</h1>
            <p className="mb-4 text-lg text-gray-400 ">
            <span className='text-gray-300'>Graph-Based Analysis: </span> Our solution incorporates Graph Neural Networks (GNN) to enhance the analysis of relationships and dependencies within the data. This graph-based approach provides a comprehensive view of the interconnected elements, further strengthening our ability to detect intricate intrusion patterns.
            </p>
            <h1 className="text-lg font-semibold text-gray-300 py-5">Benefits: </h1>
            <p className="mb-4 text-lg text-gray-400 ">
            <span className='text-gray-300'>Adaptability: </span> The contextual AI-driven approach ensures adaptability to changing user behaviors and network dynamics, making our intrusion detection capabilities effective against emerging threats.
            </p>
            <p className="mb-4 text-lg text-gray-400 ">
            <span className='text-gray-300'>Precision: </span> By combining behavioral analysis, language pattern recognition, resource, and user context, our solution achieves a heightened level of precision in identifying and mitigating potential security incidents.
            </p>
            <p className="mb-4 text-lg text-gray-400 ">
            <span className='text-gray-300'>Automation: </span>  Leveraging AI, our intrusion detection processes are automated, facilitating quick response times and reducing the workload on security teams.
            </p>
            </div>
          </div>
        </div>
        <div className=' px-5 md:px-36'>
        <h1 className="text-3xl text-gray-300 py-10">Behaviour Analysis and Risk Identification </h1>            

           <div className='pb-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-lg text-gray-300">Data Activity Logging</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5">A meticulous approach is taken to record every aspect of data activities. Whether involving the creation, reading, updating, dating, uploading, or sharing of data, the system ensures a comprehensive log. This encompasses critical dimensions such as time, location, device, volume, and sensitivity level, offering a detailed and multifaceted perspective on data interactions.
              </p>
            </div>
          </div>
        </div>

        <div className='pb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-lg  text-gray-300">Risk Scoring for Enhanced Precision</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">A Risk scoring mechanism is introduced to elevate security measures. This involves strategically reducing noise through customized anomaly scoring and prioritization. The scoring algorithm is calibrated based on the sensitivity of the data and the severity of anomalous behaviors. This tailored approach refines anomaly detection, enabling a more precise and targeted response to potential threats.
              </p>
            </div>
          </div>
        </div>

        
        <div className='pb-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
              <p className="text-lg  text-gray-300">Benefit : Accelerated Incident Response</p>
            </div>
            <div>
              <p className="text-lg text-gray-400 text-left p-5 ">This approach results in substantial reduction in the time required to respond to security incidents. By refining anomaly detection and prioritizing actions based on data sensitivity and behavior severity, the system empowers security teams to focus on critical areas. This optimization enhances incident response and fortifies the overall data security posture, aligning with the dynamic demands of the security landscape.
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className=' px-5 md:px-36 pb-20 text-lg text-gray-300'>
          <h1 className="text-4xl primary-color-g lineht text-center pt-20">GNN Based Anomaly Detection and Analysis</h1>
          <h1 className="text-3xl text-center pb-10">Unmatched Transparency with Advanced Graph Neural Network (GNN)</h1>
          <p className='py-3 text-lg'>
          Graphene harnesses the power of advanced Graph Neural Networks (GNNs) to fortify the  security posture. Witness unparalleled transparency in threat identification without compromising complexity.
              </p>
           <h1 className="text-3xl text-gray-300 py-10 text-center">Benefits of Graphene's GNN Explainer Capability</h1>
           <input type="radio" id="content1" name="wiki" value="Content1" defaultChecked />
      <input type="radio" id="content2" name="wiki" value="Content2" />
      <input type="radio" id="content3" name="wiki" value="Content3" />
      <input type="radio" id="content4" name="wiki" value="Content4" />
      <input type="radio" id="content5" name="wiki" value="Content5" />

      <ul className="accordion">
        <li data-radio="content1">
          <label htmlFor="content1" className="accordion-title">
            <span>01</span>
            <span className="accordion-heading font-thin text-lg">Data Driven Decision</span>
          </label>
          <div className="accordion-content">Equip your security team with actionable insights, making informed decisions based on the dynamic analysis of your network's graph structure.</div>
        </li>
        <li data-radio="content2">
          <label htmlFor="content2" className="accordion-title">
            <span>02</span>
            <span className="accordion-heading font-thin text-lg">Key Factor Discovery</span>
          </label>
          <div className="accordion-content">Discern the key features influencing security decisions, aiding in the proactive identification and mitigation of security threats.</div>
        </li>
        <li data-radio="content3">
          <label htmlFor="content3" className="accordion-title">
            <span>03</span>
            <span className="accordion-heading font-thin text-lg">Transparency Amplified</span>
          </label>
          <div className="accordion-content">Uncover the intricate decision-making process behind threat predictions, empowering security professionals with a clear understanding of security incidents.</div>
        </li>
        <li data-radio="content4">
          <label htmlFor="content4" className="accordion-title">
            <span>04</span>
            <span className="accordion-heading font-thin text-lg">Localised Explanation</span>
          </label>
          <div className="accordion-content">Pinpoint the exact nodes and edges contributing to anomaly detection, facilitating rapid response to potential intrusions with precise insights.</div>
        </li>
        <li data-radio="content5">
          <label htmlFor="content5" className="accordion-title">
            <span>05</span>
            <span className="accordion-heading font-thin text-lg">Continuous Improvement</span>
          </label>
          <div className="accordion-content">Foster a culture of continuous improvement as Graphene's GNN Explainer evolves with your security landscape, adapting to new threats through iterative training.</div>
        </li>
      </ul>
       
        <div className='pb-20'></div>
          <h1 className="md:text-3xl text-lg primary-color-g text-center pt-10">&#11041; Graphene - Where complexity meets clarity and transparency.
</h1> 
<div className="link-wrapper  text-center pt-5">
            <Link className="hover-2 primary-color-g md:text-3xl text-lg" href="/company/contact">Contact us to know more about Intrusion Detection  &#x2192;</Link>
          </div>
        </div>
      </section>
   
    </>
  );
}
