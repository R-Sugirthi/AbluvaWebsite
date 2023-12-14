
"use client"
import React, { FC, FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet';
import Link from 'next/link';
import emailjs from 'emailjs-com';
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const metadata = {
  title: 'Contact'
}

type EmailJSResponseStatus = {
  status: number;
  text: string;
};

emailjs.init('yk7Vag8lV44xKx-xq');

const Popup: FC<{ message: string, onClose: () => void }> = ({ message, onClose }) => (
  <div className="popup">
    <button
      className="absolute top-1 right-3 p-0 cursor-pointer text-2xl"
    >
      <FontAwesomeIcon icon={faTimes} onClick={onClose} />
    </button>
    <div className="popup-content">
      <p className='md:text-3xl text-2xl font-semibold mark'>
        Thank you for submitting your details!<br />
        <span className='md:text-2xl text-xl founder font-thin text-gray-300'>
          You've just taken a bold step towards securing your data. Rest easy, our security protocols are standing guard!
        </span>
      </p>
    </div>
  </div>
);

const Contact: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'default_service';
    const templateID = 'template_hk712f9';

    try {
      const form = document.getElementById('contactForm') as HTMLFormElement;
      if (!form) {
        throw new Error('Form not found');
      }

      const response: any = await (emailjs.sendForm as any)(serviceID, templateID, form);

      if (response?.status === 200) {
        form.reset();
        setShowPopup(true);
      } else {
        throw new Error(`EmailJS Error: ${JSON.stringify(response)}`);
      }
    } catch (error: any) {
      console.error('Error:', error);
      setPopupMessage(`Error: ${error.message}`);
      setShowPopup(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  }
  return (
    <>
    <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <div className="py-28 md:py-28 md:pb-20 md:pl-48 md:pr-12 lg:pr-32 sm:px-10 bg">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
          <div className="w-full text-white pt-10 pb-40 w-3/4">
            <p className="text-6xl font-bold text-gray-100 mark">Contact Us</p>
            <p className="text-3xl founder text-gray-300">Unlocking Confidence in Every Byte, <br className="md:block hidden" /> Connect with us for a Fortress of Data Security.</p>
          </div>
        </div>
      </div>
      <section className="relative bg-black mark grid md:grid-cols-2 gap-10 grid-cols-1 md:px-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-5 md:pt-40 md:pb-20">
            <div className="mx-auto text-center md:pb-20 ">
              <h1 className="text-3xl md:text-4xl mark text-gradient md:pb-0 pb-10">Share your Details</h1>
            </div>
            <div className="mx-auto">
              <form id="contactForm" onSubmit={handleFormSubmit}>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="sender_fname">First Name</label>
                    <input id="sender_fname" name="sender_fname" type="text" className="form-input w-full text-gray-300" maxLength={50} required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="sender_lname">Last Name</label>
                    <input id="sender_lname" name="sender_lname" type="text" className="form-input w-full text-gray-300" maxLength={50} required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="sender_org">Organization</label>
                    <input id="sender_org" name="sender_org" type="text" className="form-input w-full text-gray-300" maxLength={50} required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="sender_email">Business Email</label>
                    <input
                      id="sender_email"
                      name="sender_email"
                      type="email"
                      className="form-input w-full text-gray-300"
                      maxLength={100}
                      pattern="^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$"
                      title="Please enter a valid email"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="sender_contact">Contact Number</label>
                    <input
                      id="sender_contact"
                      name="sender_contact"
                      type="tel"
                      className="form-input w-full text-gray-300"
                      maxLength={14}
                      pattern="^[+]?[0-9]+$"
                      title="Please enter a valid phone number."
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="sender_message">Message</label>
                    <textarea id="sender_message" name="sender_message" className="form-input w-full text-gray-300" maxLength={300} required></textarea>

                  </div>
                </div>
                <div className="w-full py-3 mb-4  flex items-start">
                  <div>
                    <input type="checkbox" className="form-checkbox" required />
                  </div>
                  <span className="ml-2">
                    I agree to receive future communications from Abluva, in accordance with the{' '}
                    <Link href="/privacy-policy">
                      <span className="text-violet-300 underline">Privacy Policy</span>
                    </Link>
                    .
                  </span>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <button
                      type="submit"
                      className="text-white px-4 py-2 rounded submitButton"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='mx-auto darkText pb-20'>
          <p className="md:text-4xl text-3xl founder pt-5 pb-10 md:pt-40 md:pb-20 text-center"><span className='text-gradient'>Reach Us</span></p>
          <ul className="text-xl founder text-gray-300 px-5">
            <li className='py-2'><span className='text-2xl font-semibold'>Headquarters</span><br />228 Hamilton Avenue, 3rd Floor, Palo Alto, California, 94301,<br /> United States of America</li>
            <li className='py-2'><span className='text-2xl font-semibold'>Research Center</span><br /> 2219, 2nd floor, JK Infotech, Hinjewadi Phase 1 Pune, Maharashtra, 411057,<br /> India</li>
            <li className='py-2'><span className='text-2xl font-semibold'>Development Center</span><br /> 46/4, K NO 437/424/414/661/3/1114/3,4,5,Garvebhavipalya, Kudlu gate, Bommanahalli, Bangalore, Karnataka 560068,<br /> India</li>
            <li className='py-2 text-2xl font-semibold'>
              <Link href="mailto:connect@abluva.com">connect@abluva.com</Link>
            </li>
          </ul>
        </div>
      </section>
      {showPopup && <Popup message={popupMessage} onClose={closePopup} />}
    </>
  );
}
export default Contact;

