// src/components/Education.js
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaPercentage } from 'react-icons/fa';

const EducationCard = ({ degree, institution, period, percentage, index }) => (
  <motion.div 
    className={`relative p-6 ${index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'} md:w-[calc(50%-2rem)] bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 group`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}>
    <div className="absolute top-8 -left-3 md:-left-4 w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full shadow-lg z-10 group-hover:scale-110 transition-transform duration-300"></div>
    <div className="absolute top-10 -left-0.5 md:-left-[2px] w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent opacity-20"></div>
  <motion.div 
    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}>
    <div className="mb-4">
      <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 text-transparent bg-clip-text group-hover:animate-gradient-x flex items-center gap-3">
        <FaGraduationCap className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
        {degree}
      </h3>
    </div>
    <div className="space-y-2">
      <div className="flex items-center text-gray-700 dark:text-gray-300">
        <FaUniversity className="w-5 h-5 text-indigo-500 mr-3" />
        <p>{institution}</p>
      </div>
      <div className="flex items-center text-gray-600 dark:text-gray-400">
        <FaCalendarAlt className="w-4 h-4 text-blue-500 mr-3" />
        <p className="text-sm">{period}</p>
      </div>
      <div className="flex items-center text-gray-800 dark:text-gray-200">
        <FaPercentage className="w-4 h-4 text-green-500 mr-3" />
        <p className="text-md font-medium">Percentage/CGPA: {percentage}</p>
      </div>
    </div>
  </motion.div>
  </motion.div>
);

const Education = ({ educationData }) => {
  return (
    <section id="education" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02] dark:opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-emerald-800 to-teal-800 dark:from-gray-100 dark:via-emerald-200 dark:to-teal-200 text-transparent bg-clip-text animate-gradient-x">My Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Details of my academic qualifications and achievements.
          </p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          {educationData && educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;