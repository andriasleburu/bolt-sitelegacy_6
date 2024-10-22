"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const ThreadedConversations = () => {
  const conversations = [
    {
      id: 1,
      topic: 'Water Quality Monitoring',
      lastMessage: 'The latest results show improvement in pH levels.',
      participants: ['John D.', 'Sarah L.'],
      replies: 5,
    },
    {
      id: 2,
      topic: 'Visitor Management Strategies',
      lastMessage: 'We should consider implementing a reservation system.',
      participants: ['Mike T.', 'Emma R.'],
      replies: 3,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Threaded Conversations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input placeholder="Start a new conversation..." />
            <Button>Post</Button>
          </div>
          <ul className="space-y-4">
            {conversations.map((convo) => (
              <li key={convo.id} className="border-b pb-4">
                <h4 className="font-semibold">{convo.topic}</h4>
                <p className="text-sm text-muted-foreground">{convo.lastMessage}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex -space-x-2">
                    {convo.participants.map((participant, index) => (
                      <Avatar key={index} className="border-2 border-background">
                        <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${participant}`} />
                        <AvatarFallback>{participant.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{convo.replies} replies</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThreadedConversations;