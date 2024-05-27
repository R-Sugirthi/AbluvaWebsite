import Link from 'next/link';
import { Helmet } from 'react-helmet';


const Patents: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <title>Patents | ABLUVA</title>
        <meta name="description" content="Explore granted patents and applied patents by ABLUVA. Discover innovative solutions in the field of technology and telecommunications." />
      </Helmet> */}
      <div className=' py-20 text-gray-300' id="Patents" style={{ scrollMarginTop: '140px' }}>
        <div className="md:px-36 px-5 mx-auto">
          <p className="text-4xl md:text-5xl font primary-color-g text-center pb-10">Patents</p>
          <p className="text-3xl founder">Granted Patents</p>
          <p className="text-2xl md:text-2xl font">These patents have been granted to our chief in his past avatars.</p>
          <div className="py-10">
            <div className="max-w-full p-10 card-bg">
              <ul className='text-gray-300'>
                <li className="mb-2 text-3xl flex items-center ">US8676236B<Link className='ml-2' href="https://patents.google.com/patent/US8676236B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" rel='noopener noreferrer' target="_blank"><img src="/icons/link.png" className='h-7 hover:scale-110' alt="Link Icon" />
                </Link></li>
                <li className="mb-2 text-2xl ">System, method, and computer program for generating a short message service (SMS) message using template codes</li>
                <li className='text-lg text-gray-400'>A system, method, and computer program product are provided for generating a short message service (SMS) message using template codes. In use, a message to be sent as a short message service (SMS) message is received. Additionally, a template associated with the message is identified. Further, at least one code associated with the template is identified. Moreover, the SMS message is generated using the at least one code.</li>
              </ul>
            </div>
            <div className="max-w-full p-10 card-bg my-5">
              <ul className='text-gray-300'>
                <li className="mb-2 text-3xl flex items-center  ">US8760995B1<Link className='ml-2' href="https://patents.google.com/patent/US8760995B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" rel='noopener noreferrer' target="_blank"><img src="/icons/link.png" className='h-7 hover:scale-110' alt="Link Icon" />
                </Link></li>
                <li className="mb-2 text-2xl ">System, method, and computer program for routing data in a wireless sensor network</li>
                <li className='text-lg text-gray-400'>A system, method, and computer program product are provided for routing data in a wireless sensor network. In use, sensed data is identified utilizing a first sensor node of a plurality of sensor nodes in a wireless sensor network, the sensor nodes each capable of sensing data. Additionally, a plurality of parameters associated with each route existing between the first sensor node and a gateway node in the wireless sensor network connecting the wireless sensor network to another network is received at the first sensor node from at least one second sensor node in direct communication with the first sensor node via the wireless communication network. Furthermore, one of the at least one second sensor node that is in direct communication with the first sensor node is selected, based on the parameters. Still yet, the sensed data is forwarded from the first sensor node to the selected second sensor node.</li>
              </ul>
            </div>
            <div className="max-w-full p-10 card-bg my-5">
              <ul className='text-gray-300'>
                <li className="mb-2 text-3xl flex items-center  ">US8949733B1<Link className='ml-2' href="https://patents.google.com/patent/US8949733B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" rel='noopener noreferrer' target="_blank"><img src="/icons/link.png" className='h-7 hover:scale-110' alt="Link Icon" />
                </Link></li>
                <li className="mb-2 text-2xl ">System, method, and computer program for displaying a subset of a plurality of fields to a user</li>
                <li className='text-lg text-gray-400'>A system, method, and computer program product are provided for displaying a subset of a plurality of fields to a user. In use, a plurality of fields for receiving input from a user is retrieved. Additionally, the plurality of fields is displayed to the user in a first window of a display. Further, a subset of the plurality of fields is displayed to the user in a second window of the display separate from the first window, where the second window is positioned according to a span of vision and an angle of vision of the user.</li>
              </ul>
            </div>
            <div className="max-w-full p-10 card-bg my-5">
              <ul className='text-gray-300'>
                <li className="mb-2 text-3xl flex items-center  ">US8594095B1<Link className='ml-2' href="https://patents.google.com/patent/US8594095B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" rel='noopener noreferrer' target="_blank"><img src="/icons/link.png" className='h-7 hover:scale-110' alt="Link Icon" />
                </Link></li>
                <li className="mb-2 text-2xl ">System, method, and computer program for modifying an 802.1Q and/or 802.1QinQ header to reduce a size of an associated data packet</li>
                <li className='text-lg text-gray-400'>A system, method, and computer program product are provided for modifying an 802.1Q and/or 802.1QinQ header to reduce a size of an associated data packet. In use, data to be communicated over a network is identified. Additionally, at least one data packet is generated for use in communicating the data over the network, where each data packet includes one of an 802.1Q and an 802.1QinQ Ethernet header. Furthermore, the Ethernet header is modified to reduce a size of the at least one data packet.</li>
              </ul>
            </div>
            <div className="max-w-full p-10 card-bg my-5">
              <ul className='text-gray-300'>
                <li className="mb-2 text-3xl flex items-center  ">US9128587B1<Link className='ml-2' href="https://patents.google.com/patent/US9128587B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" rel='noopener noreferrer' target="_blank"><img src="/icons/link.png" className='h-7 hover:scale-110' alt="Link Icon" />
                </Link></li>
                <li className="mb-2 text-2xl ">System, method, and computer program for presenting service options to a user utilizing a three-dimensional structure</li>
                <li className='text-lg text-gray-400'>A system, method, and computer program product are provided for presenting service options to a user utilizing a three-dimensional structure. In use, a first group of service options are presented to a user, utilizing a three-dimensional structure. Additionally, a selection of one or more of the first group of service options by the user is received. Further, a selection of a depth element associated with the three-dimensional structure by the user is received. Further still, a second group of service options are presented to the user utilizing the three-dimensional structure, based on the selection of the one or more of the first group of service options and the selection of the depth element.</li>
              </ul>
            </div>
            <p className="text-3xl font text-gray-200  pt-20">Patents <span className='text-2xl text-gray-400'>(in-filling)</span></p>
            {/* <div className="max-w-full card-bg">
              <div className='md:p-10 p-5'>
                <div className=' flex items-center items-center justify-center'>
                  <img src="/icons/ongoing.png" className='h-10 opacity-50 md:px-10 px-5' />
                  <ul className='text-gray-300'>
                    <li className='  md:text-2xl text-lg'>Autonomous Authorization in heterogeneous environment</li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className='grid md:grid-cols-4 gap-8 grid-cols-1 text-center pt-5'>
              <div className=' p-5 text-gray-500'>
                <p className='text-lg'>Data Breach</p>
                <p className='text-7xl text-gray-300 font-bold pt-3'>3</p>
              </div>
               <div className=' p-5'>
                <p className='text-lg text-gray-500'>Access Control</p>
                <p className='text-7xl text-gray-300 font-bold pt-3'>2</p>
              </div>
              <div className=' p-5 text-gray-500'>
                <p className='text-lg'>Data Classification</p>
                <p className='text-7xl text-gray-300 font-bold pt-3'>1</p>
              </div>
              <div className=' p-5 text-gray-500'>
                <p className='text-lg'>Breathing Security</p>
                <p className='text-7xl text-gray-300 font-bold pt-3'>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Patents;