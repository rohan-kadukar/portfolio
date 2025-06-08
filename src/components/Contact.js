// src/components/Contact.js
'use client';

import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'; // Using outline icons for contact details
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    time: '',
  });

  const getFormattedTime = () => {
    return new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata', // Set your preferred timezone
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };


  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for the field being edited
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);
    const updatedFormData = {
      ...formData,
      time: getFormattedTime(),
    };

    try {
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: updatedFormData.name,
          email: updatedFormData.email,
          subject: updatedFormData.subject,
          message: updatedFormData.message,
          time: updatedFormData.time,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', time: '' });
      setFormErrors({});
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {"I'm"} always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-8 animate-slideInLeft">
            <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <EnvelopeIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Email Me</h3>
                <a href="mailto:rohankadukar12@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  rohankadukar12@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <PhoneIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Call Me</h3>
                <a href="tel:+917558732173" className="text-blue-600 dark:text-blue-400 hover:underline">
                  +91 7558732173
                </a>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <MapPinIcon className="h-8 w-8 text-blue-500 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Gadhinglaj, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl animate-slideInRight">
            <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className={`w-full px-4 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white`} 
                  placeholder="Your Name" 
                />
                {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white`} 
                  placeholder="your.email@example.com" 
                />
                {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  className={`w-full px-4 py-2 border ${formErrors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white`} 
                  placeholder="Subject of your message" 
                />
                {formErrors.subject && <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className={`w-full px-4 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white`} 
                  placeholder="Your message here..."
                ></textarea>
                {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
              </div>
              {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}
              {isSubmitted && <p className="text-sm text-green-500 dark:text-green-400">Message sent successfully! {"I'll"} get back to you soon.</p>}
              <div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;