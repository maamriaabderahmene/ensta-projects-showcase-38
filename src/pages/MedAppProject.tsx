
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Search, Clock, Prescription, MessageSquare, User } from 'lucide-react';

const MedAppProject = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Projects
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Header with Logo */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">MedApp</h1>
              <p className="text-xl text-white/90">Healthcare in your hands</p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/d67f08ee-6b2a-436d-9ab6-8672fe315a10.png"
                alt="MedApp logo"
                className="h-32 w-auto object-contain bg-white p-4 rounded-full"
              />
            </div>
          </div>
          
          {/* Project Content */}
          <div className="p-8">
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 dark:text-white border-b pb-2 border-blue-100 dark:border-gray-700">Project Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                MedApp is a healthcare-focused mobile application designed to enhance patient access to medical services and information.
                It aims to simplify healthcare navigation, reduce waiting times, and provide patients with accurate and timely medical
                support through an intuitive and intelligent mobile experience.
              </p>
            </div>
            
            {/* Key Features with Icons */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 dark:text-white border-b pb-2 border-blue-100 dark:border-gray-700">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg dark:text-white">Virtual Hospital & Pharmacy Locator</h3>
                    <p className="text-gray-600 dark:text-gray-400">Users can find nearby hospitals, clinics, and pharmacies with details such as open/closed status, contact information, and directions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg dark:text-white">Medicine Search & Availability</h3>
                    <p className="text-gray-600 dark:text-gray-400">Users can search for specific medications and find pharmacies where they are currently in stock.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg dark:text-white">Queue Management System</h3>
                    <p className="text-gray-600 dark:text-gray-400">Patients can view and manage their queue number for consultations at hospitals or clinics, receive alerts when their turn is approaching, and avoid long waiting times on-site.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <Prescription className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg dark:text-white">Prescription Scanning</h3>
                    <p className="text-gray-600 dark:text-gray-400">The app can scan handwritten or printed prescriptions using OCR to extract medicine names and find availability.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg dark:text-white">ChatGPT-powered Assistant</h3>
                    <p className="text-gray-600 dark:text-gray-400">A built-in AI assistant helps answer health-related queries, provide symptom checks, or guide users through app features.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg dark:text-white">Role-based Login</h3>
                    <p className="text-gray-600 dark:text-gray-400">Different interfaces and functionalities are provided for users (patients), administrators, and healthcare providers.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* App Screenshots */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 dark:text-white border-b pb-2 border-blue-100 dark:border-gray-700">App Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="/lovable-uploads/bd58f0f8-1a64-488d-bb5d-5d9518c28be3.png" 
                    alt="Hospital and Pharmacy Locator" 
                    className="w-full h-auto" 
                  />
                  <div className="p-3 bg-gray-50 dark:bg-gray-700">
                    <p className="text-sm font-medium text-center text-gray-700 dark:text-gray-200">Hospital & Pharmacy Map</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="/lovable-uploads/69d31deb-0526-47c9-86ac-3c4147d7f18a.png" 
                    alt="AI Medical Assistant Chat" 
                    className="w-full h-auto" 
                  />
                  <div className="p-3 bg-gray-50 dark:bg-gray-700">
                    <p className="text-sm font-medium text-center text-gray-700 dark:text-gray-200">AI Medical Assistant</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="/lovable-uploads/92cc4918-7f33-4e32-827b-69a37162ddca.png" 
                    alt="Login Screen" 
                    className="w-full h-auto" 
                  />
                  <div className="p-3 bg-gray-50 dark:bg-gray-700">
                    <p className="text-sm font-medium text-center text-gray-700 dark:text-gray-200">User Authentication</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="/lovable-uploads/75e80608-10a7-4a93-96b2-f3c27ea23bd9.png" 
                    alt="Queue Management" 
                    className="w-full h-auto" 
                  />
                  <div className="p-3 bg-gray-50 dark:bg-gray-700">
                    <p className="text-sm font-medium text-center text-gray-700 dark:text-gray-200">Queue Management System</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="/lovable-uploads/71fdf0d3-c24f-43ec-a2c1-e4fa55c5f134.png" 
                    alt="Prescription Scanner" 
                    className="w-full h-auto" 
                  />
                  <div className="p-3 bg-gray-50 dark:bg-gray-700">
                    <p className="text-sm font-medium text-center text-gray-700 dark:text-gray-200">Prescription Scanner</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Patient Challenges & Solutions */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6 dark:text-white border-b pb-2 border-blue-100 dark:border-gray-700">Patient Challenges & MedApp Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-400">Challenges Faced by Patients</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Unpredictable facility hours and availability</li>
                    <li>Difficulty locating available medicines across pharmacies</li>
                    <li>Extended waiting times at healthcare facilities</li>
                    <li>Inaccessible or unreliable medical information</li>
                    <li>Challenges in understanding prescriptions</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">MedApp Solutions</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Real-time updates on facility hours and services</li>
                    <li>AI-powered medicine availability tracking across locations</li>
                    <li>Smart queuing system with notifications and estimated wait times</li>
                    <li>Verified medical information and AI assistant support</li>
                    <li>Prescription scanning and interpretation technology</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Technology Stack */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 dark:text-white border-b pb-2 border-blue-100 dark:border-gray-700">Technology Stack</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-900 dark:text-white">React Native</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mobile UI</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-900 dark:text-white">Express</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Backend</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-900 dark:text-white">MongoDB</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Database</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-900 dark:text-white">Socket.io</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Real-time</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <p className="font-medium text-gray-900 dark:text-white">AWS</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cloud</p>
                </div>
              </div>
            </div>
            
            {/* Development Team */}
            <div>
              <h2 className="text-2xl font-bold mb-6 dark:text-white border-b pb-2 border-blue-100 dark:border-gray-700">Development Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-300">HD</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">HIDDOUCHI Dhiaeddine</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-300">BZ</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">BOUKAHEL Zahreddine</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Backend Developer</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-300">BA</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">BELHRAOUI Abderahmene</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mobile Developer</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-300">AD</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">AISSAOUA Djassem</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">UI/UX Designer</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-300">BA</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">BOUCENNA Achraf</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">QA Engineer</p>
                </div>
              </div>
            </div>
            
            {/* Supervisor */}
            <div className="mt-10 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">Project Supervisor</h3>
              <p className="text-gray-700 dark:text-gray-300">Dr. Fatima Al-Zahraa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedAppProject;
