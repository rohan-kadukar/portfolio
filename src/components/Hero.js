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
      const navbarHeight = 80; // Adjust this value based on your navbar height
      const targetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex flex-col justify-center items-center text-center pt-20 md:pt-24 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-950 dark:to-teal-900 transition-all duration-700 py-12 sm:py-16 md:py-20 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-90">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 dark:opacity-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02] dark:opacity-[0.04] animate-[drift_20s_linear_infinite]"></div>
        
        {/* Animated gradient blobs */}
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
        
        {/* Animated grid pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/pattern.svg')] dark:opacity-[0.05]"
        />
        
        {/* Particle effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 dark:to-black/5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block group perspective-1000">
            {/* Outer glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full animate-spin-slow opacity-75 blur-xl group-hover:blur-2xl group-hover:scale-110 transition-all duration-300 transform-gpu"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75 blur-xl animation-delay-2000 group-hover:blur-2xl group-hover:scale-110 transition-all duration-300 transform-gpu"></div>
            
            {/* 3D container */}
            <motion.div
              className="relative z-10 rounded-full p-1 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 dark:from-emerald-800 dark:via-teal-800 dark:to-cyan-800 shadow-2xl group-hover:shadow-[0_0_2rem_rgba(20,184,166,0.3)] transition-all duration-300 transform-gpu"
              whileHover={{ rotateY: 10 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Reflection overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Image */}
              <Image
                src={personalData.profileImage || "/images/default_profile.png"}
                alt={personalData.name || "Profile Photo"}
                width={240}
                height={240}
                className="rounded-full relative z-10 border-4 border-white/80 dark:border-gray-800/80 bg-white dark:bg-gray-800 transform-gpu group-hover:shadow-lg transition-all duration-300"
                priority
              />
              
              {/* Interactive particles */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:10px_10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-drift"></div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="overflow-hidden font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              className="relative inline-block font-light tracking-wider text-4xl md:text-5xl lg:text-6xl mb-4 group perspective-1000"
            >
              <span className="relative inline-block transform-gpu transition-transform duration-300 group-hover:translate-z-10 group-hover:-translate-y-1 text-gray-800 dark:text-gray-100">
                <span className="relative z-10">Hi there!</span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-sm transform scale-110 transition-all duration-300 group-hover:scale-125 group-hover:blur-md"></span>
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 perspective-1000"
            >
              <span className="relative inline-block mr-3 transform-gpu transition-transform duration-300 hover:translate-z-10 hover:-translate-y-1 text-gray-700 dark:text-gray-200">{"I'm"}</span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="relative inline-block group"
              >
                <span className="relative z-10 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 transform-gpu transition-all duration-300 group-hover:scale-110 cursor-default">
                  {personalData.name || "Rohan Kadukar"}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-cyan-500/30 blur-md transform scale-110 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125 group-hover:blur-lg"></span>
              </motion.span>
            </motion.div>
              
            {/* Decorative underline */}
            {/* <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full"
            /> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="relative max-w-2xl mx-auto mb-8 group"
          >
            {/* Glass card effect */}
            <div className="absolute inset-0 bg-white/5 dark:bg-gray-800/5 backdrop-blur-lg rounded-xl border border-white/10 dark:border-gray-700/10 shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02] group-hover:rotate-1"></div>
            
            {/* Gradient background */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute inset-0 bg-gradient-to-r from-emerald-200/50 via-teal-200/50 to-cyan-200/50 dark:from-emerald-900/30 dark:via-teal-900/30 dark:to-cyan-900/30 rounded-xl transform -rotate-1 group-hover:rotate-2 transition-transform duration-300"
            />
            
            {/* Content container */}
            <div className="relative p-8 backdrop-blur-sm">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="relative text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed font-light"
              >
                {personalData.careerObjective.replace(/\s+/g, ' ').trim().split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 1.6 + index * 0.03,
                      ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                    className="relative inline-block group/word mr-1"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover/word:text-emerald-600 dark:group-hover/word:text-emerald-400 cursor-default">{word}</span>
                    <span className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-sm scale-x-0 group-hover/word:scale-x-100 transition-transform duration-300 origin-left -z-10"></span>
                  </motion.span>
                ))}
              </motion.p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-3 -left-3 w-6 h-6 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-sm"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
                className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full shadow-lg"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="w-full h-full bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-sm"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2.3 }}
                className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full shadow-lg"
              />
            </div>
          </motion.div>
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="flex space-x-6 justify-center mb-8"
          >
            {personalData.socialLinks.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 2.3 + index * 0.1,
                }}
                className="relative w-12 h-12 flex items-center justify-center group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glass background */}
                <div className="absolute inset-0 bg-white/10 dark:bg-gray-800/20 backdrop-blur-md rounded-xl border border-white/20 dark:border-gray-700/20 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 dark:group-hover:bg-gray-800/30"></div>
                
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 dark:from-emerald-600/20 dark:to-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-emerald-400/20 dark:bg-emerald-600/20 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
                
                {/* Icon container */}
                <div className="relative z-10">
                  {link.icon === "FaGithub" && <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-200 transition-transform duration-300 group-hover:scale-110" />}
                  {link.icon === "FaLinkedin" && <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-200 transition-transform duration-300 group-hover:scale-110" />}
                  {link.icon === "FaEnvelope" && <FaEnvelope className="w-6 h-6 text-gray-700 dark:text-gray-200 transition-transform duration-300 group-hover:scale-110" />}
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <span className="relative z-10">{link.platform}</span>
                  {/* Tooltip arrow */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
                </div>
              </motion.a>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="relative group flex items-center justify-center px-8 py-4 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/90 to-teal-500/90 backdrop-blur-md rounded-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:shadow-[0_8px_32px_rgba(5,193,174,0.3)]"></div>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
              
              <div className="absolute inset-0 rounded-xl bg-emerald-400/30 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
              
              <span className="relative z-10 font-semibold text-white tracking-wide px-2">Contact Me</span>
              
              <div className="absolute top-2 right-2 w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/40 rounded-full"></div>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('projects')}
              className="relative group flex items-center justify-center px-8 py-4 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/90 to-teal-500/90 backdrop-blur-md rounded-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:shadow-[0_8px_32px_rgba(5,193,174,0.3)]"></div>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
              
              <div className="absolute inset-0 rounded-xl bg-emerald-400/30 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
              
              <span className="relative z-10 font-semibold text-white tracking-wide px-2">View Projects</span>
              
              <div className="absolute top-2 right-2 w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/40 rounded-full"></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;