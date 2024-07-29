import React from 'react';
import Entry from './Entry'; // Adjust the import path as needed

const entries = [
  {
    title: 'Entry 1',
    date: 'January 2024',
    description: 'Description of entry 1.',
    skills: ['Flutter', 'Dart'],
    image: 'https://via.placeholder.com/400', // Replace with actual image URL
  },
  {
    title: 'Entry 2',
    date: 'February 2024',
    description: 'Description of entry 2.',
    skills: ['React', 'TailwindCSS'],
    image: 'https://via.placeholder.com/400', // Replace with actual image URL
  },
  // Add more entries here
];

const Timeline = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300 z-0"></div>
      <div className="space-y-16 relative z-10">
        {entries.map((entry, index) => (
          <Entry key={index} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
