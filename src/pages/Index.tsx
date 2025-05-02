
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

const Index = () => {
  // Select a few featured projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* About the Event */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">About PrepaNova</h2>
            <p className="text-lg text-gray-700 mb-8">
              PrepaNova is an inaugural event showcasing the innovative projects developed by students 
              from the "formation de base en informatique" program in the Département de Base en 
              Informatique at the École Nationale des Technologies Avancées. Join us on May 4th, 2025 
              to explore these projects and meet the talented developers behind them.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/department">About the Department</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/supervisor">Meet the Supervisor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover some of the innovative projects developed by our talented students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View All Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Event Details */}
      <section className="py-16 bg-gradient-to-r from-ensta-blue to-ensta-darkred text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Event Details</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">Date:</span>
                  <span>May 4th, 2025</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Location:</span>
                  <span>École Nationale des Technologies Avancées, Main Campus</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Time:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Admission:</span>
                  <span>Free and open to all students, faculty, and interested visitors</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-none backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">Project Demonstrations</h3>
                  <p className="text-white/80">
                    Meet the student developers and see live demonstrations of all 14 projects.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-none backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">Tech Talks</h3>
                  <p className="text-white/80">
                    Short presentations about the technologies and methodologies used in the projects.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-none backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">Networking</h3>
                  <p className="text-white/80">
                    Connect with other students, professors, and industry representatives.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-none backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">Q&A Sessions</h3>
                  <p className="text-white/80">
                    Opportunity to ask questions about the projects and development process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
