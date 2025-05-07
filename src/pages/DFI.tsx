import React from 'react';
import { departmentInfo } from '@/data/developers';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/components/MainLayout';

const DFI = () => {
  return (
    <MainLayout>
      <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/fd3a4a57-99c7-4a0c-bd34-9aaa4f6bd19e.png" 
                  alt="DFI Logo" 
                  className="h-16"
                />
              </div>
              <h1 className="text-4xl font-bold mb-4 gradient-text">Département de Base en Informatique (DFI)</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {departmentInfo.shortDescription}
              </p>
            </div>
            
            <Card className="mb-8 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      {departmentInfo.mission}
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      {departmentInfo.vision}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Educational Focus</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {departmentInfo.focus.map((item, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="mr-4 bg-ensta-blue/10 rounded-full w-10 h-10 flex items-center justify-center text-ensta-blue font-bold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{item}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-ensta-blue to-ensta-darkred text-white rounded-lg overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">About ENSTA</h2>
                  <img 
                    src="/lovable-uploads/608c5708-1d87-4251-bae2-66e250811ba2.png" 
                    alt="ENSTA Logo" 
                    className="h-12"
                  />
                </div>
                <p className="mb-4">
                  École Nationale Supérieure des Technologies Avancées (ENSTA) is a prestigious institution dedicated to 
                  advanced technology education and research. The Département de Base en Informatique (DFI) plays a crucial role 
                  in providing foundational computer science education to prepare students for advanced specializations.
                </p>
                <p>
                  The department is committed to excellence in teaching, research, and innovation, equipping students 
                  with both theoretical knowledge and practical skills needed for success in the rapidly evolving 
                  field of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DFI;
