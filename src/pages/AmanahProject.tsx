
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DeveloperCard from '@/components/DeveloperCard';
import MainLayout from '@/components/MainLayout';

const AmanahProject = () => {
  const developers = [
    { name: "SACI Zhour", role: "Project Manager", image: "/placeholder.svg" },
    { name: "ARZIM Sara", role: "Developer", image: "/placeholder.svg" },
    { name: "ZEDDOUN Aya", role: "Developer", image: "/placeholder.svg" },
    { name: "DJEBIR Raounak", role: "Developer", image: "/placeholder.svg" },
    { name: "ABDELKRIM Jazia", role: "Developer", image: "/placeholder.svg" },
  ];

  const techStack = {
    design: ["Figma", "Canva"],
    frontend: ["React", "Tailwind CSS"],
    backend: ["Firebase", "Node.js", "JavaScript", "MongoDB"],
    tools: ["GitHub", "VS Code", "WebStorm", "Docker", "Superbase"]
  };

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
          
          {/* Main content section with blue wave background */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden relative">
            {/* Header with logo and QR code */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-t-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0" preserveAspectRatio="none">
                  <path fill="#ffffff" fillOpacity="0.1" d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,186.7C840,181,960,203,1080,202.7C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between relative z-10">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="mr-4">
                    <div className="w-16 h-16 md:w-24 md:h-24 flex">
                      <img 
                        src="/lovable-uploads/336bd2bc-817d-4dc5-8cb6-32e67919ed4a.png" 
                        alt="Amanah Logo"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                      أمــانة
                    </h1>
                    <p className="text-white/90 text-lg">amanah-dz.com</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  <p className="text-white mb-2">scan me</p>
                  <div className="bg-white p-2 rounded-lg">
                    <img 
                      src="/lovable-uploads/e9f79072-5701-4c4f-8bff-147acb933cee.png" 
                      alt="QR Code"
                      className="w-24 h-24"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Sections */}
            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* What is Amanah? */}
              <div className="bg-white dark:bg-gray-750 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-blue-500 dark:text-blue-400">What is Amanah?</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Amanah is a public digital platform created to help Algerians find lost items or return found belongings. 
                  Designed with trust, simplicity, and community in mind, Amanah connects people through shared responsibility.
                </p>
              </div>
              
              {/* Our Vision */}
              <div className="bg-white dark:bg-gray-750 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-blue-500 dark:text-blue-400">Our Vision</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  To become the first destination for anyone who has lost or found something, 
                  and to promote a culture of honesty and mutual assistance in our communities.
                </p>
              </div>
              
              {/* Key Features */}
              <div className="bg-white dark:bg-gray-750 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-blue-500 dark:text-blue-400">Key Features</h2>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Post Lost/Found Items</strong> — With descriptions, images, and precise locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Map-Based Search</strong> — Easily find items using Google Maps API</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Category Filters</strong> — Electronics, documents, pets, accessories, and more</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Browse the latest posts</strong> in your region</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Privacy-Focused</strong> — No public contact details; anonymous messaging system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Notifications, Chat, Profile...</strong></span>
                  </li>
                </ul>
              </div>
              
              {/* Why Amanah? */}
              <div className="bg-white dark:bg-gray-750 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-blue-500 dark:text-blue-400">Why Amanah?</h2>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Amanah is built to promote honesty, good citizenship, and social trust, not just item recovery.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Unlike general platforms, Amanah is designed specifically for Algeria — addressing local challenges, languages, and behaviors.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Built with scalability and modularity in mind, Amanah is ready for new features like AI matching and security enhancements.</span>
                  </li>
                </ul>
              </div>
              
              {/* Developers */}
              <div className="bg-white dark:bg-gray-750 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-blue-500 dark:text-blue-400">Developers</h2>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                  {developers.map((dev, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{dev.name}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">ENSTA Algiers, 2CP CS Students</p>
              </div>
              
              {/* Tech Stack */}
              <div className="bg-white dark:bg-gray-750 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-blue-500 dark:text-blue-400">Tech Stack</h2>
                <div className="space-y-4">
                  <div>
                    <p className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <strong>Graphic & UX/UI Design:</strong>
                      <span className="ml-2">Figma, Canva</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <strong>Frontend Dev:</strong>
                      <span className="ml-2">React, Tailwind CSS</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <strong>Backend Dev:</strong>
                      <span className="ml-2">Firebase, Node.js, JavaScript, MongoDB</span>
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <strong>Dev Tools:</strong>
                      <span className="ml-2">GitHub, VS Code, WebStorm, Docker, Superbase</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* App Screenshot */}
            <div className="p-8 bg-gradient-to-br from-teal-400/10 to-blue-500/10 dark:from-teal-900/20 dark:to-blue-900/20">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg shadow-2xl overflow-hidden border-8 border-gray-800 dark:border-gray-700">
                  <img 
                    src="/lovable-uploads/e922d9b5-99a4-493f-8e1e-d3acc7c2530b.png" 
                    alt="Amanah App Screenshot" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AmanahProject;
