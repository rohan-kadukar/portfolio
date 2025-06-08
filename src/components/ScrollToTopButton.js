// src/components/ScrollToTopButton.js
'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid'; // Assuming heroicons

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-5 z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg transition-opacity duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;