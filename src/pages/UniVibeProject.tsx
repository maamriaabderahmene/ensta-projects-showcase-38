
import React from 'react';

const UniVibeProject = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src="/lovable-uploads/79a03f01-893b-4a4f-a7c4-9d5d8986d8ca.png" 
              alt="UniVibe Logo" 
              className="w-48 h-48 object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">UniVibe</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              The Univibe application aims to enhance communication and engagement among university clubs. It seeks to streamline event planning, promote collaboration, and foster community building within the university environment.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Unified Club & Event Management</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Centralized hub for all student organizations and activities</li>
                <li>Simplified membership management and role assignments</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Smart Integrated Calendar</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Automatic sync of social events</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Real-Time Notification System</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Instant alerts for upcoming events and important updates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">App Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/310c594c-5b89-4b7a-9d02-e584196bb633.png" 
                alt="UniVibe Web Interface" 
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/31a8fe05-e534-42b1-bc4e-ad4dcf0b9599.png" 
                alt="UniVibe Mobile Screens" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniVibeProject;
