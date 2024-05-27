
import Blog5 from '@/components/pages/blog/blog5';

export const metadata = {
  title: 'Synthetic Datasets in ML-Based Intrusion Detection | ABLUVA',
  description: 'Explore ABLUVA\'s latest blog on \'Synthetic Datasets in ML-Based Intrusion Detection.\'  Explore cost-effectiveness, data enrichment, and Abluva\'s BLENDER-GAN model. Overcome limitations with enhanced datasets and glimpse into the future of resilient intrusion detection. Dive into the intersection of AI and cybersecurity.',
};

export default function Blog() {
  return (
    <>
      <div className="bg-dark py-5 md:py-10 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10">
      {/* <div>
        <p className='text-sm px-5 '>
  <span className='text-gray-500'><Link href="/">Home </Link></span>
  <span className='text-gray-500 px-2'> &#128898; </span>
  <span className='text-gray-500'><Link href="/allinsights">insights </Link></span>
  <span className='text-gray-500 px-2'> &#128898; </span>
  <span className='text-gray-200'>Blog</span>
</p>
        </div> */}

        <div className="container mx-auto px-5 py-20 flex flex-col md:flex-row items-center">
      
          <div className="w-full md:w-3/4 text-white">
          <div className="py-4">
              <div className="text-gray-400 text-xs font-semibold">Blog<span className='ml-2 text-gray-500 square'>&#9642;</span><span className='tag ml-2'>Intrusion Detection</span><span className='tag ml-2'>AI</span><span className='tag ml-2'>Security</span></div>
            </div>
            <p className="insightTitle primary-color-g">Synthetic Datasets in ML-Based Intrusion Detection</p>
            <p className="text-xl md:text-2xl pt-2 text-gray-300">In the realm of cybersecurity, the training of Intrusion Detection Systems (IDS) with Machine Learning (ML) capabilities necessitates meticulous attention to data quality and diversity. Traditional datasets, though widely utilized, exhibit limitations that synthetic datasets adeptly address.</p>
            <p className="pt-7 text-xs text-gray-400">12 Jan 2024</p>
          </div>
        </div>
      </div>
      <Blog5/>
  
    </>
  );
}
