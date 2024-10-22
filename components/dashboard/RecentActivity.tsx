"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const RecentActivity = () => {
  const activities = [
    { type: 'Data Submission', site: 'Yellowstone National Park', user: 'John Doe', time: '2 hours ago' },
    { type: 'AI Detection', site: 'Great Wall of China', description: 'Vegetation encroachment detected', time: '5 hours ago' },
    { type: 'Community Report', site: 'Taj Mahal', description: 'Increased pollution levels reported', time: '1 day ago' },
    { type: 'Data Submission', site: 'Galapagos Islands', user: 'Jane Smith', time: '2 days ago' },
  ];

  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <ul className="space-y-4">
            {activities.map((activity, index) => (
              <li key={index} className="border-b pb-2">
                <h4 className="font-semibold">{activity.type}</h4>
                <p className="text-sm">{activity.site}</p>
                {activity.user && <p className="text-sm text-muted-foreground">By {activity.user}</p>}
                {activity.description && <p className="text-sm">{activity.description}</p>}
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;