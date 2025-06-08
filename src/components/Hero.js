// src/components/Hero.js
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const TypewriterText = ({ text }) => {
  const letters = Array.from(text);
  
  return (
    <div className="inline-flex">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: index * 0.05,
            type: "spring",
            stiffness: 120
          }}
          className="font-mono"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

const Hero = ({ personalData }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const targetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex flex-col justify-center items-center text-center pt-20 md:pt-24 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-950 dark:to-teal-900 transition-all duration-700 py-12 sm:py-16 md:py-20 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-90">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 dark:opacity-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02] dark:opacity-[0.04] animate-[drift_20s_linear_infinite]"></div>
        
        {/* Enhanced animated gradient blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            x: [-40, 0, -40],
            y: [-40, 0, -40]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full mix-blend-multiply filter blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
            x: [40, 0, 40],
            y: [40, 0, 40]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 rounded-full mix-blend-multiply filter blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Enhanced profile image with 3D effect */}
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative inline-block group perspective-1000 mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full animate-spin-slow opacity-75 blur-xl group-hover:blur-2xl group-hover:scale-110 transition-all duration-300 transform-gpu"></div>
            
            <motion.div
              className="relative z-10 rounded-full p-1 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 dark:from-emerald-800 dark:via-teal-800 dark:to-cyan-800 shadow-2xl group-hover:shadow-[0_0_2rem_rgba(20,184,166,0.3)] transition-all duration-300 transform-gpu"
              animate={{
                rotateY: isHovered ? 10 : 0,
                rotateX: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Image
                src={personalData.profileImage || "/images/default_profile.png"}
                alt={personalData.name || "Profile Photo"}
                width={240}
                height={240}
                className="rounded-full relative z-10 border-4 border-white/80 dark:border-gray-800/80 bg-white dark:bg-gray-800 transform-gpu group-hover:shadow-lg transition-all duration-300"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Enhanced text animations */}
          <motion.div 
            className="overflow-hidden font-sans mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <TypewriterText text="Hi there! I'm " />
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
              >
                {personalData.name || "Rohan Kadukar"}
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              <TypewriterText text={personalData.title || "Full Stack Developer"} />
            </motion.div>
          </motion.div>

          {/* Enhanced social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 mb-8"
          >
            {personalData.socialLinks?.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300"
              >
                {link.platform === 'GitHub' && <FaGithub />}
                {link.platform === 'LinkedIn' && <FaLinkedin />}
                {link.platform === 'Email' && <FaEnvelope />}
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-500/20"
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;