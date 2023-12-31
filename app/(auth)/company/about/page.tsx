import Link from 'next/link';
import './about.css';
export const metadata = {
  title: 'About | ABLUVA',
  description: 'Learn about Abluva\'s mission and innovative data security approach in this concise \'About\' page.',
};
export default function About() {
  return (
    <>
      <section>
        <div className="py-28 md:py-28 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10 bg">
          <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
            <div className="w-full text-white pt-10 pb-20">
              <p className="text-6xl founder"><span className=' text-gradient'>Our Motive</span></p>
              <p className="text-3xl founder pt-5 purpose text-gray-300">To Empower Knowledge Users to Create a Better <br></br>Future by Democratizing Data</p>
            </div>
          </div>
        </div>
        <div className='bg-black text-center py-20 px-5'>
          <div className="container mx-auto">
            <p className="text-4xl md:text-5xl founder  pb-5"><span className='text-gradient'>The Origins</span></p>
            <p className="text-2xl md:text-2xl founder pt-2 text-gray-300 md:px-20 text-justify darkText">Abluva is the brainchild of a team of seasoned researchers with extensive expertise in the field of data management. The company's inception was driven by the imperative to address the daily challenges confronted by data scientists who grapple with copious volumes of data on a regular basis. The founders possess firsthand knowledge of the tangible obstacles pertaining to data compliance and security within the ever-evolving landscape of data applications, its diverse locations, and myriad data formats that necessitate rapid, secure processing.
              These encounters served as the impetus for conceptualising innovative solutions aimed at democratising data access swiftly and securely, capitalising on their wealth of experience in the realm of Artificial Intelligence. This journey commenced with a rigorous exploration of hitherto unsolved aspects of Machine Learning and culminated in the development of Abluva: the avant-garde data security platform.
            </p>
          </div>
        </div>
        <div className='bg-[#f2f3f5] pt-5 px-5 '>
          <div className="container mx-auto">
            <p className="text-4xl md:text-5xl founder text-gradient-light pt-5 md:px-20">From Our President's Desk</p>
            <p className="text-2xl md:text-2xl founder pt-2 text-gray-900 text-justify md:px-20">At Abluva, our unwavering commitment to pioneering Data Cloud Security comes with an acknowledgment of the challenges posed by an ever-evolving digital landscape. As we navigate the complexities of data security, we recognize the dynamic nature of threats and the need for continual innovation to stay ahead. Challenges such as emerging cyber threats, evolving compliance landscapes, and the sheer scale of data proliferation inspire us to push the boundaries of what's possible. Looking ahead, Abluva envisions a future where Data Cloud Security is not just a defense mechanism but an enabler of innovation. We are poised to lead in shaping this future, embracing challenges as opportunities and empowering businesses to thrive securely in the data-driven era.
            </p>
          </div>
        </div>
        <div className='bg-[#f2f3f5] px-5 pt-10'>
          <div className="container mx-auto">
            <p className="text-4xl md:text-5xl founder text-gradient-light pb-5 darkText md:px-20">Abluva</p>
            <p className="text-2xl md:text-2xl founder  text-gray-900 md:px-20 text-justify">Abluva is a Palo Alto headquartered, research-focused, Data security startup. We are on the mission of enabling enterprises unlock the power of data by seamlessly embedding security into their ecosystems. Our team is taking head on the challenges posed by novel attack vectors and expanding attack surface across multiple data sources and public cloud environments.
              At the core of our approach are various contextual graphs that model deeper relationships of data and services. These relationships allows our multidimensional neural (and generative) networks to discover (and create) insights (and synthetic data).
            </p>
          </div>
        </div>
        <div className='bg-[#f2f3f5] py-10'>
          <div className="container mx-auto text-gray-900">
            <p className="text-4xl md:text-5xl founder text-gradient-light md:px-20 px-5 pb-5">Compliance and Standards</p>
            <div className='grid md:grid-cols-3 grid-col-1 justify-center items-center'>
              <Link href="https://www.iafcertsearch.org/certified-entity/19XQG6a95MPC5oi6yQUW1F5y" target="_blank">
                <div className='stdImg relative md:m-24  sliding-logo'>
                  <img src="/images/iso.png" className='object-cover h-full w-full hover:scale-110 transition-transform duration-300' alt="iso" />
                </div>
              </Link>
              <Link href="https://owasp.org/www-project-samm/" target="_blank">
                <div className='stdImg relative md:m-24 my-10 sliding-logo'>
                  <img src="/images/owasp.png" className='object-cover h-full w-full hover:scale-110 transition-transform duration-300' alt="owasp" />
                </div>
              </Link>
              <Link href="https://cloud.google.com/blog/products/application-development/google-introduces-slsa-framework" target="_blank">
                <div className='stdImg relative md:m-24 sliding-logo'>
                  <img src="/images/google.png" className='object-cover h-full w-full hover:scale-110 transition-transform duration-300' alt="google" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='bg-black pt-10 md:pb-40 pb-20'>
          <div className="container mx-auto text-gray-300">
            <p className="text-4xl md:text-5xl founder pb-10 md:px-20 px-5"><span className=' text-gradient'>Where We Are</span></p>
            <div className='md:px-20 px-5'>
              <img src="/images/location.png" className='object-cover h-full w-full rounded-lg' alt="Location"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
