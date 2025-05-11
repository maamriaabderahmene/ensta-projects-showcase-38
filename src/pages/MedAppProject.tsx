
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Map, Building2, Search, Clock, QrCode, MessageCircle, User, Hospital } from 'lucide-react';

const MedAppProject = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-blue-600 hover:underline mb-8"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Projects
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center mb-8">
              <div className="md:mr-8 mb-6 md:mb-0 flex justify-center">
                <img 
                  src="/lovable-uploads/d67f08ee-6b2a-436d-9ab6-8672fe315a10.png"
                  alt="MedApp logo"
                  className="h-36 w-auto object-contain"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">MedApp</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  A telemedicine application connecting patients with healthcare providers for remote consultations and medication management
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Project Description</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                MedApp is a healthcare-focused mobile application designed to enhance patient access to medical services and information. The app bridges the gap between patients and healthcare providers through a comprehensive set of features that streamline medical interactions and improve the overall healthcare experience.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Through its intuitive interface and intelligent functionality, MedApp aims to simplify healthcare navigation, reduce waiting times, and provide patients with accurate and timely medical support.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center mb-3">
                    <Map className="h-5 w-5 text-blue-500 mr-2" />
                    <h3 className="font-semibold text-lg">Hospital & Pharmacy Locator</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Find nearby medical facilities with real-time status information and directions.</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center mb-3">
                    <Hospital className="h-5 w-5 text-blue-500 mr-2" />
                    <h3 className="font-semibold text-lg">Medicine Search</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Search for medications and check availability at local pharmacies.</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center mb-3">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    <h3 className="font-semibold text-lg">Queue Management</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Virtual queuing system to reduce wait times at medical facilities.</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center mb-3">
                    <QrCode className="h-5 w-5 text-blue-500 mr-2" />
                    <h3 className="font-semibold text-lg">Prescription Scanner</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">OCR technology to extract information from written prescriptions.</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center mb-3">
                    <MessageCircle className="h-5 w-5 text-blue-500 mr-2" />
                    <h3 className="font-semibold text-lg">AI Assistant</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">ChatGPT-powered support for health queries and app navigation.</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center mb-3">
                    <User className="h-5 w-5 text-blue-500 mr-2" />
                    <h3 className="font-semibold text-lg">Role-Based Access</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Customized interfaces for patients, administrators, and healthcare providers.</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Technical Stack</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">React Native</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">Express</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">MongoDB</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">Socket.io</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">AWS</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">OpenAI API</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Development Team</h2>
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Project Manager: Dr. Fatima Al-Zahraa</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-300">HD</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">HIDDOUCHI Dhiaeddine</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-300">BZ</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">BOUKAHEL Zahreddine</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-300">BA</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">BELHRAOUI Abderahmene</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-300">AD</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">AISSAOUA Djassem</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-300">BA</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">BOUCENNA Achraf</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
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
