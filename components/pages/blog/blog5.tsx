import Link from 'next/link';
export default function Blog5() {
  return (
    <section className='p-5 md:px-72 md:pb-10 sm:py-8'>
      {/* <div>
        <p className='text-gray-500 py-5 border-b border-gray-500 font'>Explore</p>
      </div> */}
      <div>
      
        <p className='subText pt-5'>
        This blog aims to delve into the understated yet crucial role of synthetic datasets in ML-based Intrusion Detection, emphasizing key considerations in their implementation. Additionally, we explore the limitations of prevalent IDS datasets and introduce Abluva's Enhanced IDS synthetic datasets as a measured solution.
        </p><br />
        {/* <img src="/images/AI.jpg" alt="AI" className='opacity-30 w-full pb-5 filter invert'/> */}
        <p className='mainText'>Why Synthetic Data Matters for ML-based IDS</p><br />
        <p className='subText'><span className='text-2xl'>Synthetic data generation offers several advantages for IDS training</span>
        </p><br />
        <p className='subText'><span className="font-semibold text-xl">Cost-effectiveness</span><br></br>Creating real-world attack data for training can be resource-intensive and time-consuming. Synthetic data provides a cost-effective alternative, enabling the generation of large datasets with specific attack types and variations.
        </p><br />
        <p className='subText'><span className="font-semibold text-xl">Data enrichment</span><br></br>Synthetic data can augment existing datasets, filling in gaps and adding diversity to address specific needs and enhance model generalizability.
        </p><br />
        <p className='subText'><span className="font-semibold text-xl">Emerging threats</span><br></br>Staying ahead of evolving cyber threats is crucial. Synthetic data allows for the creation of simulated attacks based on emerging and hypothetical scenarios, preparing models for future threats.
        </p><br />
        {/* <p className='subText'><span className="font-semibold text-xl">Emerging threats</span><br></br>Staying ahead of evolving cyber threats is crucial. Synthetic data allows for the creation of simulated attacks based on emerging and hypothetical scenarios, preparing models for future threats.
        </p><br /> */}
        <p className='mainText'>Important Considerations for Working with Synthetic Data</p><br />
        <p className='subText'>While synthetic data offers immense potential, certain critical aspects need to be focused upon creating the dataset. 
        </p><br />
        <p className='subText'><span className="font-semibold text-xl">Data Quality</span><br></br>The realism and accuracy of the generated data are paramount. Ensure your generation model uses high-quality real-world data as a reference to capture realistic patterns and distributions.
        </p><br />
        <p className='subText'><span className="font-semibold text-xl">Data Balance</span><br></br>Avoid imbalanced datasets where certain attack types are overrepresented while others are rare. This can lead to models biased towards detecting prevalent attacks and neglecting less frequent but equally dangerous ones.
        </p><br />
        <p className='subText'><span className="font-semibold text-xl">Relevance/Adaptability to emerging threats</span><br></br>Synthetic data needs to evolve alongside real-world threats. Continuously update your generation process and data sources to reflect the latest cyber threat landscape.<br></br>
        </p><br />
        <p className='subText'><span className="font-semibold text-xl">Overcoming Overfitting</span><br></br>Synthetic data generated from limited training data can lead to overfitting, where the model performs well on the specific data it was trained on but fails to generalize to new scenarios. Use diverse training data and validation techniques to mitigate this risk.
        </p><br />

        <p className='mainText'>Limitations of Popular IDS Datasets</p><br />
        <p className='subText'>Several factors can limit the effectiveness of IDS datasets for training and testing intrusion detection systems. Here's a breakdown of limitations for the datasets you mentioned: 
        </p><br />

        {/* <p className='subText'><span className="font-semibold text-2xl">CSE-CIC-IDS2018</span><br></br>
        <ul className='pt-2'>
          <li><span className='text-2xl font-bold'>Label inconsistencies: </span> Issues with label accuracy and inconsistencies have been reported, which can negatively impact model training.</li>
          <li className='pt-2'><span className='text-2xl font-bold'>Imbalanced classes: </span> The dataset disproportionately favors certain attack types, making it challenging to train models to detect less frequent attacks.</li>
          <li className='pt-2'><span className='text-2xl font-bold'>Limited attack diversity: </span> The attack types within the dataset might not reflect the full range of real-world threats, impacting model generalizability.</li>
        </ul>
        </p><br />

        <p className='subText'><span className="font-semibold text-2xl">CIC-IDS-2017</span><br></br>
        <ul className='pt-2'>
          <li><span className='text-2xl font-bold'>Attack mimicry: </span> Some attacks included are emulated rather than captured from real networks, potentially affecting model robustness to true attack behavior.</li>
          <li className='pt-2'><span className='text-2xl font-bold'>Static features: </span> Features primarily focus on packet-level information, limiting the model's ability to learn from more complex network anomalies.</li>
          <li className='pt-2'><span className='text-2xl font-bold'>Temporal dependencies overlooked: </span> The dataset doesn't explicitly encode temporal relationships between events, hindering models from analyzing attack sequences.
          </li>
        </ul>
        </p><br />

        <p className='subText'><span className="font-semibold text-2xl">UNSW-NB15</span><br></br>
        <ul className='pt-2'>
          <li><span className='text-2xl font-bold'>Domain dependence: </span> The dataset is heavily tailored to a specific network environment, potentially limiting its transferability to other network configurations.</li>
          <li className='pt-2'><span className='text-2xl font-bold'>Artificial attack scenarios: </span> Some attack types are synthetically generated, raising concerns about their realism and applicability to real-world situations.</li>
          <li className='pt-2'>Static labels: <span className='text-2xl font-bold'> Labels remain unchanged for different time windows, neglecting the evolving nature of real-world attacks.</span>
          </li>
        </ul>
        </p><br />

        <p className='subText'><span className="font-semibold text-2xl">NSL KDD</span><br></br>
        <ul className='pt-2'>
          <li><span className='text-2xl font-bold'>Concept drift: </span> The dataset is outdated and doesn't reflect the evolution of attack techniques, making it less relevant to contemporary threats.</li>
          <li className='pt-2'><span className='text-2xl font-bold'>Attack redundancy: </span> Many redundant or irrelevant features exist, increasing model training time and potentially hindering performance.</li>
          <li className='pt-2'><span className='text-2xl font-bold'>Class imbalance: </span> Similar to CIC-IDS2018, the dataset heavily favors normal traffic, making it challenging to train models for effective anomaly detection.</li>
        </ul>
        </p><br /> */}

<div className='grid grid-cols-1 md:grid-cols-2 gap-5 fontpt-5 pb-10 subText '> 
<div className="p-5 card-bg ">
    <p className='text-white mainSubText'>CSE-CIC-IDS2018</p>
    <ul className='pt-5'>
        <li><span className='font-bold'>Issue:</span> Label inconsistencies and inaccuracies, impacting model training.</li>
        <li className='pt-2'><span className='font-bold'>Challenge:</span> Imbalanced classes, favoring certain attack types.</li>
        <li className='pt-2'><span className='font-bold'>Limitation:</span> Limited attack diversity, affecting model generalizability.</li>
    </ul>
</div>

<div className="p-5 card-bg">
    <p className='text-white mainSubText'>CIC-IDS-2017</p>
    <ul className='pt-5'>
        <li><span className='font-bold'>Issue:</span> Attack mimicry with emulated attacks.</li>
        <li className='pt-2'><span className='font-bold'>Challenge:</span> Focus on static packet-level features.</li>
        <li className='pt-2'><span className='font-bold'>Limitation:</span> Lack of temporal event relationships.</li>
    </ul>
</div>

<div className="p-5 card-bg">
    <p className='text-white mainSubText'>UNSW-NB15</p>
    <ul className='pt-5'>
        <li><span className='font-bold'>Issue:</span> Domain-dependent features.</li>
        <li className='pt-2'><span className='font-bold'>Challenge:</span> Artificially generated attack scenarios.</li>
        <li className='pt-2'><span className='font-bold'>Limitation:</span> Static labels for evolving attacks.</li>
    </ul>
</div>

<div className="p-5 card-bg ">
    <p className='text-white mainSubText'>NSL KDD</p>
    <ul className='pt-5'>
        <li><span className='font-bold'>Issue:</span> Outdated dataset not reflecting current attack techniques.</li>
        <li className='pt-2'><span className='font-bold'>Challenge:</span> Redundant and irrelevant features.</li>
        <li className='pt-2'><span className='font-bold'>Limitation:</span> Class imbalance with normal traffic.</li>
    </ul>
</div>
</div>
        
        <p className='subText'><span className='text-2xl'>General Concerns across Datasets </span>
        </p><br />
        <p className='subText'><span className="font-semibold text-xl">Static Network Environment</span><br></br>Most datasets capture traffic from a single network setup, limiting generalizability to diverse network configurations.
        </p><br />
        <p className='subText'><span className="font-semibold text-xl">Privacy Concerns</span><br></br>Sharing network traffic data can raise privacy concerns, requiring careful anonymization strategies.
        </p><br />
        <p className='subText'><span className="font-semibold text-xl">Lack of Ground Truth</span><br></br>Verifying the accuracy and completeness of attack labels can be challenging, impacting model training effectiveness.
        </p><br />
        <p className='mainText'>Abluva's Enhanced IDS Synthetic Data Sets</p><br />
        <p className='subText'>Abluva is committed to providing high-quality synthetic data for IDS training.  Our team has created A new model using GAN called BLENDER-GAN. This model generates attack classes and benign classes that reflect better real world scenarios. Following Datasets have been enhanced using this model. (BLENDER-GAN will be published shortly.)
        </p><br />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 fontpy-5'>
        <div className=" p-5 card-bg">
              <ul className='text-gray-300'>
                <li className='text-2xl'>CSE-CIC-IDS 2018 V3</li>
                <li className='text-lg text-gray-400 pt-3'>1,00,000 additional data points for the "Comb" class enhance this attack-focused dataset, improving model training efficacy.</li>
                <li className="mb-2 text-2xl flex items-center pt-5">
                  <Link className='text-gray-300' href="https://zenodo.org/records/10149295" rel='noopener noreferrer' target="_blank">
                    <img src="/images/zenedo.png" className='h-8 transition-transform transform hover:scale-110 rounded-md' alt="Link Icon" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" p-5 card-bg">
              <ul className='text-gray-300'>
                <li className='text-2xl'>NSL KDD V2</li>
                <li className='text-lg text-gray-400 pt-3'>41,200 synthetic data points for the "Comb" class are added that were generated using Abluva’s Blender GAN, significantly increasing attack diversity and model generalizability.</li>
                <li className="mb-2 text-2xl flex items-center pt-5">
                  <Link className='text-gray-300' href="https://zenodo.org/records/10141556" rel='noopener noreferrer' target="_blank">
                    <img src="/images/zenedo.png" className='h-8 transition-transform transform hover:scale-110 rounded-md' alt="Link Icon" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" p-5 card-bg">
              <ul className='text-gray-300'>
                <li className='text-2xl'>UNSW NB 15 V3</li>
                <li className='text-lg text-gray-400 pt-3'>A new "Comb" class with 15,000 data points mimicking real-world attack characteristics, enriching the dataset for more robust model training has been added.</li>
                <li className="mb-2 text-2xl flex items-center pt-5">
                  <Link className='text-gray-300' href="https://zenodo.org/records/10141617" rel='noopener noreferrer' target="_blank">
                    <img src="/images/zenedo.png" className='h-8 transition-transform transform hover:scale-110 rounded-md' alt="Link Icon" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" p-5 card-bg">
              <ul className='text-gray-300'>
                <li className='text-2xl'>CIC-IDS 2017 V2</li>
                <li className='text-lg text-gray-400 pt-3'>We amplified the dataset with additional "Comb" class with 1,72,800 synthetic data points, making it a more comprehensive and versatile dataset for attack detection research.</li>
                <li className="mb-2 text-2xl flex items-center pt-5">
                  <Link className='text-gray-300' href="https://zenodo.org/records/10141593" rel='noopener noreferrer' target="_blank">
                    <img src="/images/zenedo.png" className='h-8 transition-transform transform hover:scale-110 rounded-md' alt="Link Icon" />
                  </Link>
                </li>
              </ul>
            </div>
        </div>
        <p className='subText pt-5'>You can read more about these datasets on our<Link href='/research/datasets' className='primary-color'> <span className='underline'>Synthetic Datasets page.</span></Link>.
        </p><br />
        <p className='subText'>By leveraging the power of synthetic data and addressing its key considerations, we can build robust and resilient intrusion detection systems, securing our digital future in the face of ever-evolving cyber threats.
        </p><br />
    </div>
    </section>
  )
}
