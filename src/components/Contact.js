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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    // Email validation regex (simple)
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const updatedFormData = {
      ...formData,
      time: getFormattedTime(), // Add current time
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // e.g., service_xyz
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // e.g., template_abc
        {
          name: updatedFormData.name,
          email: updatedFormData.email,
          subject: updatedFormData.subject,
          message: updatedFormData.message,
          time: updatedFormData.time, // Send time
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Public Key
      );
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', time: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Try again later.');
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
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Subject of your message" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Your message here..."></textarea>
              </div>
              {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}
              {isSubmitted && <p className="text-sm text-green-500 dark:text-green-400">Message sent successfully! {"I'll"} get back to you soon.</p>}
              <div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Send Message
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