
import React from 'react';
import { supervisor } from '@/data/developers';
import { Card } from '@/components/ui/card';

const Supervisor = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Project Supervisor</h1>
            <p className="text-lg text-gray-700">
              Meet the faculty member who guided and supervised the student projects.
            </p>
          </div>
          
          <Card className="overflow-hidden bg-white">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="h-64 w-64 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground">{supervisor.name.charAt(0)}</span>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-2">{supervisor.name}</h2>
                  <p className="text-ensta-blue font-medium mb-4">{supervisor.title}</p>
                  
                  <div className="mb-6 text-gray-700">
                    <p className="mb-4">{supervisor.bio}</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-bold mb-3">Contact Information</h3>
                    <div className="space-y-2">
                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        <a href={`mailto:${supervisor.contact.email}`} className="text-ensta-blue hover:underline">
                          {supervisor.contact.email}
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">LinkedIn:</span>{" "}
                        <a href={`https://${supervisor.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-ensta-blue hover:underline">
                          {supervisor.contact.linkedin}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Supervisor;
