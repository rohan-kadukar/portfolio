// src/components/Footer.js
'use client';

import React from 'react';
// Import social icons if you have them, e.g., from react-icons or heroicons
// For example: import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rohan-kadukar',
      // icon: <FaGithub className="h-6 w-6" />,
      icon: 'GH' // Placeholder
    },
    {
      name: 'LinkedIn',
      url: 'https://in.linkedin.com/in/rohan-kadukar',
      // icon: <FaLinkedin className="h-6 w-6" />,
      icon: 'LI' // Placeholder
    },
    // Add other social links if needed
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/yourprofile',
    //   icon: <FaTwitter className="h-6 w-6" />,
    // },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Rohan Kadukar. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {/* Render actual icon component here */}
                <span className="sr-only">{social.name}</span>
                {social.icon} {/* Replace with actual icon component */}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-500">
          Built with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Next.js</a> and <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Tailwind CSS</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;