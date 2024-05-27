import "./news.css"

export default function News2() {
  return (
    <section className='p-5 md:px-72 md:pb-20 sm:py-8 '>
      {/* <div>
        <p className='text-gray-500 py-5 border-b border-gray-500 font'>Know more</p>
      </div> */}
      <div>
      <p className='mainText pt-5'>About ISO 27001 Certification 
        </p><br />
        <p className='subText'>
        ISO/IEC 27001 is an internationally recognized standard that sets forth the requirements for establishing, implementing, maintaining, and continually improving an information security management system (ISMS). The certification is a testament to Abluva's dedication to protecting sensitive information, managing risks effectively, and maintaining the confidentiality, integrity, and availability of data.
        </p><br />
        <p className='mainText'>Abluva’s Security commitments 
        </p><br />
        <p className='subText'><span className="font-semibold">Stringent Security Practices : </span> Abluva has demonstrated adherence to stringent security practices, ensuring the highest level of protection for client data and information assets.
        </p>
        <p className='subText'><span className="font-semibold">Continuous Improvement : </span>The ISO 27001 certification reflects Abluva's commitment to continual improvement, with a focus on evolving security measures in response to emerging threats and industry developments.
        </p> <br /><br />
        <div className="px-5">
          <img src="/icons/quotes.png" className="h-7 opacity-40 pb-2 filter invert"/>
          <p><span className="primary-color italic text-lg">Abluva proudly attains ISO 27001 certification, underscoring our steadfast dedication to the confidentiality, integrity, and availability of data. This achievement is a testament to our ongoing commitment to providing secure and trusted solutions.</span>
        </p> 
        <div className="">
        {/* <hr className="w-24 border-t-2 border-violet-900 "></hr> */}
        <div className="flex justify-end">
        {/* <img src="/images/AmitGautam.jpg" className="h-12 pr-5 rounded-sm pt-2"/> */}
        <p className='subText  pt-2'><span className="">Amit Gautam - Founder & CTO, Abluva</span>
        </p>
        </div>
        </div><br /><br />
</div>
<div>
        <p className='mainText'>Our Commitment to Excellence 
        </p><br />
        <p className='subText'>Receiving the ISO 27001 certification aligns with Abluva's overarching commitment to delivering cutting-edge data security solutions. This certification validates our dedication to maintaining the highest standards of information security and ensuring the trust and confidence of our clients.
        </p>
        </div>

      </div>
    </section>
  )
}
