
import Link from 'next/link';
import './philosophy.css';


export const metadata = {
  title: 'Philosophy | ABLUVA',
  // description: 'Page description',
};

export default function Philosophy() {
  return (
    <>

      <div className="py-28 md:py-28 md:pb-28 md:pl-48 md:pr-12 lg:pr-32 sm:px-10 bg">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
          <div className="w-full text-white pt-24 pb-40 w-3/4">
            <p className="text-5xl font-bold text-gray-100 founder"><span className='text-8xl'>A</span>bluva Doctrine</p>
            <p className="text-3xl founder text-gray-300">"Pioneering Excellence with Security at its Core - Where<br></br>
              Innovation Meets Unyielding Commitment"</p>
          </div>
        </div>
      </div>
      <div className='bg-black text-center py-20 founder'>
        <div className="container mx-auto">
          <p className="text-2xl md:text-2xl pt-2 text-gray-300 md:px-20 pb-10 darkText text-justify ">At <span className='font-semibold'>Abluva</span>, we embody our commitment to excellence by adhering to the principle of doing it right from the start. Prior to the inception of our security software, we meticulously aligned ourselves with the right principles, ensuring that our creations are not only user-friendly but inherently secure. To fortify this commitment, we established secure protocols for product development, incorporating best-in-class User Experience (UX) principles and adhering to industry standards to minimize the learning curve. Our dedication to security is underscored by achieving ISO 27001 certification. Furthermore, we've devised our own robust Secure Software Development Life Cycle (SSDLC), drawing inspiration from industry leaders like OWASP and Google, to ensure the highest standards of security throughout our development process.
          </p>
          <p className='text-5xl text-gradient'>Human Machine interface</p>
          <div className="container mx-auto">
            <div className='grid md:grid-cols-2 grid-cols-1 md:px-20 pt-5'>
              <div className='pr-5 py-5 border-r border-gray-500'>
                <p className="text-2xl md:text-2xl pt-2 text-gray-300  darkText text-justify ">At Abluva, our Human-Computer Interface Philosophy is the bedrock of our commitment to revolutionising user experiences within the domain of data security. Guided by fundamental User Experience (UX) design principles, we are dedicated to seamlessly merging human intuition with cutting-edge technology. Our HCI Philosophy is encapsulated by the following key principles listed here.<br></br>

                  As we navigate the intricate landscape of data security, Abluva's HCI Philosophy stands as a testament to our unwavering dedication to user satisfaction, excellence in design, and adherence to industry standards.
                </p>
              </div>
              <div className='pl-5 py-5'>
                <p className='text-3xl font-semibold'>Human First Approach UX Design</p>
                <p className="text-2xl md:text-2xl pt-2 text-gray-300 darkText text-justify ">
                  <ul className='list-disc pl-5'>
                    <li><span className='font-semibold'>Simplicity : </span>Intuitive and user-friendly interfaces. Minimise cognitive load, and ensure that interactions with software are effortlessly intuitive.</li>
                    <li><span className='font-semibold'>Consistency : </span>Predictability and coherence, fostering a sense of familiarity and reliability across all products. Adhere to industry standards such as ISO 9241-210 for ergonomic design of human-system interaction.</li>
                    <li><span className='font-semibold'>Accessibility :  </span>Adheres to accessibility standards, making it usable by individuals with diverse abilities in accordance with WCAG 2.0 guidelines.</li>
                    <li><span className='font-semibold'>Hierarchy : </span>Hierarchy in design, ensures that users can easily navigate and prioritise information based on its significance.</li>
                    <li><span className='font-semibold'>Context : </span>Implement the contextual nature of user interactions, ensuring that the software adapts seamlessly to varying user needs and scenarios.</li>
                    <li><span className='font-semibold'>Feedback : </span>At Abluva we value the importance of providing meaningful and timely feedback to users, ensuring a responsive and informative user experience that fosters user confidence and engagement.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#f2f3f5]'>
        <div className="container mx-auto md-px-20">
          <p className="text-4xl md:text-5xl founder text-gradient-light md:px-20 py-20 text-center">Abluva’s Secure Software Development LifeCycle.</p>
          <img src="/images/SSDLC.png" className='md:px-20' />
          <div className='md:px-20 pt-10'>
            <p className="text-2xl md:text-2xl founder text-gray-900 text-justify">At Abluva, security is not an afterthought; it's an integral part of our software development process. We are committed to building and maintaining secure products that protect our customers' data and systems. This is why we have implemented a rigorous Secure Software Development Lifecycle (SSDLC) that encompasses the entire software development process, from requirements gathering to deployment and maintenance.
            </p>
            <p className="text-2xl md:text-2xl founder text-gray-900 text-justify">
              Our SSDLC is designed to identify and mitigate security risks at every stage of the development lifecycle. This helps us to prevent security vulnerabilities from being introduced into our products in the first place. In addition, our SSDLC includes a robust testing and validation process to ensure that our products are secure and meet all relevant security standards.
            </p>
            <p className="text-2xl md:text-3xl founder text-gray-900 font-semibold text-justify py-5">
              Highlights of Our SSDLC
            </p>
            <p className="text-2xl md:text-2xl text-gray-900 text-justify founder">
              <ul className='list-disc ml-10'>
                <li><span className='font-semibold'>Threat Modeling :  </span>We conduct threat modeling to identify and assess potential threats to our products. This helps us to prioritize security risks and develop appropriate mitigation strategies.</li>
                <li className='py-3'><span className='font-semibold'>Risk Assessment : </span>We perform risk assessments to quantify the potential impact of security vulnerabilities. This helps us to make informed decisions about how to allocate resources to security mitigation activities.</li>
                <li className='py-3'><span className='font-semibold'>Secure Coding Practices : </span>We implement secure coding practices to prevent common programming errors that can lead to vulnerabilities. This includes using strong encryption, input validation, and error handling.</li>
                <li className='py-3'><span className='font-semibold'>Security Testing : </span>We conduct a variety of security testing activities, including static application security testing (SAST), dynamic application security testing (DAST), and penetration testing. This helps us to identify and remediate vulnerabilities before our products are deployed.</li>
                <li className='py-3'><span className='font-semibold'>Secure Deployment :  </span>We follow secure deployment practices to ensure that our products are deployed securely and that all security configurations are set correctly.</li>
                <li><span className='font-semibold'>Incident Response : </span>We have a comprehensive incident response plan in place to deal with security incidents in a timely and effective manner.</li>
              </ul>
            </p>
            <p className="text-2xl md:text-3xl founder text-gray-900 font-semibold text-justify py-5">
              Our Commitment to Security
            </p>
            <p className="text-2xl md:text-2xl founder text-gray-900 text-justify">
              We are committed to continuously improving our SSDLC and to staying up-to-date on the latest security threats and vulnerabilities. We believe that our SSDLC is a key factor in our success and that it helps us to deliver the secure and reliable products that our customers demand.
            </p>
            <div className='pb-10 pt-5' >
              <div className="link-wrapper  text-center">
                <Link className="hover-2 text-gradient-light text-3xl font-semibold" href="/contact">We encourage you to learn more about our SSDLC by connecting us &#x2192;</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-black founder '>
        <div className="container mx-auto">
          <p className="text-4xl md:text-5xl  text-gradient text-center py-20">Product Development Process</p>
          <p className="text-2xl md:text-3xl  text-gray-300 font-semibold md:px-20">Overview of Product Development Process</p>
          <div className='grid md:grid-cols-3 grid-cols-1 md:mx-20 pt-10'>
            <div>
              <p className="text-4xl md:text-3xl  text-gray-300 py-3">Proof of Concept</p>
            </div>
            <div className='col-span-2 w-full text-2xl text-gray-900' id="talk-bubble">
              <ul>
                <li> <span className='font-semibold'>Focus : </span>Testing the waters (black-box assessment)</li>
                <li> <span className='font-semibold'>Activity : </span>Ensure the OSS or otherwise libraries being used are reliable, scalable, and functionally rich to support product roadmap. Using the library with various inputs/sources, testing key capabilities are some of the activities done in this phase.</li>
                <li> <span className='font-semibold'>Outcome : </span>List of foundational libraries to use.</li>
              </ul>
            </div>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 md:mx-20 pt-10'>
            <div>
              <p className="text-4xl md:text-3xl  text-gray-300 py-3">Initial code tinkering</p>
            </div>
            <div className='col-span-2 w-full text-2xl text-gray-900' id="talk-bubble">
              <ul>
                <li> <span className='font-semibold'>Focus : </span>Building initial code understanding</li>
                <li> <span className='font-semibold'>Activity : </span>In this phase, we start making changes to the available code, create specifications, skeletons, hooks (for later use), put hardening to-do hints (e.g. use SSL, pull password from secrets manager), and use stubs for testing the changes. Microservices with clear boundaries should start emerging here.</li>
                <li> <span className='font-semibold'>Outcome : </span>List of foundational libraries to useModified (extensible) code, specifications.</li>
              </ul>
            </div>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 md:mx-20 pt-10'>
            <div>
              <p className="text-4xl md:text-3xl  text-gray-300 py-3">Basic integration</p>
            </div>
            <div className='col-span-2 w-full text-2xl text-gray-900' id="talk-bubble">
              <ul>
                <li> <span className='font-semibold'>Focus : </span>First hop integration</li>
                <li> <span className='font-semibold'>Activity : </span>Neighbouring modules align themselves as per specification, and run a connected flow.</li>
                <li> <span className='font-semibold'>Outcome : </span>Semi-connected platform</li>
              </ul>
            </div>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 md:mx-20 pt-10'>
            <div>
              <p className="text-4xl md:text-3xl  text-gray-300 py-3">Control plane</p>
            </div>
            <div className='col-span-2 w-full text-2xl text-gray-900' id="talk-bubble">
              <ul>
                <li> <span className='font-semibold'>Focus : </span>Multi-hop Integration</li>
                <li> <span className='font-semibold'>Activity : </span>Integrate all the components - centralise authentication, Authorization, have basic gateway, use client-IDs, unify datastores.</li>
                <li> <span className='font-semibold'>Outcome : </span>Integrate all the components - centralise authentication, Authorization, have basic gateway, use client-IDs, unify datastores.</li>
              </ul>
            </div>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 md:mx-20 pt-10'>
            <div>
              <p className="text-4xl md:text-3xl  text-gray-300 py-3">Cloud enabled</p>
            </div>
            <div className='col-span-2 w-full text-2xl text-gray-900' id="talk-bubble">
              <ul>
                <li> <span className='font-semibold'>Focus : </span>Cloud enablement</li>
                <li> <span className='font-semibold'>Activity : </span>Setup cloud services, replace dockerized services with managed.</li>
                <li> <span className='font-semibold'>Outcome : </span>Platform running on cloud.</li>
              </ul>
            </div>
          </div>


          <div className='grid md:grid-cols-3 grid-cols-1 md:mx-20 pt-10'>
            <div>
              <p className="text-4xl md:text-3xl  text-gray-300 py-3">Quality version</p>
            </div>
            <div className='col-span-2 w-full text-2xl text-gray-900' id="talk-bubble">
              <ul>
                <li> <span className='font-semibold'>Focus : </span> Quality (including code security)</li>
                <li> <span className='font-semibold'>Activity : </span>Extensive feature testing, code reviews, edge cases, shift-left security and general SAST/VAPT.</li>
                <li> <span className='font-semibold'>Outcome : </span>Functionally stable version (w/o security issues)</li>
              </ul>
            </div>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 md:mx-20 pt-10'>
            <div>
              <p className="text-4xl md:text-3xl  text-gray-300 py-3">Scalable version</p>
            </div>
            <div className='col-span-2 w-full text-2xl text-gray-900' id="talk-bubble">
              <ul>
                <li> <span className='font-semibold'>Focus : </span>Scalability</li>
                <li> <span className='font-semibold'>Activity : </span>Performance testing, load/stress testing, pod-scaling, resilience,web-loading times, query optimisation, ALB/NLB/Envoy.</li>
                <li> <span className='font-semibold'>Outcome : </span>Infinitely scalable platform</li>
              </ul>
            </div>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 md:mx-20 pt-10'>
            <div>
              <p className="text-4xl md:text-3xl  text-gray-300 py-3">Automated operations version</p>
            </div>
            <div className='col-span-2 w-full text-2xl text-gray-900' id="talk-bubble">
              <ul>
                <li> <span className='font-semibold'>Focus : </span>Deployment/Operations automation</li>
                <li> <span className='font-semibold'>Activity : </span>Create Ansible/helm-chart/terraform scripts, enable monitoring, define metrics and alerts, define notification templates.</li>
                <li> <span className='font-semibold'>Outcome : </span>Automated deployment, monitoring and control.</li>
              </ul>
            </div>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 md:mx-20 pt-10'>
            <div>
              <p className="text-4xl md:text-3xl  text-gray-300 py-3">Secure version</p>
            </div>
            <div className='col-span-2 w-full text-2xl text-gray-900' id="talk-bubble">
              <ul>
                <li> <span className='font-semibold'>Focus : </span>Secure cloud operations</li>
                <li> <span className='font-semibold'>Activity : </span>Cloud hardening, CIS checks, kubernetes security policies, ECR scans.</li>
                <li> <span className='font-semibold'>Outcome : </span>Secure infrastructure for deployment</li>
              </ul>
            </div>
          </div>

          <div className='grid md:grid-cols-3 grid-cols-1 md:mx-20 pt-10'>
            <div>
              <p className="text-4xl md:text-3xl  text-gray-300 py-3">Compliant version</p>
            </div>
            <div className='col-span-2 w-full text-2xl text-gray-900' id="talk-bubble">
              <ul>
                <li> <span className='font-semibold'>Focus : </span>GxP compliance</li>
                <li> <span className='font-semibold'>Activity : </span> Infrastructure qualification, Operational qualification, summary reports, security report.</li>
                <li> <span className='font-semibold'>Outcome : </span>GxP compliant platform</li>
              </ul>
            </div>
          </div>

          <p className="text-2xl md:text-3xl py-10 text-gray-300 font-semibold md:px-20">Product Development Process</p>

          <div className='grid md:grid-cols-2 gap-8 grid-cols-1 md:mx-20 pb-20 founder darkText'>
            <div className='border border-gray-500 rounded-lg p-5 text-justify'>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" />
                <p className="text-4xl md:text-3xl text-gray-300 pb-3 pl-2">Proof of concept</p>
              </div>
              <div>
                <p className="textxl md:text-2xl text-gray-300 darkText">
                  Conducting a black-box assessment, we rigorously evaluate the reliability, scalability, and functionality of OSS libraries for our data security product. Through diverse input testing, we aim to identify foundational libraries aligning with our product roadmap, ultimately yielding a curated list of essential tools.
                </p>
              </div>
            </div>

            <div className='border border-gray-500 rounded-lg p-5 text-justify'>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" />
                <p className="text-4xl md:text-3xl text-gray-300 pb-3  pl-2">Initial code tinkering</p>
              </div>
              <div>
                <p className="textxl md:text-2xl text-gray-300 darkText">
                  Initiating the code development journey, our focus lies in comprehending the existing codebase. Through activities such as crafting specifications, creating skeletons, establishing hooks for future enhancements, and embedding hardening hints (e.g., SSL implementation, secure password retrieval), we pave the way for the evolution of microservices with distinct boundaries. The ultimate outcome is a strategically modified and extensible codebase, accompanied by comprehensive specifications.
                </p>
              </div>
            </div>


            <div className='border border-gray-500 rounded-lg p-5 text-justify'>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" />
                <p className="text-4xl md:text-3xl text-gray-300 pb-3  pl-2">Basic Integration</p>
              </div>
              <div>
                <p className="textxl md:text-2xl text-gray-300 darkText">
                  In the phase of first hop integration, our emphasis is on aligning neighboring modules according to specifications, ensuring a seamless connected flow. The result is the establishment of a semi-connected platform, where these integrated components work cohesively to lay the initial foundation for a robust and interoperable system.
                </p>
              </div>
            </div>


            <div className='border border-gray-500 rounded-lg p-5 text-justify'>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" />
                <p className="text-4xl md:text-3xl text-gray-300 pb-3  pl-2">Control plane</p>
              </div>
              <div>
                <p className="textxl md:text-2xl text-gray-300 darkText">
                  In the pivotal stage of multi-hop integration, our primary activity involves the comprehensive integration of all components. This includes centralizing authentication and authorization, implementing a foundational gateway, incorporating client-IDs, and unifying datastores. The ultimate outcome is the establishment of end-to-end value-added flows. Initially, this phase serves as the bedrock, providing a foundation that not only streamlines existing services but also facilitates the seamless addition of more services in the future.
                </p>
              </div>
            </div>

            <div className='border border-gray-500 rounded-lg p-5 text-justify'>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" />
                <p className="text-4xl md:text-3xl text-gray-300 pb-3  pl-2">Cloud enabled</p>
              </div>
              <div>
                <p className="textxl md:text-2xl text-gray-300 darkText">
                  In the strategic focus on cloud enablement, our primary activity involves setting up cloud services and transitioning from dockerized services to managed solutions. This transformation culminates in the successful outcome of our platform running seamlessly on the cloud, leveraging the scalability, efficiency, and managed features provided by cloud infrastructure.
                </p>
              </div>
            </div>

            <div className='border border-gray-500 rounded-lg p-5 text-justify'>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" />
                <p className="text-4xl md:text-3xl text-gray-300 pb-3  pl-2">Quality version</p>
              </div>
              <div>
                <p className="textxl md:text-2xl text-gray-300 darkText">
                  In our dedicated pursuit of quality, encompassing both functionality and code security, our activities revolve around extensive feature testing, meticulous code reviews, consideration of edge cases, and the implementation of shift-left security practices, including Static Application Security Testing (SAST) and Vulnerability Assessment and Penetration Testing (VAPT). The intended outcome is the delivery of a functionally stable version devoid of any security issues, ensuring a robust and secure software product.
                </p>
              </div>
            </div>

            <div className='border border-gray-500 rounded-lg p-5 text-justify'>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" />
                <p className="text-4xl md:text-3xl text-gray-300 pb-3  pl-2">Scalable version</p>
              </div>
              <div>
                <p className="textxl md:text-2xl text-gray-300 darkText">
                  In the pursuit of scalability, our strategic focus involves rigorous performance testing, load and stress testing, pod-scaling for dynamic resource allocation, resilience testing, optimization of web loading times, and fine-tuning query performance. Additionally, we implement technologies like Application Load Balancers (ALB), Network Load Balancers (NLB), and Envoy to enhance scalability. The desired outcome is the creation of an infinitely scalable platform, capable of seamlessly handling increased workloads and ensuring optimal performance under varying conditions.
                </p>
              </div>
            </div>

            <div className='border border-gray-500 rounded-lg p-5 text-justify'>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" />
                <p className="text-4xl md:text-3xl text-gray-300 pb-3  pl-2">Automated operations</p>
              </div>
              <div>
                <p className="textxl md:text-2xl text-gray-300 darkText">
                  In the pivotal focus on deployment and operations automation, our key activities include the creation of Ansible, Helm Chart, and Terraform scripts. Concurrently, we establish a robust monitoring framew`ork, define essential metrics and alerts, and craft notification templates. The ultimate outcome is the realization of automated deployment processes and a comprehensive monitoring and control system, streamlining operations for increased efficiency and reliability.
                </p>
              </div>
            </div>

            <div className='border border-gray-500 rounded-lg p-5 text-justify'>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8  pb-1" />
                <p className="text-4xl md:text-3xl text-gray-300 pb-3  pl-2">Secure version</p>
              </div>
              <div>
                <p className="textxl md:text-2xl text-gray-300 darkText">
                  In the dedicated focus on securing cloud operations, our activities revolve around cloud hardening practices, implementation of Kubernetes security policies, and regular Elastic Container Registry (ECR) scans. The intended outcome is a fortified cloud infrastructure and Kubernetes environment, ensuring a robust defense against potential vulnerabilities and threats. This comprehensive approach contributes to the creation of a secure cloud operations environment, enhancing the overall resilience of the system.
                </p>
              </div>
            </div>

            <div className='border border-gray-500 rounded-lg p-5 text-justify'>
              <div className="flex items-center">
                <img src="/icons/bookmark.png" className="h-8 pb-1" />
                <p className="text-4xl md:text-3xl text-gray-300 pb-3  pl-2">Compliant version</p>
              </div>
              <div>
                <p className="textxl md:text-2xl text-gray-300 darkText">
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
