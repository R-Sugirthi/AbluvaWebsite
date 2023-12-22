import Link from 'next/link';
import './research.css';
import Leaderboards from './leaderboards/page';
import Datasets from './datasets/page';
import Patents from './patents/page';
import ResearchPapers from './research-papers/page';


export const metadata = {
  title: 'Research | ABLUVA',
  description: 'Unveiling Innovation: Explore ABLUVA\'s research in AI, machine learning, and cybersecurity.',
};

export default function Research() {
  return (
    <>
      <div className="py-32 md:py-10 md:pl-48 md:pr-12 lg:pr-32 sm:px-10 bg">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
          <div className="w-full text-white pt-20  pb-40 w-3/4">
            <p className="text-5xl font-bold text-gray-100 founder">Research</p>
            <p className="text-3xl founder text-gray-300">Unveiling Innovation: Our Research Odyssey</p>
          </div>
        </div>
      </div>
      <div className='bg-black text-center pt-10'>
        <div className="container mx-auto md:px-20">
          <div className='grid md:grid-cols-4 text-lg text-gray-200 pb-20'>

            <div className='flex flex-col items-center justify-center pb-5'>
              <img src="/icons/leaderboard.png" className='h-8' />
              <div className='link-wrapper' >
                <Link href="#leaderboards" className='hover'>
                  <div className='flex'>
                    <p>Leaderboards</p>
                    <img src="/icons/downArrow.png" className='h-4 mt-2 mx-1' alt="Down Arrow" />
                  </div>
                </Link>
              </div>

            </div>

            <div className='flex flex-col items-center justify-center pb-5'>
              <img src="/icons/dataset.png" className='h-8' />
              <div className='link-wrapper'>
              <Link href="#datasets" className='hover'>
                  <div className='flex'>
                    <p>Synthetic Datasets</p>
                    <img src="/icons/downArrow.png" className='h-4 mt-2 mx-1' alt="Down Arrow" />
                  </div>
                </Link>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center pb-5'>
              <img src="/icons/research.png" className='h-8' />
              <div className='link-wrapper'>
                <Link
                  href="#research-papers" className='hover'>  <div className='flex'>
                  <p>Research Papers</p>
                  <img src="/icons/downArrow.png" className='h-4 mt-2 mx-1' alt="Down Arrow" />
                </div>
                </Link>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center pb-5'>
              <img src="/icons/patent.png" className='h-8' />
              <div className='link-wrapper'>
                <Link
                  href="#patents" className='hover'><div className='flex'>
                  <p>Patents</p>
                  <img src="/icons/downArrow.png" className='h-4 mt-2 mx-1' alt="Down Arrow" />
                </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Leaderboards/>
      <Datasets/>
      <ResearchPapers/>
      <Patents/>
    </>
  );
}
