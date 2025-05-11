
import React from 'react';

const HaminiProject = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src="/lovable-uploads/6d71684d-2d3d-4965-8a70-9f35b17f19f9.png" 
              alt="Hamini Logo" 
              className="w-48 h-48 object-contain"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">Hamini</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Hamini is a legal services platform connecting clients with verified lawyers. It offers AI-powered legal assistance, streamlined consultation booking, and a seamless client-lawyer interaction experience to make legal help more accessible and convenient.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Accessible Legal Help</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Connect with verified lawyers without hassle</li>
                <li>Transparent pricing and consultation booking</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">AI-Powered Assistance</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI chatbot for instant answers to basic legal questions</li>
                <li>Helps users understand their legal needs</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Lawyer Tools</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Manage client inquiries effectively</li>
                <li>Clear pathway to be discovered by new clients</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Platform Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/55fab4b7-b79e-4301-9f86-9bd314d9b17a.png" 
                alt="Hamini Platform Interface" 
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/e568f51a-a76d-4beb-a209-ae0c3712ff29.png" 
                alt="Hamini Mobile Interface" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaminiProject;
