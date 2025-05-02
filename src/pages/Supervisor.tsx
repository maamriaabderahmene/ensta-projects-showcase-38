
import React from "react";
import { Card, CardContent } from "../components/ui/card";

export default function Supervisor() {
  return (
    <div className="container mx-auto py-12 px-4 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Project Supervisors</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SupervisorCard 
          name="Dr. Antoine Duval" 
          title="AI Research Lead" 
          department="Artificial Intelligence"
          image="/lovable-uploads/306f76cc-9b44-41af-b8e8-7ba4f602221f.png"
          bio="Dr. Duval specializes in deep learning algorithms and has supervised over 15 successful student projects focused on neural networks and machine learning applications."
        />
        
        <SupervisorCard 
          name="Prof. Marie Laurent" 
          title="Robotics Division Head" 
          department="Mechanical Engineering"
          image="/lovable-uploads/2943ad0f-8c2c-4e02-8494-2cd1bce674d8.png" 
          bio="Professor Laurent leads the robotics research division and guides student teams in developing autonomous systems and robotic prototypes for real-world applications."
        />
        
        <SupervisorCard 
          name="Dr. Thomas Martin" 
          title="Software Architecture Expert" 
          department="Computer Science"
          image="/lovable-uploads/062f7205-ee8f-45c6-8f33-0ab1ae45de6d.png"
          bio="Dr. Martin has extensive experience in software engineering and helps students design robust, scalable systems for various computational challenges."
        />
      </div>
    </div>
  );
}

interface SupervisorCardProps {
  name: string;
  title: string;
  department: string;
  image: string;
  bio: string;
}

function SupervisorCard({ name, title, department, image, bio }: SupervisorCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <div className="aspect-[3/2] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1 dark:text-white">{name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{title}</p>
        <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full dark:bg-indigo-900 dark:text-indigo-200">
          {department}
        </div>
        <p className="text-gray-600 dark:text-gray-300">{bio}</p>
      </CardContent>
    </Card>
  );
}
