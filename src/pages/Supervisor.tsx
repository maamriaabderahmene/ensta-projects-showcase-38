
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Supervisor() {
  return (
    <div className="container mx-auto py-12 px-4 dark:bg-gray-900 bg-gray-50 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 dark:text-white">Project Supervisor</h1>
        <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-300">
          Meet the faculty member who guided and supervised the student projects.
        </p>

        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 bg-indigo-100 dark:bg-indigo-900/40 p-8 flex items-center justify-center">
              <Avatar className="h-48 w-48 border-4 border-white dark:border-gray-700 shadow-lg">
                <AvatarFallback className="text-5xl font-bold bg-indigo-600 text-white">E</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="md:w-2/3">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-2 dark:text-white">El Hadi Khoumeri</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Professor & Project Supervisor</p>
                
                <div className="border-l-4 border-indigo-600 pl-4 my-6 dark:border-indigo-400">
                  <p className="italic text-gray-600 dark:text-gray-300">
                    Professor El Hadi Khoumeri is an experienced educator and researcher in the field of computer science at the École Nationale des Technologies Avancées. 
                    With a background in software engineering and computational systems, he brings valuable insights to guide students through their practical projects.
                  </p>
                </div>
                
                <div className="space-y-4 mt-6">
                  <h3 className="text-xl font-semibold dark:text-white">Expertise</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Professor Khoumeri specializes in applied informatics and has supervised numerous successful student initiatives. 
                    His teaching philosophy emphasizes practical application of theoretical knowledge and collaborative problem-solving.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">Contact Information</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start gap-3" asChild>
                      <a href="mailto:el-hadi.khoumeri@ensta.edu">
                        <Mail className="h-5 w-5" />
                        el-hadi.khoumeri@ensta.edu
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start gap-3" asChild>
                      <a href="https://linkedin.com/in/elhadikhoumeri" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                        linkedin.com/in/elhadikhoumeri
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-8 mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">About the Supervision</h3>
          <div className="space-y-6">
            <div className="flex gap-3 items-start">
              <div className="bg-indigo-100 dark:bg-indigo-800 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-700 dark:text-indigo-300">
                  <path d="M11 14a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"></path>
                  <rect x="9" y="6" width="10" height="16" rx="2"></rect>
                  <path d="M17 22H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM15 2v4"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold dark:text-white">Project Guidance</h4>
                <p className="text-gray-600 dark:text-gray-300">Provided strategic direction and technical guidance throughout the project lifecycle</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="bg-indigo-100 dark:bg-indigo-800 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-700 dark:text-indigo-300">
                  <path d="M18 8a4.24 4.24 0 0 0-4.24-4.24C12.72 2.76 11.92 2 11 2H9c-.98 0-1.79.8-1.79 1.8A4.24 4.24 0 0 0 3 8c0 .96.32 1.85.85 2.56A4.07 4.07 0 0 0 3 13c0 1.38.67 2.61 1.71 3.36C4.26 17.09 4 18 4 19a4.24 4.24 0 0 0 4.24 4.24c1.04 1 1.84 1.76 2.76 1.76h2c.92 0 1.72-.76 2.76-1.76A4.24 4.24 0 0 0 20 19c0-1-.26-1.91-.71-2.64A4.24 4.24 0 0 0 21 13a4.07 4.07 0 0 0-.85-2.44A4.23 4.23 0 0 0 21 8a4.24 4.24 0 0 0-4.24-4.24C15.72 2.76 14.92 2 14 2"></path>
                  <path d="M12 10v12"></path>
                  <path d="m8 14 4-4 4 4"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold dark:text-white">Knowledge Transfer</h4>
                <p className="text-gray-600 dark:text-gray-300">Facilitated learning experiences and mentored students in applying theoretical concepts</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="bg-indigo-100 dark:bg-indigo-800 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-700 dark:text-indigo-300">
                  <path d="M14 5a2 2 0 0 0-2-2h-1a2 2 0 0 0 0 4h1a2 2 0 1 1 0 4h-1a2 2 0 0 1-2-2"></path>
                  <path d="M12 15v2"></path>
                  <path d="M12 11v2"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold dark:text-white">Quality Assurance</h4>
                <p className="text-gray-600 dark:text-gray-300">Ensured high standards of work through regular reviews and constructive feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
