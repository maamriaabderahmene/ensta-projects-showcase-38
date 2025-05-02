
import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import DeveloperCard from "../components/DeveloperCard";
import TechCard from "../components/TechCard";
import { projects } from "../data/projects";
import { websiteDevelopers } from "../data/developers";
import { technologies } from "../data/technologies";
import { useTheme } from "../hooks/use-theme";

export default function Index() {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <HeroSection />
      
      <section className="py-16 px-4 md:px-8 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-800"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Meet Our Developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {websiteDevelopers.slice(0, 4).map((developer, index) => (
              <DeveloperCard 
                key={index}
                name={developer.name}
                role={developer.role}
                bio={developer.bio}
                image={developer.image}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/developers"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-800"
            >
              View All Developers
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.slice(0, 6).map((tech, index) => (
              <TechCard
                key={index}
                title={tech.title}
                icon={null}
                description={tech.description}
                tools={tech.tools}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/technologies"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-800"
            >
              View All Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
