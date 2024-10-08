"use client"

import React, {useEffect} from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Link from 'next/link';
import Entry from './Entry';

gsap.registerPlugin(ScrollTrigger);

const entries = [
  {
    title: `HHIPE Web App`,
    date: 'March 2024',
    description: `Created with Next.js and Tailwind, this website was created for a local parking enforcement company on Hilton Head Island, SC. It's design was inspired by Hilton Head Island with a coastal color scheme and themed elements.`,
    skills: ['Next.js', 'TailwindCSS'],
    previewUrl: 'https://hhipe.com',
    githubUrl: 'https://github.com/eftpmc/hhip-open-source'
  },
  {
    title: 'Lowcountry Chorale Web App',
    date: 'December 2023',
    description: `This website was designed for a local community choir in Lady's Island, Beaufort. It features interactive elements, animation, and handles events. This project was intended as a rework for the choir's original website.`,
    skills: ['React', 'TailwindCSS'],
    previewUrl: 'https://lowcountrychorale.org'
  },
  {
    title: 'Aritools Web App',
    date: 'June 2023',
    description: `Aritools was a web scraping project created for educational purposes, the website was running privately for a few months before being shutdown. It aimed to scrape ad infested media and present it to the user. The project was also discontinued due to the legal gray area involved with web scraping. The API used advanced web scraping methods and was fairly complex. It featured a frontend using Vitepress and a backend using Node.js.`,
    skills: ['Vitepress', 'Markdown', 'Node.js'],
    previewUrl: 'https://aritools.vercel.app',
    githubUrl: 'https://github.com/eftpmc/aritools'
  },
  {
    title: 'Keep Web App',
    date: 'October 2023',
    description: `Keep was a hobby project designed for self-expression and organization. The development focused heavily on the backend and using supabase to store images, user information, and data. It features authentication, interactive cards, and a responsive masonry layout.`,
    skills: ['Next.js', 'TailwindCSS', 'Supabase'],
    previewUrl: 'https://www.keepari.com',
    githubUrl: 'https://github.com/eftpmc/keep'
  },
];

const Projects = ({ showFull = false }) => {
  const projectsToShow = showFull ? entries : entries.slice(0, 3);

  useEffect(() => {
    gsap.fromTo(
        '.project-section',
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '.project-section',
                start: 'top 90%',
                end: 'top 70%',
                scrub: true,
            },
        }
    );
}, []);

  return (
    <div className="project-section relative">
      <div className="flex justify-center mt-8">
      <h1 className="intro-title text-2xl md:text-4xl text-base-content font-bold font-squarechunks mb-2">Projects</h1>
      </div>
      <div className="space-y-16 relative z-10">
        {projectsToShow.map((entry, index) => (
          <Entry key={index} entry={entry} index={index} />
        ))}
      </div>
      {!showFull && (
        <div className="flex justify-center mt-8">
          <Link href="/projects" passHref>
            <button
              className="px-6 py-3 bg-base-200 border border-base-content text-base-content font-semibold rounded-md hover:bg-primary hover:text-base-200 transition-colors duration-300"
            >
              See More Projects
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Projects;
