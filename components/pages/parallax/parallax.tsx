import React from 'react';
import Link from 'next/link';
import ResearchPage from './Research'

const Parallax = () => {
  return (
    
    <div id="parallax">
      <section>
        <div className="parallax-one">
              <div className="md:pl-52 py-40 pl-5 max-w-3xl">
                <p className="md:text-2xl mb-14 con">
                Every organization is Unique and faces unique challenges. Customize your data protection with Graphene. Connect with us to know more.
                </p>
                <Link href="/company/contact" className="btn">
                  Contact us
                </Link>
              </div>
        </div>
      </section>
      <ResearchPage />
      <section>
      </section>
      <section>
        <div className="parallax-two">
        <div className="md:pl-52 py-40 pl-5 max-w-3xl">
                <p className="md:text-2xl mb-14 con">
                Identify and Fix Data Control Gaps with Graphene's Efficient Data Access and Depersonalization Solutions.
                </p>
                <Link href="/company/contact" className="btn">
                  Contact us
                </Link>
              </div>
        </div>
      </section>
    </div>
  );
};

export default Parallax;
