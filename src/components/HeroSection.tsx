
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="flex gap-4 items-center">
              <img src="/lovable-uploads/608c5708-1d87-4251-bae2-66e250811ba2.png" alt="ENSTA Logo" className="h-16" />
              <img src="/lovable-uploads/d172ede3-25cf-48ef-92af-e74639363716.png" alt="DFI Logo" className="h-10" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">PrepaNova</span>
              <span className="block text-3xl md:text-4xl mt-2 text-ensta-yellow font-medium">1st Edition</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-xl">
              Discover innovative projects from the "formation de base en informatique" program
              at the École Nationale des Technologies Avancées.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-ensta-blue hover:bg-ensta-darkblue text-white">
                <Link to="/projects">
                  Explore Projects
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/department">Learn about DFI</Link>
              </Button>
            </div>
            
            <div className="text-sm text-gray-600">
              <p>Event date: <span className="font-semibold">04 May 2025</span></p>
              <p>Supervised by: <span className="font-semibold">El Hadi Khoumeri</span></p>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <img 
              src="/lovable-uploads/5a38ff68-a876-4ead-8176-6e6c67964f4d.png" 
              alt="PrepaNova Event Poster" 
              className="max-h-[500px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-ensta-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-ensta-blue/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
