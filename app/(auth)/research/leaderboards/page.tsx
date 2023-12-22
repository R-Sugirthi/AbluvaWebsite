import '../research.css';
export const metadata = {
  title: 'Leaderboards | ABLUVA',
  description: 'Explore ABLUVA\'s achievements on various leaderboards. Check the performance of our models across different datasets and tasks.',
};

export default function Leaderboards() {
return (
    <>
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
    </>
  );
}
