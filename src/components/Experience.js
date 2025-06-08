// src/components/Experience.js
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ExperienceCard = ({
  type,
  title,
  imageUrl,
  description,
  issuer,
  certificateUrl,
  animation,
}) => (
  <motion.div
    className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 ${animation} flex flex-col group transform hover:-translate-y-2`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${animation} flex flex-col`}
    >
      <div className="w-full h-64 relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 group-hover:from-emerald-50 group-hover:to-teal-50 dark:group-hover:from-emerald-900 dark:group-hover:to-teal-900 transition-colors duration-300">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="p-4 object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
            {description}
          </p>
        )}
        {issuer && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Issuer: {issuer}
          </p>
        )}
        {certificateUrl && (
          <a
            href={`https://${certificateUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline self-start"
          >
            View Certificate/Document
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Experience = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02] dark:opacity-[0.03]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-emerald-800 to-teal-800 dark:from-gray-100 dark:via-emerald-200 dark:to-teal-200 text-transparent bg-clip-text animate-gradient-x">
            Experience & Certificates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional experience and certifications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          {items.map((item, index) => (
            <ExperienceCard
              key={index}
              {...item}
              animation={
                index % 2 === 0 ? "animate-fadeInUp" : "animate-fadeInUp"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
