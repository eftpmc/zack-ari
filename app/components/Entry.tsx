"use client"

import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillColors: { [key: string]: string } = {
  Flutter: "#2371D6",
  Dart: "#0D6293",
  React: "#ffca28",
  TailwindCSS: "#1e40af",
  DaisyUI: "#d946ef",
  "Next.js": "#e11d48",
  TypeScript: "#0288d1",
  GraphQL: "#e91e63",
};

const getColorForSkill = (skill: string, usedColors: { [key: string]: string }): string => {
  if (skillColors[skill]) return skillColors[skill];

  if (usedColors[skill]) return usedColors[skill];

  // Generate a random color
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  usedColors[skill] = randomColor;
  return randomColor;
};

type EntryProps = {
  entry: {
    title: string;
    date: string;
    description: string;
    skills: string[];
    previewUrl: string;
  };
  index: number;
};

const Entry: React.FC<EntryProps> = ({ entry, index }) => {
  const usedColors = useMemo(() => ({}), []);

  useEffect(() => {
    const direction = index % 2 === 0 ? 1 : -1;

    gsap.fromTo(
      `.entry-info-${index}`,
      { opacity: 0, x: -100 * direction, y: -50 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: `.entry-${index}`,
          start: 'top 90%',
          end: 'top 10%',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    gsap.fromTo(
      `.entry-image-${index}`,
      { opacity: 0, x: 100 * direction, y: -50 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: `.entry-${index}`,
          start: 'top 90%',
          end: 'top 10%',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, [index]);

  return (
    <motion.div className={`relative flex flex-col md:flex-row items-center justify-center min-h-screen entry-${index} mb-16`}>
      <div className={`w-full flex justify-center md:w-auto md:absolute inset-0 items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} px-8`}>
        <div className={`entry-info-${index} w-full max-w-md p-8 bg-white shadow-lg rounded-lg mb-8 md:mb-0 z-10`}>
          <h3 className="text-2xl text-accent-content font-semibold">{entry.title}</h3>
          <time className="block text-sm text-accent-content mb-4">{entry.date}</time>
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide scroll-smooth mb-4">
            {entry.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="badge whitespace-nowrap px-2 py-1 rounded-full text-white bg-accent-content"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="text-base text-accent-content">{entry.description}</p>
        </div>
      </div>
      <div className={`w-full flex justify-center md:w-auto md:absolute inset-0 items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} px-8`}>
        <div className={`entry-image-${index} w-full max-w-md h-[40rem] bg-gray-100 shadow-lg rounded-lg z-10 relative`}>
          <div className="w-full h-full overflow-hidden rounded relative">
            <div className="w-full h-8 bg-white rounded-t-lg flex items-center justify-start px-2 z-20">
              <button 
                className="btn btn-sm btn-circle btn-ghost"
                onClick={() => window.open(entry.previewUrl, '_blank')}
              >
                <ExternalLink className="text-accent-content" size={18}/>
              </button>
            </div>
            <iframe 
              src={entry.previewUrl} 
              className="w-full h-full" 
              title={`${entry.title} Preview`} 
              style={{ border: 'none' }}
            />
            <div className="absolute inset-0 z-20 bg-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Entry;
