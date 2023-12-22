import Link from 'next/link';
import '../research.css';
export const metadata = {
  title: 'Research-Papers | ABLUVA',
  description: 'Explore insightful research papers submitted by ABLUVA. Discover innovative solutions in cybersecurity, machine learning, and network intrusion detection.',
};

export default function ResearchPapers() {
return (
    <>
      <div className='bg-[#f2f3f5] pt-20 founder text-justify' id="research-papers">
        <div className="container mx-auto">
          <p className="text-3xl md:text-5xl founder text-gradient md:px-20 px-5 text-center pb-10">Research Papers</p>
          <p className="text-2xl md:text-3xl founder text-gray-900 md:px-20 px-5 font-semibold">Submitted Research Papers</p>
          <div className="md:px-20 px-5 py-10">

            <div className="max-w-full bg-white mb-10">
              <div className='p-10'>
                <div className='grid md:grid-cols-3 gap-8 flex items-center justify-center'>
                  <img src="https://cdn.dribbble.com/users/1913706/screenshots/4117171/dribbble__1_.gif" className='h-full' />
                  <ul className='text-gray-900 md:col-span-2'>
                    <li className=' font-semibold text-2xl'>Partitioned Problem Space (PaPS) Ensemble For Zero-day Intrusion Detection</li>
                    <li className="mb-2 text-xl "><span className='font-semibold'>Published in: </span> Security and Communication Networks Journal</li>
                    <li className='text-xl'><span className='font-semibold'>Synopsis: </span> The ubiquity of low-cost cloud data storage has exponentially increased data generation, posing significant challenges to data security. Traditional intrusion detection systems struggle with the volume and speed of cloud data. This work introduces a novel partitioned problem space deep-learning ensemble approach, outperforming existing methods in zero-day intrusion detection tasks.Keywords: deep learning, neural learners, malware, intrusion detection, zero-day attack, ensemble, CIC IDS, UNSW NB-15, BODMAS, UNR IDD, cybersecurity.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-full my-10 bg-white">
              <div className='p-10'>
                <div className='grid md:grid-cols-3 gap-8 flex items-center justify-center'>
                  <img src="https://i.pinimg.com/originals/8b/fd/01/8bfd01c18be1b5059bc0d7770d9dabf1.gif" className='h-full' />
                  <ul className='text-gray-900 md:col-span-2'>
                    <li className=' font-semibold text-2xl'>Blender-GAN: Multi-target conditional Generative Adversarial Network for novel class synthetic data generation</li>
                    <li className="mb-2 text-xl "><span className='font-semibold'>Published in: </span> ACM Transactions on Privacy and Security</li>
                    <li className='text-xl'><span className='font-semibold'>Synopsis: </span>  The global increase in computer network usage necessitates robust intrusion detection systems, prompting the application of machine learning and deep learning models. Limited training data for deep neural networks is addressed by synthetic data generation, with Blender-GAN proposed as a novel approach allowing the creation of new data by blending multiple class labels. The architecture demonstrates success in generating realistic synthetic network intrusion data with varied attack classes.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-full my-10 bg-white">
              <div className='p-10'>
                <div className='grid md:grid-cols-3 gap-8 flex items-center justify-center'>
                  <img src="https://datasysbd.com/wp-content/uploads/2018/07/cs-an.gif" className='h-full' />
                  <ul className='text-gray-900 md:col-span-2'>
                    <li className=' font-semibold text-2xl'>Securing from Unseen: Connected Pattern Kernels (CoPaK) for Zero-day Intrusion Detection</li>
                    <li className="mb-2 text-xl "><span className='font-semibold'>Published in: </span> Computers & Security</li>
                    <li className='text-xl'><span className='font-semibold'>Synopsis: </span>  The surge in data from digitization and cloud adoption requires advanced intrusion detection. Classic systems struggle with complexity, necessitating a proposed deep learning connected pattern kernel architecture. This model excels in zero-day intrusion detection, demonstrating superior performance and generalisation in monitoring network traffic.</li>
                    <li className="mb-2 text-xl "><span className='font-semibold'>Keywords: </span> Deep learning, neural networks, machine learning, malware, intrusion detection, zero-day attack, UNSW NB-15, BODMAS, UNR IDD, cybersecurity.</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-2xl md:text-3xl founder text-gray-900 font-semibold">On-going Research </p>
            <div className="max-w-full my-10 bg-white">
              <div className='md:p-10 p-5'>
                <div className=' flex items-center justify-center'>
                  <img src="/icons/ongoing.png" className='h-10 md:px-10 px-5' />
                  <ul className='text-gray-900'>
                    <li className=' font-semibold text-lg md:text-2xl'>Node Relevance based Graph Neural Network Pruning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
