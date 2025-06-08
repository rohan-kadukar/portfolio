// src/components/Footer.js
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rohan-kadukar',
      icon: FaGithub,
      color: 'hover:text-[#333] dark:hover:text-[#fff]'
    },
    {
      name: 'LinkedIn',
      url: 'https://in.linkedin.com/in/rohan-kadukar',
      icon: FaLinkedin,
      color: 'hover:text-[#0077B5] dark:hover:text-[#0077B5]'
    },
    {
      name: 'Email',
      url: 'mailto:rohankadukar@gmail.com',
      icon: FaEnvelope,
      color: 'hover:text-[#EA4335] dark:hover:text-[#EA4335]'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02] dark:opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center space-y-6">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                className={`text-3xl text-gray-600 dark:text-gray-400 transition-colors duration-300 ${social.color}`}
              >
                <social.icon className="w-8 h-8" />
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Rohan Kadukar. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Made with <FaHeart className="inline-block text-red-500 mx-1" /> in India
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;