import Link from 'next/link';


// export const metadata = {
//   title: 'Synthetic-Datasets | ABLUVA',
//   description: 'Explore synthetic datasets created by ABLUVA for intrusion detection experiments and proofs. Access extended versions of popular datasets with additional classes for comprehensive analysis.',
// };
// import React, { forwardRef, RefObject } from 'react';

const Datasets: React.FC = () => {
  return (
    <>
      <div className=' py-20 font text-gray-300' id="Synthetic Datasets" style={{ scrollMarginTop: '140px' }}>
        <div className="md:px-36 px-5 mx-auto">
          <p className="text-4xl md:text-5xl primary-color-g text-center pb-10">Synthetic Datasets</p>
          <p className="text-xl text-gray-300 darkText py-5 ">These datasets were created, using generative AI, by extending the world’s most acknowledged and popular datasets used for Intrusion detection, experiments and proofs. You are welcome to use them for your experiments and extend them.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-10">
            <div className="max-w-xl p-10 card-bg">
              <ul className='text-gray-300'>
                <li className='text-3xl'>CSE-CIC-IDS2018 V3</li>
                <li className='text-lg text-gray-400 pt-3'>Based on Canadian Institute for Cybersecurity’s CSE-CIC-IDS2018 dataset that includes includes seven different attack scenarios: Brute-force, Heartbleed, Botnet, DoS, DDoS, Web attacks, and infiltration of the network from inside. This dataset is normalised and 1 new class called "Comb" is added which is a combination of synthesised data of multiple non-benign classes. The data is normalised and 1 new class "Comb" which is a combination of existing attacks is added.</li>
                <li className="mb-2 text-2xl flex items-center pt-5">
                  {/* <span><img src="/images/zenedo.png" alt="Zenedo" className='h-8'/></span> */}
                  <Link className='text-gray-300 ml-2' href="https://zenodo.org/records/10149295" rel='noopener noreferrer' target="_blank">
                    <img src="/images/zenedo.png" className='h-8 transition-transform transform hover:scale-110 rounded-md' alt="Link Icon" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-w-xl p-10 card-bg ">
              <ul className='text-gray-300'>
                <li className='  text-3xl'>CIC-IDS-2017 V2</li>
               
                <li className='text-lg text-gray-400 pt-3'>Based on Canadian Institute for Cybersecurity’s Intrusion Detection Evaluation Dataset  CSE-IDS2017 dataset that contains benign and the most up-to-date common attacks, which resembles the true real-world data (PCAPs) and the results of the network traffic analysis using CIC Flow meter with labelled flows based on the time stamp, source, and destination IPs, source and destination ports, protocols and attack</li>
                <li className="mb-2 text-2xl flex items-center pt-5">
                  {/* <span><img src="/images/zenedo.png" alt="Zenedo" className='h-8'/></span> */}
                  <Link className='text-gray-300 ml-2' href="https://zenodo.org/records/10141593" rel='noopener noreferrer' target="_blank">
                    <img src="/images/zenedo.png" className='h-8 transition-transform transform hover:scale-110 rounded-md' alt="Link Icon" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-w-xl p-10 card-bg ">
              <ul className='text-gray-300'>
                <li className='text-3xl'>UNSW-NB15 V3</li>
                <li className='text-lg text-gray-400 pt-3'>The dataset is normalised and 1 additional class is synthesised by mixing multiple non-benign classes and is based on The University of New South Wales’ UNSW-NB15 dataset. It has nine types of attacks, namely, Fuzzers, Analysis, Backdoors, DoS, Exploits, Generic, Reconnaissance, Shellcode and Worms.</li>
                <li className="mb-2 text-2xl flex items-center pt-5">
                  {/* <span><img src="/images/zenedo.png" alt="Zenedo" className='h-8'/></span> */}
                  <Link className='text-gray-300 ml-2' href="https://zenodo.org/records/10141617" rel='noopener noreferrer' target="_blank">
                    <img src="/images/zenedo.png" className='h-8 transition-transform transform hover:scale-110 rounded-md' alt="Link Icon" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="max-w-xl p-10 card-bg">
              <ul className='text-gray-300'>
                <li className='  text-3xl'>NSL KDD V2</li>
                <li className='text-lg text-gray-400 pt-3'>This dataset is normalised and 1 additional class is synthesised by mixing multiple non-benign classes. It is based on University of New Brunswick and Canadian Institute of Cybersecurity’s NSL-KDD dataset, which itself is an improvement over Original KDD (Knowledge discovery and Data Mining Tools).</li>
                <li className="mb-2 text-2xl flex items-center pt-5">
                  {/* <span><img src="/images/zenedo.png" alt="Zenedo" className='h-8'/></span> */}
                  <Link className='text-gray-300 ml-2' href="https://zenodo.org/records/10141556" rel='noopener noreferrer' target="_blank">
                    <img src="/images/zenedo.png" className='h-8 transition-transform transform hover:scale-110 rounded-md ' alt="Link Icon" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Datasets;