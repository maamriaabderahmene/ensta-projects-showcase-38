
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import DeveloperCard from '@/components/DeveloperCard';

const UniHubProject = () => {
  const developers = [
    { name: "DOKKAR Chaima", role: "Developer", image: "/placeholder.svg" },
    { name: "BELOUAHAR Sofia", role: "Developer", image: "/placeholder.svg" },
    { name: "ZERGUINI MAYLIS", role: "Developer", image: "/placeholder.svg" },
    { name: "BENAMAOUCHE Sonia", role: "Developer", image: "/placeholder.svg" },
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
                  src="/lovable-uploads/4b7df4d9-5325-4499-a3c7-172b378da5e1.png" 
                  alt="UniHub Logo"
                  className="h-36 w-auto object-contain"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">UniHub</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  UniHub is a smart student platform that brings your campus to life. From finding lost items to discovering events and sharing notes, it keeps everything students need in one simple, connected space.
                </p>
              </div>
            </div>
            
            {/* Project Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Project Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                UniHub is designed as a comprehensive platform for university students that centralizes various campus resources and services. 
                The platform aims to enhance campus connectivity by providing students with tools to navigate university life more effectively.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                By combining lost and found capabilities, event discovery, resource sharing, and community features in one accessible platform, 
                UniHub creates a digital ecosystem that mirrors the physical campus environment, making university life more organized and connected.
              </p>
            </div>
            
            {/* App Design */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">App Design</h2>
              <div className="p-8 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <img 
                  src="/lovable-uploads/08c97f75-e80d-4b1a-83c2-ee83cddea59c.png" 
                  alt="UniHub App Design"
                  className="rounded-md shadow-sm max-w-full h-auto mx-auto"
                />
              </div>
            </div>
            
            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Lost & Found</h3>
                  <p className="text-gray-700 dark:text-gray-300">Report and search for lost items across campus with image uploads, descriptions, and location tagging.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Event Discovery</h3>
                  <p className="text-gray-700 dark:text-gray-300">Browse upcoming campus events, add them to your calendar, and receive notifications for important deadlines.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Resource Sharing</h3>
                  <p className="text-gray-700 dark:text-gray-300">Share class notes, study materials, and academic resources with classmates in a secure environment.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Community Forums</h3>
                  <p className="text-gray-700 dark:text-gray-300">Connect with peers through course-specific and interest-based discussion boards.</p>
                </div>
              </div>
            </div>
            
            {/* Technical Implementation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Technical Implementation</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                UniHub is built using modern mobile and web technologies to ensure a seamless experience across all devices:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Frontend: React Native for cross-platform mobile development</li>
                <li>Backend: Firebase for authentication, real-time database, and cloud storage</li>
                <li>Database: MongoDB for structured data storage</li>
                <li>Push Notifications: For event updates, lost item matches, and community engagement</li>
                <li>UI Design: Modern, accessible interface with intuitive navigation</li>
                <li>Analytics: User engagement tracking and feature usage metrics</li>
              </ul>
            </div>
            
            {/* Development Team */}
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Development Team</h2>
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Project Manager: BOUAKKAZ Madjeda</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

export default UniHubProject;
