import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Link from 'next/link'
import './contact.css';

export const metadata = {
  title: 'Contact | ABLUVA',
  // description: 'Page description',
};

export default function Contact() {
  return (
    <>

      <div className="py-28 md:py-28 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10 bg">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
          <div className="w-full text-white pt-10 pb-40 w-3/4">
            <p className="text-6xl font-bold text-gray-100 mark">Contact Us</p>
            <p className="text-3xl founder text-gray-300">Unlocking Confidence in Every Byte, <br></br> Connect with us for a Fortress of Data Security.</p>
          </div>
        </div>
      </div>
      <section className="relative bg-black mark grid md:grid-cols-2 gap-10 grid-cols-1 md:px-20">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className=" mx-auto text-center pb-12 md:pb-20">
              <h1 className="text-4xl mark text-gradient"> Share your Details</h1>
            </div>

            {/* Form */}
            <div className=" mx-auto">
              <form>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
                    <input id="firstName" type="text" className="form-input w-full text-gray-300" maxLength={50} required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
                    <input id="lastName" type="text" className="form-input w-full text-gray-300" maxLength={50} required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="organization">Organization</label>
                    <input id="organization" type="text" className="form-input w-full text-gray-300" maxLength={50} required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="businessEmail">Business Email</label>
                    <input id="businessEmail" type="email" className="form-input w-full text-gray-300" maxLength={100} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="contactNumber">Contact Number</label>
                    <input id="contactNumber" type="tel" className="form-input w-full text-gray-300" maxLength={14} pattern="[0-9]+" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">Message</label>
                    <textarea id="message" className="form-input w-full text-gray-300" maxLength={300} required></textarea>
                  </div>
                </div>
                <div className="w-full py-3 mb-4  flex items-start">
                  <div>
                    <input type="checkbox" className="form-checkbox" required />
                  </div>
                  <span className="ml-2">
                    I agree to receive future communications from Abluva, in accordance with the{' '}
                    <Link href="/PrivacyPolicy">
                      <span className="text-violet-300 underline">Privacy Policy</span>
                    </Link>
                    .
                  </span>
                </div>


                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <button type="submit" className="text-white px-4 py-2 rounded submitButton">Submit</button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
        <div className='mx-auto darkText'>
          <p className="text-4xl founder pt-32 pb-12 md:pt-40 md:pb-20 text-center"><span className='text-gradient'>Reach Us</span></p>
          <ul className="text-xl founder text-gray-300">
            <li className='py-2'><span className='text-2xl font-semibold'>Headquarters</span><br></br>228 Hamilton Avenue, 3rd Floor, Palo Alto, California, 94301,<br></br> United States of America</li>
            <li className='py-2'><span className='text-2xl font-semibold'>Reasearch Center</span><br></br> 2219, 2nd floor, JK Infotech, Hinjewadi Phase 1 Pune, Maharashtra, 411057,<br></br> India</li>
            <li className='py-2'><span className='text-2xl font-semibold'>Development Center</span><br></br> 46/4, K NO 437/424/414/661/3/1114/3,4,5,Garvebhavipalya ,Kudlu gate, Bommanahalli, Bangalore,  Karnataka 560068,<br></br> India</li>
            <li className='py-2'>
              <Link href="mailto:contact@abluva.com">connect@abluva.com</Link>
            </li>
          </ul>

        </div>
      </section>

    </>
  )
}
