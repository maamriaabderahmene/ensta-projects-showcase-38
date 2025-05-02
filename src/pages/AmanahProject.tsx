
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DeveloperCard from '@/components/DeveloperCard';

const AmanahProject = () => {
  const developers = [
    { name: "Saci Zhour", role: "Project Manager", image: "/placeholder.svg" },
    { name: "Jazia Abdelkrim", role: "Developer", image: "/placeholder.svg" },
    { name: "Djebir Raounek", role: "Developer", image: "/placeholder.svg" },
    { name: "Zeddoun Aya", role: "Developer", image: "/placeholder.svg" },
    { name: "Arzim Sara", role: "Developer", image: "/placeholder.svg" },
  ];

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
          {/* Header Section */}
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center mb-12">
              <div className="md:mr-8 mb-6 md:mb-0 flex justify-center">
                <img 
                  src="/lovable-uploads/336bd2bc-817d-4dc5-8cb6-32e67919ed4a.png" 
                  alt="Amanah Logo"
                  className="h-36 w-auto object-contain"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Amanah - أمــانة</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  A web-based platform designed to simplify the process of reporting, searching for, and managing lost and found items across Algeria.
                </p>
              </div>
            </div>
            
            {/* Project Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Project Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Amanah (أمــانة) is a comprehensive lost and found management platform tailored for the Algerian market. 
                The platform provides an intuitive interface that allows users to report lost items, search for found items, 
                and facilitate the return process, all in a streamlined, user-friendly environment.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                The name "Amanah" comes from the Arabic word meaning "trust" or "something entrusted to someone," 
                which perfectly encapsulates the platform's mission of helping return lost items to their rightful owners.
              </p>
            </div>
            
            {/* Platform Design */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Platform Design</h2>
              <div className="p-8 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <img 
                  src="/lovable-uploads/e922d9b5-99a4-493f-8e1e-d3acc7c2530b.png" 
                  alt="Amanah Platform Mockup"
                  className="rounded-md shadow-sm max-w-full h-auto mx-auto"
                />
              </div>
            </div>
            
            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Item Reporting</h3>
                  <p className="text-gray-700 dark:text-gray-300">Easily report lost or found items with detailed descriptions and photos.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Smart Search</h3>
                  <p className="text-gray-700 dark:text-gray-300">Advanced search functionality to quickly find matching items.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Location Tracking</h3>
                  <p className="text-gray-700 dark:text-gray-300">Map integration to show where items were lost or found across Algeria.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Secure Communication</h3>
                  <p className="text-gray-700 dark:text-gray-300">In-app messaging system for secure communication between users.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Multilingual Support</h3>
                  <p className="text-gray-700 dark:text-gray-300">Full support for Arabic, French, and English to serve all Algerians.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Verification System</h3>
                  <p className="text-gray-700 dark:text-gray-300">Robust verification process to ensure legitimate claims.</p>
                </div>
              </div>
            </div>
            
            {/* Technical Implementation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Technical Implementation</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Amanah is built using modern web technologies to ensure a responsive, 
                accessible, and secure experience across all devices:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Frontend: React.js with TypeScript for type safety and better developer experience</li>
                <li>Styling: Tailwind CSS for responsive and consistent design</li>
                <li>Backend: Node.js with Express for a robust and scalable API</li>
                <li>Database: MongoDB for flexible data storage</li>
                <li>Authentication: JWT for secure user authentication</li>
                <li>Maps Integration: Mapbox API for location services</li>
                <li>Image Storage: Cloud storage solution for item images</li>
                <li>Deployment: Containerized with Docker for consistent environments</li>
              </ul>
            </div>
            
            {/* Development Team */}
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Development Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {developers.map((developer, index) => (
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

export default AmanahProject;
