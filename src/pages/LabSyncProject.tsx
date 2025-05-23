
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const LabSyncProject = () => {
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
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center mb-8">
              <div className="md:mr-8 mb-6 md:mb-0 flex justify-center">
                <img 
                  src="/lovable-uploads/98eefbe3-f5ae-4dce-8dcd-1eae6cccd847.png"
                  alt="LabSync Logo"
                  className="h-36 w-auto object-contain"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">LabSync</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  LabSync is a lab management system designed to streamline the organization and tracking of laboratory resources within an academic or research environment.
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Project Description</h2>
              <p className="text-gray-700 dark:text-gray-300">
                LabSync is a lab management system designed to streamline the organization and tracking of laboratory resources within an academic or research environment. It enables administrators to manage equipment inventory, monitor loan history, and organize lab rooms efficiently. With features like real-time updates, editable records, and user-friendly interfaces, LabSync ensures better coordination and accountability in lab usage. The system aims to reduce manual errors, enhance resource availability, and support smooth operation of laboratory activities.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">App Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/29cce96e-6248-45e9-8a6a-7fdbdea27da9.png"
                    alt="LabSync Main Poster" 
                    className="rounded max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/0f669803-130f-4994-acbc-0a667061fb60.png"
                    alt="LabSync Welcome Screen" 
                    className="rounded max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/3e1d7c2b-543a-4ba3-9fb5-03161f1e4ad6.png"
                    alt="LabSync Create Account Screen" 
                    className="rounded max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/4ba60807-1e6b-47f9-bef7-c8f2df4240dd.png"
                    alt="LabSync Teacher Dashboard" 
                    className="rounded max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/4202da16-8189-47f0-a367-8b8b295a8360.png"
                    alt="LabSync Class View" 
                    className="rounded max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/8b062217-083d-401c-9fee-20946955cf6a.png"
                    alt="LabSync Report Screen" 
                    className="rounded max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/408cb8b8-c88f-4098-93d2-b9caa7b2845d.png"
                    alt="LabSync Admin Dashboard" 
                    className="rounded max-h-[300px] w-auto object-contain"
                  />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/47231b83-ec15-44c6-8a40-b6c5b6e720d4.png"
                    alt="LabSync Booking Details" 
                    className="rounded max-h-[300px] w-auto object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Key Features</h2>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 dark:text-gray-300">Equipment Inventory Management</li>
                <li className="text-gray-700 dark:text-gray-300">Loan History Tracking</li>
                <li className="text-gray-700 dark:text-gray-300">Lab Room Organization</li>
                <li className="text-gray-700 dark:text-gray-300">Real-time Updates</li>
                <li className="text-gray-700 dark:text-gray-300">User-Friendly Interface</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Development Team</h2>
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Project Manager: BOUDDISA Farouk Redouane</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-300">FI</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">FERRAT Ilham</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-300">DL</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">DJEBOURI Lynda</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-300">KM</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">KHEDRI Manel</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-300">MA</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">MEZAACHE Abdessamie</h3>
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

export default LabSyncProject;
