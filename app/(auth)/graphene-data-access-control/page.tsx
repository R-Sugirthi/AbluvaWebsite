import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Data Access Control | ABLUVA',
  // description: 'Page description',
};

export default function GrapheneAccessControl() {
  return (
    <>     
      <section className='founder'>
        <div className="bg-black text-black text-center py-20">
          <div className="px-4 sm:px-8 lg:px-16 xl:px-20">
            <h1 className="text-5xl sm:text-5xl text-gradient lineht">Unlock Hidden Potential
              of Your Data</h1>

            <p className="mb-4 md:px-20 text-2xl py-10 text-gray-300 darkText ">
              Graphene streamlines data security and access control, allowing organizations to safeguard their data without compromising performance. Its intuitive policy creation interface, seamless orchestration, scalable access controls, and dynamic data masking ensure data protection without slowing down operations.
            </p>
            <div className='pb-40'>
              <Link href="/contact" className="btn-md text-xl font-semibold text-white bg-violet-950 py-4 p-3 rounded-md">
                Request to Demo
              </Link>
            </div>
            <img src="/videos/DataAccessControl.gif" className="w-full  h-auto rounded-2xl pb-20"  />
          
          </div>
        </div>
        <div className='bg-[#f2f3f5] px-4 lg:px-28 py-20 '>
          <h1 className="text-5xl  text-center text-gradient-light lineht">Democratize Data with <br className="hidden md:block"></br>
            Graphene’s Breathing Security™</h1>
          <div>
            <p className="mb-4 md:px-64 text-2xl py-10 text-gray-700 text-center">
              Graphene enables multi-dimensional data access control to enable organization to democratize their data and further extract value from it, in ways that was previously not possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
  <div className="max-w-xl p-10 md:border-b border-gray-300 flex flex-col justify-center items-center">
    <ul>
      <li className='py-3'><img src="/icons/policy.png" className='h-8 mx-auto' /></li>
      <li className="mb-2 text-2xl text-gray-900 text-center">Minimize the data access policies</li>
    </ul>
  </div>

  <div className="max-w-xl p-10 md:border-l md:border-r md:border-b border-gray-300 flex flex-col justify-center items-center">
    <ul>
      <li className='py-3'><img src="/icons/RealTime.png" className='h-8 mx-auto' /></li>
      <li className="mb-2 text-2xl text-gray-900 text-center">Implement near real time data access rights</li>
    </ul>
  </div>

  <div className="max-w-xl p-10 md:border-b border-gray-300 flex flex-col justify-center items-center">
    <ul>
      <li className='py-3'><img src="/icons/reduceDependency.png" className='h-8 mx-auto' /></li>
      <li className="mb-2 text-2xl text-gray-900 text-center">Reduce dependency on technical staff to implement policies</li>
    </ul>
  </div>

  <div className="max-w-xl p-10 flex flex-col justify-center items-center">
    <ul>
      <li className='py-3'><img src="/icons/multipleSystem.png" className='h-8 mx-auto' /></li>
      <li className="mb-2 text-2xl text-gray-900 text-center">Control Access polices for all systems from single Interface
</li>
    </ul>
  </div>

  <div className="max-w-xl p-10  md:border-r md:border-l border-gray-300 flex flex-col justify-center items-center">
    <ul>
      <li className='py-3'><img src="/icons/security.png" className='h-8 mx-auto' /></li>
      <li className="mb-2 text-2xl text-gray-900 text-center">Implement Fine Grain Access in multiple dimensions</li>
    </ul>
  </div>

  <div className="max-w-xl p-10 flex flex-col justify-center items-center">
    <ul>
      <li className='py-3'><img src="/icons/valueFromData.png" className='h-8 mx-auto' /></li>
      <li className="mb-2 text-2xl text-gray-900 text-center">Extract value from data, securely</li>
    </ul>
  </div>
</div>


<div className='pt-10'>
          <div className="link-wrapper bg-[#f2f3f5] text-gradient-light text-center">
            <Link className="hover-2 text-gradient-light text-3xl font-semibold" href="/contact">Talk to us to know more about Graphene’s Data Depersonalization capabilities &#x2192;</Link>
            
          </div>
</div>
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-28 px-5 md:pb-20 pb-10'>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl text-gradient-light">Fine Grain Access
</h5>
            <p className='mb-4 text-2xl text-gray-700'>
            Grant access based on multiple dimensions only
 when and where it is needed. Implement ABAC, RBAC, ReBAC 
combined with additional temporal, spatial, End-point 
and risk bask restriction.
            </p>
          </div>
          <div className='image-container flex items-center'>
            <img src="https://img.freepik.com/premium-photo/businessman-holding-shield-protect-icon-protection-network-security-computer-safe-your-data-concept-lock-symbol-concept-about-security-cybersecurity-protection-against-dangers_184421-914.jpg?w=900" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-28 px-5 md:py-10 py-5'>
  <div className='flex items-center order-2 md:order-1'>
    <div className='image-container'>
      <img src="https://img.freepik.com/premium-photo/cloud-computing-technology-online-data-storage-global-data-sharing_31965-22550.jpg?w=900" className='rounded-lg' />
      <div className='image-overlay rounded-lg'></div>
    </div>
  </div>
  <div className="flex flex-col justify-center order-1 md:order-2">
    <h5 className="text-4xl text-gradient-light">Intuitive Policy Editor</h5>
    <p className='mb-4 text-2xl text-gray-700'>
      Create, inherit, and deploy policies effortlessly without any technical coding requirement. Graphene converts your click-based instructions into code and implements the access controls seamlessly across all the integrated systems.
    </p>
  </div>
</div>


        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:px-28 px-5 md:py-20 pt-10 pb-20'>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl text-gradient-light">Simplified Database Access Management</h5>
            <p className='mb-4 text-2xl text-gray-700'>
            Graphene seamlessly implements security policies without requiring additional database users. All access controls are efficiently managed within Graphene, optimizing database resources.
            </p>
          </div>
          <div className='image-container flex items-center'>
            <img src="https://img.freepik.com/premium-photo/businessman-holding-shield-protect-icon-protection-network-security-computer-safe-your-data-concept-lock-symbol-concept-about-security-cybersecurity-protection-against-dangers_184421-1281.jpg?w=900" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
        </div>


      </section>
  
    </>
  );
}
