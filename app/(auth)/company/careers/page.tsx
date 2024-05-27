import BgLanding from '@/components/widgets/bgLandingPage';
import Link from 'next/link';
export const metadata = {
  title: 'Careers | ABLUVA',
  description: 'Join Abluva for exciting career opportunities! Embrace flexibility, contribute to cutting-edge solutions in data innovation, and elevate your career. Apply now!',
};
export default function Careers() {
  return (
    <>
      <BgLanding
        bgImage="bg-career"
        title="career"
        subtitle={<>Solve the Real World Problems with<br className='md:block hidden'></br> Use of Technology and Liberate the Data</>}
      />
      <div className=' pt-20'>
        <div className="md:px-36 px-5 mx-auto">
          <p className="text-4xl md:text-5xl pb-5 "><span className='primary-color-g'>Why Abluva</span></p>
          <p className="text-lg  pt-2 text-gray-400 pb-10  ">We are a passionate group of people working on creating cross industry solutions. We help customers unlock their potential and do the same for our team. You will be able to leverage your ideas, your expertise and your creativity to make nextgen solution focused around data democratization.
          </p>
        </div>
      </div>
      <div className='  pt-5'>
        <div className="md:px-36 px-5 mx-auto">
          <p className="text-4xl md:text-5xl font py-5"><span className='primary-color-g'>Our Values</span></p>
          <div>
            <p className="text-lg text-gray-400 ">Nimble, Agile and Creative. Our team embibes these principles to the core. Living these principles to deliver cutting edge solutions requires Openess, Collaboration and Respect. Our founders have always practiced these and so does our team.
            </p>
          </div>
        </div>
      </div>
      <div className=' pt-5 font text-gray-300'>
        <div className="md:px-36 px-5 mx-auto">
          <p className="text-3xl font text-gray-300 py-5">Perks Of Working With Abluva</p>
          <div className="grid grid-cols-1 md:grid-cols-3 py-10">
            <div className="max-w-xl p-10 border-gray-800 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/time.png" className='h-6 mx-auto filter invert opacity-80' alt="icon" /></li>
                <li className='text-2xl text-center text-gray-300'>Flexible work hours</li>
                <li className="mb-2 text-lg text-gray-400 text-center pt-3">Choose your own hours. Select your best productive hours and deliver your best work. It's better than just working the specified hours.</li>
              </ul>
            </div>
            <div className="max-w-xl p-10 md:border-l md:border-r  border-gray-900 flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/calender.png" className='h-6 mx-auto filter invert opacity-80' alt="icon" /></li>
                <li className='text-2xl text-center text-gray-300'>Flexible Off days</li>
                <li className="mb-2 text-lg text-gray-400 text-center pt-3">Revitalize when necessary. Schedule your days off to align with your optimal productivity and stay in control over your schedule.</li>
              </ul>
            </div>
            <div className="max-w-xl p-10  flex flex-col justify-center items-center">
              <ul>
                <li className='py-3'><img src="/icons/team.png" className='h-6 mx-auto filter invert opacity-80' alt="icon" /></li>
                <li className='text-2xl text-center text-gray-300'>Remote Work</li>
                <li className="mb-2 text-lg text-gray-400 text-center pt-3">Working from environment where you feel your best and motivated, works for us too. Most roles allow remote collaboration within team.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='md mx-auto md:px-36 px-5 md:py-20 py-10'>
          <div className="border rounded-lg border-gray-800 p-5">
            <p className="text-2xl text-gray-300">
              If you're passionate about addressing cutting-edge challenges, please share your resume with us at <Link href="mailto:careers@abluva.com" className='primary-color'><span className='underline'>careers@abluva.com</span></Link>.</p>
          </div>
        </div>
      </div>
    </>
  );
}
