'use client';
import Head from 'next/head';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'));
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const personalData = {
    name: "Rohan Ramesh Kadukar",
    email: "rohankadukar12@gmail.com",
    // phone: "+91 7558732173",
    linkedin: "https://in.linkedin.com/in/rohan-kadukar",
    github: "https://github.com/rohan-kadukar",
    careerObjective: `Build what users love and systems trust—blazing-fast React/Next.js up front, secure Node/Express + MySQL (Sequelize) at the core. Own the outcome: lead end-to-end when scale matters, or go UI-first to win Web Vitals, accessibility, and conversions—so the product ships faster, breaks less, and grows on purpose.`,
    dateOfBirth: "March 10, 2003",
    languages: ["Marathi", "Hindi", "English"],
    profileImage: "/images/demoPic.png",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/rohan-kadukar",
        icon: "FaGithub"
      },
      {
        platform: "LinkedIn",
        url: "https://in.linkedin.com/in/rohan-kadukar",
        icon: "FaLinkedin"
      },
      {
        platform: "Email",
        url: "mailto:rohankadukar12@gmail.com",
        icon: "FaEnvelope"
      }
    ]
  };

  const educationData = [
    {
      degree: "M.Sc. in Computer Science",
      institution: "Modern College, Ganeshkhind | SPPU",
      period: "2023 - 2025",
      percentage: "9.05"
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "Shivraj College, Gadhinglaj | Shivaji University",
      period: "2021 - 2023",
      percentage: "9.14"
    },
    {
      degree: "H.S.C. (12th Grade)",
      institution: "R.K. Junior College, Gadhinglaj | Maharashtra State Board",
      period: "2019 - 2020",
      percentage: "73.38%"
    },
    {
      degree: "S.S.C. (10th Grade)",
      institution: "Jagruti High School, Gadhinglaj | Maharashtra State Board",
      period: "2017 - 2018",
      percentage: "90.60%"
    }
  ];

  const skillsData = {
    programmingLanguages: ["JavaScript", "TypeScript", "Java", "Python"],
    webTechnologies: ["HTML", "CSS", "React", "Next.js", "Bootstrap", "Tailwind CSS", "Angular"],
    tools: ["Git", "Visual Studio Code", "Postman", "MySQL Workbench", "Vercel"],
    professionalSkills: ["Team Collaboration", "Effective Communication", "Problem-Solving", "Adaptability", "Time Management"]
};


  const projectsData = [
  {
    title: "Abhinav Academy Website",
    technologies: ["Next.js", "Tailwind CSS", "Laravel API"],
    description: "Production education site with SEO-first pages, optimized images, and clean API integrations.",
    link: "https://abhinavedu.org",
    liveLink: "https://abhinavedu.org",
    // repoLink: "#"
  },
  {
    title: "AI Chatbot Widgets",
    technologies: ["React", "Tailwind CSS", "Google Gemini API"],
    description: "Embeddable chatbot widget with async load, theme config, and JSON-driven answers for site-specific knowledge.",
    link: "https://personal-chatbot-buddy.vercel.app/widget",
    liveLink: "https://personal-chatbot-buddy.vercel.app/widget",
    repoLink: "https://github.com/rohan-kadukar/personal-chatbot"
  },
  {
    title: "Employee Field Management Dashboard",
    technologies: ["React", "TypeScript", "Bootstrap"],
    description: "Role-based admin UI with sortable/filterable tables, mobile-first cards, and clear status indicators.",
    link: "https://chikode-demo.rohatech.site/",
    liveLink: "https://chikode-demo.rohatech.site/",
    // repoLink: "#"
  },
  {
    title: "CRM System",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
    description: "Leads pipeline, filtering, exports, and role-based access backed by REST APIs and a normalized schema.",
    link: "https://crm-codeexpert.vercel.app/",
    liveLink: "https://crm-codeexpert.vercel.app/",
    // repoLink: "#"
  },
  {
    title: "Real-Time Chat Application",
    technologies: ["React", "Node.js", "Express", "Socket.IO", "MySQL", "Sequelize"],
    description: "Group chat with credential/token login, group/member management, pin/unpin, typing and read states.",
    // link: "#",
    // liveLink: "#",
    // repoLink: "#"
  },
  {
    title: "Portfolio Website",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    description: "Personal portfolio with responsive UI, case studies, and performance-focused build.",
    link: "https://www.rohatech.site/",
    liveLink: "https://www.rohatech.site/",
    repoLink: "https://github.com/rohan-kadukar/portfolio"
  },
  {
    title: "Seturo",
    technologies: ["Next.js", "Tailwind CSS"],
    description: "In-progress product space for internal demos and validation.",
    link: "https://seturo.rohatech.site/",
    liveLink: "https://seturo.rohatech.site/",
    repoLink: "https://github.com/rohan-kadukar/seturo"
  },
];


  const experienceItems = [
    // Internship Data
    {
      type: 'Internship Offer Letter',
      title: 'Internship Trainee at SparkLab IT Solutions Pvt. Ltd.',
      imageUrl: '/images/Internship.png', // Using placeholder image
      description: 'Selected for an internship position. Period: 01-Jan-2025 to 30-Jun-2025 (approx. 6 months). Responsibilities and projects to be assigned upon joining.',
    },
    // Certificate Data
    {
      type: 'Certificate',
      title: "Angular & NodeJS - The MEAN Stack Guide [2025 Edition]",
      issuer: "Udemy",
      imageUrl: "/images/MEAN.jpg", // Using placeholder image
      certificateUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-c1f058b0-7411-4cfc-a0be-22ed7f60f59e.jpg"
    },
    {
      type: 'Certificate',
      title: "Angular - The Complete Guide (2024 Edition)",
      issuer: "Udemy",
      imageUrl: "/images/Angular.jpg", // Using placeholder image
      certificateUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-e9334c06-1570-47ca-9696-7290065b82dd.jpg"
    },
    // {
    //   type: 'Certificate',
    //   title: "DevOps Beginners to Advanced with Projects",
    //   issuer: "Udemy",
    //   imageUrl: "/images/DevOps.jpg", // Using placeholder image
    //   certificateUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-411cdf5f-5669-4d09-9df7-d8953e482917.jpg"
    // },
  ];

  return (
    <>
    <Head>
        <meta name="theme-color" content="#1e40af" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </Head>
    <main className="min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero personalData={personalData} />
      <About personalData={personalData} />
      <Education educationData={educationData} />
      <Skills skillsData={skillsData} />
      <Projects projectsData={projectsData} />
      <Experience items={experienceItems} />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </main>
    </>
  );
}
