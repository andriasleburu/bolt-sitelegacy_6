"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const ActiveProjects = () => {
  const projects = [
    { name: 'Coral Restoration', site: 'Great Barrier Reef', progress: 65 },
    { name: 'Visitor Management Plan', site: 'Machu Picchu', progress: 40 },
    { name: 'Air Quality Improvement', site: 'Taj Mahal', progress: 80 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium">{project.name}</p>
                <span className="text-sm text-muted-foreground">{project.site}</span>
              </div>
              <Progress value={project.progress} className="w-full" />
              <p className="text-sm text-right">{project.progress}% complete</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ActiveProjects;