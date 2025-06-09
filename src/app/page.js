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
    phone: "+91 7558732173",
    linkedin: "https://in.linkedin.com/in/rohan-kadukar",
    github: "https://github.com/rohan-kadukar",
    careerObjective: "Aspiring computer science professional seeking to leverage technical skills and project experience in a dynamic organization to drive growth and innovation.",
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
      percentage: "81.09%"
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "Shivraj College, Gadhinglaj | Shivaji University",
      period: "2021 - 2023",
      percentage: "82.36%"
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
    programmingLanguages: ["Java", "Python"],
    webTechnologies: ["HTML", "CSS", "JavaScript", "Angular", "React", "Next.js", "TypeScript", "Bootstrap", "Tailwind CSS"],
    tools: ["Git", "Eclipse", "Visual Studio Code"],
    professionalSkills: ["Team Collaboration", "Effective Communication", "Problem-Solving", "Adaptability", "Time Management"]
  };

  const projectsData = [
    {
      title: "Keshaw Nuts Selling Website",
      technologies: ["Angular", "Typescript", "Firebase"],
      description: "Developed a dynamic e-commerce platform for selling nuts, featuring user authentication, product listings, and a shopping cart.",
      link: "#", // Add actual link if available
      repoLink: "https://github.com/rohan-kadukar/"
    },
    {
      title: "Grocery Management System",
      technologies: ["Java Swing", "MySQL"],
      description: "Created a desktop application to manage grocery inventory, including functionalities for stock tracking, billing, and reporting.",
      link: "#",
      repoLink: "https://github.com/rohan-kadukar/"
    },
    {
      title: "Shopping Website",
      technologies: ["Java JSP & Servlet", "MySQL"],
      description: "Built an online shopping portal with features like product browsing, user registration, and order management.",
      link: "#",
      repoLink: "https://github.com/rohan-kadukar/"
    },
    {
      title: "Abhinav Academy Website (Internship Project)",
      technologies: ["Next.js", "Tailwind CSS", "Javascript"],
      description: "Developed the official website for Abhinav Academy during an internship. Includes an integrated chatbot.",
      link: "https://abhinavedu.org",
      liveLink: "https://abhinavedu.org",
      repoLink: "https://github.com/rohan-kadukar/"
    },
    {
      title: "Abhinav Academy Chatbot",
      technologies: ["Next.js", "Tailwind CSS", "Gemini API"],
      description: "A chatbot integrated into the Abhinav Academy website, utilizing the Gemini API for responses. (Developed during internship)",
      link: "https://abhinav-chatbot.vercel.app/", // Or specific link to chatbot if different
      liveLink: "https://abhinav-chatbot.vercel.app/",
      repoLink: "https://github.com/rohan-kadukar/",
    }
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
    {
      type: 'Certificate',
      title: "DevOps Beginners to Advanced with Projects",
      issuer: "Udemy",
      imageUrl: "/images/DevOps.jpg", // Using placeholder image
      certificateUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-411cdf5f-5669-4d09-9df7-d8953e482917.jpg"
    },
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
