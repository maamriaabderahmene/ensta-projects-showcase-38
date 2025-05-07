
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import DeveloperCard from '@/components/DeveloperCard';

const ReserviliProject = () => {
  const developers = [
    { name: "TALAHOUBRI YOUCEF", role: "Developer", image: "/placeholder.svg" },
    { name: "OUINTEN Mohammed Amine", role: "Developer", image: "/placeholder.svg" },
    { name: "ABBA Abdel Djabbar", role: "Developer", image: "/placeholder.svg" },
    { name: "BENABED Farouk", role: "Developer", image: "/placeholder.svg" },
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
                  src="/lovable-uploads/6ed1015e-c280-47cd-aa27-1df617c85f90.png" 
                  alt="RESERVILI Logo"
                  className="h-36 w-auto object-contain"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">RESERVILI</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  A mobile app designed to streamline and optimize the entire restaurant experience—from discovery and pre‑order through payment and pickup.
                </p>
              </div>
            </div>
            
            {/* Project Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Project Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                RESERVILI is a comprehensive mobile application that transforms how people discover, order from, and interact with restaurants. 
                The platform provides an end-to-end solution for the dining experience, from easily finding nearby restaurants on an interactive map to 
                pre-ordering food and making seamless payments, all while optimizing restaurant workflows and resource management.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Designed with travelers, project-based workers, and newcomers to an area in mind, RESERVILI helps users discover quality 
                dining options through user-driven ratings and reviews, making it easy to find the perfect restaurant wherever you are.
              </p>
            </div>
            
            {/* App Design */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">App Design</h2>
              <div className="p-8 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <img 
                  src="/lovable-uploads/fc1106d2-6828-4252-bbad-bdb384439ebb.png" 
                  alt="RESERVILI App Mockup"
                  className="rounded-md shadow-sm max-w-full h-auto mx-auto"
                />
              </div>
            </div>
            
            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Interactive Map Discovery</h3>
                  <p className="text-gray-700 dark:text-gray-300">Restaurants are plotted on an in-app map so users can instantly see who's nearby and how to get there.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Menu Browsing & Pre-ordering</h3>
                  <p className="text-gray-700 dark:text-gray-300">View each restaurant's menu with photos, select your items, and get a live estimate of when your order will be ready.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Seamless Payment</h3>
                  <p className="text-gray-700 dark:text-gray-300">Orders, payments, and cashier workflows are all handled in-app—tracking each order from submission to settlement.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">Pickup Notification</h3>
                  <p className="text-gray-700 dark:text-gray-300">Once your food is prepared, you receive a push notification—just drop by and collect your meal, minimizing any in-restaurant wait time.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">User-driven Ratings & Rankings</h3>
                  <p className="text-gray-700 dark:text-gray-300">Restaurants are ranked by user reviews (cleanliness, quality etc.), helping newcomers make informed choices at a glance.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 dark:text-white">End-to-end Workflow Coordination</h3>
                  <p className="text-gray-700 dark:text-gray-300">The app manages all restaurant resources—staff assignments, order queues, payment processing, and third-party delivery integrations.</p>
                </div>
              </div>
            </div>
            
            {/* Technical Implementation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Technical Implementation</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                RESERVILI is built using modern mobile technologies to ensure a responsive, 
                accessible, and secure experience for users and restaurants:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Frontend: Flutter for cross-platform mobile development</li>
                <li>Backend: Firebase for real-time database and authentication</li>
                <li>Maps: Google Maps API for location services and restaurant discovery</li>
                <li>Payments: Secure payment processing integration</li>
                <li>Push Notifications: Firebase Cloud Messaging for real-time order updates</li>
                <li>State Management: Provider pattern for efficient app state handling</li>
                <li>UI Design: Material Design with custom theming for a consistent user experience</li>
                <li>Analytics: Firebase Analytics to track user engagement and app performance</li>
              </ul>
            </div>
            
            {/* Development Team */}
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Development Team</h2>
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Project Manager: HOUACHE Hammou</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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

export default ReserviliProject;
