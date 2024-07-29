// components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-200 p-6 rounded-lg flex flex-col justify-center items-center w-full h-full">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>
      <a href={link} className="text-primary hover:underline">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;