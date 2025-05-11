
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Map, Building2, MedicalBox, Search, Clock, QrCode, MessageCircle, User } from 'lucide-react';

const MedAppProject = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-ensta-blue hover:underline mb-8"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Projects
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center mb-12">
              <div className="md:mr-8 mb-6 md:mb-0 flex justify-center">
                <img 
                  src="/lovable-uploads/d67f08ee-6b2a-436d-9ab6-8672fe315a10.png"
                  alt="MedApp logo"
                  className="h-36 w-auto object-contain"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500 dark:text-blue-400">MedApp</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  A healthcare-focused mobile application designed to enhance patient access to medical services and information.
                </p>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Project Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                MedApp is a telemedicine application designed to connect patients with healthcare providers for remote consultations and medication management. It aims to simplify healthcare navigation, reduce waiting times, and provide patients with accurate and timely medical support through an intuitive and intelligent mobile experience.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Challenges Faced by Patients</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Unpredictable facility hours and long waiting times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Difficulty locating available medicines and nearest pharmacies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Limited access to medical information and consultation services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Navigating complex healthcare systems and finding the right providers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Our Solution</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  MedApp provides a comprehensive mobile platform that addresses these challenges through innovative features and user-centered design. The application connects patients, healthcare providers, and pharmacies in a seamless digital ecosystem.
                </p>
                <div className="mt-2">
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    "Healthcare in your hands"
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md border border-blue-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <Map className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Hospital & Pharmacy Locator</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Interactive map showing nearby healthcare facilities with real-time availability information and operating hours.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md border border-blue-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <Search className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Medicine Search</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Search for medications and check their availability at nearby pharmacies, complete with pricing information.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md border border-blue-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Queue Management</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Virtual queuing system allowing patients to reserve their spot in line and receive notifications when it's their turn.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md border border-blue-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <QrCode className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Prescription Scanner</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    OCR technology to scan and interpret prescriptions, automatically searching for the prescribed medications.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md border border-blue-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <MessageCircle className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">AI Medical Assistant</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    ChatGPT-powered assistant to answer health questions, provide symptom guidance, and help navigate the app.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md border border-blue-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                      <User className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Role-Based Access</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Customized interfaces for patients, healthcare providers, and administrators with appropriate permissions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">App Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/813ee9c1-e774-44b5-84dc-f53e8b4ab63d.png" 
                    alt="Medicine locator map" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-gray-50 dark:bg-gray-700">
                    <p className="text-sm text-gray-700 dark:text-gray-300">Hospital & Pharmacy Locator</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/652a1ead-a8b4-4e0d-b627-6d4171127dc9.png" 
                    alt="AI chat assistant" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-gray-50 dark:bg-gray-700">
                    <p className="text-sm text-gray-700 dark:text-gray-300">AI Medical Assistant</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/557e3419-5b72-45b6-9881-0060b82d24cb.png" 
                    alt="Login screen" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-gray-50 dark:bg-gray-700">
                    <p className="text-sm text-gray-700 dark:text-gray-300">User Authentication</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/17e26dca-aa9a-4213-b9ba-c556236793d5.png" 
                    alt="Queue management" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-gray-50 dark:bg-gray-700">
                    <p className="text-sm text-gray-700 dark:text-gray-300">Queue Management System</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/62187518-3f08-4345-a897-086687fc6f0b.png" 
                    alt="Prescription scanner" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-gray-50 dark:bg-gray-700">
                    <p className="text-sm text-gray-700 dark:text-gray-300">Prescription Scanner</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/fbf5a173-9801-484c-9293-cac430ec4d10.png" 
                    alt="Project poster" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-gray-50 dark:bg-gray-700">
                    <p className="text-sm text-gray-700 dark:text-gray-300">Project Overview</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-8 mt-8 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Technical Stack</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">React Native</span>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Express</span>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Socket.io</span>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">AWS</span>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">OpenAI API</span>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Google Maps API</span>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">OCR Technology</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Development Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-500 dark:text-blue-300">JA</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">John Adams</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Team Lead</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-500 dark:text-blue-300">JS</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Jane Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-500 dark:text-blue-300">AL</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Alice Lee</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-500 dark:text-blue-300">BO</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Bob Omar</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Backend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedAppProject;
