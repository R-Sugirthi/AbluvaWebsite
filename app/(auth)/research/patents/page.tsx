import Link from 'next/link';
import '../research.css';
export const metadata = {
  title: 'Patents | ABLUVA',
  description: 'Explore granted patents and applied patents by ABLUVA. Discover innovative solutions in the field of technology and telecommunications.',
};

export default function Patents() {
return (
    <>
        <div className='bg-black pt-20 pb-20 founder text-justify' id="patents">
        <div className="container mx-auto">
          <p className="text-3xl md:text-5xl founder text-gradient md:px-20 px-5 text-center pb-5">Patents</p>
          <p className="text-2xl md:text-3xl founder text-gray-200 md:px-20 px-5 font-semibold">Granted Patents</p>
          <p className="text-2xl md:text-2xl founder text-gray-200 darkText md:px-20 px-5">These patents have been granted to our chief in his past avatars.</p>
          <div className="md:px-20 px-5 py-10">
            <div className="max-w-full p-10 bg-white">
              <ul className='text-gray-900'>
                <li className="mb-2 text-3xl "><Link className='text-violet-900 underline' href="https://patents.google.com/patent/US8676236B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" rel='noopener noreferrer' >US8676236B
                </Link></li>
                <li className="mb-2 text-2xl font-semibold">System, method, and computer program for generating a short message service (SMS) message using template codes</li>
                <li className='text-xl'>A system, method, and computer program product are provided for generating a short message service (SMS) message using template codes. In use, a message to be sent as a short message service (SMS) message is received. Additionally, a template associated with the message is identified. Further, at least one code associated with the template is identified. Moreover, the SMS message is generated using the at least one code.</li>
              </ul>
            </div>
            <div className="max-w-full p-10 bg-white my-5">
              <ul className='text-gray-900'>
                <li className="mb-2 text-3xl "><Link className='text-violet-900 underline' href="https://patents.google.com/patent/US8760995B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" rel='noopener noreferrer'>US8760995B1
                </Link></li>
                <li className="mb-2 text-2xl font-semibold">System, method, and computer program for routing data in a wireless sensor network</li>
                <li className='text-xl'>A system, method, and computer program product are provided for routing data in a wireless sensor network. In use, sensed data is identified utilizing a first sensor node of a plurality of sensor nodes in a wireless sensor network, the sensor nodes each capable of sensing data. Additionally, a plurality of parameters associated with each route existing between the first sensor node and a gateway node in the wireless sensor network connecting the wireless sensor network to another network is received at the first sensor node from at least one second sensor node in direct communication with the first sensor node via the wireless communication network. Furthermore, one of the at least one second sensor node that is in direct communication with the first sensor node is selected, based on the parameters. Still yet, the sensed data is forwarded from the first sensor node to the selected second sensor node.</li>
              </ul>
            </div>
            <div className="max-w-full p-10 bg-white my-5">
              <ul className='text-gray-900'>
                <li className="mb-2 text-3xl "><Link className='text-violet-900 underline' href="https://patents.google.com/patent/US8949733B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" rel='noopener noreferrer'>US8949733B1
                </Link></li>
                <li className="mb-2 text-2xl font-semibold">System, method, and computer program for displaying a subset of a plurality of fields to a user</li>
                <li className='text-xl'>A system, method, and computer program product are provided for displaying a subset of a plurality of fields to a user. In use, a plurality of fields for receiving input from a user is retrieved. Additionally, the plurality of fields is displayed to the user in a first window of a display. Further, a subset of the plurality of fields is displayed to the user in a second window of the display separate from the first window, where the second window is positioned according to a span of vision and an angle of vision of the user.</li>
              </ul>
            </div>
            <div className="max-w-full p-10 bg-white my-5">
              <ul className='text-gray-900'>
                <li className="mb-2 text-3xl "><Link className='text-violet-900 underline' href="https://patents.google.com/patent/US8594095B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" rel='noopener noreferrer'>US8594095B1
                </Link></li>
                <li className="mb-2 text-2xl font-semibold">System, method, and computer program for modifying an 802.1Q and/or 802.1QinQ header to reduce a size of an associated data packet</li>
                <li className='text-xl'>A system, method, and computer program product are provided for modifying an 802.1Q and/or 802.1QinQ header to reduce a size of an associated data packet. In use, data to be communicated over a network is identified. Additionally, at least one data packet is generated for use in communicating the data over the network, where each data packet includes one of an 802.1Q and an 802.1QinQ Ethernet header. Furthermore, the Ethernet header is modified to reduce a size of the at least one data packet.</li>
              </ul>
            </div>
            <div className="max-w-full p-10 bg-white my-5">
              <ul className='text-gray-900'>
                <li className="mb-2 text-3xl "><Link className='text-violet-900 underline' href="https://patents.google.com/patent/US9128587B1/en?q=(gautam)&q=(amit)&assignee=amdocs&oq=(inventor):+amit+gautam+amdocs" rel='noopener noreferrer' >US9128587B1
                </Link></li>
                <li className="mb-2 text-2xl font-semibold">System, method, and computer program for presenting service options to a user utilizing a three-dimensional structure</li>
                <li className='text-xl'>A system, method, and computer program product are provided for presenting service options to a user utilizing a three-dimensional structure. In use, a first group of service options are presented to a user, utilizing a three-dimensional structure. Additionally, a selection of one or more of the first group of service options by the user is received. Further, a selection of a depth element associated with the three-dimensional structure by the user is received. Further still, a second group of service options are presented to the user utilizing the three-dimensional structure, based on the selection of the one or more of the first group of service options and the selection of the depth element.</li>
              </ul>
            </div>
            <p className="text-2xl md:text-3xl founder text-gray-200 font-semibold pt-5 pb-10">Applied patent</p>
            <div className="max-w-full bg-white">
              <div className='md:p-10 p-5'>
                <div className=' flex items-center justify-center'>
                  <img src="/icons/ongoing.png" className='h-10 md:px-10 px-5' />
                  <ul className='text-gray-900'>
                    <li className=' font-semibold md:text-2xl text-lg'>Autonomous Authorization in heterogeneous environment</li>
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
