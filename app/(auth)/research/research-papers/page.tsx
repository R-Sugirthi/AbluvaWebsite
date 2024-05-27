import Link from 'next/link';
import { Helmet } from 'react-helmet';


const ResearchPapers: React.FC = () => {
  return (
    <>
     {/* <Helmet>
        <title>Research-Papers | ABLUVA</title>
        <meta name="description" content="Explore insightful research papers submitted by ABLUVA. Discover innovative solutions in cybersecurity, machine learning, and network intrusion detection." />
      </Helmet> */}
      <div className=' pt-20 founder' id="Research Papers"  style={{ scrollMarginTop: '140px' }}>
        <div className="md:px-36 px-5 mx-auto">
          <p className="text-4xl md:text-5xl font primary-color-g text-center pb-20">Research Papers</p>
          <p className="text-3xl fonttext-gray-300">Submitted Research Papers</p>
          <div className="py-10">
            <div className=" card-bg mb-10">
              <div className='p-10'>
                <div className=''>
                  <img src="/icons/research1.png" className="h-10 opacity-30 mb-3" alt="research paper" />
                  <p className='text-gray-300 text-2xl'>Attention to Patterns is all you need for Insider threat detection</p>
                </div>
                <p className='text-gray-400 text-xl pt-3'>This paper Introduces a fresh approach to insider threat detection in organisations.  By leveraging advanced deep learning models such as Time-Distributed Deep Learning Architecture (TD-CNN-LSTM) and Contextually Aware Attention-Based Architecture (TD-CNN-Attention), this method enhances anomaly detection by capturing complex patterns in user behaviour. The combination of CNNs with LSTMs or attention mechanisms extracts spatial and temporal features from user access data, leading to significant accuracy and improvement in F1 scores.
                  This research fonts a significant breakthrough in identifying insider threats, playing a pivotal role in fortifying the security of critical assets amid the constantly evolving threat landscape.<br></br><span className='text-lg'><span className='font-bold'>Keywords: </span>Insider Threats, Deep Learning, Anomaly Detection, Time-Distributed, Contextually Aware Attention-Based Architecture, User Behaviour Pattern.</span></p>
              </div>
            </div>
            <div className=" card-bg mb-10">
              <div className='p-10'>
                <div className=''>
                  <img src="/icons/research1.png" className="h-10 opacity-30 mb-3" alt="research paper" />
                  <p className='text-gray-300 text-2xl'>Partitioned Problem Space (PaPS) Ensemble For Zero-day Intrusion Detection</p>
                </div>
                <p className='text-gray-400 text-xl pt-3'>The ubiquity of low-cost cloud data storage has exponentially increased data generation, posing significant challenges to data security. Traditional intrusion detection systems struggle with the volume and speed of cloud data. This work introduces a novel partitioned problem space deep-learning ensemble approach, outperforming existing methods in zero-day intrusion detection tasks.<br></br><span className='text-lg'><span className='font-bold'>Keywords: </span>Deep learning, neural learners, malware, intrusion detection, zero-day attack, ensemble, CIC IDS, UNSW NB-15, BODMAS, UNR IDD, cybersecurity.</span></p>
              </div>
            </div>
            <div className=" card-bg mb-10">
              <div className='p-10'>
                <div className=''>
                  <img src="/icons/research1.png" className="h-10 opacity-30 mb-3" alt="research paper" />
                  <p className='text-gray-300 text-2xl'>Blender-GAN: Multi-target conditional Generative Adversarial Network for novel class synthetic data generation</p>
                </div>
                <p className='text-gray-400 text-xl pt-3'>The global increase in computer network usage necessitates robust intrusion detection systems, prompting the application of machine learning and deep learning models. Limited training data for deep neural networks is addressed by synthetic data generation, with Blender-GAN proposed as a novel approach allowing the creation of new data by blending multiple class labels. The architecture demonstrates success in generating realistic synthetic network intrusion data with varied attack classes..<br></br><span className='text-lg'><span className='font-bold'>Keywords: </span>Generative Adversarial Network, Synthetic Data, Deep Learning, Network Intrusion, Attack classes.</span></p>
              </div>
            </div>
            <div className=" card-bg mb-10">
              <div className='p-10'>
                <div className=''>
                  <img src="/icons/research1.png" className="h-10 opacity-30 mb-3" alt="research paper" />
                  <p className='text-gray-300 text-2xl'>Securing from Unseen: Connected Pattern Kernels (CoPaK) for Zero-day Intrusion Detection</p>
                </div>
                <p className='text-gray-400 text-xl pt-3'>The surge in data from digitization and cloud adoption requires advanced intrusion detection. Classic systems struggle with complexity, necessitating a proposed deep learning connected pattern kernel architecture. This model excels in zero-day intrusion detection, demonstrating superior performance and generalisation in monitoring network traffic.<br></br><span className='text-lg'><span className='font-bold'>Keywords: </span>Deep Learning, Neural Networks, Machine Learning, Malware, Intrusion Detection, Zero-day attack, UNSW NB-15, BODMAS, UNR IDD, Cybersecurity.
                </span></p>
              </div>
            </div>

            <p className="text-3xl fonttext-gray-300 pt-10">On-going Research </p>
            {/* <div className="max-w-full my-10 card-bg">
              <div className='md:p-10 p-5'>
                <div className=' flex items-center justify-center'>
                  <img src="/icons/ongoing.png" className='h-10 opacity-50 md:px-10 px-5' />
                  <ul className='text-gray-300'>
                    <li className='text-2xl'>Node Relevance based Graph Neural Network Pruning</li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8 text-center pt-5'>
               <div className=' p-5'>
                <p className='text-xl text-gray-500'>Contextual Knowledge Networks</p>
                <p className='text-sm text-gray-600'>( Node Relevance based GNN Pruning )</p>
                <p className='text-7xl text-gray-300 font-bold py-3'>1</p>
              </div>
              <div className=' p-5 text-gray-500'>
                <p className='text-xl'>Large Language Models</p>
                <p className='text-sm text-gray-600'>( Feedback based RAG Architecture )</p>
                <p className='text-7xl text-gray-300 font-bold py-3'>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ResearchPapers;