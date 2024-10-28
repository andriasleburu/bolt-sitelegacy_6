"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { MessageCircle, Rss, FileText } from 'lucide-react';

interface Space {
  id: number;
  name: string;
  type: string;
  visibility: string;
}

interface SpacesListProps {
  onSpaceClick: (space: Space) => void;
}

const SpacesList: React.FC<SpacesListProps> = ({ onSpaceClick }) => {
  const spaces = [
    { id: 1, name: 'Great Barrier Reef Discussion', type: 'chat', visibility: 'public' },
    { id: 2, name: 'Machu Picchu Updates', type: 'feed', visibility: 'public' },
    { id: 3, name: 'Taj Mahal Restoration Docs', type: 'files', visibility: 'private' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'chat':
        return <MessageCircle className="w-4 h-4" />;
      case 'feed':
        return <Rss className="w-4 h-4" />;
      case 'content':
        return <FileText className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spaces</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {spaces.map((space) => (
            <li
              key={space.id}
              className="flex items-center justify-between cursor-pointer"
              onClick={() => onSpaceClick(space)}
            >
              <div className="flex items-center space-x-2">
                {getIcon(space.type)}
                <span>{space.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={space.visibility === 'public' ? 'secondary' : 'outline'}>
                  {space.visibility}
                </Badge>
                <Badge>{space.type}</Badge>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SpacesList;
