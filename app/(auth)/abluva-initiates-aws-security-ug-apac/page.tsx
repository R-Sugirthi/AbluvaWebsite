import News2 from "@/components/pages/news/news2";
import "./news1.css"
import News1 from '@/components/pages/news/news1';

export const metadata = {
  title: 'Abluva Initiates ‘AWS Security UG-APAC’ | ABLUVA',
  // description: 'Page description',
};

export default function News() {
  return (
    <>

      <div className="bg  py-5 md:py-10 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10">


        <div className="container  px-5 py-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-5/6 text-gray-300">
            <div className="py-4">
              <div className="text-[#d9dbe2] pb-2 font-semibold text-sm">News . <span className='link'>AWS</span><span className='link mx-1'>Security Community</span></div>

            </div>
            <p className="text-4xl md:text-5xl founder">Abluva Initiates<br></br> ‘AWS Security UG-APAC’</p>
            <p className="text-xl md:text-2xl founder pt-2">We are proud to announce the launch of the AWS Security APAC User Group. This community-driven initiative aims to bring together security enthusiasts, professionals, and experts across the Asia-Pacific region to foster collaboration, knowledge sharing, and the advancement of security practices within the AWS ecosystem.</p>
            <p className="mark pt-7 text-sm text-[#d9dbe2]">Abluva . 04 Dec 2023</p>
          </div>
        </div>
      </div>
      <News1 />

    </>
  );
}
