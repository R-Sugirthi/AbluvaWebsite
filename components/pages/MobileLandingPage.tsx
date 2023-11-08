import React from 'react';
import Link from 'next/link';

export default function MobileLandingPage() {
  return (
    <section>
      <div className="px-5 py-10">
        <h1 className="text-xl text-white">ALL DATA BELONGS TO YOU</h1>
        <p className="text-lg text-gray-200">
          "Experience Next-Level Data Security: An AI-Powered, Multi-Layered Fortress for Your Valuables."
        </p>
        <Link href="/" className="btn-sm text-sm text-white bg-violet-950 font-bold hover-bg-gray-600 py-2 p-3 rounded-md mt-5">
          Request a Demo
        </Link>
      </div>
      <div className="img-container">
        <img src="https://img.freepik.com/premium-photo/futuristic-dark-background-ripple-effect-web-pink-dots-big-data-illustration-technologies-artificial-intelligence-effect-particle-oscillation-3d-rendering_710001-333.jpg?w=900" />
      </div>
    </section>
  );
}
