
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import DeveloperCard from '@/components/DeveloperCard';
import { ChevronLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4 dark:text-white">Project Not Found</h1>
          <p className="mb-6 dark:text-gray-300">The project you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/projects" 
            className="inline-flex items-center text-ensta-blue hover:underline"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-ensta-blue hover:underline mb-8"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Projects
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center mb-8">
              <div className="md:mr-8 mb-6 md:mb-0 flex justify-center">
                {project.logo ? (
                  <img 
                    src={project.logo} 
                    alt={`${project.title} logo`}
                    className="h-36 w-auto object-contain"
                  />
                ) : (
                  <div className="h-36 w-36 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground">{project.title.charAt(0)}</span>
                  </div>
                )}
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{project.title}</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300">{project.shortDescription}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Project Description</h2>
              <p className="text-gray-700 dark:text-gray-300">
                {project.fullDescription}
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">UI/UX Design</h2>
              <div className="p-8 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                {project.images && project.images.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <img 
                        key={index} 
                        src={image} 
                        alt={`${project.title} design ${index + 1}`}
                        className="rounded-md shadow-sm"
                      />
                    ))}
                  </div>
                ) : (
                  project.figmaUrl ? (
                    <iframe 
                      title={`${project.title} Figma Design`}
                      src={project.figmaUrl}
                      width="100%" 
                      height="450" 
                      className="border-0 rounded-md"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-lg text-gray-500 dark:text-gray-400">UI/UX design preview coming soon...</p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">The design files are being finalized</p>
                    </div>
                  )
                )}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Development Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {project.developers.map((developer, index) => (
                  <DeveloperCard 
                    key={index}
                    name={developer.name}
                    role={developer.role}
                    image={developer.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
