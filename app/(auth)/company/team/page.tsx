import BgLanding from '@/components/widgets/bgLandingPage';
import Link from 'next/link';


export const metadata = {
  title: 'Team | ABLUVA',
  description: 'Meet the passionate individuals behind ABLUVA\'s innovative data security approach. Learn about our team\'s expertise and commitment to excellence',
};
export default function Team() {
  return (
    <>
      <section>
        <BgLanding
          bgImage="bg-team"
          title="team"
          subtitle="Collaboration breeds innovation."
        />
        <div className='  md:px-36 px-5 md:py-20'>
          <p className="text-4xl md:text-5xl pt-5 "><span className='primary-color-g'>Executive Team</span></p>
          <div className="grid md:grid-cols-3 grid-cols-1 py-20 ">

            <div className="cards text-center mx-auto">
              <div className="card">
                <div className="content">
                  <div className="imgbox">
                    <img src="/images/Raj.jpg" alt="Raj" className='filter grayscale pic' />
                    <Link className='linkedin-icon' target="_blank" href="https://www.linkedin.com/in/rajdarjiofficial/"><img src="/icons/linkedin1.png" alt="linkedin-icon" className='' /></Link>
                  </div>
                  <div className="mt-5 text">
                    <h3><span className='text-2xl'>Raj Darji </span></h3>
                    <div className='flex items-center justify-center text-xs mt-1'>
                      <p className='tag text-gray-300 px-3 py-1 rounded-sm'>Founder</p >
                      <p className=' text-gray-300 ml-1 px-3 py-1 rounded-sm tag'>Chief Executive Officer</p>
                    </div>
                    <div className='text-xs mt-5  flex items-center justify-center'>
                      <p className='text-gray-500 rounded-sm'>Ex-Oracle</p >
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="cards text-center md:pt-0 pt-10 mx-auto">
              <div className="card">
                <div className="content">
                  <div className="imgbox">
                    <img src="/images/AmitGautam.jpg" alt="Amit" className='pic' />
                    <Link className='linkedin-icon' target="_blank" href="https://www.linkedin.com/in/amit-gautam-0b6356a1/"><img src="/icons/linkedin1.png" alt="linkedin-icon" className='' /></Link>
                  </div>
                  <div className="mt-5">
                    <h3><span className='text-2xl'>Amit Gautam</span></h3>
                    <div className='flex items-center justify-center text-xs mt-1'>
                      <p className='tag text-gray-300 px-3 py-1 rounded-sm'>Founder</p >
                      <p className='tag text-gray-300 ml-1 px-3 py-1 rounded-sm'>Chief Technology Officer</p>
                    </div>
                    <div className='text-xs mt-5  flex items-center justify-center'>
                      <p className='text-gray-500 rounded-sm'>Ex-Oracle</p >
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-4xl md:text-5xl pt-10"><span className='primary-color-g'>Advisory Board</span></p>
          <div className="grid md:grid-cols-3 grid-cols-1 py-20 ">
            <div className="cards text-center mx-auto">
              <div className="card">
                <div className="content">
                  <div className="imgbox">
                    <img src="/images/Graeme.jpg" alt="Graeme" className='filter grayscale pic' />
                    <Link className='linkedin-icon' target="_blank" href="https://www.linkedin.com/in/payneg/"><img src="/icons/linkedin1.png" alt="linkedin-icon" className='' /></Link>
                  </div>
                  <div className="mt-5">
                    <h3><span className='text-2xl'>Graeme Payne</span></h3>
                    <div className='flex items-center justify-center text-xs text-center mt-1'>
                      <p className='tag text-gray-300 px-3 py-1 rounded-sm'>Sales</p>
                      <p className='tag text-gray-300 px-3 py-1 ml-1 rounded-sm'>Technology</p>
                    </div>
                    <div className='text-xs mt-5 flex items-center justify-center'>
                      <p className='text-gray-500  rounded-sm'>Ex-SVP & Ex-CIO Equifax</p >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards text-center md:pt-0 pt-10 mx-auto">
              <div className="card">
                <div className="content">
                  <div className="imgbox">
                    <img src="/images/joel.jpg" alt="Joel" className='pic' />
                    <Link className='linkedin-icon' target="_blank" href="https://www.linkedin.com/in/joel-kaplowitz-cfp%C2%AE-61192351/"><img src="/icons/linkedin1.png" alt="linkedin-icon" className='' /></Link>
                  </div>

                  <div className=" mt-5">
                    <h3><span className='text-2xl'>Joel Kaplowitz</span></h3>
                    <div className='flex flex items-center justify-center text-xs mt-1'>
                      <p className='tag text-gray-300 px-3 py-1 rounded-sm'>Finance</p >
                    </div>
                    <div className='text-xs mt-5  flex items-center justify-center'>
                      <p className='text-gray-500 rounded-sm'>Managing Partner, Able Wealth Management</p >
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
