"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const MySitesOverview = () => {
  const sites = [
    { name: 'Great Barrier Reef', status: 'At Risk', pendingActions: 2 },
    { name: 'Machu Picchu', status: 'Stable', pendingActions: 1 },
    { name: 'Taj Mahal', status: 'Good', pendingActions: 0 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Sites Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {sites.map((site, index) => (
            <li key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{site.name}</p>
                <Badge variant={site.status === 'Good' ? 'default' : site.status === 'Stable' ? 'secondary' : 'destructive'}>
                  {site.status}
                </Badge>
              </div>
              <Badge variant="outline">{site.pendingActions} pending actions</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default MySitesOverview;