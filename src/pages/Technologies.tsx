
import React from 'react';
import { technologies } from '@/data/technologies';
import TechCard from '@/components/TechCard';

const Technologies = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Technologies & Tools</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover the modern coding technologies and development tools used by our students in their projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              title={tech.title}
              description={tech.description}
              tools={tech.tools}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
