// src/components/Projects.js
'use client';

import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, description, technologies, imageUrl, liveLink, repoLink, animation }) => (
  <div className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 ${animation} flex flex-col group`}>
    {imageUrl && (
      <div className="w-full h-48 sm:h-56 relative">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          className="transition-transform duration-500 hover:scale-105 object-cover"
        />
      </div>
    )}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 text-transparent bg-clip-text mb-3">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-2 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-110">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex space-x-3">
        {liveLink && (
          <a 
            href={liveLink} 
            style={{ textDecoration: 'none' }}
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white dark:text-white font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 shadow-md backdrop-blur-sm"
          >
            Live Demo
          </a>
        )}
        {repoLink && (
          <a 
            href={repoLink} 
            style={{ textDecoration: 'none'}}
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white dark:text-white font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 shadow-md backdrop-blur-sm"
          >
            View Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = ({ projectsData, blogUrl }) => {
  if (!projectsData) return null;
  return (
    <section id="projects" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02] dark:opacity-[0.03]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-emerald-800 to-teal-800 dark:from-gray-100 dark:via-emerald-200 dark:to-teal-200 text-transparent bg-clip-text animate-gradient-x">My Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of projects and check out my personal blog for more insights and articles.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} animation={index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'} />
          ))}
        </div>
        {blogUrl && (
          <div className="mt-16 text-center animate-fadeInUp">
            <a
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Visit My Blog on Blogger
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;