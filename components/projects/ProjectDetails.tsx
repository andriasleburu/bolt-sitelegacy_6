"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const ProjectDetails = () => {
  const project = {
    name: 'Coral Restoration',
    site: 'Great Barrier Reef',
    timeline: 'Jan 2023 - Dec 2025',
    milestones: [
      { name: 'Site Assessment', date: 'Mar 2023', completed: true },
      { name: 'Coral Nursery Setup', date: 'Jun 2023', completed: true },
      { name: 'First Transplantation', date: 'Sep 2023', completed: false },
      { name: 'Monitoring and Evaluation', date: 'Dec 2023', completed: false },
    ],
    team: [
      { name: 'Dr. Jane Smith', role: 'Project Lead' },
      { name: 'John Doe', role: 'Marine Biologist' },
      { name: 'Sarah Johnson', role: 'Conservation Specialist' },
    ],
    goals: [
      'Restore 5,000 square meters of coral reef',
      'Increase fish population by 20%',
      'Improve water quality in the restoration area',
    ],
    updates: [
      { date: '2023-06-15', content: 'Coral nursery successfully established with 1,000 coral fragments' },
      { date: '2023-05-01', content: 'Secured additional funding for expanded monitoring program' },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name} - {project.site}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <p><strong>Timeline:</strong> {project.timeline}</p>
            <h4 className="font-semibold mt-4">Goals:</h4>
            <ul className="list-disc list-inside">
              {project.goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="milestones">
            <ul className="space-y-2">
              {project.milestones.map((milestone, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${milestone.completed ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                  <span>{milestone.name} - {milestone.date}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="team">
            <ul className="space-y-4">
              {project.team.map((member, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${member.name}`} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="updates">
            <ul className="space-y-4">
              {project.updates.map((update, index) => (
                <li key={index}>
                  <p className="text-sm text-muted-foreground">{update.date}</p>
                  <p>{update.content}</p>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProjectDetails;