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
            <h1 className="text-5xl sm:text-5xl text-gradient lineht">Unlock hidden potential
              of your data</h1>

            <p className="mb-4 md:px-20 text-2xl py-10 text-gray-300 darkText ">
              Graphene streamlines data security and access control, allowing organizations to safeguard their data without compromising performance. Its intuitive policy creation interface, seamless orchestration, scalable access controls, and dynamic data masking ensure data protection without slowing down operations.
            </p>
            <div className='pb-40'>
              <Link href="/contact" className="btn-md text-xl font-semibold text-white bg-violet-950 py-4 p-3 rounded-md">
                Request to Demo
              </Link>
            </div>
            <video className="w-full  h-auto rounded-2xl" controls poster="https://img.freepik.com/free-photo/3d-abstract-network-communications-background-with-plexus-design_1048-16800.jpg?w=740&t=st=1702039731~exp=1702040331~hmac=3b1359f0f3459256ee38e54299a93d6cd33835ed21b9db2f71e1ebaea89fe042" >
              <source src="/videos/Graphene.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className='bg-[#f2f3f5] px-4 lg:px-28 py-20 '>
          <h1 className="text-5xl  text-center text-gradient-light lineht">Democratize Data with <br></br>
            Graphene’s Breathing Security™</h1>
          <div>
            <p className="mb-4 md:px-64 text-2xl py-10 text-gray-700 text-center">
              Graphene enables multi-dimensional data access control to enable organization to democratize their data and further extract value from it, in ways that was previously not possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
  <div className="max-w-xl p-10 border-b border-gray-300 flex flex-col justify-center items-center">
    <ul>
      <li className='py-3'><img src="/icons/dynamic.png" className='h-8 mx-auto' /></li>
      <li className="mb-2 text-2xl text-gray-900 text-center">Dynamic Data Masking. Eliminate the need for Data Duplication</li>
    </ul>
  </div>

  <div className="max-w-xl p-10 border-l border-r border-b border-gray-300 flex flex-col justify-center items-center">
    <ul>
      <li className='py-3'><img src="/icons/encryption.png" className='h-8 mx-auto' /></li>
      <li className="mb-2 text-2xl text-gray-900 text-center">Fine Grained Masking and Encryption</li>
    </ul>
  </div>

  <div className="max-w-xl p-10 border-b border-gray-300 flex flex-col justify-center items-center">
    <ul>
      <li className='py-3'><img src="/icons/skills.png" className='h-8 mx-auto' /></li>
      <li className="mb-2 text-2xl text-gray-900 text-center">No specialized skills needed to implement advanced masking controls</li>
    </ul>
  </div>

  <div className="max-w-xl p-10 flex flex-col justify-center items-center">
    <ul>
      <li className='py-3'><img src="/icons/solution.png" className='h-8 mx-auto' /></li>
      <li className="mb-2 text-2xl text-gray-900 text-center">Sophisticated masking solutions tailored to diverse security and compliance requirements</li>
    </ul>
  </div>

  <div className="max-w-xl p-10  border-r border-l border-gray-300 flex flex-col justify-center items-center">
    <ul>
      <li className='py-3'><img src="/icons/security.png" className='h-8 mx-auto' /></li>
      <li className="mb-2 text-2xl text-gray-900 text-center">Demonstrate Compliance and Perform Security Audits, effrotlessly.</li>
    </ul>
  </div>

  <div className="max-w-xl p-10 flex flex-col justify-center items-center">
    <ul>
      <li className='py-3'><img src="/icons/securedData.png" className='h-8 mx-auto' /></li>
      <li className="mb-2 text-2xl text-gray-900 text-center">Achieve the full potential of data collaborations with secure data</li>
    </ul>
  </div>
</div>


<div className='pt-10'>
          <div className="link-wrapper bg-[#f2f3f5] text-gradient-light text-center">
            <Link className="hover-2 text-gradient-light text-3xl font-semibold" href="/contact">Talk to us to know more about Graphene’s Data Depersonalization capabilities &#x2192;</Link>
            
          </div>
</div>
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-28 pb-20'>
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
            <img src="https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-background_23-2150914053.jpg?t=st=1700496337~exp=1700499937~hmac=1f8f1b94f5d3aabd4fe4eb6a12e37235458b02c73474bce1cb48050e309064f3&w=826" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-28 py-10'>
        <div className=' flex items-center'>
          <div className='image-container'>
            <img src="https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-background_23-2150914053.jpg?t=st=1700496337~exp=1700499937~hmac=1f8f1b94f5d3aabd4fe4eb6a12e37235458b02c73474bce1cb48050e309064f3&w=826" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
          </div>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl text-gradient-light">Intuitive Policy Editor

</h5>
            <p className='mb-4 text-2xl text-gray-700'>
            
            Create, inherit, and deploy policies effortlessly without any technical coding requirement. Graphene converts your click based instructions into code and implements the access controls seamlessly across all the integrated systems.

            </p>
          </div>  
        </div>

        <div className='bg-[#f2f3f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-28 py-20'>
          <div className="flex flex-col justify-center">
            <h5 className="text-4xl text-gradient-light">Simplified Database Access Management</h5>
            <p className='mb-4 text-2xl text-gray-700'>
            Graphene seamlessly implements security policies without requiring additional database users. All access controls are efficiently managed within Graphene, optimizing database resources.
            </p>
          </div>
          <div className='image-container flex items-center'>
            <img src="https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-background_23-2150914053.jpg?t=st=1700496337~exp=1700499937~hmac=1f8f1b94f5d3aabd4fe4eb6a12e37235458b02c73474bce1cb48050e309064f3&w=826" className='rounded-lg' />
            <div className='image-overlay rounded-lg'></div>
          </div>
        </div>


      </section>
  
    </>
  );
}
