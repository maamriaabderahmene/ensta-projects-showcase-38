
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Project } from "../data/projects";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  logo: string;
  tech: string[];
  url: string;
}

// Support both individual props and a full project object
const ProjectCard = (props: ProjectCardProps | { project: Project }) => {
  // Extract props whether they were passed individually or as project object
  const { id, title, description, logo, url } = 'project' in props 
    ? props.project 
    : props;

  // Get correct URL based on project title
  const getCorrectUrl = () => {
    const projectName = title.toLowerCase();
    
    // Map each project title to its dedicated page
    switch (projectName) {
      case 'unihub':
        return '/unihub';
      case 'courspace':
        return '/courspace';  
      case 'smartstock':
        return '/smartstock';
      case 'reservili':
        return '/reservili';
      case 'amanah':
        return '/amanah';
      case 'bayti':
        return '/bayti';
      case 'medapp':
        return '/medapp';
      case 'avrid':
        return '/avrid';
      case 'little quest':
        return '/littlequest';
      case 'labsync':
        return '/labsync';
      case 'riguelni':
        return '/riguelni';
      case 'univibe':
        return '/univibe';
      case 'codebattle':
        return '/codebattle';
      default:
        // Use project/:id for projects without dedicated pages
        return `/project/${id}`;
    }
  };

  return (
    <Card className="flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20 overflow-hidden">
      <CardContent className="pt-6 pb-2">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-center mb-4">
            <img
              src={logo}
              alt={`${title} logo`}
              className="w-24 h-24 object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-center">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <Link
          to={getCorrectUrl()}
          className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          View Project
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
