"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "HHIPE Web App",
    date: "March 2024",
    description: "Created with Next.js and Tailwind, this website was created for a local parking enforcement company on Hilton Head Island, SC. Its design was inspired by Hilton Head Island with a coastal color scheme and themed elements.",
    skills: ["Next.js", "TailwindCSS"],
  },
  {
    title: "Lowcountry Chorale Web App",
    date: "December 2023",
    description: "This website was designed for a local community choir in Lady's Island, Beaufort. It features interactive elements, animation, and handles events. This project was intended as a rework for the choir's original website.",
    skills: ["React", "TailwindCSS"],
  },
  {
    title: "Keep Web App",
    date: "October 2023",
    description: "Keep was a hobby project designed for self-expression and organization. The development focused heavily on the backend and using supabase to store images, user information, and data. It features authentication, interactive cards, and a responsive masonry layout.",
    skills: ["Next.js", "TailwindCSS", "Supabase"],
  },
  {
    title: "Aritools Web App",
    date: "June 2023",
    description: "Aritools was a web scraping project created for educational purposes, the website was running privately for a few months before being shut down. It aimed to scrape ad-infested media and present it to the user. The project was also discontinued due to the legal gray area involved with web scraping. The API used advanced web scraping methods and was fairly complex. It featured a frontend using Vitepress and a backend using Node.js.",
    skills: ["Vitepress", "Markdown", "Node.js"],
  },
];

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '.about-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="about-section bg-base-200 text-base-content p-4 flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
      <div className="w-full flex flex-col items-center mb-4">
      <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 fill-primary" id="Layer_2" data-name="Layer 2" viewBox="0 0 196 178.83"><defs></defs><g id="Layer_2-2" data-name="Layer 2"><path d="M65.77 109.81c-.5.06-.61.42-.74.74.48-.12.72-.35.74-.74ZM65.01 110.55l.01.01v-.01h-.01zM52.8 178.6c.04-.08.09-.17.14-.26-.05.09-.09.17-.14.26Z" className="cls-1" /><path d="m60.97 127.21.55.24c-.14.84-.68.03-.67.85.72.56-.29 1.26.07 1.66-.06-.03-.14.34-.37.24.39.25.03.42.09.69.1.12.13-.02.26-.05l.05.59c-.16.17-.4.15-.41-.1-.4 1.37-1.81 8.14-1.88 9.74.27-.12.18-.65.6-.7.14.48-.18.57.01.83-.58-.03-.29.85-.88.97l.29.22-.22.14c.02 1.9.08.46-.24 2.03-.1.94.2 1.5-.02 1.96.02-.07.22-.22.24.04-.24-.04.06.69-.2.72-.01.24-.17.98.18.83-.18.07-.36.72-.42.28-.05.22-.13.43-.09.61l.14-.26c-.1.78-.39 1.12-.22 1.7l.17-.24c-.07.46-.12.85-.42.94v-.5c-.13.76-.19 1.23-.16 1.9l.05-.22c.13.9-.49 5.15-.4 5.96l.23-.28v.67c.01-.07-.46-.48-.39-.52-.24 1.37-1.62 8.43-1.95 9.66-.15.49-.15.05-.17.04-.09.63.04.3-.07.82-.04.14-.06-.05-.05-.13-.03.23-.1.44-.07.47.08-.28.16-.12.24-.22l-.15.67-.05-.05c-.03.15.07.43-.1 1.08-.25 1.12-.51 2.31-.76 3.42-.01-.02.03-.26.06-.5-.03.15-.08.38-.12.51.09-.26-.08.48-.02.27-.12.84-.4 1.87-.53 2.6 0 .04.04.46-.03.85-.05.39-.2.74-.2.74-.1.2-.19.37-.24.47.11-.21.24-.45.35-.67v-.04c.22-.4.13-.23.32-.59.02-.02-.21.42-.41.81.18-.35.38-.69.44-.84.18-.33 0 .04.21-.35.15-.28.33-.66.51-.98.45-.77.6-1.21 1.01-1.92l-.03.08c.16-.25.39-.76.66-1.2-.08.13-.17.23-.03-.05.31-.52.47-.89.71-1.26l.14-.39c1-1.82 4.66-9.12 5.56-10.99l-.02.08c1.37-2.84 4.37-8.62 5.53-11.64.45-.38.71-1.02 1.02-1.47-.23.23-.35.08-.24-.12.74-1.43-.11-.15.5-1.64.58-1.76 3.98-8.1 5.01-9.49-.07-.96.78-1.84.85-2.72l.08.12c.21-.91 3.04-5.51 3.34-6.55l-.14.1c.07-.97.63-.65 1.16-1.25-.69-.13-.7-.98-.62-1.28l.14.06c.1-.46-.03-1.61.2-2.34l.36.15c-.13-.72.55-1.76.71-2.19.6-.91 2.01-2.14 2.08-3.6l1.58-.43-.06-.16s-3.43-1.54-7.4-3.02c-3.95-1.47-8.41-2.87-10.1-2.46l-.41-.17-.02.38c-.29.37.15.73-.25.56l.16-.58c-.2.4-.36.02-.56-.23-.07.17-.15.33-.31.44.14.14.18 0 .28-.05.1.29.42.74.18.97-.12.44-.66-.19-.8.32-.8 2.67-1.68 5.23-2.05 8.08-.16.02-.14-.06-.19-.16.01.9-.16 1.64-.14 2.46-.19.16-.4.15-.55.17.3-.03-.39 4.38-.47 4.42ZM103.29 118.11c-.26.42-.05.71.11 1 .2-.45.18-.76-.11-1ZM103.4 119.12h.01l-.01-.01v.01zM147.59 168.02c-.03-.08-.07-.17-.11-.26.04.09.07.17.11.26Z" className="cls-1" /><path d="m113.69 131.76.53-.29c.56.58-.4.54.24 1 .88-.24.78.95 1.31.9-.06.03.17.31-.05.43.43-.15.34.22.59.33.15 0 .06-.11.13-.23l.48.3c.03.23-.14.4-.33.26.8 1.1 5.09 6.09 6.26 7.07.08-.28-.38-.52-.16-.87.45.17.33.47.64.47-.39.43.47.71.19 1.25l.35-.09-.03.25c1.46 1.08.4.2 1.39 1.36.65.62 1.27.71 1.48 1.16-.05-.06-.03-.3.18-.17-.18.17.56.36.42.57.18.15.64.71.75.34-.06.18.33.7-.05.49.14.17.24.35.41.43l-.11-.26c.53.53.61.95 1.16 1.16l-.08-.27c.31.32.57.59.44.87l-.38-.29c.5.54.82.85 1.35 1.23l-.14-.17c.76.42 3.6 3.38 4.28 3.79l-.07-.35.51.4c-.04-.06-.65.07-.64 0 .88.99 5.37 6.19 6.09 7.17.28.4-.06.14-.08.15.42.44.25.15.57.54.08.11-.07.01-.14-.04.15.16.27.34.31.33-.16-.23 0-.19-.01-.32l.41.51h-.07c.09.12.37.21.75.72.69.86 1.41 1.76 2.1 2.61-.03 0-.18-.17-.34-.34.09.11.24.28.31.39-.14-.22.31.34.19.18.56.58 1.16 1.42 1.62 1.95.03.02.37.24.62.52.26.27.43.59.43.59.08.19.16.36.2.47l-.28-.66-.02-.03c-.17-.39-.1-.23-.25-.59 0-.03.19.41.35.79-.15-.35-.28-.7-.35-.83-.13-.33.03.03-.13-.37-.12-.28-.29-.64-.41-.97-.3-.8-.53-1.18-.81-1.91l.04.07c-.09-.27-.32-.75-.49-1.22.05.14.07.27-.05 0-.19-.54-.37-.88-.5-1.29l-.2-.34c-.74-1.84-3.96-8.96-4.82-10.75l.05.06c-1.29-2.73-3.81-8.43-5.4-11.09 0-.57-.33-1.15-.48-1.64.03.31-.15.32-.24.11-.63-1.41-.18 0-.94-1.35-.97-1.48-3.73-7.8-4.16-9.41-.78-.5-.93-1.67-1.56-2.24h.14c-.56-.69-2.36-5.55-2.98-6.38v.17c-.72-.61-.12-.86-.26-1.63-.52.46-1.19-.02-1.37-.25l.13-.07c-.29-.34-1.26-.9-1.68-1.5l.34-.19c-.63-.31-1.02-1.44-1.26-1.81-.33-.99-.43-2.8-1.51-3.7l.64-1.48-.16-.05s-3.29 1.81-6.86 4.08c-3.56 2.26-7.37 4.96-8.09 6.52l-.38.22.28.23c.11.43.65.3.28.52l-.35-.46c.18.38-.21.29-.52.31.09.15.16.31.15.49.19-.03.11-.15.14-.25.28.08.83.09.86.41.26.34-.55.41-.24.81 1.56 2.14 2.99 4.28 4.94 6.19-.09.13-.13.07-.24.06.7.5 1.16 1.06 1.8 1.51.01.24-.13.4-.21.53.16-.26 3.11 2.8 3.1 2.89ZM50.33 113.22c-.32-.11-.69-.2-1.1-.27-.41-.09-.86-.22-1.34-.32-.48-.09-.98-.19-1.49-.29-.51-.14-1.02-.28-1.53-.41.75.34 1.54.71 2.44.87.9.2 1.89.42 3.03.41ZM44.82 111.92h-.03c.03 0 .05.01.07.02-.02 0-.03-.01-.04-.02ZM158.85 116.44c.91-.39 1.74-.94 2.62-1.49-.85.51-1.66 1.06-2.62 1.49Z" className="cls-1" /><path d="m53.9 62.12-.61-.31c0-2.51.27-2.85.43-3.15.18-.3.3-.55.56-2.82-.3-.95.13-2.86.73-4.66l.11-.3v.02s.02.02.04 0c.03-.03.05-.05.07-.08.03-.05.03-.11-.04-.24.05.05.15-.1.31.22-.26-.57.01-.26 0-.49-.02-.24-.06-.19-.15-.36.04-.18.1-.39.19-.6.13.13.13.69.08.85.09-.02.41-.3.28.34-.01.19-.01.35 0 .47l.04.15.03.08v.02l.1.21.22.47.91 1.87 1.13 1.88c1.62 2.49 3.85 4.96 6.71 6.83 2.84 1.88 6.2 3.02 9.35 3.38 3.18.38 6.12.05 8.79-.57 1.35-.31 2.58-.72 3.86-1.22 1.57-.63 3.21-1.47 4.61-2.41 1.44-.91 2.68-2.01 3.66-3.26 1.07-1.22 1.45-2.74 2.01-4.1.26-1.22.46-2.39.69-3.54.14-.68.14-.86.2-1.22.05-.33.09-.66.14-.98.16-1.28.29-2.48.36-3.59.04-.55.08-1.08.09-1.58v-.17s-.02-.04-.03-.05c-.09-.03-.14-.03-.17-.02-.02 0-.03.01-.04.02-.02.02-.02 0-.04.12-.12 1.42-.32 2.81-.68 3.55.03-.87.04-1.62.08-2.28.02-.33.04-.64.06-.93 0-.14.02-.28.03-.41v-.06c.04-.11.06-.14-.1-.27.4.07.45 0 .49-.06.04-.05.08-.14.52.4-.16-.2-.33-.42-.5-.65l.02.02c.09.1.19.22.29.35-.13-.24-.32-.56-.27-.59 0-.08.01-.09.03-.07.03.04.17.22.36.42.08 0 .18-.19.35-.23.16-.05.35.04.35.26-.01-.03.09-.39.3-.29-.07.07-.08.13-.05.17 0 .01.02.02.04.03-.03-.07.19.31.35.57l.39.78c.46 1.12.8 2.39 1.13 3.41.16.52.29 1 .39 1.41.04.52.05.97.04 1.29.18 1.66.51 4.7.82 7.61.34 3.07.64 5.8.84 6.72.42-.35.54-.55.19-.52.02 0 .03-.26.02-.57 0 .11 0 .23.01.46.17-.04.42-.13.71-.25.15-.06.31-.13.47-.2.18-.09.22-.07.35-.12.42-.13.9-.31 1.27-.45.09-.03.18-.06.26-.09.04-.01.08-.03.11-.04.06-.03.11-.06.16-.09.19-.11.32-.17.34-.15.02.02-.07.1-.28.29-.27.23-.46.36-.79.59.2-.12.33-.17.59-.34l.87-.6c.58-.4 1.14-.79 1.69-1.16a55.17 55.17 0 0 0 2.88-2.11l-2.93 1.88c1.92-1.36 3.62-2.56 5.18-3.65 1.52-1.08 2.91-1.96 4.2-3.09.65-.54 1.27-1.05 1.88-1.56.6-.54 1.18-1.16 1.75-1.74.57-.59 1.13-1.18 1.69-1.78.52-.67 1.03-1.35 1.53-2.04-.88.92-1.72 1.88-2.66 2.64 1.09-1.01 1.98-2.24 2.89-3.27.44-.53.89-1.03 1.29-1.54.31-.41.61-.81.89-1.19.94-1.18 1.68-2.14 2.33-2.66l-1.03 1.76-1.12 1.72c.49-.7.95-1.31 1.36-1.94.39-.62.76-1.22 1.12-1.79-.08.11-.03.05-.03.05l.02-.04.03-.08.06-.17c.07-.25.13-.53.18-1.06l-.09.2c0-.22.06-.52.12-.93.05-.3.1-.67.15-1.09.02-.21.05-.44.07-.68 0-.12.02-.25.03-.37 0-.06 0-.13.02-.19l.09.05c.51.25 1.06.76 1.51 1.43.46.67.81 1.5 1.03 2.29.11.4.2.77.26 1.12.02.03.03.34.05.52.02.21.04.4.04.58.01.36.03.66.05.91l.28-1.03.11-.53c.04-.16.07-.4.11-.44.02.04.03.25.04.4l.04.5.03 1c.04.67-.01 1.33-.02 2 .03-.24-.26-.76-.53-1.25-.28-.49-.58-.95-.49-1.14-.03.92-.17 2.25-.47 3.92a29.69 29.69 0 0 1-1.76 5.74c-.87 2.12-2.14 4.34-3.75 6.48-.38.55-.85 1.04-1.27 1.58l-.76.82c-.27.31-.52.52-.78.79l-.85.72c-2.2 1.96-4.83 3.83-7.08 5.7 1.58 2.25 3.32 4.72 4.83 7.08.35.6.62 1.21.94 1.82l.11.23.05.12.09.22.17.43c.22.57.41 1.14.58 1.72.18.67.27.83.51 2.45.04.33.13.64.14.99l.03 1.05.03 1.04-.06 1.11c-.16 2.95-.37 6.04-.59 8.84l1.15.12c.15.05.49-.04.73-.06l.79-.11c1.04-.15 2.08-.29 3.09-.43 2.02-.29 3.99-.58 5.89-.85 1.9-.29 3.76-.69 5.53-1.01.43-.08.91-.17 1.28-.26.29-.07.58-.14.86-.2.52-.12 1.04-.24 1.53-.36 3.97-.97 6.99-1.88 8.66-2.39 3.88-1.06.91.41.88.49 2.31-.85 2.75-1.18 3.13-1.41.37-.25.69-.39 2.63-1.15.17-.06.13-.03.17-.03.02 0 .04.02.05.03.02.03.01.08 0 .13 0 .01 0 .02-.02.04-.04.02-.07.05-.11.08-.08.05-.16.11-.25.16-.17.11-.35.21-.5.28.34-.14.68-.28.99-.41.09-.03.17-.06.24-.08.12-.04.2-.09.2-.2-.46.02-.42-.56-.81-.77.58-.21 1.04-.4 1.54-.61l-.12.41c.15-.06.37-.41.81-.85.43-.42 1.13-.98 1.87-1.28a27.306 27.306 0 0 0 3.52-2.11l.35-.24c.02.05-.06.25-.09.36-.08.27-.16.54-.25.81-.35 1.08-.78 2.14-1.27 3.16-.3.15-.27-.27-.28-.62-.15.33-.27.78-.64 1.2.85-.94-.08.82.36.24.18.66-.49 2-1.17 3.11-.2.3-.39.6-.58.9-.11.17-.22.33-.32.5-.21.31-.43.62-.64.92-.41.61-.81 1.2-1.19 1.78-.39.55-.76 1.09-1.08 1.62.07.2.33 1.32.55 2.88.11.79.22 1.72.32 2.72.08.99.1 2.03.11 3.12 0 .55-.01 1.1-.02 1.64-.03.54-.08 1.06-.14 1.59a78.09 78.09 0 0 1-.38 2.95c-.34 1.74-.73 3.01-.6 3.2-.49.3-.97.6-1.45.87-.53.24-1.04.47-1.49.68-.92.4-1.66.69-2.01.8.32-.03 1.6-.49 3.07-1.14.18-.08.37-.17.55-.25l.5-.3c.33-.2.67-.41 1-.61.65-.41 1.27-.82 1.74-1.17l.03-.62c1.97-1.65 2.24-1.79 2.52-1.91.27-.12.52-.22 2.25-1.89.23.04-.44.86-1.54 1.99-.55.57-1.34 1.18-2.11 1.83-.4.32-.78.66-1.23.97-.47.3-.94.61-1.4.91 1.77-1 3.16-2.14 4.45-3.11 1.16-1.01 2.01-1.91 2.39-2.56 2.35-2.26.12.61 2.86-2.19.9-1.07 1.7-2.39 2.65-3.7.43-.66.86-1.33 1.31-1.98.47-.69.82-1.09 1.63-2.36v.11c.86-1.3 1.65-2.54 2.39-3.73.76-1.17 1.3-2.4 1.9-3.52.57-1.13 1.13-2.22 1.63-3.28.43-1.03.84-2.04 1.26-3.04.39-.99.85-1.99 1.19-2.94.35-.95.69-1.91 1.05-2.9.82-2.03 1.39-3.95 2.26-6.28l-.14.86c.69-1.71 1.33-3.97 2.1-6.57.39-1.31.81-2.71 1.23-4.12.45-1.46.94-2.99 1.46-4.54-.62 1.79-1.45 3.58-.47.18.46-1.43.9-2.77 1.31-4.03.21-.72.4-1.39.59-2.04.21-.76.42-1.48.62-2.19.27-.95.55-1.88.86-2.85-1.41.95-2.91 1.94-4.38 2.89l-7.63 5.73c-2.11 1.45-4.61 3.17-7.44 5.12-1.36.93-2.8 1.92-4.31 2.95l-.57.39c-.18.12-.35.21-.53.32-.35.21-.7.42-1.06.63-.71.43-1.44.86-2.18 1.31-.74.44-1.5.9-2.27 1.36-.77.46-1.49.77-2.26 1.17-1.52.75-3.09 1.58-4.69 2.33-.79.35-1.62.75-2.42 1.06-.63.26-1.26.52-1.9.79-.81.31-1.64.63-2.49.95-3.4 1.26-7.13 2.42-10.98 3.36l-1.27.31-.12.04-.26.07-.28.07c-.09.01-.23.09-.19-.04 0-.14-.02-.28-.05-.43l-.06-.24c-.23-.98-.51-2-.81-2.95-.32-.96-.65-1.9-1.02-2.77l-.14-.33c-.04-.09-.02-.04-.03-.07l-.03-.05-.06-.1a2.36 2.36 0 0 0-.26-.36c.1-.12.25-.23.36-.36.28-.31.56-.61.83-.9.62-.7 1.2-1.41 1.76-2.1 2.18-2.8 3.79-5.54 5.01-8.05 2.43-5.05 3.32-9.18 3.8-12.01l-.07.73c.13-.81.29-1.64.37-2.5.11-.86.19-1.75.23-2.66.02-.46.06-.92.06-1.38v-1.66c-.03-1.45-.21-2.91-.31-4.41-.77-5.9-2.7-11.73-5.42-16.39a41.102 41.102 0 0 0-4.47-6.45c-1.62-1.93-3.32-3.79-5.17-5.86-.95-1.04-1.91-2.1-2.87-3.15l-.39-.2c-.15-.09-.2-.07-.48-.29l-.69-.52c-.13-.1-.2-.13-.38-.3l-.59-.52-1.19-1.05-.15-.13-.22-.21-.46-.44-.93-.88c-.36 2.87-.73 5.75-1.09 8.62-.35 2.72-.71 5.76-1.05 7.81l-.51 3.4-.25 1.7c-.1.52-.24.84-.36 1.26l-.76 2.41-.38 1.2-.19.6c-.06.2-.16.34-.23.51-.65 1.33-1.29 2.65-1.93 3.98l-.26.47-.13.24-.19.3-.29.46-.51.82c-.16.28-.36.53-.54.79l-.5.71c-.12.19-.14.21-.22.32-.27.36-.57.7-.91 1.02-.17.16-.35.31-.54.46-.13.15-.11-.02-.12-.11-.01-.1-.03-.19-.06-.29-.11-.47-.31-.91-.57-1.32.16.27-.35-.62-.63-1.09-.31-.56-.64-1.04-.99-1.52-.7-.95-1.38-1.87-2.04-2.77-.7-.86-1.45-1.59-2.14-2.36-.36-.36-.69-.78-1.06-1.09-.36-.32-.72-.63-1.08-.94-2.19-2.36-5.1-4.31-7.99-5.87-1.45-.68-2.91-1.4-4.3-1.82-1.39-.52-2.75-.9-4.02-1.29 2.85.98 1.97 1.02-.16.37-1.87-.52-3.25-.92-4.47-1.23-.59-.15-1.09-.28-1.52-.39-.21-.05-.41-.1-.59-.15-.13-.02-.12.01-.18.01-.35.08-.39.14-.41.2-.03.06.04.15-.32.24-.4.08-.68.31-3.53.14.18.64.57 1.97.99 3.45.67 2.38 1.47 5.24 2.39 8.51.21.76.42 1.55.64 2.36.2.78.31 1.48.47 2.26.37 1.58.48 3 .65 4.53.1.77.07 1.49.12 2.26.03.76.06 1.54.04 2.31-.02.55-.04 1.11-.07 1.68l-.09 1.22c-.08.82-.15 1.67-.29 2.53-.05.32-.09.64-.14.97l-.07.4c0 .49-.42.79-.83 1-.11.05-.21.11-.32.15-.07.03-.07.04-.21.08l-.42.16c-.59.2-1.2.37-1.8.48-1.2.22-2.35.23-3.31.04-.97-.18-1.73-.57-2.46-1.14s-1.44-1.4-2.05-2.51c-.17-.24-.31-.55-.45-.85l-.21-.45c-.07-.16-.13-.21-.27-.71-.24-.79-.49-1.57-.73-2.35l-.18-.58-.09-.29-.05-.34-.21-1.36c-.14-.91-.28-1.81-.42-2.71-.04-.21-.06-.47-.06-.74l-.03-.79c-.02-.53-.05-1.06-.07-1.58-.04-1.05-.09-2.1-.13-3.13-.02-1.15-.03-2.29-.04-3.42-.03-4.65-.07-9.13-.1-13.39-.67.37-1.31.74-1.94 1.09l-.47.27c-.16.09-.32.19-.38.19-.16.05-.32.11-.48.16-.32.11-.62.21-.91.31-.09.04-.12.01-.25.11-.18.15-.36.3-.53.45-.35.3-.7.59-1.04.87-2.52 2.16-4.58 3.92-6.08 5.2-.83.83-1.67 1.67-2.51 2.56-.42.45-.85.85-1.28 1.33-.42.48-.85.96-1.28 1.44-.43.46-.85.99-1.27 1.53-.42.53-.84 1.07-1.27 1.61l-1.23 1.76c-.41.58-.83 1.16-1.2 1.82l-1.16 1.92c-.39.63-.71 1.36-1.07 2.03-.74 1.33-1.32 2.8-1.91 4.23-.3.71-.57 1.42-.82 2.17-.2.65-.4 1.3-.6 1.94-.24.95-.48 1.88-.65 2.79 0-.25.03-.5.06-.75-.3 1.36-.89 3.84-1.23 7.13-.36 3.28-.46 7.37.11 11.72.24 2.18.71 4.41 1.27 6.66.31 1.11.61 2.24 1 3.35.19.55.36 1.12.58 1.66l.5 1.3c.34.86.76 1.63 1.23 2.24.45.38-.23.24-.47.28-.31.01-.59.03-.85.04-.51.03-.91.06-1.17.11l.27.06c-.18.05-.35.09-.51.11-.08 0-.15.02-.22.03-.16 0-.3.01-.44.02-.98.04-1.69.03-2.35 0-1.33-.06-2.47-.2-5.22-.14.38.28-.92.59-2.6.85-.84.13-1.77.24-2.64.34-.43.04-.85.08-1.23.12-.21.02-.4.03-.58.05-.29.02-.56.04-.8.05l.13-.14c-2.96.21-7.72.61-12.75 1.03-.63.05-1.26.1-1.9.16l-.96.08-.24.02c-.06.02-.08.04-.13.06l-.24.13c-.65.34-1.3.69-1.94 1.03-1.3.67-2.59 1.3-3.81 1.86l-.14-.26c-.46.26-.99.55-1.57.84-.15.07-.29.15-.44.22l-.23.11c-.1.02-.07.17-.11.25-.05.19-.1.39-.14.59-.04.11-.03.19 0 .26l.05.22c.13.59.26 1.21.39 1.83l.1.46.28.59c.19.39.37.79.56 1.18.18.39.37.78.55 1.16.11.2.13.37.32.59.18.22.36.43.53.65.7.86 1.38 1.68 2.01 2.45.57.77 1.39 1.5 2.01 2.16.65.65 1.22 1.23 1.7 1.71 1.04 1.11 2.31 2.26 3.56 3.51 1.26 1.25 2.63 2.52 4.19 3.86.27.24.54.47.81.72.24.22.49.42.75.63l1.55 1.28c1.03.88 2.2 1.69 3.33 2.55 4.61 3.38 10.26 6.38 16.03 7.94 1.16.58 2.39 1.01 3.63 1.46 1.23.49 2.52.81 3.81 1.16l1.17.07s.22-.14.56-.44c.35-.3.81-.73 1.31-1.26.99-1.06 2.04-2.51 2.55-4.07.52-1.59.55-3.22-.29-4.68-.81-1.48-2.37-2.64-5.03-3.7l.24-.3c-.73-.1-1.45-.3-2.18-.44-.64-.17-1.2-.35-1.67-.51-.47-.15-.87-.25-1.17-.33-.61-.15-.87-.25-.73-.37.58.22 1.17.39 1.76.59.58.2 1.17.4 1.77.52-.65-.16-1.01-.3-1.18-.4-.17-.09-.14-.12 0-.12.27.03.99.11 1.51.12-1.07-.23-2.09-.69-2.9-1.03-.54-.04.32.25.7.44-.71-.16-1.57-.31-2.45-.62-.89-.28-1.81-.59-2.59-1.1-2.56-1.32.05-.48-2.87-2.16-1.92-1.12-3.78-2.44-5.62-3.82-.92-.69-1.81-1.45-2.71-2.17l-.67-.58-.08-.07-.01-.01-.01-.03c0-.02-.07-.08-.1-.12-.29-.35-.47-.65-.59-.87l-.04-.08v-.05h.08l.32.02.52.03H26.4c2.58-.15 5.17-.28 7.78-.42.48.11-.08.14-.68.23 1.57-.11 3.09-.21 4.59-.32 1.95-.12 3.86-.23 5.75-.34 5.61-.33 11.09-.66 16.64-.99 3.26-.02 4.41.12 5.54.2-.26-.02.37-.08 1.7-.17 1.24-.09 3.11-.22 5.43-.38-1.66-2.05-3.58-4.42-5.67-7.01-1.06-1.32-2.17-2.69-3.31-4.11-1.11-1.39-2.34-2.85-3.24-4.19-.49-.69-.99-1.38-1.49-2.07a5.25 5.25 0 0 1-.63-1.04l-.54-1.03c-.36-.69-.73-1.38-1.09-2.07-.1-.17-.17-.35-.25-.52-.08-.17-.16-.34-.26-.61l-.2-.5c-.25-.58-.46-1.16-.65-1.75-.22-.58-.38-1.17-.55-1.74-.66-2.3-1-4.47-1.16-6.06-.16-1.6-.14-2.62-.14-2.7Z" className="cls-1" /></g></svg>
            </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 text-left flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-base">
            Hi, I'm Zack, a passionate Fullstack Developer with a love for creating dynamic and responsive web applications. With a background in various technologies and a keen eye for detail, I strive to deliver high-quality solutions that meet the needs of clients and users alike.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold mb-2">Experience</h3>
          <div className="relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-base-200 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-base-200 to-transparent z-10"></div>
            <div className="timeline-container overflow-y-auto max-h-[300px] w-full">
              {experiences.map((experience, index) => (
                <div key={index} className={`experience-card experience-card-${index} bg-base-100 p-4 mb-4 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:space-x-2`}>
                  <div className="md:w-1/3 text-left">
                    <time className="block text-xs text-gray-500 mb-1">{experience.date}</time>
                    <h4 className="text-lg font-semibold mb-1">{experience.title}</h4>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-sm mb-1">{experience.description}</p>
                    <div className="flex space-x-1">
                      {experience.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="badge bg-primary text-white px-1 py-0.5 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
