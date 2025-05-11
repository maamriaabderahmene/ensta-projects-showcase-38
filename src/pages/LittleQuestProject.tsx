
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const LittleQuestProject = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900">
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
                  src="/lovable-uploads/ab9aae4c-6aa5-4d4d-8376-972baf1bf41e.png"
                  alt="Little Quest logo"
                  className="h-36 w-auto object-contain"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">LITTLE QUEST</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  "LITTLE QUEST" is a pixel 2D game made for Multidisciplinary Project by GROUP-11. It is a simple single-player game that tells adventures of a nameless character fighting enemies and bosses in a fantasy world full of different difficulties and challenges.
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Project Description</h2>
              <p className="text-gray-700 dark:text-gray-300">
                "LITTLE QUEST" is a pixel 2D game made for Multidisciplinary Project by GROUP-11. It is a simple single-player game that tells adventures of a nameless character fighting enemies and bosses in a fantasy world full of different difficulties and challenges.
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Game Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/59991691-1c91-494d-950a-12798f042985.png"
                    alt="Little Quest game interface"
                    className="rounded-md shadow-sm max-w-full h-auto"
                  />
                </div>
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/49995991-9566-415d-b699-90919568309a.png"
                    alt="Little Quest game interface"
                    className="rounded-md shadow-sm max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Development Team</h2>
              <div className="mb-4">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Project Manager: MEHENI Souhaib</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-300">BA</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">BRAHMI Abbas</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Team Member</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-300">LN</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">LAMRIA Mahmoud Noureddine</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Team Member</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-300">AS</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">AIT SAID Mehdi</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Team Member</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500 dark:text-gray-300">HI</span>
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">HAMADI Imededdine</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Team Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittleQuestProject;
