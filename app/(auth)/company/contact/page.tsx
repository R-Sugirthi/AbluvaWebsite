"use client"
import React, { FC, useState } from 'react';
import { Helmet } from 'react-helmet';
import Link from 'next/link';
import emailjs from 'emailjs-com';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import "./contact.css";

const metadata = {
  title: 'Contact',
  description: 'Discover Abluva: Elevating data security with innovation. Connect with us on our \'Contact\' page to explore secure data solutions.',
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

type FormValues = {
  sender_fname: string;
  sender_lname: string;
  sender_org: string;
  sender_email: string;
  sender_contact: string;
  sender_message: string;
  agreeToTerms: boolean;
};

const Contact: FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const { register, handleSubmit, formState } = useForm<FormValues>();
  const { isSubmitting } = formState;
  const { errors } = formState;

  const handleFormSubmit: SubmitHandler<FormValues> = async (data) => {
    const serviceID = 'default_service';
    const templateID = 'template_hk712f9';

    try {
      const response: any = await emailjs.send(serviceID, templateID, data);

      if (response?.status === 200) {
        setShowPopup(true);
      } else {
        throw new Error(`EmailJS Error: ${JSON.stringify(response)}`);
      }
    } catch (error: any) {
      console.error('Error:', error);
      setPopupMessage(`Error: ${error.message}`);
      setShowPopup(true);
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
              <form id="contactForm" onSubmit={handleSubmit(handleFormSubmit)} className='mark'>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="sender_fname"><span className="text-red-500">*</span>First Name</label>
                    <input id="sender_fname" {...register("sender_fname")} type="text" className="form-input w-full text-gray-300" maxLength={50} required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="sender_lname"><span className="text-red-500">*</span>Last Name</label>
                    <input id="sender_lname" {...register("sender_lname")} type="text" className="form-input w-full text-gray-300" maxLength={50} required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="sender_org"><span className="text-red-500">*</span>Organization</label>
                    <input id="sender_org" {...register("sender_org")} type="text" className="form-input w-full text-gray-300" maxLength={50} required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="sender_email"><span className="text-red-500">*</span>Business Email</label>
                    <input
                      id="sender_email"
                      {...register("sender_email", {
                        pattern: {
                          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: 'Invalid email address',
                        }
                      })}

                      className={`form-input w-full text-gray-300 ${errors.sender_email ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.sender_email && (
                      <p className="text-red-500 text-sm mt-1">{errors.sender_email.message}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="sender_contact"><span className="text-red-500">*</span>Contact Number</label>
                    <input
                      id="sender_contact"
                      {...register("sender_contact", {
                        maxLength: 14,
                        pattern: {
                          value: /^[+]?[0-9]+$/,
                          message: 'Invalid contact number',
                        }
                      })}

                      className={`form-input w-full text-gray-300 ${errors.sender_contact ? 'border-red-500' : ''}`}
                      required
                    />
                    {errors.sender_contact && (
                      <p className="text-red-500 text-sm mt-1">{errors.sender_contact.message}</p>
                    )}

                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="sender_message"><span className="text-red-500">*</span>Message</label>
                    <textarea id="sender_message" {...register("sender_message")} className="form-input w-full text-gray-300" maxLength={300} required></textarea>
                  </div>
                </div>
                <div className="w-full py-3 mb-4  flex items-start">
                  <div>
                    <input type="checkbox" {...register("agreeToTerms", { required: true })} className="form-checkbox" required />
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
