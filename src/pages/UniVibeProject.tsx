
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
              UniVibe is a dynamic and evolving platform designed to help university students seamlessly manage both academic and social aspects of campus life. By centralizing essential tools and services, UniVibe simplifies daily student interactions, enhances engagement, and improves organization.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Unified Club & Event Management</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Central hub for all student organizations and activities</li>
                <li>Streamlined member management and role assignment</li>
                <li>Easy event creation and coordination</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Smart Integrated Calendar</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Automatically syncs class schedules and campus events</li>
                <li>Unified view of academic and social commitments</li>
                <li>Tracks event attendance, roles, and student involvement history</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Real-Time Notification System</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Instant alerts for events, schedule updates, and announcements</li>
                <li>Simplifies survey collection and information dissemination</li>
                <li>Effortlessly discover workshops and exclusive opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Cross-University Connectivity</h2>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <ul className="list-disc pl-6 space-y-2">
              <li>Connects multiple universities through a single platform</li>
              <li>Enables inter-campus communication and collaboration</li>
              <li>Promotes unified access to national student opportunities</li>
              <li>Automatically gathers event participation data—no need for forms or manual surveys</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Qt QML for the mobile interface</li>
                <li>HTML/CSS/JavaScript for the web portal</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Backend & API</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Qt/C++ for core backend logic</li>
                <li>FastAPI (Python) for RESTful API services</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Database</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>MySQL hosted on Azure Flexible Server</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Authentication & Security</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Microsoft Azure for OAuth2.0 single sign-on and user management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">App Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/094cf66b-cbaa-4e7c-a868-b06ef390e655.png" 
                alt="UniVibe Mobile App Interface" 
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
