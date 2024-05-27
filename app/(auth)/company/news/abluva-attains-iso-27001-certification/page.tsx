import News2 from "@/components/pages/news/news2";
export const metadata = {
  title: 'Abluva Attains ISO 27001 Certification | ABLUVA',
  description: 'Discover Abluva\'s ISO 27001 Certification, reinforcing its commitment to global data security standards.',
}
export default function News() {
  return (
    <>
      <div className=" py-5 md:py-10 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10">
        <div className="container  px-5 py-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-5/6 text-gray-300">
            <div className="py-4">
              <div className="text-gary-400 text-xs font-semibold">News<span className='ml-2 text-gray-500 square'>&#9642;</span><span className='tag ml-2'>ISO27001</span><span className='tag ml-2'>Security Information</span></div>
            </div>
            <p className="text-4xl md:text-5xl font primary-color-g">Abluva Attains ISO 27001 Certification, Reinforcing Commitment to Data Security Excellence.</p>
            <p className="text-xl md:text-2xl font pt-2 text-gray-300">Abluva, a pioneer in data security solutions, proudly announces its achievement of the ISO 27001 certification, a globally recognized standard for information security management systems. This accreditation underscores Abluva's unwavering commitment to ensuring the highest standards of data security across its operations.</p>
            <p className="font pt-7 text-sm text-gray-400">15 Oct 2023</p>
          </div>
        </div>
      </div>
      <News2 />
    </>
  );
}
