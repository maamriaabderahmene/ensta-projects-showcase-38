
import React from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${project.id}`} className="block">
      <Card className="overflow-hidden h-full card-hover">
        <div className="p-6">
          <div className="mb-4 flex justify-center">
            {project.logo ? (
              <img 
                src={project.logo} 
                alt={`${project.title} logo`}
                className="h-24 w-auto object-contain"
              />
            ) : (
              <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-muted-foreground">{project.title.charAt(0)}</span>
              </div>
            )}
          </div>
          
          <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
          
          <p className="text-muted-foreground line-clamp-3">{project.description}</p>
          
          <div className="mt-4 flex items-center text-ensta-blue font-medium">
            <span>View Project</span>
            <ChevronRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
