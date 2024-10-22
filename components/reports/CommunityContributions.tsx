"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const CommunityContributions = () => {
  const contributions = [
    { id: 1, user: 'John D.', type: 'Photo', site: 'Machu Picchu', date: '2023-06-15' },
    { id: 2, user: 'Sarah L.', type: 'Report', site: 'Great Barrier Reef', date: '2023-06-14' },
    { id: 3, user: 'Mike T.', type: 'Observation', site: 'Taj Mahal', date: '2023-06-13' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Community Contributions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {contributions.map((contribution) => (
            <li key={contribution.id} className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${contribution.user}`} />
                <AvatarFallback>{contribution.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{contribution.user} submitted a {contribution.type}</p>
                <p className="text-sm text-muted-foreground">For {contribution.site} on {contribution.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CommunityContributions;