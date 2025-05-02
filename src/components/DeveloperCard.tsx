
import React from 'react';
import { Card } from '@/components/ui/card';

interface DeveloperProps {
  name: string;
  role?: string;
  bio?: string;
  image?: string;
}

const DeveloperCard = ({ name, role, bio, image }: DeveloperProps) => {
  return (
    <Card className="overflow-hidden p-6 h-full card-hover">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="h-40 w-40 rounded-full object-cover border-4 border-ensta-blue/20"
            />
          ) : (
            <div className="h-40 w-40 bg-muted rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-muted-foreground">{name.charAt(0)}</span>
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-bold mb-1">{name}</h3>
        {role && <p className="text-sm text-muted-foreground mb-3">{role}</p>}
        {bio && <p className="text-sm">{bio}</p>}
      </div>
    </Card>
  );
};

export default DeveloperCard;
