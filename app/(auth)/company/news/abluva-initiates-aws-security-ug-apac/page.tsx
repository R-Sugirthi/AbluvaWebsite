import News2 from "@/components/pages/news/news2";
import "./news1.css"
import News1 from '@/components/pages/news/news1';

export const metadata = {
  title: 'Abluva Initiates ‘AWS Security UG-APAC’ | ABLUVA',
  description: 'Join the AWS Security APAC User Group by Abluva for AWS security discussions, networking, and community support. Connect via Meetup, email, GitHub, and LinkedIn to stay updated on trends and collaborate with like-minded professionals.',
};

export default function News() {
  return (
    <>

      <div className="  py-5 md:py-10 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10">
        <div className="container  px-5 py-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-5/6 text-gray-300">
            <div className="py-4">
              <div className="text-gary-400 text-xs font-semibold">News<span className='ml-2 text-gray-500 square'>&#9642;</span><span className='tag ml-2'>AWS</span><span className='tag ml-2'>Security Community</span></div>
            </div>
            <p className="text-4xl md:text-5xl font primary-color-g">Abluva Initiates<br className="md:block hidden"></br>AWS Security User Group APAC</p>
            <p className="text-xl md:text-2xl font pt-2 text-gray-300">We are proud to announce the launch of the AWS Security APAC User Group. This community-driven initiative aims to bring together security enthusiasts, professionals, and experts across the Asia-Pacific region to foster collaboration, knowledge sharing, and the advancement of security practices within the AWS ecosystem.</p>
            <p className="font pt-7 text-sm text-gray-400">04 Dec 2023</p>
          </div>
        </div>
      </div>
      <News1 />
    </>
  );
}
