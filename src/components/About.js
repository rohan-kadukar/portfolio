// src/components/About.js
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaBirthdayCake, FaLanguage, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const About = ({ personalData }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02] dark:opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-emerald-800 to-teal-800 dark:from-gray-100 dark:via-emerald-200 dark:to-teal-200 text-transparent bg-clip-text animate-gradient-x">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-10 rounded-full shadow-lg"></div>
          {/* Optional: A brief introductory paragraph if career objective isn't sufficient */}
          {/* <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's a little more about my journey and passions.
          </p> */}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          <motion.div 
            className="md:col-span-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 transform hover:-translate-y-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg group-hover:animate-pulse">
                <FaUser className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold ml-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 text-transparent bg-clip-text">Career Objective</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {personalData.careerObjective || 'Aspiring computer science professional seeking to leverage technical skills and project experience in a dynamic organization to drive growth and innovation.'}
            </p>
          </motion.div>

          <motion.div 
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg group-hover:animate-pulse">
                <FaUser className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold ml-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">Personal Details</h3>
            </div>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <motion.li 
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                whileHover={{ x: 10 }}>
                <FaUser className="w-5 h-5 text-blue-500" />
                <span><strong>Name:</strong> {personalData.name || 'Rohan Ramesh Kadukar'}</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                whileHover={{ x: 10 }}>
                <FaBirthdayCake className="w-5 h-5 text-pink-500" />
                <span><strong>Date of Birth:</strong> {personalData.dateOfBirth || 'March 10, 2003'}</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                whileHover={{ x: 10 }}>
                <FaLanguage className="w-5 h-5 text-green-500" />
                <span><strong>Languages:</strong> {personalData.languages ? personalData.languages.join(', ') : 'Marathi, Hindi, English'}</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                whileHover={{ x: 10 }}>
                <FaEnvelope className="w-5 h-5 text-red-500" />
                <a href={`mailto:${personalData.email || 'rohankadukar12@gmail.com'}`} className="hover:text-blue-500 transition-colors duration-200">
                  {personalData.email || 'rohankadukar12@gmail.com'}
                </a>
              </motion.li>
              {personalData.phone && (
              <motion.li 
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                whileHover={{ x: 10 }}>
                <FaPhone className="w-5 h-5 text-blue-500" />
                <a href={`tel:${personalData.phone || '+917558732173'}`} className="hover:text-blue-500 transition-colors duration-200">
                  {personalData.phone || '+91 1234567890'}
                </a>
              </motion.li>
              )}
              <motion.li 
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                whileHover={{ x: 10 }}>
                <FaLinkedin className="w-5 h-5 text-blue-600" />
                <a href={personalData.linkedin || 'https://in.linkedin.com/in/rohan-kadukar'} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-200">
                  {personalData.linkedin ? personalData.linkedin.replace('https://', '') : 'in.linkedin.com/in/rohan-kadukar'}
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                whileHover={{ x: 10 }}>
                <FaGithub className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                <a href={personalData.github || 'https://github.com/rohan-kadukar'} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-200">
                  {personalData.github ? personalData.github.replace('https://', '') : 'github.com/rohan-kadukar'}
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;