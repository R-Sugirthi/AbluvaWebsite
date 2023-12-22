import React from 'react';
import './style.css';
import Link from 'next/link';
import ResearchPage from './Research'

const Parallax = () => {
  return (
    <div id="parallax">
      <section>
        <div className="parallax-one">
          <div className="max-w-2xl ml-4 md:ml-32 py-15 sm:px-6">
            <div className="pt-32 pb-10 md:pt-40 md:pb-16">
              <div className="max-w-3xl mx-auto text-left pb-12 md:pb-16">
                <h1></h1>
                <p className="md:text-2xl mb-14 con">
                Every organization is Unique and faces unique challenges. Customize your data protection with Graphene. Connect with us to know more.
                </p>
                <Link href="/company/contact" className="btn-md text-lg text-white bg-violet-950 font-bold py-4 p-3 rounded-md mark">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ResearchPage />
      <section>
      </section>
      <section>
        <div className="parallax-two">
          <div className="max-w-2xl ml-4 md:ml-32 py-15 sm:px-6">
            <div className="pt-32 pb-10 md:pt-40 md:pb-16">
              <div className="max-w-3xl mx-auto text-left pb-12 md:pb-16">
                <h1></h1>
                <p className="md:text-2xl mb-14 con">
                Identify and Fix Data Control Gaps with Graphene's Efficient Data Access and Depersonalization Solutions.
                </p>
                <Link href="/company/contact" className="btn-md text-lg text-white bg-violet-950 font-bold py-4 p-3 rounded-md mark">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parallax;
