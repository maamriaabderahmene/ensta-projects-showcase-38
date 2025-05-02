
import React from 'react';
import { Card } from '@/components/ui/card';

interface TechCardProps {
  title: string;
  icon?: React.ReactNode;
  description: string;
  tools: Array<{
    name: string;
    logo?: string;
  }>;
}

const TechCard = ({ title, icon, description, tools }: TechCardProps) => {
  return (
    <Card className="overflow-hidden p-6 h-full card-hover dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          {icon && <div className="mr-3">{icon}</div>}
          <h3 className="text-xl font-bold gradient-text">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        
        <div className="grid grid-cols-3 gap-3 mt-auto">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-2 bg-muted dark:bg-gray-700 rounded-lg"
            >
              {tool.logo ? (
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`} 
                  className="h-8 w-8 object-contain mb-1" 
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center mb-1">
                  <span className="text-xs font-bold">{tool.name.charAt(0)}</span>
                </div>
              )}
              <span className="text-xs text-center">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default TechCard;
