"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const CollaborationTools = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Collaboration Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="files">
          <TabsList>
            <TabsTrigger value="files">Shared Files</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
            <TabsTrigger value="tasks">Assign Tasks</TabsTrigger>
          </TabsList>
          <TabsContent value="files">
            <div className="space-y-4">
              <Input type="file" />
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>project-plan.pdf</span>
                  <Button variant="outline" size="sm">Download</Button>
                </li>
                <li className="flex items-center justify-between">
                  <span>site-photos.zip</span>
                  <Button variant="outline" size="sm">Download</Button>
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="comments">
            <div className="space-y-4">
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">2023-06-20</p>
                <p>The latest water quality report looks promising. Great work, team!</p>
              </div>
              <div>
                <Textarea placeholder="Add a comment..." />
                <Button className="mt-2">Post Comment</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tasks">
            <div className="space-y-4">
              <div>
                <Input placeholder="Task description" />
                <Input placeholder="Assign to" className="mt-2" />
                <Button className="mt-2">Assign Task</Button>
              </div>
              <ul className="space-y-2">
                <li>Review site assessment report - Assigned to: Dr. Jane Smith</li>
                <li>Prepare monthly progress update - Assigned to: John Doe</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CollaborationTools;