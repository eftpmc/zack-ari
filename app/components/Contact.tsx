"use client"

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.fromTo(
      '.contact-title',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.contact-email',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 70%',
          end: 'top 40%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.contact-links li',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 60%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.contact-svg',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 50%',
          end: 'top 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="contact-section text-base-content p-8 flex flex-col items-center justify-center min-h-screen">
      <h2 className="contact-title text-4xl font-bold mb-6">Contact me</h2>
      <p className="contact-email text-lg mb-4">
        <a href="mailto:zackhhi@gmail.com" className="hover:underline">zackhhi@gmail.com</a>
      </p>
      <ul className="contact-links space-y-2 text-lg">
        <li><a href="https://www.linkedin.com/in/zachary-starnes-810932237/" className="hover:underline">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/zack_hhi/" className="hover:underline">Instagram</a></li>
      </ul>
      <div className="contact-svg mt-8">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#4285F4" />
          <circle cx="16" cy="8" r="4" fill="#34A853" />
          <circle cx="8" cy="16" r="4" fill="#FBBC05" />
          <circle cx="12" cy="12" r="8" fill="#EA4335" />
        </svg>
      </div>
    </section>
  );
};

export default Contact;
