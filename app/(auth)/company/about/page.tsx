import BgLanding from '@/components/widgets/bgLandingPage';
import Link from 'next/link';

export const metadata = {
  title: 'About | ABLUVA',
  description: 'Learn about Abluva\'s mission and innovative data security approach in this concise \'About\' page.',
};
export default function About() {
  return (
    <>
      <section>
        <BgLanding
          bgImage="bg-about"
          title={
            <>
              our <br /> motive
            </>
          }
          subtitle={
            <>
              To Empower Knowledge Users to Create<br className='md:block hidden' ></br> a Better Future by Democratizing Data
            </>
          }
        />
        <div className=' pt-20'>
          <div className="md:px-36 px-5 mx-auto">
            <p className="text-4xl md:text-5xl pt-5 "><span className='primary-color-g'>Abluva</span></p>
            <p className="text-lg text-gray-400  darkText pt-2">Abluva is a Palo Alto headquartered, research-focused, Data security startup. We are on the mission of enabling enterprises unlock the power of data by seamlessly embedding security into their ecosystems. Our team is taking head on the challenges posed by novel attack vectors and expanding attack surface across multiple data sources and public cloud environments.
              At the core of our approach are various contextual graphs that model deeper relationships of data and services. These relationships allows our multidimensional neural (and generative) networks to discover (and create) insights (and synthetic data).
            </p>
          </div>
        </div>
        <div className=' pt-5 '>
          <div className="md:px-36 px-5 mx-auto">
            <p className="text-4xl md:text-5xl pt-5"><span className='primary-color-g'>The Origins</span></p>
            <p className="text-lg pt-2 text-gray-400 pt-2">Abluva is the brainchild of a team of seasoned researchers with extensive expertise in the field of data management. The company's inception was driven by the imperative to address the daily challenges confronted by data scientists who grapple with copious volumes of data on a regular basis. The founders possess firsthand knowledge of the tangible obstacles pertaining to data compliance and security within the ever-evolving landscape of data applications, its diverse locations, and myriad data formats that necessitate rapid, secure processing.
              These encounters served as the impetus for conceptualising innovative solutions aimed at democratising data access swiftly and securely, capitalising on their wealth of experience in the realm of Artificial Intelligence. This journey commenced with a rigorous exploration of hitherto unsolved aspects of Machine Learning and culminated in the development of Abluva: the avant-garde data security platform.
            </p>
          </div>
        </div>

        <div className=' pt-5'>
          <div className="md:px-36 px-5 mx-auto">
            <p className="text-4xl md:text-5xl pt-5"><span className='primary-color-g'>From Our President's Desk</span></p>
            <p className="text-lg pt-2 text-gray-400  darkText">At Abluva, our unwavering commitment to pioneering Data Cloud Security comes with an acknowledgment of the challenges posed by an ever-evolving digital landscape. As we navigate the complexities of data security, we recognize the dynamic nature of threats and the need for continual innovation to stay ahead. Challenges such as emerging cyber threats, evolving compliance landscapes, and the sheer scale of data proliferation inspire us to push the boundaries of what's possible. Looking ahead, Abluva envisions a future where Data Cloud Security is not just a defense mechanism but an enabler of innovation. We are poised to lead in shaping this future, embracing challenges as opportunities and empowering businesses to thrive securely in the data-driven era.
            </p>
          </div>
        </div>

        <div className=' py-10'>
          <div className="md:px-36 px-5 text-gray-900">
            <p className="text-4xl md:text-5xl primary-color-g pb-5"><span className='primary-color-g'>Compliance and Standards</span></p>
            <div className='flex md:flex-row flex-col md:space-x-20 justify-center px-4 md:px-60 pt-20'>
              <div className='text-center'>
                <Link href="https://www.iafcertsearch.org/certified-entity/19XQG6a95MPC5oi6yQUW1F5y" target="_blank">
                  <div className='card-bg flex justify-center items-center mx-20 md:mx-0 mb-5 md:mb-0 p-5 rounded-lg'>
                    <img src="/images/iso.png" className='object-cover h-20 hover:scale-110 transition-transform duration-300' alt="iso" />
                  </div>
                </Link>
              </div>
              <div className='text-center'>
                <Link href="https://owasp.org/www-project-samm/" target="_blank">
                  <div className='card-bg flex justify-center items-center mx-20 md:mx-0 mb-5 md:mb-0 p-5 rounded-lg'>
                    <img src="/images/owasp.png" className='object-cover h-20 hover:scale-110 transition-transform duration-300 filter invert opacity-80' alt="owasp" />
                  </div>
                </Link>
              </div>
              <div className='text-center'>
                <Link href="https://cloud.google.com/blog/products/application-development/google-introduces-slsa-framework" target="_blank">
                  <div className='card-bg flex justify-center items-center mx-20 md:mx-0 mb-5 md:mb-0 p-5 rounded-lg'>
                    <img src="/images/google.png" className='object-cover h-20 hover:scale-110 transition-transform duration-300' alt="google" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=' pt-10 md:pb-40 pb-20'>
          <div className="md:px-36 px-5 mx-auto text-gray-400">
            <p className="text-4xl md:text-5xl pb-10">
              <span className=' primary-color-g'>Our Presence</span>
            </p>

            <div className="zoom-container">
              <img
                src="/images/worldmap1.png"
                className="object-cover h-full w-full rounded-lg location-image"
                alt="Location"
              />
              <div className='point1'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
