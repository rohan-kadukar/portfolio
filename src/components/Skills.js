// src/components/Skills.js
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaLaptopCode, FaBrain } from 'react-icons/fa';
import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiGit, SiDocker, SiMysql, SiMongodb } from 'react-icons/si';

const iconMap = {
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'React': SiReact,
  'Node.js': SiNodedotjs,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'Git': SiGit,
  'Docker': SiDocker,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
};

const SkillCard = ({ name, index }) => {
  const Icon = iconMap[name] || FaCode;
  return (
    <motion.div 
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 flex items-center space-x-3 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}>
      <Icon className="w-6 h-6 text-emerald-500 dark:text-emerald-400 group-hover:animate-bounce" />
      <span className="text-md font-medium bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 text-transparent bg-clip-text">{name}</span>
    </motion.div>
  );
};

const Skills = ({ skillsData }) => {
  if (!skillsData) return null; // Or a loading state

  const { programmingLanguages = [], webTechnologies = [], tools = [], professionalSkills = [] } = skillsData;
  return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-emerald-800 to-teal-800 dark:from-gray-100 dark:via-emerald-200 dark:to-teal-200 text-transparent bg-clip-text animate-gradient-x">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical and professional abilities.
          </p>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg mr-4 group-hover:animate-pulse">
              <FaLaptopCode className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Technical Skills</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {programmingLanguages.map((skill, index) => (
              <SkillCard key={skill} name={skill} index={index} />
            ))}
            {webTechnologies.map((skill, index) => (
              <SkillCard key={skill} name={skill} index={index + (programmingLanguages?.length || 0)} />
            ))}
            {tools.map((skill, index) => (
              <SkillCard key={skill} name={skill} index={index + (programmingLanguages?.length || 0) + (webTechnologies?.length || 0)} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg mr-4 group-hover:animate-pulse">
              <FaBrain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Professional Skills</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {professionalSkills.map((skill, index) => (
              <SkillCard key={skill} name={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;