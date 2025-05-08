
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import { ChevronLeft } from 'lucide-react';
import DeveloperCard from '@/components/DeveloperCard';
import { projects } from '@/data/projects';

const LabSyncProject = () => {
  // Find the project data
  const project = projects.find(p => p.title === "LabSync");

  if (!project) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-6">The project you're looking for doesn't exist or has been moved.</p>
            <Link 
              to="/projects" 
              className="inline-flex items-center text-ensta-blue hover:underline"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
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
                  <img 
                    src={project.logo} 
                    alt="LabSync Logo" 
                    className="h-36 w-auto object-contain"
                  />
                </div>
                
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">LabSync</h1>
                  <p className="text-xl text-gray-700 dark:text-gray-300">{project.description}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Project Overview</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  LabSync is a lab management system designed to streamline the organization and tracking 
                  of laboratory resources within an academic or research environment. It enables administrators 
                  to manage equipment inventory, monitor loan history, and organize lab rooms efficiently.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">UI/UX Design</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src="/lovable-uploads/6ddab03e-5bbd-4e45-9541-34a12b3d9c18.png" 
                      alt="LabSync Design - Welcome Screen" 
                      className="rounded-md shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src="/lovable-uploads/13b08c42-9307-43e4-8d1a-aa0c14ab2eb2.png" 
                      alt="LabSync Design - Create Account" 
                      className="rounded-md shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src="/lovable-uploads/6438cc21-6454-4702-84cb-5dba82c070f9.png" 
                      alt="LabSync Design - Chemistry Lab" 
                      className="rounded-md shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src="/lovable-uploads/fb0b0949-f1e5-4a42-ac28-41716b04652c.png" 
                      alt="LabSync Design - Post Interface" 
                      className="rounded-md shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src="/lovable-uploads/8cd8564d-cbd5-4262-a1c3-8921f8f571f1.png" 
                      alt="LabSync Design - Report Issue" 
                      className="rounded-md shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src="/lovable-uploads/e6e639dd-3720-4a54-9c6e-6ad1687b1335.png" 
                      alt="LabSync Design - Lab Manager Dashboard" 
                      className="rounded-md shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src="/lovable-uploads/5ea38a49-c243-4243-a587-7e051d1978b7.png" 
                      alt="LabSync Design - Booking Details" 
                      className="rounded-md shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src="/lovable-uploads/7dfa553f-992e-43a8-b5b0-d8db78bc8958.png" 
                      alt="LabSync Design - Materials Overview" 
                      className="rounded-md shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src="/lovable-uploads/9e8f6904-d53b-4253-9c08-cf617f77b68f.png" 
                      alt="LabSync Design - User Profile" 
                      className="rounded-md shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src="/lovable-uploads/b9331266-44bf-4040-b71a-c8ab58fd1664.png" 
                      alt="LabSync Design - User Report" 
                      className="rounded-md shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src="/lovable-uploads/6ebdf1a2-6afd-48af-a2a2-50c4a86ac172.png" 
                      alt="LabSync Design - User Toolbox" 
                      className="rounded-md shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src="/lovable-uploads/3b5a48c0-053d-45d1-a8ef-bca227abe3ae.png" 
                      alt="LabSync Design - User Team" 
                      className="rounded-md shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                    <img 
                      src="/lovable-uploads/47158fdf-af37-43b4-86a5-16f29d5df41d.png" 
                      alt="LabSync Design - Presentation Poster" 
                      className="rounded-md shadow-sm w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Development Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <DeveloperCard 
                    name="BOUDISSA Farouk Redouane"
                    role="Project Manager"
                    image="/placeholder.svg"
                  />
                  {project.teamMembers?.map((member, index) => (
                    <DeveloperCard 
                      key={index}
                      name={member.name}
                      role={member.role}
                      image="/placeholder.svg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LabSyncProject;
