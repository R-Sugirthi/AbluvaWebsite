import React from 'react';
import Link from 'next/link';
import Blob from '../blob/blob';


export default function MobileLandingPage() {
  return (
    <section>
      <div className="px-5 pt-10">
        <h1 className="text-2xl text-white boldfont "> ALL YOUR DATA<br></br>BELONGS TO YOU<span className='font-thin'>™</span></h1>
        <p className="text-xl text-gray-300 founder">
          Experience Next-Level Data Security: An AI-Powered, Multi-Layered Fortress for Your Valuables.
        </p>
        <div className='mt-10'>
        <Link href="/company/contact" className="btnland">
          Request a Demo
        </Link>
        </div>
      </div>
      <div className="img-container mob-bg mt-5">
        <img src="/images/mobland.jpg" alt="landingImg" />
      </div>
    </section>
  );
}
