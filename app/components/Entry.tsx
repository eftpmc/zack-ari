"use client"

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

type EntryProps = {
  entry: {
    title: string;
    date: string;
    description: string;
    skills: string[];
    image: string;
  };
  index: number;
};

const Entry: React.FC<EntryProps> = ({ entry, index }) => {
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
      <div className={`md:absolute inset-0 flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} px-8`}>
        <div className={`entry-info-${index} w-full max-w-md p-8 bg-white shadow-lg rounded-lg mb-8 md:mb-0 z-10`}>
          <h3 className="text-2xl text-accent-content font-semibold">{entry.title}</h3>
          <time className="block text-sm text-accent-content mb-4">{entry.date}</time>
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide scroll-smooth mb-4">
            {entry.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="badge whitespace-nowrap px-2 py-1 rounded-full text-white"
                style={{ backgroundColor: skillColors[skill] }}
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="text-base text-accent-content">{entry.description}</p>
        </div>
      </div>
      <div className={`md:absolute inset-0 flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} px-8`}>
        <div className={`entry-image-${index} w-full max-w-md p-8 bg-gray-100 shadow-lg rounded-lg z-10`}>
          <img src={entry.image} alt={entry.title} className="w-full rounded" />
        </div>
      </div>
    </motion.div>
  );
};

export default Entry;
