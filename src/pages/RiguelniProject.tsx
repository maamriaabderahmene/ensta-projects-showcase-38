
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const RiguelniProject = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-purple-600 hover:underline mb-8"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Projects
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center mb-8">
              <div className="md:mr-8 mb-6 md:mb-0 flex justify-center">
                <img 
                  src="/lovable-uploads/95d15c38-7868-4506-a7f3-e153c1313779.png"
                  alt="RIGUELNI logo"
                  className="h-36 w-auto object-contain"
                />
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">RIGUELNI</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  A modern platform connecting freelancers and businesses
                </p>
              </div>
            </div>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">About RIGUELNI</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      RIGUELNI is a modern platform that helps freelancers and businesses connect easily. We bring together talented professionals and companies looking for services in one simple place. Our platform is built with user-friendly tools that make work easier, including safe payments, instant messaging, and a clear project dashboard. Whether you're a freelancer wanting to show your work or a business looking for skilled people, RIGUELNI makes it simple to find what you need. We use smart tools to match the right people together, keep prices clear, and handle any issues professionally. Our goal is to make freelance work smooth and easy for everyone.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-3">Platform Availability</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <h4 className="font-medium mb-2">Website</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Full-featured platform with responsive design and powerful tools
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <h4 className="font-medium mb-2">Mobile App</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Cross-platform mobile app with real-time updates and notifications
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="design">
                <h2 className="text-2xl font-bold mb-4">UI/UX Design</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="overflow-hidden">
                    <img 
                      src="/lovable-uploads/41d792d6-b706-47f4-8137-4d1340629e38.png" 
                      alt="RIGUELNI Design - Categories" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-medium">Categories View</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Explore service categories</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img 
                      src="/lovable-uploads/a6ca234a-e31a-4dd5-881c-9c6e48b2e8be.png" 
                      alt="RIGUELNI Design - Quote" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-medium">Inspirational Quote</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">User motivation section</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <img 
                      src="/lovable-uploads/ffe0e4db-4d01-4827-b83a-4f52e9afd5d4.png" 
                      alt="RIGUELNI Design - Hero" 
                      className="w-full h-auto"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-medium">Hero Section</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Main landing page with call-to-action</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="features">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-purple-600">For Freelancers</h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-5 list-disc">
                          <li>Create professional portfolios</li>
                          <li>Browse projects that match your skills</li>
                          <li>Secure payment system</li>
                          <li>Real-time messaging with clients</li>
                          <li>Rating system to build reputation</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-purple-600">For Clients</h3>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-5 list-disc">
                          <li>Post projects and job opportunities</li>
                          <li>Browse talented freelancers by category</li>
                          <li>Secure payment protection</li>
                          <li>Real-time project tracking</li>
                          <li>Verified freelancer profiles</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiguelniProject;
