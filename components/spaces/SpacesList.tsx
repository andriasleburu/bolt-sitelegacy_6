"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Rss, FileText } from 'lucide-react';

const SpacesList = () => {
  const spaces = [
    { id: 1, name: 'Great Barrier Reef Discussion', type: 'chat', visibility: 'public' },
    { id: 2, name: 'Machu Picchu Updates', type: 'feed', visibility: 'public' },
    { id: 3, name: 'Taj Mahal Restoration Docs', type: 'content', visibility: 'private' },
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
            <li key={space.id} className="flex items-center justify-between">
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