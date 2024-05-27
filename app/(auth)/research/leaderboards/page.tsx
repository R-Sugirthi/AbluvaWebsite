"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';


// Define the Leaderboards component
const Leaderboards: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('AI');
  const [menuOpacity, setMenuOpacity] = useState<number>(0);

  const handleScroll = () => {
    const sections = ['AI', 'paps', 'Leaderboards'];
    const margin = 150;
    let foundActiveSection = false;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offset = element.offsetTop;
        const scrollY = window.scrollY;

        if (scrollY >= offset - margin && scrollY < offset + element.clientHeight - margin && !foundActiveSection) {
          setActiveSection(section);
          foundActiveSection = true;
        }
      }
    });

    const menuOpacity = 1;
    setMenuOpacity(menuOpacity);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className=''>
        <p className="text-4xl md:text-5xl font primary-color-g pt-20 pb-10 text-center" style={{ scrollMarginTop: '150px' }}>Leaderboards</p>
        <div className='flex items-center justify-center research-menu pb-20'>
          <nav className='border border-gray-700 rounded-full text-gray-200 menu-bg1'>
            <ul className='flex items-center justify-center space-x-1 md:py-3 md:px-5 py-2 px-3 '>
              <li
                className={`md:px-5 md:py-2 px-4 py-1 text-center cursor-pointer ${activeSection === 'AI' ? 'menu-bg rounded-full' : ''}`}
                onClick={() => {
                  setActiveSection('AI');
                  const element = document.getElementById('AI');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Insider Threat
              </li>
              <li
                className={`md:px-5 md:py-2 px-4 py-1 text-center cursor-pointer ${activeSection === 'paps' ? 'menu-bg rounded-full' : ''}`}
                onClick={() => {
                  setActiveSection('paps');
                  const element = document.getElementById('paps');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Intrusion
              </li>
              <li
                className={`md:px-5 md:py-2 px-4 py-1 text-center cursor-pointer ${activeSection === 'Leaderboards' ? 'menu-bg rounded-full' : ''}`}
                onClick={() => {
                  setActiveSection('Leaderboards');
                  const element = document.getElementById('Leaderboards');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Artificial Intelligence
              </li>
            </ul>
          </nav>
        </div>

        <div id="AI" className='  pb-20 mx-auto md:px-36 px-5 ' style={{ scrollMarginTop: '220px' }}>
          <p className="text-2xl font text-gray-400 "> <span className='md:text-4xl text-3xl text-gray-300'>Abluva's Pattern Attention Model leads Insider Threat Detection</span>
          </p>
          <div className='pt-20 pb-10 grid md:grid-cols-2 gap-8 flex items-center justify-center' >
            <div className='border border-[#272727] rounded-2xl p-10'>
            <p className="mb-2 flex items-center text-gray-300 text-md">Data Set Details<Link className='ml-2' href="https://kilthub.cmu.edu/articles/dataset/Insider_Threat_Test_Dataset/12841247/1" rel='noopener noreferrer' target="_blank"><img src="/icons/link.png" className='h-5 hover:scale-110' alt="Link Icon" />
                </Link></p>
              <p className='text-gray-500 text-md founder'>                
                Because using real, even de-identified, corporate data raises a variety of legal, ethical, and business issues, the DARPA Anomaly Detection at Multiple Scales (ADAMS) program turned to proxy data sets and synthetic data, with the goal to generate data to simulate the aggregated collection of logs from host-based sensors distributed across all the computer workstations within a large business or government organization over a 500 day period.
              </p>
            </div> 
            <div className='bg-[#ffffff08] p-3 rounded-2xl'>
            <table className="text-gray-300 font text-sm intrusion-table">
            <thead>
                <tr className='darkCell text-md'>
                  <td className="">Model</td>
                  <td className="">Accuracy <span className='text-[#828282]'>(%)</span></td>
                  <td className="">F1 Score <span className='text-[#828282]'>(%)</span></td>
                </tr>
              </thead>
              <tbody>
                <tr className='lightCell'>
                  <td className="">CNN</td>
                  <td className=""> 98.65 </td>
                  <td className="">91.48</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">LSTM</td>
                  <td className="">98.22</td>
                  <td className="">89.9</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">GRU-CNN</td>
                  <td className="">97.39</td>
                  <td className="">55.6</td>
                </tr>
                <tr className='pap'>
                  <td className="">TD-CNN-LSTM</td>
                  <td className="">99.6</td>
                  <td className="">97.54</td>
                </tr>
                <tr className='pap curve1 curve2'>
                  <td className="">TD-CNN-Attention</td>
                  <td className="">99.95</td>
                  <td className="">99.71</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>

        <div id="paps" className='  py-20 mx-auto md:px-36 px-5' style={{ scrollMarginTop: '150px' }}>
          <p className="text-2xl font text-gray-400 "> <span className='md:text-4xl text-3xl text-gray-300'>PaPS Ensemble leads the Security Intrusion Detection Models</span><br></br>Top Performance in Zero-Day Intrusion Detection tasks
          </p>
          <div className='my-20 p-5 bg-[#ffffff08] rounded-2xl flex items-center justify-center' >
            <table className="text-gray-300 font intrusion-table text-sm md:block hidden">
            <thead className=''>
                <tr className='darkCell text-md'>
                  <td className="">Dataset</td>
                  <td className="cell">Description</td>
                  <td className="">Model</td>
                  <td className="">Accuracy <span className='text-[#828282]'>(%)</span></td>
                  <td className="">F1 Score <span className='text-[#828282]'>(%)</span></td>
                </tr>
              </thead>
              
              <tbody className=''>
                <tr className='lightCell'>
                  <td className="text-gray-300" rowSpan={5}>BODMAS</td>
                  <td className="" rowSpan={5}><span className='font-bold'>B</span>lue <span className='font-bold'>H</span>exagon <span className='font-bold'>O</span>pen <span className='font-bold'>D</span>ataset for <span className='font-bold'>M</span>alware <span className='font-bold'>A</span>nalysi<span className='font-bold'>S</span> - BODMAS dataset contains 57,293 malware samples and 77,142 benign samples collected from August 2019 to September 2020, with carefully curated family information (581 families).</td>
                  <td className="">Random Forest</td>
                  <td className="">24.68</td>
                  <td className="">13.5</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">XGBoost</td>
                  <td className="">69.41</td>
                  <td className="">74.6</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">LightGBM</td>
                  <td className="">68.34</td>
                  <td className="">73.47</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">MLP</td>
                  <td className="">63.78</td>
                  <td className="">68.47</td>
                </tr>
                <tr className='paps'>
                  <td className="">PaPS Ensemble</td>
                  <td className="">85.04</td>
                  <td className="">89.06</td>
                </tr>
           

                <tr className='lightCell'>
                  <td className=" text-gray-300" rowSpan={6}>UNSW NB-15</td>
                  <td className=" " rowSpan={6}>This data set has a hybrid of the real modern normal and the contemporary synthesized attack activities of the network traffic.</td>
                  <td className="">Random Forest</td>
                  <td className="">96.05</td>
                  <td className="">86.13</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">XGBoost</td>
                  <td className="">87.29</td>
                  <td className="">85.38</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">LightGBM</td>
                  <td className="">95.98</td>
                  <td className="">85.84</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">MLP</td>
                  <td className="">92.12</td>
                  <td className="">69.63</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">DNN 5 layers</td>
                  <td className="">76.1</td>
                  <td className="">79.6</td>
                </tr>
                <tr className='paps'>
                  <td className="">PaPS Ensemble</td>
                  <td className="">98.39</td>
                  <td className="">95.23</td>
                </tr>
            

                <tr className='lightCell'>
                  <td className="text-gray-300" rowSpan={8}>CIC IDS-2017</td>
                  <td className="" rowSpan={8}> Dataset contains benign and the most up-to-date common attacks, which resembles the true real-world data (PCAPs).</td>
                  <td className="">Random Forest</td>
                  <td className="">93.44</td>
                  <td className="">91.19</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">XGBoost</td>
                  <td className="">64.28</td>
                  <td className="">59.08</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">LightGBM</td>
                  <td className="">94.35</td>
                  <td className="">92.82</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">MLP</td>
                  <td className="">88.65</td>
                  <td className="">87.75</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">Improved AdaBoost</td>
                  <td className="">81.83</td>
                  <td className="">90.01</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">XAI Approach</td>
                  <td className="">94</td>
                  <td className="">90</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">DNN 5 layers</td>
                  <td className="">93.1</td>
                  <td className="">89.4</td>
                </tr>
                <tr className='paps'>
                  <td className="">PaPS Ensemble</td>
                  <td className="">92.77</td>
                  <td className="">92.99</td>
                </tr>
        

                <tr className='lightCell curve1'>
                  <td className="text-gray-300" rowSpan={6}>UNR IDD</td>
                  <td className="" rowSpan={6}><span className='font-bold'>U</span>niversity of <span className='font-bold'>N</span>evada - <span className='font-bold'>R</span>eno <span className='font-bold'>I</span>ntrusion <span className='font-bold'>D</span>etection <span className='font-bold'>D</span>ataset utilizes network port statistics for fine-grained analysis of intrusions.</td>
                  <td className="">Random Forest</td>
                  <td className="">97.53</td>
                  <td className="">97.79</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">XGBoost</td>
                  <td className="">93.98</td>
                  <td className="">95.15</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">LightGBM</td>
                  <td className="">97.53</td>
                  <td className="">97.79</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">MLP</td>
                  <td className="">92.69</td>
                  <td className="">94.26</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">Bagging Classifier</td>
                  <td className="">-</td>
                  <td className="">94</td>
                </tr>
                <tr className='pap curve2'>
                  <td className="">PaPS Ensemble</td>
                  <td className="">99.73</td>
                  <td className="">99.73</td>
                </tr>
              </tbody>
            </table>
            <table className="text-gray-300 font md:hidden block intru-table">
            <thead>
                <tr className='darkCell '>
                  <td className="">Dataset</td>
                  <td className="">Model</td>
                  <td className="">Accuracy <span className='text-[#828282]'>(%)</span></td>
                  <td className="">F1 Score <span className='text-[#828282]'>(%)</span></td>
                </tr>
              </thead>
              
              <tbody>
                <tr className='lightCell'>
                  <td className=" darkCell" rowSpan={5}><span className='text-gray-300'>BODMAS</span><br></br>
                  <span className='font-bold'>B</span>lue <span className='font-bold'>H</span>exagon <span className='font-bold'>O</span>pen <span className='font-bold'>D</span>ataset for <span className='font-bold'>M</span>alware <span className='font-bold'>A</span>nalysi<span className='font-bold'>S</span> - BODMAS dataset contains 57,293 malware samples and 77,142 benign samples collected from August 2019 to September 2020, with carefully curated family information (581 families).</td>
                  <td className="">Random Forest</td>
                  <td className="">24.68</td>
                  <td className="">13.5</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">XGBoost</td>
                  <td className="">69.41</td>
                  <td className="">74.6</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">LightGBM</td>
                  <td className="">68.34</td>
                  <td className="">73.47</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">MLP</td>
                  <td className="">63.78</td>
                  <td className="">68.47</td>
                </tr>
                <tr className='paps'>
                  <td className="">PaPS Ensemble</td>
                  <td className="">85.04</td>
                  <td className="">89.06</td>
                </tr>
           

                <tr className='lightCell'>
                  <td className=" darkCell" rowSpan={6}><span className='text-gray-300'>UNSW NB-15</span><br></br>
                  This data set has a hybrid of the real modern normal and the contemporary synthesized attack activities of the network traffic.</td>
                  <td className="">Random Forest</td>
                  <td className="">96.05</td>
                  <td className="">86.13</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">XGBoost</td>
                  <td className="">87.29</td>
                  <td className="">85.38</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">LightGBM</td>
                  <td className="">95.98</td>
                  <td className="">85.84</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">MLP</td>
                  <td className="">92.12</td>
                  <td className="">69.63</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">DNN 5 layers</td>
                  <td className="">76.1</td>
                  <td className="">79.6</td>
                </tr>
                <tr className='paps'>
                  <td className="">PaPS Ensemble</td>
                  <td className="">98.39</td>
                  <td className="">95.23</td>
                </tr>
            

                <tr className='lightCell'>
                  <td className=" darkCell" rowSpan={8}><span className='text-gray-300'>CIC IDS-2017</span><br></br>
 Dataset contains benign and the most up-to-date common attacks, which resembles the true real-world data (PCAPs).</td>
                  <td className="">Random Forest</td>
                  <td className="">93.44</td>
                  <td className="">91.19</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">XGBoost</td>
                  <td className="">64.28</td>
                  <td className="">59.08</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">LightGBM</td>
                  <td className="">94.35</td>
                  <td className="">92.82</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">MLP</td>
                  <td className="">88.65</td>
                  <td className="">87.75</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">Improved AdaBoost</td>
                  <td className="">81.83</td>
                  <td className="">90.01</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">XAI Approach</td>
                  <td className="">94</td>
                  <td className="">90</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">DNN 5 layers</td>
                  <td className="">93.1</td>
                  <td className="">89.4</td>
                </tr>
                <tr className='paps'>
                  <td className="">PaPS Ensemble</td>
                  <td className="">92.77</td>
                  <td className="">92.99</td>
                </tr>
        

                <tr className='lightCell'>
                  <td className=" darkCell" rowSpan={6}><span className='text-gray-300'>UNR IDD</span><br></br><span className='font-bold'>U</span>niversity of <span className='font-bold'>N</span>evada - <span className='font-bold'>R</span>eno <span className='font-bold'>I</span>ntrusion <span className='font-bold'>D</span>etection <span className='font-bold'>D</span>ataset utilizes network port statistics for fine-grained analysis of intrusions.</td>
                  <td className="">Random Forest</td>
                  <td className="">97.53</td>
                  <td className="">97.79</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">XGBoost</td>
                  <td className="">93.98</td>
                  <td className="">95.15</td>
                </tr>
                <tr className='lightCell'>

                  <td className="">LightGBM</td>
                  <td className="">97.53</td>
                  <td className="">97.79</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">MLP</td>
                  <td className="">92.69</td>
                  <td className="">94.26</td>
                </tr>
                <tr className='lightCell'>
                  <td className="">Bagging Classifier</td>
                  <td className="">-</td>
                  <td className="">94</td>
                </tr>
                <tr className='pap curve'>
                  <td className="">PaPS Ensemble</td>
                  <td className="">99.73</td>
                  <td className="">99.73</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=' py-20' id="Leaderboards" style={{ scrollMarginTop: '150px' }}>
          <div className=" mx-auto md:px-36 px-5">
          <div className=''>
          <p className="md:text-4xl text-3xl text-gray-300">
  Ranked #1 on Leaderboard on 5 AI Tasks
  <Link className='ml-2' href="https://paperswithcode.com/paper/no-means-no-a-non-im-proper-modeling-approach" rel='noopener noreferrer' target="_blank">
    <img src="/icons/link.png" className='h-10 p-1 hover:scale-110 inline-block' alt="Link Icon"/>
  </Link>
</p>

</div>
            <p className='text-2xl md:text-2xl font text-gray-400'>State of the Art Model with F1 above 99% for Sherlock Dataset</p>
            <div className='bg-[#ffffff08] p-5 rounded-2xl mt-10'>
            <div className='bg-black p-5 rounded-2xl'>
              <img src="/images/leaderboard.jpg" className='w-full' alt="leaderboard table" />
            </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

// Export the component
export default Leaderboards;
