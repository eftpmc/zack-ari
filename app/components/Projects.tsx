import React from 'react';
import Entry from './Entry'; // Adjust the import path as needed

const entries = [
  {
    title: `HHIPE Web App`,
    date: 'March 2024',
    description: `Created with Next.js and Tailwind, this website was created for a local parking enforcement company on Hilton Head Island, SC. It's design was inspired by Hilton Head Island with a coastal color scheme and themed elements.`,
    skills: ['Next.js', 'TailwindCSS'],
    image: 'https://via.placeholder.com/400', // Replace with actual image URL
    previewUrl: 'https://hhipe.com' // Replace with actual preview URL
  },
  {
    title: 'Lowcountry Chorale Web App',
    date: 'December 2023',
    description: `This website was designed for a local community choir in Lady's Island, Beaufort. It features interactive elements, animation, and handles events. This project was intended as a rework for the choir's original website.`,
    skills: ['React', 'TailwindCSS'],
    image: 'https://via.placeholder.com/400', // Replace with actual image URL
    previewUrl: 'https://lowcountrychorale.org' // Replace with actual preview URL
  },
  {
    title: 'Keep Web App',
    date: 'October 2023',
    description: `Keep was a hobby project designed for self-expression and organization. The development focused heavily on the backend and using supabase to store images, user information, and data. It features authentication, interactive cards, and a responsive masonry layout.`,
    skills: ['Next.js', 'TailwindCSS', 'Supabase'],
    image: 'https://via.placeholder.com/400', // Replace with actual image URL
    previewUrl: 'https://www.keepari.com' // Replace with actual preview URL
  },
  {
    title: 'Aritools Web App',
    date: 'June 2023',
    description: `Aritools was a web scraping project created for educational purposes, the website was running privately for a few months before being shutdown. It aimed to scrape ad infested media and present it to the user. The project was also discontinued due to the legal gray area involved with web scraping. The API used advanced web scraping methods and was fairly complex. It featured a frontend using Vitepress and a backend using Node.js.`,
    skills: ['Vitepress', 'Markdown', 'Node.js'],
    image: 'https://via.placeholder.com/400', // Replace with actual image URL
    previewUrl: 'https://aritools.xyz' // Replace with actual preview URL
  },
];

const Projects = () => {
  return (
    <div className="relative">
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300 z-0"></div> */}
      <div className="space-y-16 relative z-10">
        {entries.map((entry, index) => (
          <Entry key={index} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
