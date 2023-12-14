import React from 'react';
import Link from 'next/link';

export default function MobileLandingPage() {
  return (
    <section>
      <div className="px-5 pt-10">
        <h1 className="text-2xl text-white mark font-semibold"> ALL YOUR DATA BELONGS TO YOU<span className='font-thin'>™</span></h1>
        <p className="text-xl text-gray-200 founder">
          "Experience Next-Level Data Security: An AI-Powered, Multi-Layered Fortress for Your Valuables."
        </p>
        <Link href="/contact" className="btn-sm text-lg text-white bg-violet-950 font-bold py-4 p-3 rounded-md mark mt-3">
          Request a Demo
        </Link>
      </div>
      <div className="img-container bg">
        <img src="https://img.freepik.com/premium-photo/abstract-wave-with-blue-light-black-background-science-background-with-moving-dots-network-connection-technology-digital-structure-with-particles-3d-rendering_1005891-52.jpg?w=900" />
      </div>
    </section>
  );
}
