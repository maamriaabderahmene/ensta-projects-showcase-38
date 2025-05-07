
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DeveloperCard from '@/components/DeveloperCard';

const CourSpaceProject = () => {
  const developers = [
    { name: "Bouterbag Amal", role: "Project Manager", image: "/placeholder.svg" },
    { name: "FALEK Wail", role: "Developer", image: "/placeholder.svg" },
    { name: "DJEDIAI Lina", role: "Developer", image: "/placeholder.svg" },
    { name: "BOUTRIA Manel", role: "Developer", image: "/placeholder.svg" },
    { name: "KADDOUR Abdelmalek Islam", role: "Developer", image: "/placeholder.svg" },
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
                  src="/lovable-uploads/12e4538c-e0a0-49ff-ae78-3e0cddc16e96.png" 
                  alt="CourSpace Logo"
                  className="h-36 w-auto object-contain"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">CourSpace</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  A mobile application developed to address educational accessibility challenges in Algeria, connecting learners with a wide variety of courses.
                </p>
              </div>
            </div>
            
            {/* Project Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Project Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Courspace is a mobile application developed to address the educational accessibility challenges faced by learners and educators in Algeria. 
                Designed as a centralized platform, Courspace enables users across the country to discover, enroll in, and contribute to a wide variety 
                of courses, including languages, programming, design, Quran studies, sports, and more.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The application targets a broad audience, encompassing individuals of all ages seeking to acquire new skills, with a particular emphasis 
                on university students who often seek educational opportunities during summer holidays.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Courspace supports two primary user roles:
              </p>
              <ul className="list-disc pl-8 mt-2 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-semibold">Learners</span> - who can browse and filter courses based on preferences such as format (online or in-person), 
                  cost (free or paid), category, and level
                </li>
                <li>
                  <span className="font-semibold">Contributors</span> - who can create and manage their courses directly on the platform after providing 
                  proof of their qualifications, such as a teaching certificate
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Built using Flutter and Firebase, Courspace ensures a seamless experience on Android devices, with real-time 
                data synchronization, providing an efficient and user-friendly solution for educational content discovery in Algeria.
              </p>
            </div>
            
            {/* Platform Design */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Application Design</h2>
              <div className="p-8 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <img 
                  src="/lovable-uploads/f8c3362d-03d0-4a07-981b-71c05598c570.png" 
                  alt="CourSpace Application Mockup"
                  className="rounded-md shadow-sm max-w-full h-auto mx-auto"
                />
              </div>
            </div>
            
            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Course Discovery</h3>
                  <p className="text-gray-700 dark:text-gray-300">Intuitive browsing and advanced filtering to find relevant educational content.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Multiple Categories</h3>
                  <p className="text-gray-700 dark:text-gray-300">Diverse course offerings including languages, programming, design, Quran studies, and sports.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">User Profiles</h3>
                  <p className="text-gray-700 dark:text-gray-300">Personalized profiles for tracking enrolled courses and progress.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Course Management</h3>
                  <p className="text-gray-700 dark:text-gray-300">Tools for contributors to create, edit, and manage their educational offerings.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Flexible Formats</h3>
                  <p className="text-gray-700 dark:text-gray-300">Support for both online and in-person learning experiences.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Real-time Updates</h3>
                  <p className="text-gray-700 dark:text-gray-300">Instant notifications and updates for course changes and new offerings.</p>
                </div>
              </div>
            </div>
            
            {/* Technical Implementation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Technical Implementation</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                CourSpace is built with modern mobile development technologies to ensure a smooth and responsive experience:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Frontend: Flutter framework for cross-platform UI development</li>
                <li>Backend: Firebase for authentication, database, and storage</li>
                <li>Database: Cloud Firestore for real-time data synchronization</li>
                <li>Authentication: Firebase Authentication for secure user management</li>
                <li>Storage: Cloud Storage for course materials and profile images</li>
                <li>Notifications: Firebase Cloud Messaging for real-time alerts</li>
                <li>Analytics: Firebase Analytics to track user engagement</li>
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

export default CourSpaceProject;
