"use client"
import React from 'react';
import InnerLandingPage from '@/components/widgets/innerLandingPage';
import Link from 'next/link';
import { Helmet } from 'react-helmet';


export default function IncubatorSecureKnowledgeGraph() {
  return (
    <>
    <Helmet>
        <title>Secure Knowledge Graph | ABLUVA</title>
        <meta name="description" content="Graphene's AI-powered Knowledge Graphs: Smart, Secure, Seamless." />
      </Helmet>
      <InnerLandingPage
    id='SecureKnowledgeGraph'
    title='SECURE KNOWLEDGE GRAPH'
    subtitle={`empowering intelligence, ensuring security.`}
    product='incubator'
    group='advanced research group'
  />
      <section className='founder'>
    
      <div className=' md:px-36 px-5 pb-20 text-xl text-gray-300' id="SecureKnowledgeGraph"  style={{ scrollMarginTop: '70px' }}>
        {/* <h1 className="md:text-5xl text-4xl primary-color-glineht text-center">Graphene Secure Knowledge Graphs</h1> */}
        {/* <h1 className="text-3xl text-gray-300 text-center">Empowering Intelligence, Ensuring Security</h1> */}
        <p className='pt-20  text-xl text-gray-300'>
        Graphene's Secure Knowledge Graphs use a smart system, including machine learning, to create a detailed map of how different pieces of information connect. This map helps in making smart decisions across various cloud systems. It shows different kinds of information, how they are, and how they relate to each other. By understanding information this way, with the help of machine learning, it helps deal with important security issues.
        </p>
        <h1 className="text-3xl text-gray-300 pt-10 pb-3">How Graphene's Knowledge Graphs Work</h1>
        <p className=' text-lg text-gray-400'>
        Graphene's Knowledge Graphs, with the added power of machine learning, help in understanding complicated relationships between different pieces of information. They find new knowledge without needing experts to do a lot of hard work. This means specialists can use this new knowledge without spending too much time on complicated analyses.
        </p>
        <h1 className="md:text-3xl text:2xl text-gray-300  text-left pb-5 pt-10">Graphene's Knowledge Graph Key Features</h1>
        {/* <div className='grid md:grid-cols-2 gap-8 grid-cols-1'>
          <div className='pb-5 md:pr-10'>
            <div className='flex space-x-4'>
            <p className='text-[#5B21B6]'>&#10003;</p>
            <p className='text-gray-300 text-xl'>Relationship Inference</p>
            </div>
            <p className='text-gray-400 text-lg ml-9'>Graphene's Secure Knowledge Graphs excel in inferring relationships between entities, providing a deeper understanding of interconnected data for enhanced insights.</p>
          </div>

          <div className='py-5 md:pr-10'>
            <div className='flex space-x-4'>
            <p className='text-[#5B21B6]'>&#10003;</p>
            <p className='text-gray-300 text-xl'>Schema Flexibility</p>
            </div>
            <p className='text-gray-400 text-lg ml-9'>Enjoy the flexibility of adapting the knowledge graph schema dynamically, accommodating evolving data structures without compromising performance.</p>
          </div>

          <div className='py-5 md:pr-10'>
            <div className='flex space-x-4'>
            <p className='text-[#5B21B6]'>&#10003;</p>
            <p className='text-gray-300 text-xl'>Sensitive Data Discovery</p>
            </div>
            <p className='text-gray-400 text-lg ml-9'>Graphene excels in efficient identification and management of sensitive data within the system.</p>
          </div>

          <div className='py-5 md:pr-10'>
            <div className='flex space-x-4'>
            <p className='text-[#5B21B6]'>&#10003;</p>
            <p className='text-gray-300 text-xl'>Ontology Support</p>
            </div>
            <p className='text-gray-400 text-lg ml-9'> Leverage Graphene's support for ontologies, enabling the modeling of complex relationships and semantic connections for a more nuanced representation of knowledge.</p>
          </div>

          <div className='py-5 md:pr-10'>
            <div className='flex space-x-4'>
            <p className='text-[#5B21B6]'>&#10003;</p>
            <p className='text-gray-300 text-xl'>Contextual Insights</p>
            </div>
            <p className='text-gray-400 text-lg ml-9'>Uncover a full range of data assets, allowing for contextual insights that go beyond surface-level analysis.</p>
          </div>

          <div className='py-5 md:pr-10'>
            <div className='flex space-x-4'>
            <p className='text-[#5B21B6]'>&#10003;</p>
            <p className='text-gray-300 text-xl'>Security Issue Identification</p>
            </div>
            <p className='text-gray-400 text-lg ml-9'>Effectively identify and address security issues across diverse cloud and data storage environments, ensuring a proactive security posture.</p>
          </div>


          <div className='py-5 md:pr-10'>
            <div className='flex space-x-4'>
            <p className='text-[#5B21B6]'>&#10003;</p>
            <p className='text-gray-300 text-xl'>Real-time Compliance Evidence</p>
            </div>
            <p className='text-gray-400 text-lg ml-9'>Enhance compliance posture with real-time evidence, streamlining regulatory adherence and minimizing risks.</p>
          </div>


          <div className='py-5 md:pr-10'>
            <div className='flex space-x-4'>
            <p className='text-[#5B21B6]'>&#10003;</p>
            <p className='text-gray-300 text-xl'>Graph Algorithms Integration</p>
            </div>
            <p className='text-gray-400 text-lg ml-9'>Integrate a variety of graph algorithms within the knowledge graph, enabling advanced analytics and uncovering hidden patterns and trends in your data.</p>
          </div>
        </div> */}
        <div className='pt-10'>
            <input type="radio" id="content1" name="wiki" value="Content1" defaultChecked />
            <input type="radio" id="content2" name="wiki" value="Content2" />
            <input type="radio" id="content3" name="wiki" value="Content3" />
            <input type="radio" id="content4" name="wiki" value="Content4" />
            <input type="radio" id="content5" name="wiki" value="Content5" />
            <input type="radio" id="content6" name="wiki" value="Content6" />
            <input type="radio" id="content7" name="wiki" value="Content7" />
            <input type="radio" id="content8" name="wiki" value="Content8" />

            <ul className="accordion">
              <li data-radio="content1">
                <label htmlFor="content1" className="accordion-title">
                  <span>01</span>
                  <span className="accordion-heading font-thin text-lg">Relationship Inference</span>
                </label>
                <div className="accordion-content  text-lg">
                Graphene's Secure Knowledge Graphs excel in inferring relationships between entities, providing a deeper understanding of interconnected data for enhanced insights.
                </div>
              </li>
              <li data-radio="content2">
                <label htmlFor="content2" className="accordion-title">
                  <span>02</span>
                  <span className="accordion-heading font-thin text-lg">Schema Flexibility</span>
                </label>
                <div className="accordion-content  text-lg">
                Enjoy the flexibility of adapting the knowledge graph schema dynamically, accommodating evolving data structures without compromising performance.
                </div>
              </li>
              <li data-radio="content3">
                <label htmlFor="content3" className="accordion-title">
                  <span>03</span>
                  <span className="accordion-heading font-thin text-lg">Sensitive Data Discovery</span>
                </label>
                <div className="accordion-content  text-lg">
                Graphene excels in efficient identification and management of sensitive data within the system.
                </div>
              </li>
              <li data-radio="content4">
                <label htmlFor="content4" className="accordion-title">
                  <span>04</span>
                  <span className="accordion-heading font-thin text-lg">Ontology Support
                  </span>
                </label>
                <div className="accordion-content  text-lg">
                Leverage Graphene's support for ontologies, enabling the modeling of complex relationships and semantic connections for a more nuanced representation of knowledge.
                </div>
              </li>
              <li data-radio="content5">
                <label htmlFor="content5" className="accordion-title">
                  <span>05</span>
                  <span className="accordion-heading font-thin text-lg">Contextual Insights
                  </span>
                </label>
                <div className="accordion-content text-lg">
                Uncover a full range of data assets, allowing for contextual insights that go beyond surface-level analysis.
                </div>
              </li>

              <li data-radio="content6">
                <label htmlFor="content6" className="accordion-title">
                  <span>06</span>
                  <span className="accordion-heading font-thin text-lg">Security issue detection</span>
                </label>
                <div className="accordion-content  text-lg">
                Effectively identify and address security issues across diverse cloud and data storage environments, ensuring a proactive security posture.
                </div>
              </li>
              <li data-radio="content7">
                <label htmlFor="content7" className="accordion-title">
                  <span>07</span>
                  <span className="accordion-heading font-thin text-lg">Instant compliance validation</span>
                </label>
                <div className="accordion-content  text-lg">
                Enhance compliance posture with real-time evidence, streamlining regulatory adherence and minimizing risks.
                </div>
              </li>
              <li data-radio="content8">
                <label htmlFor="content8" className="accordion-title">
                  <span>08</span>
                  <span className="accordion-heading font-thin text-lg">Graph Algorithms Integration</span>
                </label>
                <div className="accordion-content  text-lg">
                Integrate a variety of graph algorithms within the knowledge graph, enabling advanced analytics and uncovering hidden patterns and trends in your data.
                </div>
              </li>
            </ul>
          </div>
        <h1 className="md:text-3xl text-xl primary-color-g text-center pt-20">&#11041; Unlock Intelligence Effortlessly with Graphene's Knowledge Graphs - Where Insights Meet Security Seamlessly</h1>     
        <div className="link-wrapper  text-center">
            <Link className="hover-2 primary-color-g md:text-3xl text-lg pt-5" href="/company/contact">Contact us to know more about Graphene's knowledge graphs  &#x2192;</Link>
          </div>
        </div>
      </section>

    </>
  );
}
