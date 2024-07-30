"use client"

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {

  return (
    <section className="bg-base-200 text-base-content p-8 flex items-center justify-center min-h-[calc(100vh-60px)]">
      <div className="flex flex-col items-center text-center">
        <h1 className="intro-title text-2xl md:text-4xl font-bold font-squarechunks mb-2">Hi, I'm Zack</h1>
        <h2 className="intro-subtitle text-3xl md:text-5xl font-starblues text-primary mb-6 whitespace-nowrap">Fullstack Developer</h2>
      </div>
    </section>
  );
};

export default Intro;
