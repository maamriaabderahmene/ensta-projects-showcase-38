
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import { ChevronLeft } from 'lucide-react';

const MedAppProject = () => {
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
                    src="/lovable-uploads/8391d3d1-2102-4076-9369-614d818ffcda.png" 
                    alt="MedApp logo"
                    className="h-36 w-auto object-contain"
                  />
                </div>
                
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">MedApp</h1>
                  <p className="text-xl text-gray-700 dark:text-gray-300">
                    A healthcare-focused mobile application designed to enhance patient access to medical services and information.
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Project Description</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  MedApp is a healthcare-focused mobile application designed to enhance patient access to medical services and information. The app offers a range of features that include:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Virtual hospital and pharmacy locator: Users can find nearby hospitals, clinics, and pharmacies with details such as open/closed status, contact information, and directions.</li>
                  <li>Medicine search and availability: Users can search for specific medications and find pharmacies where they are currently in stock.</li>
                  <li>Queue management system: Patients can view and manage their queue number for consultations at hospitals or clinics, receive alerts when their turn is approaching, and avoid long waiting times on-site.</li>
                  <li>Prescription scanning: The app can scan handwritten or printed prescriptions using OCR (Optical Character Recognition) to extract medicine names and find availability.</li>
                  <li>ChatGPT-powered assistant: A built-in AI assistant helps answer health-related queries, provide symptom checks, or guide users through app features.</li>
                  <li>Role-based login: Different interfaces and functionalities are provided for users (patients), administrators, and healthcare providers.</li>
                </ul>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  MedApp aims to simplify healthcare navigation, reduce waiting times, and provide patients with accurate and timely medical support through an intuitive and intelligent mobile experience.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">UI/UX Design</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/3a41c639-d764-4216-9bf4-dc1071fd0533.png" 
                      alt="MedApp login screen"
                      className="rounded-md shadow-sm max-h-80"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/f5557c6c-0296-4fe7-92ee-2869b46c0419.png" 
                      alt="MedApp map view"
                      className="rounded-md shadow-sm max-h-80"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/7de0b0fe-e306-4260-a7cf-d4225bdca177.png" 
                      alt="MedApp chat assistant"
                      className="rounded-md shadow-sm max-h-80"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/941303de-839a-4dde-b07d-1afcac02889c.png" 
                      alt="MedApp queue system"
                      className="rounded-md shadow-sm max-h-80"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/a447b503-2044-4755-a327-f14e7d84b35d.png" 
                      alt="MedApp prescription scanner"
                      className="rounded-md shadow-sm max-h-80"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Development Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
                    <div className="w-20 h-20 mx-auto bg-gray-200 dark:bg-gray-600 rounded-full mb-3 flex items-center justify-center">
                      <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">HD</span>
                    </div>
                    <h3 className="font-semibold dark:text-white">HIDOUCHI Dhiaeddine</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Project Manager</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
                    <div className="w-20 h-20 mx-auto bg-gray-200 dark:bg-gray-600 rounded-full mb-3 flex items-center justify-center">
                      <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">BA</span>
                    </div>
                    <h3 className="font-semibold dark:text-white">BOUCENNA Achraf</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Team Member</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
                    <div className="w-20 h-20 mx-auto bg-gray-200 dark:bg-gray-600 rounded-full mb-3 flex items-center justify-center">
                      <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">BZ</span>
                    </div>
                    <h3 className="font-semibold dark:text-white">BOUKAHEL Zahr Eddine</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Team Member</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
                    <div className="w-20 h-20 mx-auto bg-gray-200 dark:bg-gray-600 rounded-full mb-3 flex items-center justify-center">
                      <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">BA</span>
                    </div>
                    <h3 className="font-semibold dark:text-white">BELHERAOUI Abderrahmane</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Team Member</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-center">
                    <div className="w-20 h-20 mx-auto bg-gray-200 dark:bg-gray-600 rounded-full mb-3 flex items-center justify-center">
                      <span className="text-xl font-semibold text-gray-500 dark:text-gray-300">AD</span>
                    </div>
                    <h3 className="font-semibold dark:text-white">AISSAOUA Djassem</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Team Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MedAppProject;
