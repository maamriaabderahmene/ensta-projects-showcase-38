
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import MainLayout from '@/components/MainLayout';

const AvridProject = () => {
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
                    src="/lovable-uploads/d5e2052d-fa52-44dd-a078-d7610ace03dc.png"
                    alt="AVRID TOGETHER logo"
                    className="h-36 w-auto object-contain"
                  />
                </div>
                
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">AVRID TOGETHER</h1>
                  <p className="text-xl text-gray-700 dark:text-gray-300">
                    Avrid Together is a smart and social carpooling app that helps you find and share rides in just a few seconds. Whether you're commuting, traveling, or just exploring, Avrid Together connects you with people heading your way—making your journeys cheaper, greener, and more fun.
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Project Description</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Avrid Together is a smart and social carpooling app that helps you find and share rides in just a few seconds. Whether you're commuting, traveling, or just exploring, Avrid Together connects you with people heading your way—making your journeys cheaper, greener, and more fun.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">UI/UX Design</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/9f9fe7d6-b751-47dd-bf44-c5a772ddf9f3.png"
                      alt="AVRID TOGETHER mobile app interface"
                      className="rounded-md shadow-sm max-w-full h-auto"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/8aee5c17-dc1c-41d1-be6f-e772aa12c02b.png"
                      alt="AVRID TOGETHER branding"
                      className="rounded-md shadow-sm max-w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Development Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-500 dark:text-gray-300">MY</span>
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white">MAACHA YACINE</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Team Member</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-500 dark:text-gray-300">MA</span>
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white">MESSAOUDI ABDELKRIM</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Team Member</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-500 dark:text-gray-300">JJ</span>
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white">JBAGHOUCHENE JUBA</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Team Member</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-500 dark:text-gray-300">HS</span>
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white">HOCINE SARA</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Team Member</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-500 dark:text-gray-300">TY</span>
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white">TAYEB CHERIF YASMINE</h3>
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

export default AvridProject;
