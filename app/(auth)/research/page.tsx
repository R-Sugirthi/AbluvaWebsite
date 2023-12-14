import Link from 'next/link';
import './research.css';


export const metadata = {
  title: 'Research | ABLUVA',
  // description: 'Page description',
};

export default function Research() {


  return (
    <>
      <div className="py-32 md:py-10 md:pl-48 md:pr-12 lg:pr-32 sm:px-10 bg">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
          <div className="w-full text-white pt-20  pb-40 w-3/4">
            <p className="text-5xl font-bold text-gray-100 founder">Research</p>
            <p className="text-3xl founder text-gray-300">"Unveiling Innovation: Our Research Odyssey"</p>
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

      <div className='bg-[#f2f3f5]  pt-20' id="leaderboards">
        <div className="container mx-auto md:px-20">
          <p className="text-4xl md:text-5xl founder text-gradient-light py-5 text-center">Leaderboards</p>
          <div className='px-5' >
            <p className="text-2xl md:text-2xl founder text-gray-900 text-justify"> <span className='font-semibold md:text-4xl'>Ranked #1 on Leaderboard on 5 AI Tasks</span><br></br> State of the Art Model with F1 above 99% for Sherlock Dataset
            </p>
          </div>
          <div className='px-5'>
            <img src="/images/Leaderboard.png" className='w-full pt-10' />
          </div>
          <div id="paps" className='pt-28 px-5'>
            <p className="text-2xl md:text-2xl founder text-gray-900 text-justify"> <span className='font-semibold md:text-4xl'>PaPS Ensemble leads the Security Intrusion Detection Models</span><br></br>Top Performance in Zero-Day Intrusion Detection tasks
            </p>
          </div>
          <div className='pt-5 pb-20 ' >
            <table className="table-auto text-gray-900 founder md:text-xl text-lg ">
              <thead>
                <tr className='darkCell text-2xl'>
                  <td className="border">Dataset</td>
                  <td className="border">Model</td>
                  <td className="border">Accuracy (%)</td>
                  <td className="border">F1 Score (%)</td>
                </tr>
              </thead>
              <tbody>
                <tr className='lightCell'>
                  <td className="border darkCell" rowSpan={5}>BODMAS</td>
                  <td className="border">Random Forest</td>
                  <td className="border">24.68</td>
                  <td className="border">13.5</td>
                </tr>
                <tr className='lightCell'>

                  <td className="border">XGBoost</td>
                  <td className="border">69.41</td>
                  <td className="border">74.6</td>
                </tr>
                <tr className='lightCell'>

                  <td className="border">LightGBM</td>
                  <td className="border">68.34</td>
                  <td className="border">73.47</td>
                </tr>
                <tr className='lightCell'>
                  <td className="border">MLP</td>
                  <td className="border">63.78</td>
                  <td className="border">68.47</td>
                </tr>
                <tr className='paps'>
                  <td className="border">PaPS Ensemble</td>
                  <td className="border">85.04</td>
                  <td className="border">89.06</td>
                </tr>
                <tr>
                  <td className="borderEnd" colSpan={4}></td>
                </tr>

                <tr className='lightCell'>
                  <td className="border darkCell" rowSpan={6}>UNSW NB-15</td>
                  <td className="border">Random Forest</td>
                  <td className="border">96.05</td>
                  <td className="border">86.13</td>
                </tr>
                <tr className='lightCell'>

                  <td className="border">XGBoost</td>
                  <td className="border">87.29</td>
                  <td className="border">85.38</td>
                </tr>
                <tr className='lightCell'>

                  <td className="border">LightGBM</td>
                  <td className="border">95.98</td>
                  <td className="border">85.84</td>
                </tr>
                <tr className='lightCell'>

                  <td className="border">MLP</td>
                  <td className="border">92.12</td>
                  <td className="border">69.63</td>
                </tr>
                <tr className='lightCell'>

                  <td className="border">DNN 5 layers</td>
                  <td className="border">76.1</td>
                  <td className="border">79.6</td>
                </tr>
                <tr className='paps'>
                  <td className="border">PaPS Ensemble</td>
                  <td className="border">98.39</td>
                  <td className="border">95.23</td>
                </tr>
                <tr>
                  <td className="border" colSpan={4}></td>
                </tr>

                <tr className='lightCell'>
                  <td className="border darkCell" rowSpan={8}>CIC IDS-2017</td>
                  <td className="border">Random Forest</td>
                  <td className="border">93.44</td>
                  <td className="border">91.19</td>
                </tr>
                <tr className='lightCell'>
                  <td className="border">XGBoost</td>
                  <td className="border">64.28</td>
                  <td className="border">59.08</td>
                </tr>
                <tr className='lightCell'>
                  <td className="border">LightGBM</td>
                  <td className="border">94.35</td>
                  <td className="border">92.82</td>
                </tr>
                <tr className='lightCell'>
                  <td className="border">MLP</td>
                  <td className="border">88.65</td>
                  <td className="border">87.75</td>
                </tr>
                <tr className='lightCell'>
                  <td className="border">Improved AdaBoost[35]</td>
                  <td className="border">81.83</td>
                  <td className="border">90.01</td>
                </tr>
                <tr className='lightCell'>
                  <td className="border">XAI Approach</td>
                  <td className="border">94</td>
                  <td className="border">90</td>
                </tr>
                <tr className='lightCell'>
                  <td className="border">DNN 5 layers</td>
                  <td className="border">93.1</td>
                  <td className="border">89.4</td>
                </tr>
                <tr className='paps'>
                  <td className="border">PaPS Ensemble</td>
                  <td className="border">92.77</td>
                  <td className="border">92.99</td>
                </tr>
                <tr>
                  <td className="border" colSpan={4}></td>
                </tr>

                <tr className='lightCell'>
                  <td className="border darkCell" rowSpan={6}>UNR IDD</td>
                  <td className="border">Random Forest</td>
                  <td className="border">97.53</td>
                  <td className="border">97.79</td>
                </tr>
                <tr className='lightCell'>

                  <td className="border">XGBoost</td>
                  <td className="border">93.98</td>
                  <td className="border">95.15</td>
                </tr>
                <tr className='lightCell'>

                  <td className="border">LightGBM</td>
                  <td className="border">97.53</td>
                  <td className="border">97.79</td>
                </tr>
                <tr className='lightCell'>
                  <td className="border">MLP</td>
                  <td className="border">92.69</td>
                  <td className="border">94.26</td>
                </tr>
                <tr className='lightCell'>
                  <td className="border">Bagging Classifier</td>
                  <td className="border">-</td>
                  <td className="border">94</td>
                </tr>
                <tr className='paps'>
                  <td className="border">PaPS Ensemble</td>
                  <td className="border">99.73</td>
                  <td className="border">99.73</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='bg-black py-20 founder text-justify' id="datasets" >
        <div className="container mx-auto">
          <p className="text-3xl md:text-5xl founder text-gradient md:px-20 text-center">Synthetic Datasets</p>
          <p className="text-2xl md:text-2xl founder text-gray-200 darkText md:px-20 px-5 py-5 text-justify">These datasets were created by extending the world’s most acknowledged and popular datasets used for Intrusion detection, experiments and Proofs. You are welcome to use them for your experiments and extend them.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:px-20 px-5 py-10">
            <div className="max-w-xl p-10 bg-white">
              <ul className='text-gray-900'>
                <li className=' font-semibold text-3xl'>CSE-CIC-IDS2018 V3</li>
                <li className="mb-2 text-2xl "><Link className='text-violet-900 underline' href="https://zenodo.org/records/10149295" >https://zenodo.org/records/10149295
                </Link></li>
                <li className='text-xl'>Based on Canadian Institute for Cybersecurity’s CSE-CIC-IDS2018 dataset that includes includes seven different attack scenarios: Brute-force, Heartbleed, Botnet, DoS, DDoS, Web attacks, and infiltration of the network from inside. This dataset is normalised and 1 new class called "Comb" is added which is a combination of synthesised data of multiple non-benign classes. The data is normalised and 1 new class "Comb" which is a combination of existing attacks is added.</li>
              </ul>
            </div>
            <div className="max-w-xl p-10 bg-white">
              <ul className='text-gray-900'>
                <li className=' font-semibold text-3xl'>CIC-IDS-2017 V2</li>
                <li className="mb-2 text-2xl "><Link className='text-violet-900 underline' href="https://zenodo.org/records/10149295" >https://zenodo.org/records/10141593
                </Link></li>
                <li className='text-xl'>Based on Canadian Institute for Cybersecurity’s Intrusion Detection Evaluation Dataset  CSE-IDS2017 dataset that contains benign and the most up-to-date common attacks, which resembles the true real-world data (PCAPs) and the results of the network traffic analysis using CICFlowMeter with labelled flows based on the time stamp, source, and destination IPs, source and destination ports, protocols and attack</li>
              </ul>
            </div>
            <div className="max-w-xl p-10 bg-white">
              <ul className='text-gray-900'>
                <li className=' font-semibold text-3xl'>UNSW-NB15 V3</li>
                <li className="mb-2 text-2xl "><Link className='text-violet-900 underline' href="https://zenodo.org/records/10149295" >https://zenodo.org/records/10141617
                </Link></li>
                <li className='text-xl'>The dataset is normalised and 1 additional class is synthesised by mixing multiple non-benign classes and is based on The University of New South Wales’ UNSW-NB15 dataset. It has nine types of attacks, namely, Fuzzers, Analysis, Backdoors, DoS, Exploits, Generic, Reconnaissance, Shellcode and Worms.</li>
              </ul>
            </div>
            <div className="max-w-xl p-10 bg-white">
              <ul className='text-gray-900'>
                <li className=' font-semibold text-3xl'>NSL KDD V2</li>
                <li className="mb-2 text-2xl "><Link className='text-violet-900 underline' href="https://zenodo.org/records/10149295" >https://zenodo.org/records/10141556
                </Link></li>
                <li className='text-xl'>This dataset is normalised and 1 additional class is synthesised by mixing multiple non-benign classes. It is based on University of New Brunswick and Canadian Institute of Cybersecurity’s NSL-KDD dataset, which itself is an improvement over Original KDD (Knowledge discovery and Data Mining Tools).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
                  <img src="./icons/ongoing.png" className='h-10 md:px-10 px-5' />
                  <ul className='text-gray-900'>
                    <li className=' font-semibold text-lg md:text-2xl'>Node Relevance based Graph Neural Network Pruning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-black pt-20 pb-20 founder text-justify' id="patents">
        <div className="container mx-auto">
          <p className="text-3xl md:text-5xl founder text-gradient md:px-20 px-5 text-center pb-5">Patents</p>
          <p className="text-2xl md:text-3xl founder text-gray-200 md:px-20 px-5 font-semibold">Granted Patents</p>
          <p className="text-2xl md:text-2xl founder text-gray-200 darkText md:px-20 px-5">These patents have been granted to our chief in his past avatars.</p>
          <div className="md:px-20 px-5 py-10">
            <div className="max-w-full p-10 bg-white">
              <ul className='text-gray-900'>
                <li className="mb-2 text-3xl "><Link className='text-violet-900 underline' href="https://patents.google.com/patent/US8676236B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" >US8676236B
                </Link></li>
                <li className="mb-2 text-2xl font-semibold">System, method, and computer program for generating a short message service (SMS) message using template codes</li>
                <li className='text-xl'>A system, method, and computer program product are provided for generating a short message service (SMS) message using template codes. In use, a message to be sent as a short message service (SMS) message is received. Additionally, a template associated with the message is identified. Further, at least one code associated with the template is identified. Moreover, the SMS message is generated using the at least one code.</li>
              </ul>
            </div>
            <div className="max-w-full p-10 bg-white my-5">
              <ul className='text-gray-900'>
                <li className="mb-2 text-3xl "><Link className='text-violet-900 underline' href="https://patents.google.com/patent/US8760995B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" >US8760995B1
                </Link></li>
                <li className="mb-2 text-2xl font-semibold">System, method, and computer program for routing data in a wireless sensor network</li>
                <li className='text-xl'>A system, method, and computer program product are provided for routing data in a wireless sensor network. In use, sensed data is identified utilizing a first sensor node of a plurality of sensor nodes in a wireless sensor network, the sensor nodes each capable of sensing data. Additionally, a plurality of parameters associated with each route existing between the first sensor node and a gateway node in the wireless sensor network connecting the wireless sensor network to another network is received at the first sensor node from at least one second sensor node in direct communication with the first sensor node via the wireless communication network. Furthermore, one of the at least one second sensor node that is in direct communication with the first sensor node is selected, based on the parameters. Still yet, the sensed data is forwarded from the first sensor node to the selected second sensor node.</li>
              </ul>
            </div>
            <div className="max-w-full p-10 bg-white my-5">
              <ul className='text-gray-900'>
                <li className="mb-2 text-3xl "><Link className='text-violet-900 underline' href="https://patents.google.com/patent/US8949733B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" >US8949733B1
                </Link></li>
                <li className="mb-2 text-2xl font-semibold">System, method, and computer program for displaying a subset of a plurality of fields to a user</li>
                <li className='text-xl'>A system, method, and computer program product are provided for displaying a subset of a plurality of fields to a user. In use, a plurality of fields for receiving input from a user is retrieved. Additionally, the plurality of fields is displayed to the user in a first window of a display. Further, a subset of the plurality of fields is displayed to the user in a second window of the display separate from the first window, where the second window is positioned according to a span of vision and an angle of vision of the user.</li>
              </ul>
            </div>
            <div className="max-w-full p-10 bg-white my-5">
              <ul className='text-gray-900'>
                <li className="mb-2 text-3xl "><Link className='text-violet-900 underline' href="https://patents.google.com/patent/US8594095B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" >US8594095B1
                </Link></li>
                <li className="mb-2 text-2xl font-semibold">System, method, and computer program for modifying an 802.1Q and/or 802.1QinQ header to reduce a size of an associated data packet</li>
                <li className='text-xl'>A system, method, and computer program product are provided for modifying an 802.1Q and/or 802.1QinQ header to reduce a size of an associated data packet. In use, data to be communicated over a network is identified. Additionally, at least one data packet is generated for use in communicating the data over the network, where each data packet includes one of an 802.1Q and an 802.1QinQ Ethernet header. Furthermore, the Ethernet header is modified to reduce a size of the at least one data packet.</li>
              </ul>
            </div>
            <div className="max-w-full p-10 bg-white my-5">
              <ul className='text-gray-900'>
                <li className="mb-2 text-3xl "><Link className='text-violet-900 underline' href="https://patents.google.com/patent/US9128587B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" >US9128587B1
                </Link></li>
                <li className="mb-2 text-2xl font-semibold">System, method, and computer program for presenting service options to a user utilizing a three-dimensional structure</li>
                <li className='text-xl'>A system, method, and computer program product are provided for presenting service options to a user utilizing a three-dimensional structure. In use, a first group of service options are presented to a user, utilizing a three-dimensional structure. Additionally, a selection of one or more of the first group of service options by the user is received. Further, a selection of a depth element associated with the three-dimensional structure by the user is received. Further still, a second group of service options are presented to the user utilizing the three-dimensional structure, based on the selection of the one or more of the first group of service options and the selection of the depth element.</li>
              </ul>
            </div>
            <p className="text-2xl md:text-3xl founder text-gray-200 font-semibold pt-5 pb-10">Applied patent</p>
            <div className="max-w-full bg-white">
              <div className='md:p-10 p-5'>
                <div className=' flex items-center justify-center'>
                  <img src="./icons/ongoing.png" className='h-10 md:px-10 px-5' />
                  <ul className='text-gray-900'>
                    <li className=' font-semibold md:text-2xl text-lg'>Autonomous Authorization in heterogeneous environment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer customMainText="Reach out to Abluva to know more about Research" customSubText="Our Research is our differentiator"/> */}
    </>
  );
}
