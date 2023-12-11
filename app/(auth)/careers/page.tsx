
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Link from 'next/link';
import './career.css';


export const metadata = {
  title: 'Careers | ABLUVA',
  // description: 'Page description',
};

export default function Careers() {
  return (
    <>
    
      <div className="py-28 md:py-28 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10 bg">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
          <div className="w-full text-white pt-10 pb-40 w-3/4">
          <p className="text-5xl font-bold text-gray-100 founder"><span className='text-7xl'>T</span>he Only way to do great work is to<br></br> love what you do - <span className='text-violet-500 font-thin'>Steve Jobs</span></p>
            <p className="text-3xl founder text-gray-300">"Solve the real world problems with use of <br></br>technology and liberate the data"</p>
          </div>
        </div>
      </div>
      <div className='bg-black text-center py-20'>
        <div className="container mx-auto">
          <p className="text-4xl md:text-5xl founder  pb-5"><span className='text-gradient'>Why Abluva</span></p>
          <p className="text-2xl md:text-2xl founder pt-2 text-gray-300 md:px-20 pb-10 darkText text-justify ">We are a passionate group of people working on creating cross industry solutions. We help customers unlock their potential and do the same for our team. You will be able to leverage your ideas, your expertise and your creativity to make nextgen solution focused around data democratization.
          </p>
        </div>
      </div>
      <div className='bg-[#f2f3f5]  pt-5'>
        <div className="container mx-auto">
          <p className="text-4xl md:text-5xl founder text-gradient-light md:px-20 py-5">Our Values</p>
          <div className='md:px-20 '>
              <p className="text-2xl md:text-2xl founder text-gray-900 text-justify">Nimble, Agile and Creative. Our team embibes these principles to the core. Living these principles to deliver cutting edge solutions requires Openess, Collaboration and Respect. Our founders have always practiced these and so does our team. 
              </p>
          </div>
        </div>
      </div>
      <div className='bg-[#f2f3f5] pt-5 founder'>
        <div className="container mx-auto">
          <p className="text-3xl md:text-4xl founder text-gradient-light md:px-20 py-5">Perks Of Working With Abluva</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:px-20">
            <div className="max-w-xl p-10 border-gray-300 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/time.png" className='h-8 mx-auto' /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center"><span className='font-bold'>Flexible work hours - </span>Choose your own hours. Select your best productive hours and deliver your best work. It's better than just working the specified hours.</li>
              </ul>
            </div>

            <div className="max-w-xl p-10 border-l border-r  border-gray-300 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/calender.png" className='h-8 mx-auto' /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center"><span className='font-bold'>Flexible off days - </span>Revitalize when necessary. Schedule your days off to align with your optimal productivity and stay in control over your schedule.</li>
              </ul>
            </div>

            <div className="max-w-xl p-10  flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/team.png" className='h-8 mx-auto' /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center"><span className='font-bold'>Remote Work - </span>Working from environment where you feel your best and motivated, works for us too. Most roles allow remote collaboration within team.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='container mx-auto px-20  py-20'>

        <div className="border rounded-lg border-gray-500 p-5">
          <p className="text-3xl md:text-3xl founder font-semibold text-gray-900">
          If you're passionate about addressing cutting-edge challenges, please share your resume with us at <Link href="mailto:careers@abluva.com" className='text-gradient-light'><span className='underline'>careers@abluva.com</span></Link>.
</p>
          </div>
        </div>
      </div>
      {/* <div className='bg-black pt-10'>
        <div className="container mx-auto">
          <p className="text-3xl md:text-4xl founder md:px-20"><span className='text-gradient '>Open Positions</span></p>
          <div className='grid md:grid-cols-2 grid-cols-1 py-20 px-20 '>
              <p className="text-2xl md:text-2xl founder text-gray-200">United States
              <ul className=''>
                <li>Position 1 - Lorem ipsum dolor sit amet</li>
                <li>Position 2 - Lorem ipsum dolor sit amet</li>
              </ul>
              </p>
              <p className="text-2xl md:text-2xl founder text-gray-200">India
              <ul  className=''>
                <li>Position 1 - Lorem ipsum dolor sit amet</li>
                <li>Position 2 - Lorem ipsum dolor sit amet</li>
              </ul>
              </p>
          </div>
          
         
          <hr className='text-gray-800'></hr>     
        <div className='md:px-20'>
          <p className="text-3xl md:text-3xl founder text-gray-200 pb-20 founder">
  If you don't see a position that fits your skills, but would still like to share your CV, please send it to us at <Link href="mailto:Careers@abluva.com" className='text-gradient'><span className='underline'>Careers@abluva.com</span></Link>.
</p>

          </div>
        </div>
      </div> */}

    </>
  );
}
