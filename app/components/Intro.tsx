"use client"

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme || 'light');
  }, []);

  const handleScrollToProjects = () => {
    const firstEntry = document.getElementsByClassName('entry-0');
    if (firstEntry[0]) {
      firstEntry[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementsByClassName('contact-section');
    if (contactSection[0]) {
        contactSection[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-base-200 text-base-content p-8 flex flex-col items-center justify-center min-h-[calc(100vh-60px)] text-center">
      <div className="flex flex-col items-center mb-6">
        <h1 className="intro-title text-2xl md:text-4xl font-bold font-squarechunks mb-2">Hi, I'm Zack</h1>
        <h2 className="intro-subtitle text-4xl md:text-5xl font-starblues text-primary mb-6 whitespace-nowrap">Fullstack Developer</h2>
      </div>
    </section>
  );
};

export default Intro;
