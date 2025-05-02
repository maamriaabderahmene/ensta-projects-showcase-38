
import React from 'react';
import { websiteDevelopers } from '@/data/developers';
import DeveloperCard from '@/components/DeveloperCard';

const Developers = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Website Developers</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Meet the talented students who designed and developed this showcase website.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteDevelopers.map((developer, index) => (
              <DeveloperCard 
                key={index}
                name={developer.name}
                role={developer.role}
                bio={developer.bio}
                image={developer.image}
              />
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center gradient-text">Development Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• React with TypeScript for front-end development</li>
                  <li>• Tailwind CSS for styling and responsive design</li>
                  <li>• React Router for navigation</li>
                  <li>• Lucide React for icons</li>
                  <li>• Shadcn UI for component library</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Methodology</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Agile development with weekly sprints</li>
                  <li>• User-centered design approach</li>
                  <li>• Collaborative development using Git</li>
                  <li>• Regular code reviews and testing</li>
                  <li>• Continuous deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
