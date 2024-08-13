"use client"

import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import { RiNextjsFill, RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiSupabase, SiMarkdown, SiNodedotjs, SiGithub } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skillIcons: { [key: string]: JSX.Element } = {
  "Next.js": <RiNextjsFill className="text-2xl" />,
  "TailwindCSS": <RiTailwindCssFill className="text-2xl" />,
  "React": <RiReactjsFill className="text-2xl" />,
  "TypeScript": <BiLogoTypescript className="text-2xl" />,
  "Supabase": <SiSupabase className="text-2xl" />,
  "Markdown": <SiMarkdown className="text-2xl" />,
  "Node.js": <SiNodedotjs className="text-2xl" />,
};

type EntryProps = {
  entry: {
    title: string;
    date: string;
    description: string;
    skills: string[];
    previewUrl: string;
    githubUrl?: string;  // Optional prop for GitHub URL
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
    <motion.div className={`relative flex flex-col lg:flex-row items-center justify-center min-h-screen entry-${index} my-16`}>
      <div className={`w-full flex justify-center lg:w-auto lg:absolute inset-0 items-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'} px-4 lg:px-8`}>
        <div className={`entry-info-${index} w-full max-w-lg p-8 rounded-lg mb-8 lg:mb-0 z-10`}>
          <h3 className="text-2xl text-base-content font-semibold">{entry.title}</h3>
          <time className="block text-sm text-base-content mb-4">{entry.date}</time>
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide scroll-smooth mb-4">
            {entry.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="flex items-center justify-center text-base-content">
                {skillIcons[skill]}
              </span>
            ))}
          </div>
          <p className="text-base text-base-content">{entry.description}</p>
        </div>
      </div>
      <div className={`w-full flex justify-center lg:w-auto lg:absolute inset-0 items-center ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} px-4 lg:px-8`}>
        <div className={`entry-image-${index} w-full max-w-lg h-[40rem] bg-gray-100 shadow-lg hover:sha rounded-lg z-10 relative`}>
          <div className="w-full h-full overflow-hidden rounded relative">
            <div className="w-full h-8 bg-white rounded-t-lg flex items-center justify-between px-2 z-20">
              <button 
                className="btn btn-sm btn-circle btn-ghost"
                onClick={() => window.open(entry.previewUrl, '_blank')}
              >
                <ExternalLink className="text-accent-content" size={18}/>
              </button>
              {entry.githubUrl && (
                <button 
                  className="btn btn-sm btn-circle btn-ghost"
                  onClick={() => window.open(entry.githubUrl, '_blank')}
                >
                  <SiGithub className="text-accent-content" size={18}/>
                </button>
              )}
            </div>
            <iframe 
              src={entry.previewUrl} 
              className="w-full h-full" 
              title={`${entry.title} Preview`} 
              style={{ transform: 'scale(0.8)', transformOrigin: '0 0', width: '125%', height: '125%', border: "none" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Entry;
