// src/components/Skills.js
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaTools, FaLaptopCode, FaBrain, FaStar } from 'react-icons/fa';
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

const SkillCard = ({ name, index, level = 5 }) => {
  const Icon = iconMap[name] || FaCode;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-700 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Skill icon and name */}
      <div className="flex items-center space-x-3 mb-2">
        <motion.div
          animate={{
            rotate: isHovered ? [0, 10, -10, 0] : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
        </motion.div>
        <span className="text-md font-medium bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 text-transparent bg-clip-text">{name}</span>
      </div>

      {/* Skill level stars */}
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + i * 0.1 }}
          >
            <FaStar
              className={`w-4 h-4 ${
                i < level
                  ? 'text-yellow-400'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Skills = ({ skillsData }) => {
  if (!skillsData) return null;

  const { programmingLanguages = [], webTechnologies = [], tools = [], professionalSkills = [] } = skillsData;

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-800 transition-colors duration-500 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02] dark:opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-emerald-800 to-teal-800 dark:from-gray-100 dark:via-emerald-200 dark:to-teal-200 text-transparent bg-clip-text animate-gradient-x">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical and professional abilities.
          </p>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg mr-4"
            >
              <FaLaptopCode className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Technical Skills
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {programmingLanguages.map((skill, index) => (
              <SkillCard key={skill} name={skill} index={index} level={5} />
            ))}
            {webTechnologies.map((skill, index) => (
              <SkillCard key={skill} name={skill} index={index + (programmingLanguages?.length || 0)} level={4} />
            ))}
            {tools.map((skill, index) => (
              <SkillCard key={skill} name={skill} index={index + (programmingLanguages?.length || 0) + (webTechnologies?.length || 0)} level={4} />
            ))}
          </div>
        </motion.div>

        {/* Professional Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg mr-4"
            >
              <FaBrain className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Professional Skills
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {professionalSkills.map((skill, index) => (
              <SkillCard key={skill} name={skill} index={index} level={5} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;