import Link from 'next/link';
import '../research.css';
export const metadata = {
  title: 'Synthetic-Datasets | ABLUVA',
  description: 'Explore synthetic datasets created by ABLUVA for intrusion detection experiments and proofs. Access extended versions of popular datasets with additional classes for comprehensive analysis.',
};

export default function Datasets() {
return (
    <>
      <div className='bg-black py-20 founder text-justify' id="datasets" >
        <div className="container mx-auto">
          <p className="text-3xl md:text-5xl founder text-gradient md:px-20 text-center">Synthetic Datasets</p>
          <p className="text-2xl md:text-2xl founder text-gray-200 darkText md:px-20 px-5 py-5 text-justify">These datasets were created by extending the world’s most acknowledged and popular datasets used for Intrusion detection, experiments and Proofs. You are welcome to use them for your experiments and extend them.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:px-20 px-5 py-10">
            <div className="max-w-xl p-10 bg-white">
              <ul className='text-gray-900'>
                <li className=' font-semibold text-3xl'>CSE-CIC-IDS2018 V3</li>
                <li className="mb-2 text-2xl "><Link className='text-violet-900 underline' href="https://zenodo.org/records/10149295" rel='noopener noreferrer' >https://zenodo.org/records/10149295
                </Link></li>
                <li className='text-xl'>Based on Canadian Institute for Cybersecurity’s CSE-CIC-IDS2018 dataset that includes includes seven different attack scenarios: Brute-force, Heartbleed, Botnet, DoS, DDoS, Web attacks, and infiltration of the network from inside. This dataset is normalised and 1 new class called "Comb" is added which is a combination of synthesised data of multiple non-benign classes. The data is normalised and 1 new class "Comb" which is a combination of existing attacks is added.</li>
              </ul>
            </div>
            <div className="max-w-xl p-10 bg-white">
              <ul className='text-gray-900'>
                <li className=' font-semibold text-3xl'>CIC-IDS-2017 V2</li>
                <li className="mb-2 text-2xl "><Link className='text-violet-900 underline' href="https://zenodo.org/records/10149295" rel='noopener noreferrer'>https://zenodo.org/records/10141593
                </Link></li> 
                <li className='text-xl'>Based on Canadian Institute for Cybersecurity’s Intrusion Detection Evaluation Dataset  CSE-IDS2017 dataset that contains benign and the most up-to-date common attacks, which resembles the true real-world data (PCAPs) and the results of the network traffic analysis using CICFlowMeter with labelled flows based on the time stamp, source, and destination IPs, source and destination ports, protocols and attack</li>
              </ul>
            </div>
            <div className="max-w-xl p-10 bg-white">
              <ul className='text-gray-900'>
                <li className=' font-semibold text-3xl'>UNSW-NB15 V3</li>
                <li className="mb-2 text-2xl "><Link className='text-violet-900 underline' href="https://zenodo.org/records/10149295" rel='noopener noreferrer'>https://zenodo.org/records/10141617
                </Link></li>
                <li className='text-xl'>The dataset is normalised and 1 additional class is synthesised by mixing multiple non-benign classes and is based on The University of New South Wales’ UNSW-NB15 dataset. It has nine types of attacks, namely, Fuzzers, Analysis, Backdoors, DoS, Exploits, Generic, Reconnaissance, Shellcode and Worms.</li>
              </ul>
            </div>
            <div className="max-w-xl p-10 bg-white">
              <ul className='text-gray-900'>
                <li className=' font-semibold text-3xl'>NSL KDD V2</li>
                <li className="mb-2 text-2xl "><Link className='text-violet-900 underline' href="https://zenodo.org/records/10149295" rel='noopener noreferrer'>https://zenodo.org/records/10141556
                </Link></li>
                <li className='text-xl'>This dataset is normalised and 1 additional class is synthesised by mixing multiple non-benign classes. It is based on University of New Brunswick and Canadian Institute of Cybersecurity’s NSL-KDD dataset, which itself is an improvement over Original KDD (Knowledge discovery and Data Mining Tools).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
