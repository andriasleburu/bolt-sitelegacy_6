"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const InviteUsers = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite Users</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="user-email">User Email</Label>
            <Input id="user-email" type="email" placeholder="Enter user email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="project">Project</Label>
            <Select>
              <SelectTrigger id="project">
                <SelectValue placeholder="Select a project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="great-barrier-reef">Great Barrier Reef Restoration</SelectItem>
                <SelectItem value="machu-picchu">Machu Picchu Conservation</SelectItem>
                <SelectItem value="taj-mahal">Taj Mahal Preservation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Send Invitation</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InviteUsers;