import React from 'react';
import './style.css';
import Link from 'next/link';
import ResearchPage from './Research';
import SliderPage from '../Slider';

const Parallax = () => {
  return (
    <div id="parallax">
      <section>
        <div className="parallax-one">
          <div className="max-w-2xl ml-4 md:ml-32 py-15 sm:px-6">
            <div className="pt-32 pb-10 md:pt-40 md:pb-16">
              <div className="max-w-3xl mx-auto text-left pb-12 md:pb-16">
                <h1>Lorem ipsum dolor, sit amet.</h1>
                <p className="md:text-2xl mb-14 con">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim architecto facilis sit ipsa aliquam
                  dolorem tenetur dignissimos dicta sint cupiditate perspiciatis autem quasi voluptatem ut aspernatur,
                  unde harum at laudantium.
                </p>
                <Link href="/" className="btn-md text-lg text-white bg-gray-800 font-bold hover:bg-gray-600 py-4 p-3 rounded-md">
                  Learn More
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
                <h1>Lorem ipsum dolor, sit amet.</h1>
                <p className="md:text-2xl mb-14 con">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, voluptate! Ad quas fuga eveniet
                  reprehenderit possimus. Officia consequatur ratione numquam iusto eius dolor, at saepe.
                </p>
                <Link href="/" className="btn-md text-lg text-white bg-gray-800 font-bold hover-bg-gray-600 py-4 p-3 rounded-md">
                  Learn More
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
