// components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Short description of the project.",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Short description of the project.",
      link: "#",
    },
    {
      title: "Project 3",
      description: "Short description of the project.",
      link: "#",
    },
  ];

  return (
    <div className="carousel w-full">
      {projects.map((project, index) => (
        <div key={index} className="carousel-item w-full flex justify-center">
          <div className="w-full max-w-screen-md">
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;