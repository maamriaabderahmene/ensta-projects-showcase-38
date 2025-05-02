
import React from 'react';
import { Card } from '@/components/ui/card';

interface TechCardProps {
  title: string;
  icon?: React.ReactNode;
  description: string;
  tools: string[];
}

const TechCard = ({ title, icon, description, tools }: TechCardProps) => {
  return (
    <Card className="overflow-hidden p-6 h-full card-hover">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          {icon && <div className="mr-3">{icon}</div>}
          <h3 className="text-xl font-bold gradient-text">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tools.map((tool, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-muted text-sm rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default TechCard;
