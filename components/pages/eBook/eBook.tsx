"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import "./eBook.css"

interface EbookFormProps {}

const EbookForm: React.FC<EbookFormProps> = () => {
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email format (you can add more validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Send a request to your server to generate and send the eBook PDF to the email address
    try {
      const response = await fetch('/api/send-ebook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Ebook sent successfully!');
      } else {
        alert('Failed to send the eBook. Please try again.');
      }
    } catch (error) {
      console.error('Error sending eBook:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section className='sm:px-10 p-10 md:px-52 md:pb-52 sm:py-8 bg-black text-justify'>
      <div>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor='email'>Email Address :</label><br></br>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleEmailChange}
            required
          /><br/>

          <button type='submit' className='ebookbutton'>Get Ebook</button>
        </form>
      </div>
    </section>
  );
};

export default EbookForm;
