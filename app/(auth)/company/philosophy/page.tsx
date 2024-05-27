
import Link from 'next/link';
import './philosophy.css';
import BgLanding from '@/components/widgets/bgLandingPage';


export const metadata = {
  title: 'Philosophy | ABLUVA',
  description: 'Explore Abluva\'s commitment to excellence, security, and innovation in data security.',
};

export default function Philosophy() {
  return (
    <>
      <BgLanding
        bgImage="bg-philosophy"
        title="abluva doctrine"
        subtitle={<>Pioneering Excellence with Security at its Core,<br className='md:block hidden'></br> Where Innovation Meets Unyielding Commitment</>}
      />
      <div className='  py-20 founder'>
        <div className="md:px-36 px-5 mx-auto">
          <p className="text-lg  pt-2 text-gray-400 pb-10   ">At <span className=''>Abluva</span>, we embody our commitment to excellence by adhering to the principle of doing it right from the start. Prior to the inception of our security software, we meticulously aligned ourselves with the right principles, ensuring that our creations are not only user-friendly but inherently secure. To fortify this commitment, we established secure protocols for product development, incorporating best-in-class User Experience (UX) principles and adhering to industry standards to minimize the learning curve. Our dedication to security is underscored by achieving ISO 27001 certification. Furthermore, we've devised our own robust Secure Software Development Life Cycle (SSDLC), drawing inspiration from industry leaders like OWASP and Google, to ensure the highest standards of security throughout our development process.
          </p>
          <p className='md:text-5xl text-4xl primary-color-g'>Human Machine interface</p>
          <div className="mx-auto">
            <div className='grid md:grid-cols-2 grid-cols-1 pt-5'>
              <div className='md:pr-5 py-5 md:border-r border-gray-800'>
                <p className="text-lg pt-2 text-gray-400  ">At Abluva, our Human-Computer Interface Philosophy is the bedrock of our commitment to revolutionising user experiences within the domain of data security. Guided by fundamental User Experience (UX) design principles, we are dedicated to seamlessly merging human intuition with cutting-edge technology. Our HCI Philosophy is encapsulated by the following key principles listed here.<br></br>

                  As we navigate the intricate landscape of data security, Abluva's HCI Philosophy stands as a testament to our unwavering dedication to user satisfaction, excellence in design, and adherence to industry standards.
                </p>
              </div>
              <div className='md:pl-5 py-5'>
                <p className='text-3xl text-gray-300'>Human First Approach UX Design</p>
                <p className="text-lg pt-2 text-gray-400   ">
                  <ul className='list-disc pl-5'>
                    <li className='pb-2'><span className='text-gray-300'>Simplicity</span><br></br>Intuitive and user-friendly interfaces. Minimise cognitive load, and ensure that interactions with software are effortlessly intuitive.</li>
                    <li className='pb-2' ><span className='text-gray-300'>Consistency</span><br></br>Predictability and coherence, fostering a sense of familiarity and reliability across all products. Adhere to industry standards such as ISO 9241-210 for ergonomic design of human-system interaction.</li>
                    <li className='pb-2'><span className='text-gray-300'>Accessibility</span><br></br>Adheres to accessibility standards, making it usable by individuals with diverse abilities in accordance with WCAG 2.0 guidelines.</li>
                    <li className='pb-2'><span className='text-gray-300'>Hierarchy</span><br></br>Hierarchy in design, ensures that users can easily navigate and prioritise information based on its significance.</li>
                    <li className='pb-2'><span className='text-gray-300'>Context</span><br></br>Implement the contextual nature of user interactions, ensuring that the software adapts seamlessly to varying user needs and scenarios.</li>
                    <li><span className='text-gray-300'>Feedback</span><br></br>At Abluva we value the importance of providing meaningful and timely feedback to users, ensuring a responsive and informative user experience that fosters user confidence and engagement.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className="md:px-36 px-5 mx-auto">
          <p className="md:text-5xl text-4xl  font primary-color-g pt-10 ">Abluva’s Secure Software Development LifeCycle.</p>
          <img src="/images/SSDLC1.png" alt="SSDLC"  className='py-10'/>
          <div className=' pt-10'>
            <p className="text-lg  font text-gray-400 ">At Abluva, security is not an afterthought; it's an integral part of our software development process. We are committed to building and maintaining secure products that protect our customers' data and systems. This is why we have implemented a rigorous Secure Software Development Lifecycle (SSDLC) that encompasses the entire software development process, from requirements gathering to deployment and maintenance.
            </p>
            <p className="text-lg  font text-gray-400 ">
              Our SSDLC is designed to identify and mitigate security risks at every stage of the development lifecycle. This helps us to prevent security vulnerabilities from being introduced into our products in the first place. In addition, our SSDLC includes a robust testing and validation process to ensure that our products are secure and meet all relevant security standards.
            </p>

            <h1 className="text-3xl text-gray-300  text-left pt-10 pb-5 founder">Highlights of Our SSDLC</h1>
            
            <div className='py-10'>
            <input type="radio" id="content1" name="wiki" value="Content1" defaultChecked />
            <input type="radio" id="content2" name="wiki" value="Content2" />
            <input type="radio" id="content3" name="wiki" value="Content3" />
            <input type="radio" id="content4" name="wiki" value="Content4" />
            <input type="radio" id="content5" name="wiki" value="Content5" />
            <input type="radio" id="content6" name="wiki" value="Content6" />
            
            <ul className="accordion founder">
              <li data-radio="content1">
                <label htmlFor="content1" className="accordion-title">
                  <span>01</span>
                  <span className="accordion-heading font-thin text-lg">Threat Modeling</span>
                </label>
                <div className="accordion-content  text-lg">
                We conduct threat modeling to identify and assess potential threats to our products. This helps us to prioritize security risks and develop appropriate mitigation strategies.
                </div>
              </li>
              <li data-radio="content2">
                <label htmlFor="content2" className="accordion-title">
                  <span>02</span>
                  <span className="accordion-heading font-thin text-lg">Risk Assessment</span>
                </label>
                <div className="accordion-content  text-lg">
                We perform risk assessments to quantify the potential impact of security vulnerabilities. This helps us to make informed decisions about how to allocate resources to security mitigation activities.
                </div>
              </li>
              <li data-radio="content3">
                <label htmlFor="content3" className="accordion-title">
                  <span>03</span>
                  <span className="accordion-heading font-thin text-lg">Secure Coding Practices</span>
                </label>
                <div className="accordion-content  text-lg">
                We implement secure coding practices to prevent common programming errors that can lead to vulnerabilities. This includes using strong encryption, input validation, and error handling.
                </div>
              </li>
              <li data-radio="content4">
                <label htmlFor="content4" className="accordion-title">
                  <span>04</span>
                  <span className="accordion-heading font-thin text-lg">Security Testing
                  </span>
                </label>
                <div className="accordion-content  text-lg">
                We conduct a variety of security testing activities, including static application security testing (SAST), dynamic application security testing (DAST), and penetration testing. This helps us to identify and remediate vulnerabilities before our products are deployed.
                </div>
              </li>
              <li data-radio="content5">
                <label htmlFor="content5" className="accordion-title">
                  <span>05</span>
                  <span className="accordion-heading font-thin text-lg">Secure Deployment
                  </span>
                </label>
                <div className="accordion-content text-lg">
                We follow secure deployment practices to ensure that our products are deployed securely and that all security configurations are set correctly.
                </div>
              </li>

              <li data-radio="content6">
                <label htmlFor="content6" className="accordion-title">
                  <span>06</span>
                  <span className="accordion-heading font-thin text-lg">Incident Response</span>
                </label>
                <div className="accordion-content  text-lg">
                We have a comprehensive incident response plan in place to deal with security incidents in a timely and effective manner.
                </div>
              </li>
              
            </ul>
          </div>       
            <p className="text-3xl font text-gray-300   py-5">
              Our Commitment to Security
            </p>
            <p className="text-lg  font text-gray-400 ">
              We are committed to continuously improving our SSDLC and to staying up-to-date on the latest security threats and vulnerabilities. We believe that our SSDLC is a key factor in our success and that it helps us to deliver the secure and reliable products that our customers demand.
            </p>
          </div>
            <div className='pt-20'>
              <div className="link-wrapper text-center">
                <Link className="hover-2 primary-color-g md:text-3xl text-lg" href="/company/contact">We encourage you to learn more about our SSDLC by connecting us &#x2192;</Link>
              </div>
            </div>
        </div>
      </div>
      <div className=' font'>
        <div className="md:px-36 px-5 mx-auto">
          <p className="text-4xl md:text-5xl  primary-color-g  pt-20 pb-10">Product Development Process</p>
          <p className="text-3xl  text-gray-300 ">Overview of Product Development Process</p>
          <div className='py-10'>
          <div  className='grid grid-cols-1 md:grid-cols-3 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-2xl  text-gray-300">Proof of Concept</p>
            </div>
            <div className='col-span-2'>
              <p className="text-lg text-gray-400  p-5 ">
              <span><span  className='text-gray-300'>Focus : </span>Testing the waters (black-boassessment)</span><br></br>
              <span><span className='text-gray-300' >Activity : </span>Ensure the OSS or otherwise libraries being used are reliable, scalable, and functionally rich to support product roadmap. Using the library with various inputs/sources, testing key capabilities are some of the activities done in this phase.</span><br></br>
              <span><span className='text-gray-300'>Outcome : </span>List of foundational libraries to use.</span>
              </p>
            </div>
          </div>
          </div>
          <div className='pb-10'>
          <div  className='grid grid-cols-1 md:grid-cols-3 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-2xl  text-gray-300">Initial code tinkering</p>
            </div>
            <div className='col-span-2'>
              <p className="text-lg text-gray-400  p-5 ">
              <span><span  className='text-gray-300'>Focus : </span>Building initial code understanding</span><br></br>
              <span><span className='text-gray-300' >Activity : </span>In this phase, we start making changes to the available code, create specifications, skeletons, hooks (for later use), put hardening to-do hints (e.g. use SSL, pull password from secrets manager), and use stubs for testing the changes. Microservices with clear boundaries should start emerging here.</span><br></br>
              <span><span className='text-gray-300'>Outcome : </span>List of foundational libraries to useModified (extensible) code, specifications.</span>
              </p>
            </div>
          </div>
          </div>

          <div className='pb-10'>
          <div  className='grid grid-cols-1 md:grid-cols-3 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-2xl  text-gray-300">Basic integration</p>
            </div>
            <div className='col-span-2'>
              <p className="text-lg text-gray-400  p-5 ">
              <span><span  className='text-gray-300'>Focus : </span>First hop integration</span><br></br>
              <span><span className='text-gray-300' >Activity : </span>Neighbouring modules align themselves as per specification, and run a connected flow.</span><br></br>
              <span><span className='text-gray-300'>Outcome : </span>Semi-connected platform.</span>
              </p>
            </div>
          </div>
          </div>

          <div className='pb-10'>
          <div  className='grid grid-cols-1 md:grid-cols-3 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-2xl  text-gray-300">Control plane</p>
            </div>
            <div className='col-span-2'>
              <p className="text-lg text-gray-400  p-5 ">
              <span><span  className='text-gray-300'>Focus : </span>Multi-hop Integration</span><br></br>
              <span><span className='text-gray-300' >Activity : </span>Integrate all the components - centralise authentication, Authorization, have basic gateway, use client-IDs, unify datastores.</span><br></br>
              <span><span className='text-gray-300'>Outcome : </span>Integrate all the components - centralise authentication, Authorization, have basic gateway, use client-IDs, unify datastores.</span>
              </p>
            </div>
          </div>
          </div>

          <div className='pb-10'>
          <div  className='grid grid-cols-1 md:grid-cols-3 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-2xl  text-gray-300">Cloud enabled</p>
            </div>
            <div className='col-span-2'>
              <p className="text-lg text-gray-400  p-5 ">
              <span><span  className='text-gray-300'>Focus : </span>Cloud enablement</span><br></br>
              <span><span className='text-gray-300' >Activity : </span>Setup cloud services, replace dockerized services with managed.
</span><br></br>
              <span><span className='text-gray-300'>Outcome : </span> Platform running on cloud.</span>
              </p>
            </div>
          </div>
          </div>

          <div className='pb-10'>
          <div  className='grid grid-cols-1 md:grid-cols-3 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-2xl  text-gray-300">Quality version</p>
            </div>
            <div className='col-span-2'>
              <p className="text-lg text-gray-400  p-5 ">
              <span><span  className='text-gray-300'>Focus : </span>Quality (including code security)
</span><br></br>
              <span><span className='text-gray-300' >Activity : </span>Extensive feature testing, code reviews, edge cases, shift-left security and general SAST/VAPT.</span><br></br>
              <span><span className='text-gray-300'>Outcome : </span>Functionally stable version (w/o security issues)</span>
              </p>
            </div>
          </div>
          </div>

        

          <div className='pb-10'>
          <div  className='grid grid-cols-1 md:grid-cols-3 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-2xl  text-gray-300">Scalable version</p>
            </div>
            <div className='col-span-2'>
              <p className="text-lg text-gray-400  p-5 ">
              <span><span  className='text-gray-300'>Focus : </span>Scalability</span><br></br>
              <span><span className='text-gray-300' >Activity : </span>Performance testing, load/stress testing, pod-scaling, resilience,web-loading times, query optimisation, ALB/NLB/Envoy.</span><br></br>
              <span><span className='text-gray-300'>Outcome : </span>Infinitely scalable platform</span>
              </p>
            </div>
          </div>
          </div>

          <div className='pb-10'>
          <div  className='grid grid-cols-1 md:grid-cols-3 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-2xl  text-gray-300">Automated operations version</p>
            </div>
            <div className='col-span-2'>
              <p className="text-lg text-gray-400  p-5 ">
              <span><span  className='text-gray-300'>Focus : </span>Deployment/Operations automation</span><br></br>
              <span><span className='text-gray-300' >Activity : </span>Create Ansible/helm-chart/terraform scripts, enable monitoring, define metrics and alerts, define notification templates.</span><br></br>
              <span><span className='text-gray-300'>Outcome : </span>Automated deployment, monitoring and control.</span>
              </p>
            </div>
          </div>
          </div>

          <div className='pb-10'>
          <div  className='grid grid-cols-1 md:grid-cols-3 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-2xl  text-gray-300">Secure version</p>
            </div>
            <div className='col-span-2'>
              <p className="text-lg text-gray-400  p-5 ">
              <span><span  className='text-gray-300'>Focus : </span>Secure cloud operations</span><br></br>
              <span><span className='text-gray-300' >Activity : </span>Cloud hardening, CIS checks, kubernetes security policies, ECR scans.</span><br></br>
              <span><span className='text-gray-300'>Outcome : </span>Secure infrastructure for deployment</span>
              </p>
            </div>
          </div>
          </div>

          <div className='pb-10'>
          <div  className='grid grid-cols-1 md:grid-cols-3 darkcard-bgcolor rounded-tl-3xl rounded-br-3xl p-5'>
            <div className='flex justify-center items-center bg-green-border-r'>
            <p className="text-2xl  text-gray-300">Compliant version</p>
            </div>
            <div className='col-span-2'>
              <p className="text-lg text-gray-400  p-5 ">
              <span><span  className='text-gray-300'>Focus : </span>GxP compliance</span><br></br>
              <span><span className='text-gray-300' >Activity : </span>Infrastructure qualification, Operational qualification, summary reports, security report.</span><br></br>
              <span><span className='text-gray-300'>Outcome : </span>GxP compliant platform</span>
              </p>
            </div>
          </div>
          </div>

          <p className="text-lg md:text-3xl py-10 text-gray-400 pt-20">Product Development Process</p>

          <div className='grid md:grid-cols-2 gap-8 grid-cols-1 pb-20 font'>
            <div className='border border-gray-800 rounded-lg p-5 '>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" alt="bookmark "/>
                <p className="text-2xl text-gray-300 pb-3 pl-2">Proof of concept</p>
              </div>
              <div>
                <p className="text-lg text-gray-400 ">
                  Conducting a black-box assessment, we rigorously evaluate the reliability, scalability, and functionality of OSS libraries for our data security product. Through diverse input testing, we aim to identify foundational libraries aligning with our product roadmap, ultimately yielding a curated list of essential tools.
                </p>
              </div>
            </div>

            <div className='border border-gray-800 rounded-lg p-5 '>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" alt="bookmark "/>
                <p className="text-2xl text-gray-300 pb-3  pl-2">Initial code tinkering</p>
              </div>
              <div>
                <p className="text-lg  text-gray-400 ">
                  Initiating the code development journey, our focus lies in comprehending the existing codebase. Through activities such as crafting specifications, creating skeletons, establishing hooks for future enhancements, and embedding hardening hints (e.g., SSL implementation, secure password retrieval), we pave the way for the evolution of microservices with distinct boundaries. The ultimate outcome is a strategically modified and extensible codebase, accompanied by comprehensive specifications.
                </p>
              </div>
            </div>


            <div className='border border-gray-800 rounded-lg p-5 '>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" alt="bookmark "/>
                <p className="text-2xl text-gray-300 pb-3  pl-2">Basic Integration</p>
              </div>
              <div>
                <p className="text-lg  text-gray-400 ">
                  In the phase of first hop integration, our emphasis is on aligning neighboring modules according to specifications, ensuring a seamless connected flow. The result is the establishment of a semi-connected platform, where these integrated components work cohesively to lay the initial foundation for a robust and interoperable system.
                </p>
              </div>
            </div>


            <div className='border border-gray-800 rounded-lg p-5 '>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" alt="bookmark "/>
                <p className="text-2xl text-gray-300 pb-3  pl-2">Control plane</p>
              </div>
              <div>
                <p className="text-lg  text-gray-400 ">
                  In the pivotal stage of multi-hop integration, our primary activity involves the comprehensive integration of all components. This includes centralizing authentication and authorization, implementing a foundational gateway, incorporating client-IDs, and unifying datastores. The ultimate outcome is the establishment of end-to-end value-added flows. Initially, this phase serves as the bedrock, providing a foundation that not only streamlines existing services but also facilitates the seamless addition of more services in the future.
                </p>
              </div>
            </div>

            <div className='border border-gray-800 rounded-lg p-5 '>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" alt="bookmark "/>
                <p className="text-2xl text-gray-300 pb-3  pl-2">Cloud enabled</p>
              </div>
              <div>
                <p className="text-lg  text-gray-400 ">
                  In the strategic focus on cloud enablement, our primary activity involves setting up cloud services and transitioning from dockerized services to managed solutions. This transformation culminates in the successful outcome of our platform running seamlessly on the cloud, leveraging the scalability, efficiency, and managed features provided by cloud infrastructure.
                </p>
              </div>
            </div>

            <div className='border border-gray-800 rounded-lg p-5 '>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" alt="bookmark "/>
                <p className="text-2xl text-gray-300 pb-3  pl-2">Quality version</p>
              </div>
              <div>
                <p className="text-lg  text-gray-400 ">
                  In our dedicated pursuit of quality, encompassing both functionality and code security, our activities revolve around extensive feature testing, meticulous code reviews, consideration of edge cases, and the implementation of shift-left security practices, including Static Application Security Testing (SAST) and Vulnerability Assessment and Penetration Testing (VAPT). The intended outcome is the delivery of a functionally stable version devoid of any security issues, ensuring a robust and secure software product.
                </p>
              </div>
            </div>

            <div className='border border-gray-800 rounded-lg p-5 '>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" alt="bookmark "/>
                <p className="text-2xl text-gray-300 pb-3  pl-2">Scalable version</p>
              </div>
              <div>
                <p className="text-lg  text-gray-400 ">
                  In the pursuit of scalability, our strategic focus involves rigorous performance testing, load and stress testing, pod-scaling for dynamic resource allocation, resilience testing, optimization of web loading times, and fine-tuning query performance. Additionally, we implement technologies like Application Load Balancers (ALB), Network Load Balancers (NLB), and Envoy to enhance scalability. The desired outcome is the creation of an infinitely scalable platform, capable of seamlessly handling increased workloads and ensuring optimal performance under varying conditions.
                </p>
              </div>
            </div>

            <div className='border border-gray-800 rounded-lg p-5 '>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" alt="bookmark "/>
                <p className="text-2xl text-gray-300 pb-3  pl-2">Automated operations</p>
              </div>
              <div>
                <p className="text-lg  text-gray-400 ">
                  In the pivotal focus on deployment and operations automation, our key activities include the creation of Ansible, Helm Chart, and Terraform scripts. Concurrently, we establish a robust monitoring framew`ork, define essential metrics and alerts, and craft notification templates. The ultimate outcome is the realization of automated deployment processes and a comprehensive monitoring and control system, streamlining operations for increased efficiency and reliability.
                </p>
              </div>
            </div>

            <div className='border border-gray-800 rounded-lg p-5 '>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" alt="bookmark "/>
                <p className="text-2xl text-gray-300 pb-3  pl-2">Secure version</p>
              </div>
              <div>
                <p className="text-lg  text-gray-400 ">
                  In the dedicated focus on securing cloud operations, our activities revolve around cloud hardening practices, implementation of Kubernetes security policies, and regular Elastic Container Registry (ECR) scans. The intended outcome is a fortified cloud infrastructure and Kubernetes environment, ensuring a robust defense against potential vulnerabilities and threats. This comprehensive approach contributes to the creation of a secure cloud operations environment, enhancing the overall resilience of the system.
                </p>
              </div>
            </div>

            <div className='border border-gray-800 rounded-lg p-5 '>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8 pb-1" alt="bookmark "/>
                <p className="text-2xl text-gray-300 pb-3  pl-2">Compliant version</p>
              </div>
              <div>
                <p className="text-lg  text-gray-400 ">
                  In our emphasis on GxP (Good Practice) compliance, key activities include infrastructure qualification, operational qualification, generation of comprehensive summary reports, and a thorough security report. The ultimate goal is to establish a GxP-compliant platform, ensuring that the infrastructure and operations adhere to the stringent quality standards outlined in regulatory frameworks. The outcome is a platform that meets the necessary criteria for reliability, security, and traceability, aligning with GxP compliance requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
