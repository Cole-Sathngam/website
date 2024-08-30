'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '/app/utils/send-email';
import '../app/globals.css'; // Ensure this path is correct

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState('');

  async function onSubmit(data) {
    setIsSubmitting(true);
    setSubmitResult('');
    try {
      await sendEmail(data);
      setSubmitResult('Email sent successfully!');
    } catch (error) {
      setSubmitResult('Failed to send email. Please try again.');
    }
    setIsSubmitting(false);
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 animate-gradient-x min-h-screen flex items-center justify-center pt-24"> {/* Added pt-24 */}
      <main className="flex flex-col items-center justify-center p-8 w-full max-w-4xl"> {/* Adjusted max-w to give more space */}
        <h1 className="text-6xl text-center mb-6 w-full leading-tight"> {/* Added leading-tight for better spacing */}
          Crafting Websites That Drive Success for Small Businesses.
        </h1>
        <h2 className="text-2xl text-center mb-12 w-full leading-snug"> {/* Increased margin bottom and adjusted leading */}
          Custom web solutions tailored to your business needs.
        </h2>

        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg overflow-y-auto max-h-screen">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='mb-5 block text-2xl font-medium text-black'> 
              Contact Us
            </h1>
            <div className='mb-5'>
              <label
                htmlFor='name'
                className='mb-3 block text-base font-medium text-black'
              >
                Full Name
              </label>
              <input
                type='text'
                placeholder='Full Name'
                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className='mb-5'>
              <label
                htmlFor='email'
                className='mb-3 block text-base font-medium text-black'
              >
                Email Address
              </label>
              <input
                type='email'
                placeholder='example@domain.com'
                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                {...register('email', { 
                  required: 'Email is required', 
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className='mb-5'>
              <label
                htmlFor='message'
                className='mb-3 block text-base font-medium text-black'
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder='Type your message'
                className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>
            <div>
              <button 
                className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none disabled:opacity-50'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
          {submitResult && <p className={submitResult.includes('success') ? 'text-green-500' : 'text-red-500'}>{submitResult}</p>}
        </div>
      </main>
    </div>
  );
}
