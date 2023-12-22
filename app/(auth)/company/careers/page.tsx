import Link from 'next/link';
import './career.css';
export const metadata = {
  title: 'Careers | ABLUVA',
  description: 'Join Abluva for exciting career opportunities! Embrace flexibility, contribute to cutting-edge solutions in data innovation, and elevate your career. Apply now!',
};
export default function Careers() {
  return (
    <>
      <div className="py-28 md:py-28 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10 bg ">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
          <div className="w-full text-white pt-10 pb-40 w-3/4">
            <p className="text-5xl font-bold text-gray-100 founder"><span className='text-7xl'>T</span>he Only Way to Do Great Work is to<br className='md:block hidden'></br> Love What You Do - <span className='text-violet-500 font-thin'>Steve Jobs</span></p>
            <p className="text-3xl founder text-gray-300">"Solve the Real World Problems with Use of <br></br>Technology and Liberate the Data"</p>
          </div>
        </div>
      </div>
      <div className='bg-black text-center py-20'>
        <div className="container mx-auto">
          <p className="text-4xl md:text-5xl founder  pb-5"><span className='text-gradient'>Why Abluva</span></p>
          <p className="text-2xl md:text-2xl founder pt-2 text-gray-300 md:px-20 pb-10 darkText text-justify px-5">We are a passionate group of people working on creating cross industry solutions. We help customers unlock their potential and do the same for our team. You will be able to leverage your ideas, your expertise and your creativity to make nextgen solution focused around data democratization.
          </p>
        </div>
      </div>
      <div className='bg-[#f2f3f5]  pt-5'>
        <div className="container mx-auto">
          <p className="text-4xl md:text-5xl founder text-gradient-light md:px-20 px-5 py-5">Our Values</p>
          <div className='md:px-20 px-5'>
            <p className="text-2xl md:text-2xl founder text-gray-900 text-justify">Nimble, Agile and Creative. Our team embibes these principles to the core. Living these principles to deliver cutting edge solutions requires Openess, Collaboration and Respect. Our founders have always practiced these and so does our team.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-[#f2f3f5] pt-5 founder'>
        <div className="container mx-auto">
          <p className="text-3xl md:text-4xl founder text-gradient-light md:px-20 px-5 py-5">Perks Of Working With Abluva</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:px-20 px-5">
            <div className="max-w-xl p-10 border-gray-300 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/time.png" className='h-8 mx-auto' alt="time" /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center"><span className='font-bold'>Flexible work hours - </span>Choose your own hours. Select your best productive hours and deliver your best work. It's better than just working the specified hours.</li>
              </ul>
            </div>
            <div className="max-w-xl p-10 md:border-l md:border-r  border-gray-300 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/calender.png" className='h-8 mx-auto' alt="calender" /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center"><span className='font-bold'>Flexible off days - </span>Revitalize when necessary. Schedule your days off to align with your optimal productivity and stay in control over your schedule.</li>
              </ul>
            </div>
            <div className="max-w-xl p-10  flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/team.png" className='h-8 mx-auto' alt="team" /></li>
                <li className="mb-2 text-2xl text-gray-900 text-center"><span className='font-bold'>Remote Work - </span>Working from environment where you feel your best and motivated, works for us too. Most roles allow remote collaboration within team.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='container mx-auto md:px-20 px-5 md:py-20 py-10'>
          <div className="border rounded-lg border-gray-500 p-5">
            <p className="text-2xl md:text-3xl founder font-semibold text-gray-900">
              If you're passionate about addressing cutting-edge challenges, please share your resume with us at <Link href="mailto:careers@abluva.com" className='text-gradient-light'><span className='underline'>careers@abluva.com</span></Link>.</p>
          </div>
        </div>
      </div>
    </>
  );
}
