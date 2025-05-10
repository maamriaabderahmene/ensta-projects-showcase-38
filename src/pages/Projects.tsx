
import React from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  // Reorder projects to put SmartStock first
  const orderedProjects = [...projects];
  const smartStockIndex = orderedProjects.findIndex(project => project.id === "3");
  if (smartStockIndex !== -1) {
    const smartStock = orderedProjects.splice(smartStockIndex, 1)[0];
    orderedProjects.unshift(smartStock);
  }

  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Student Projects</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explore all innovative projects developed by students of the "formation de base en informatique" program at ENSTA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orderedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
