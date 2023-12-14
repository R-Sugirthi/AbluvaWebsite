import React from 'react';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';
import "./incubators.css";


export const metadata = {
  title: 'Incubators | ABLUVA',
  // description: 'Page description',
};

export default function Incubators() {
  return (
    <>
      
      <section className='founder'>
        <div className="py-28 md:py-28 md:pb-28 md:pl-48 md:pr-12 lg:pr-32 sm:px-10 bg">
          <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
            <div className="w-full text-white pt-20 pb-40 w-3/4">
              <p className="text-5xl font-bold text-gray-100 founder"><span className='text-7xl'>P</span>roduct - Incubators</p>
              <p className="text-3xl founder text-gray-300">We're not only building products, <br></br>we're shaping the future of data security.</p>
            </div>
          </div>
        </div>

        <div className='bg-black darkText px-4 lg:px-28 pb-10 pt-10' id="IntrusionDetection">
          <div>
            <h1 className="text-5xl  text-gradient lineht text-center pt-20">Intrusion Detection</h1>
            <h1 className="text-3xl  text-gray-300 text-center">Detect Malicious Activity Early - Prevent Loss by Internal and External Breaches</h1>
            <h1 className="text-3xl  text-gray-300 font-semibold pt-20">Contextual AI-Based Intrusion Detection</h1>
            <p className="mb-4 text-2xl text-gray-300 text-justify">
            In the realm of data security, our solution employs a cutting-edge approach known as Contextual AI-based Intrusion Detection. This advanced methodology goes beyond conventional techniques, leveraging artificial intelligence and contextual analysis to fortify our clients' defenses against evolving cyber threats.
            </p>
            
            <h1 className="text-3xl  text-gray-300 font-semibold py-5">Intrusion Detection Elements</h1>
            <div className='border border-gray-500 rounded-lg p-5'>
            <h1 className="text-3xl  text-gray-300 font-semibold py-5">Contextual AI</h1>
            <p className="mb-4 text-2xl text-gray-300 text-justify">
            <span className='font-semibold'>Behavioral Analysis: </span>Our system employs machine learning algorithms to continuously monitor and analyze user behaviors, data access patterns, and resource interactions in real-time. This behavioral analysis ensures a nuanced understanding of normal activities, allowing for the prompt detection of anomalies.
            </p>
            <p className="mb-4 text-2xl text-gray-300 text-justify">
            <span className='font-semibold'>Language Pattern Recognition: </span>By scrutinizing data access language patterns, our solution identifies deviations in queries or commands associated with potential security threats. This level of linguistic analysis enhances the precision of our intrusion detection capabilities.
            </p>
            </div>
            <div className='py-5'>
            <div className='border border-gray-500 rounded-lg p-5'>
            <h1 className="text-3xl  text-gray-300 font-semibold py-5">Resource and User Context</h1>
            <p className="mb-4 text-2xl text-gray-300 text-justify">
            <span className='font-semibold'>Resource Context: </span> Understanding the context of accessed resources is integral to our approach. By considering the nature and sensitivity of data, our system prioritizes alerts based on the criticality of the resources involved, enabling a targeted response to potential threats.
            </p>
            <p className="mb-4 text-2xl text-gray-300 text-justify">
            <span className='font-semibold'>User Context: </span>Analyzing user attributes, roles, and behaviors adds another layer of sophistication to our intrusion detection. This user-centric approach allows us to differentiate between legitimate actions by authorized users and potentially malicious activities, ensuring a higher level of accuracy.
            </p>
            </div>
            </div>
            <div className='border border-gray-500 rounded-lg p-5'>
            <h1 className="text-3xl  text-gray-300 font-semibold py-5">Graph Neural Networks (GNN)</h1>
            <p className="mb-4 text-2xl text-gray-300 text-justify">
            <span className='font-semibold'>Graph-Based Analysis: </span> Our solution incorporates Graph Neural Networks (GNN) to enhance the analysis of relationships and dependencies within the data. This graph-based approach provides a comprehensive view of the interconnected elements, further strengthening our ability to detect intricate intrusion patterns.
            </p>
            <h1 className="text-3xl  text-gray-300 font-semibold py-5">Benefits: </h1>
            <p className="mb-4 text-2xl text-gray-300 text-justify">
            <span className='font-semibold'>Adaptability: </span> The contextual AI-driven approach ensures adaptability to changing user behaviors and network dynamics, making our intrusion detection capabilities effective against emerging threats.
            </p>
            <p className="mb-4 text-2xl text-gray-300 text-justify">
            <span className='font-semibold'>Precision: </span> By combining behavioral analysis, language pattern recognition, resource, and user context, our solution achieves a heightened level of precision in identifying and mitigating potential security incidents.
            </p>
            <p className="mb-4 text-2xl text-gray-300 text-justify">
            <span className='font-semibold'>Automation: </span>  Leveraging AI, our intrusion detection processes are automated, facilitating quick response times and reducing the workload on security teams.
            </p>
            </div>
            <h1 className="text-3xl  text-gray-300 font-semibold pt-5">Behaviour Analysis and Risk Identification </h1>
            <div className='text-2xl text-gray-300 py-5'>
              <div className='border border-gray-500 rounded-lg p-5'>
                <p className='font-semibold text-center border-b border-gray-500 pb-5'>Data Activity Logging</p>
                <p className='text-justify pt-3'>A meticulous approach is taken to record every aspect of data activities. Whether involving the creation, reading, updating, dating, uploading, or sharing of data, the system ensures a comprehensive log. This encompasses critical dimensions such as time, location, device, volume, and sensitivity level, offering a detailed and multifaceted perspective on data interactions.</p>
              </div>
              <div className='py-10'>
              <div className='border border-gray-500 rounded-lg p-5'>
                <p className='font-semibold text-center border-b border-gray-500 pb-5'>Risk Scoring for Enhanced Precision</p>
                <p className='text-justify pt-3'>A Risk scoring mechanism is introduced to elevate security measures. This involves strategically reducing noise through customized anomaly scoring and prioritization. The scoring algorithm is calibrated based on the sensitivity of the data and the severity of anomalous behaviors. This tailored approach refines anomaly detection, enabling a more precise and targeted response to potential threats.</p>
              </div>
              </div>
              <div className='border border-gray-500 rounded-lg p-5'>
                <p className='font-semibold text-center border-b border-gray-500 pb-5'>Benefit : Accelerated Incident Response</p>
                <p className=' text-justify pt-3'>This approach results in substantial reduction in the time required to respond to security incidents. By refining anomaly detection and prioritizing actions based on data sensitivity and behavior severity, the system empowers security teams to focus on critical areas. This optimization enhances incident response and fortifies the overall data security posture, aligning with the dynamic demands of the security landscape.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-black px-4 md:px-28 pb-20 text-2xl darkText text-gray-300'>
          <h1 className="text-5xl text-gradient lineht text-center pt-5">GNN Based Anomaly Detection and Analysis</h1>
          <h1 className="text-3xl text-center pb-10">Unmatched Transparency with Advanced Graph Neural Network (GNN)</h1>
          <p className='py-3'>
          Graphene harnesses the power of advanced Graph Neural Networks (GNNs) to fortify the  security posture. Witness unparalleled transparency in threat identification without compromising complexity.
              </p>
           <h1 className="text:2xl text-gray-300 font-semibold pt-5">Benefits of Graphene's GNN Explainer Capability</h1>
          <div className='py-5'>
            <div className='p-5 border border-gray-500 rounded-lg'>
              <h1 className='text-2xl font-semibold'>Data-Driven Decision Support</h1>
              <p>
              Equip your security team with actionable insights, making informed decisions based on the dynamic analysis of your network's graph structure.
              </p>
            </div>
          </div>
          <div className='py-5'>
            <div className='p-5 border border-gray-500 rounded-lg'>
              <h1 className='text-2xl font-semibold'>Influential Factors Identification</h1>
              <p>
              Discern the key features influencing security decisions, aiding in the proactive identification and mitigation of security threats.
              </p>
            </div>
          </div>
          <div className='py-5'>
            <div className='p-5 border border-gray-500 rounded-lg'>
              <h1 className='text-2xl font-semibold'>Transparency Amplified</h1>
              <p>
              Uncover the intricate decision-making process behind threat predictions, empowering security professionals with a clear understanding of security incidents.
              </p>
            </div>
          </div>
          <div className='py-5'>
            <div className='p-5 border border-gray-500 rounded-lg'>
              <h1 className='text-2xl font-semibold'>Localised Explanations</h1>
              <p>
              Pinpoint the exact nodes and edges contributing to anomaly detection, facilitating rapid response to potential intrusions with precise insights.
              </p>
            </div>
          </div>
          <div className='py-5'>
            <div className='p-5 border border-gray-500 rounded-lg'>
              <h1 className='text-2xl font-semibold'>Continuous Improvement Pathway</h1>
              <p>
              Foster a culture of continuous improvement as Graphene's GNN Explainer evolves with your security landscape, adapting to new threats through iterative training.
              </p>
            </div>
          </div>
          <h1 className="text-4xl  text-gradient text-center pt-10">Graphene - Where complexity meets clarity and transparency.
</h1> 
<div className="link-wrapper  text-center">
            <Link className="hover-2 text-gradient text-3xl font-semibold pt-5" href="/contact">Contact us to know more about Intrusion Detection  &#x2192;</Link>
          </div>
        </div>
   
   
        <div className='bg-[#f2f3f5] md:px-28 px-5 pt-20 pb-20 text-2xl text-gray-900 ' id="AttackPath">
          <h1 className="text-5xl  text-gradient lineht text-center">Attack Vector Discovery</h1>
          <h1 className="text-3xl text-gray-900 text-center">Intruders Need Only One Path to Your Assets, <br></br>
          Our mission is to Discover and Protect Every Single One.
          </h1>
          <p className='pt-20'>Leveraging graph theory, Graphene identifies the chain of access whose elimination would most significantly disrupt the largest number of pathways that attackers can take.</p>
          <div>
          <img src= "/images/AttackPath.jpg" className='w-full pt-5'/>
          <p className='text-xl text-center py-3'>Real attack surface trace from Graphene for a cloud based organisation. 
          (Printed with permission)
          </p>
          </div>
          <div>
          <h1 className="text-3xl  text-gray-900 font-semibold pt-5 text-center">Graphene Gives a Detailed View of Holes in Your Data Security Architecture</h1>
          <div className='grid md:grid-cols-4 grid-cols-1 gap-2 py-10 text-center'>
            <div className='border border-gray-500 p-3 rounded-md'>
              <p className='font-semibold pb-3'>Attack Path Mapping</p>
              <p>Every relationship or connection is charted and traversed to discover and identify possible attack paths.</p>
            </div>
            <div className='border border-gray-500 p-3 rounded-md'>
            <p className='font-semibold pb-3'>Attack Exposure Score </p>
              <p>A measure of how  exposed is a resource instance to potential cyberattacks.</p>
            </div>
            <div className='border border-gray-500 p-3 rounded-md'>
            <p className='font-semibold pb-3'>Choke Points </p>
              <p>Places where potential attack paths come together, and it is a major gateway to sensitive data and assets.</p>
            </div>
            <div className='border border-gray-500 p-3 rounded-md'>
            <p className='font-semibold pb-3'>High Value Targets </p>
              <p>Assets that are of maximum value in forging and success of attack or defence.</p>
            </div>
          </div>
            <h1 className="text-4xl  text-gradient-light lineht text-center pt-10">Graphene: Fortifying Defense with Continuous Innovation</h1>
            <div className="link-wrapper  text-center">
            <Link className="hover-2 text-gradient-light text-3xl font-semibold" href="/contact">Contact us to know more on Attack surface trace and attack path identification &#x2192;</Link>
          </div>
          </div>
        </div>

        <div className='bg-black md:px-28 py-28 px-5 text-2xl text-gray-300 darkText ' id="DataGovernance">
        <h1 className="text-5xl text-gradient lineht text-center">Data Governance</h1>
        <h1 className="text-3xl text-gray-300  text-center">Setting the Stage for Innovation and Reliability</h1>
        
        <p className='pt-20 text-justify'>
        Graphene redefines Data Governance with a comprehensive suite of capabilities. With a keen focus on metadata, retention policies, and audit trails, Graphene ensures a secure, compliant, and optimized data landscape. Experience the power of streamlined governance, where every byte is a strategic asset.  
        </p>
        
        <div className='pt-10'>
        <div className='border border-gray-500 rounded-lg p-10 text-justify'>
        <h1 className="md:text-3xl text:2xl text-gray-300 font-semibold ">Graphene’s Data Governance Key Features: </h1>

          <ul className='list-disc md:ml-10'>
            <li className='py-2'><span className='font-semibold'>Sensitive Data Discovery : </span>Graphene excels in efficient identification and management of sensitive data within the system.</li>
            <li className='py-2'><span className='font-semibold'>Data Classification : </span>Graphene provides robust capabilities for categorizing and organizing data, enhancing overall information management.</li>
            <li className='py-2'><span className='font-semibold'>Data Catalog : </span>With Graphene's data catalog, users gain a comprehensive overview and easy access to the organization's data assets.</li>
            <li className='py-2'><span className='font-semibold'>Data Access Control : </span>Graphene ensures precise control over data access, allowing organizations to manage and restrict information based on defined parameters. <br></br><span><Link href="GrapheneAccessControl" className='underline text-violet-300'>Read more about Grahphene’s data access control</Link></span></li>
            <li className='py-2'><span className='font-semibold'>Data Privacy and Compliance : </span>Graphene prioritizes data privacy and compliance, aligning seamlessly with regulatory requirements for enhanced security measures.<br></br><span><Link href="ComplianceEnablement" className='underline text-violet-300'>Read more about Graphene’s data privacy and Compliance capabilities</Link></span></li>
          </ul>
        </div>
        </div>
        <h1 className="text-4xl  text-gradient text-center pt-20">Graphene - Where Data isn’t Governed, It is Revered</h1>     
        <div className="link-wrapper  text-center">
            <Link className="hover-2 text-gradient text-3xl font-semibold pt-5" href="/contact">Contact us to know more about Graphene's data governance capabilities  &#x2192;</Link>
          </div>
        </div>

        <div className='bg-[#f2f3f5] md:px-28 px-5 pt-28 pb-20 text-2xl text-gray-900' id="SecureKnowledgeGraph">
        <h1 className="text-5xl  text-gradient-light lineht text-center">Graphene Secure Knowledge Graphs</h1>
        <h1 className="text-3xl text-gray-900 text-center">Empowering Intelligence, Ensuring Security</h1>
        <p className='pt-20 text-justify'>
        Graphene's Secure Knowledge Graphs use a smart system, including machine learning, to create a detailed map of how different pieces of information connect. This map helps in making smart decisions across various cloud systems. It shows different kinds of information, how they are, and how they relate to each other. By understanding information this way, with the help of machine learning, it helps deal with important security issues.
        </p>
        <h1 className="md:text-3xl text:2xl text-gray-900 font-semibold py-5">How Graphene's Knowledge Graphs Work</h1>
        <p className='text-justify'>
        Graphene's Knowledge Graphs, with the added power of machine learning, help in understanding complicated relationships between different pieces of information. They find new knowledge without needing experts to do a lot of hard work. This means specialists can use this new knowledge without spending too much time on complicated analyses.
        </p>
        
        <div className='pt-10'>
        <div className='border border-gray-500 rounded-lg p-10 text-justify'>
        <h1 className="text-3xl text-gray-900 font-semibold">Graphene's Knowledge Graph Key Features: </h1>
          <ul className='list-disc md:ml-10'>
            <li className='py-2'><span className='font-semibold'>Relationship Inference : </span>Graphene's Secure Knowledge Graphs excel in inferring relationships between entities, providing a deeper understanding of interconnected data for enhanced insights.</li>
            <li className='py-2'><span className='font-semibold'>Schema Flexibility : </span>Enjoy the flexibility of adapting the knowledge graph schema dynamically, accommodating evolving data structures without compromising performance.</li>
            <li className='py-2'><span className='font-semibold'>Sensitive Data Discovery : </span>Graphene excels in efficient identification and management of sensitive data within the system.</li>
            <li className='py-2'><span className='font-semibold'>Ontology Support : </span>Leverage Graphene's support for ontologies, enabling the modeling of complex relationships and semantic connections for a more nuanced representation of knowledge.</li>
            <li className='py-2'><span className='font-semibold'>Contextual Insights : </span>Uncover a full range of data assets, allowing for contextual insights that go beyond surface-level analysis.</li>
            <li className='py-2'><span className='font-semibold'>Security Issue Identification : </span>Effectively identify and address security issues across diverse cloud and data storage environments, ensuring a proactive security posture.</li>
            <li className='py-2'><span className='font-semibold'>Real-time Compliance Evidence : </span>Enhance compliance posture with real-time evidence, streamlining regulatory adherence and minimizing risks.</li>
            <li className='py-2'><span className='font-semibold'>Graph Algorithms Integration : </span>Integrate a variety of graph algorithms within the knowledge graph, enabling advanced analytics and uncovering hidden patterns and trends in your data.</li>
          </ul>
        </div>
        </div>
        <h1 className="text-4xl  text-gradient-light text-center pt-20">Unlock Intelligence Effortlessly with Graphene's Knowledge Graphs - Where Insights Meet Security Seamlessly</h1>     
        <div className="link-wrapper  text-center">
            <Link className="hover-2 text-gradient-light text-3xl font-semibold pt-5" href="/contact">Contact us to know more about Graphene's knowledge graphs  &#x2192;</Link>
          </div>
        </div>

        <div className='bg-black md:px-28 px-5 py-20 text-2xl text-gray-300 darkText'>
        <h1 className="text-5xl text-gradient lineht text-center">Breathing Security <sup className="text-gradient text-2xl">TM</sup></h1>
        <p className='pt-20 text-justify'>
        Breathing Security<sup className="text-xs">TM</sup> embodies an event-based, observability-driven model, consistently monitoring the digital landscape to comprehend user activities and ongoing tasks. This innovative approach establishes a dynamic and adaptive security paradigm, showcasing its autonomy through automatic security measure updates. For instance, it effortlessly removes write access to SDTM data when a study advances to the database lock stage. This autonomous security model precisely aligns access privileges with the evolving dynamics of the data landscape, heightening security without the need for manual intervention and fostering a proactive data protection strategy. 
        </p>
        
        <div className='pt-10 pb-20'>
        <div className='border border-gray-500 rounded-lg p-10 text-justify'>
        <h1 className="text-3xl text:2xl text-gray-300 font-semibold"> Key Benefits: </h1>
          <ul className='list-disc md:ml-10'>
            <li className='py-2'><span className='font-semibold'>Event-based Autonomous Execution : </span>Access modification seamlessly aligns with event occurrences.</li>
            <li className='py-2'><span className='font-semibold'>Fire and Forget : </span>No manual intervention is required, ensuring a streamlined security process.</li>
            <li className='py-2'><span className='font-semibold'>Real-time Data Access Management : </span>Access to data objects is promptly modified upon the observation of event occurrences, providing real-time security management.</li>
            <li className='py-2'><span className='font-semibold'>Granular Access Control : </span>Breathing Security enables granular control over access permissions, allowing organizations to define and refine access policies at a fine-grained level. This ensures that data access is tailored precisely to the requirements of different events, enhancing overall data security and compliance.</li>
          </ul>
        </div>
        </div>
         
        <div className="link-wrapper  text-center">
            <Link className="hover-2 text-gradient text-3xl font-semibold pt-5" href="/contact">Contact us to know more about Breathing Security &#x2192;</Link>
          </div>
        </div>








      </section>
  
    </>
  );
}
