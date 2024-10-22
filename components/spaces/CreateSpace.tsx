"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const CreateSpace = () => {
  const [spaceType, setSpaceType] = useState('chat');
  const [visibility, setVisibility] = useState('public');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a Space</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="space-name">Space Name</Label>
            <Input id="space-name" placeholder="Enter space name" />
          </div>
          <div className="space-y-2">
            <Label>Space Type</Label>
            <Select value={spaceType} onValueChange={setSpaceType}>
              <SelectTrigger>
                <SelectValue placeholder="Select space type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chat">Chat</SelectItem>
                <SelectItem value="feed">Feed</SelectItem>
                <SelectItem value="content">Content</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Visibility</Label>
            <RadioGroup value={visibility} onValueChange={setVisibility}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="public" />
                <Label htmlFor="public">Public</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="private" />
                <Label htmlFor="private">Private</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit">Create Space</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateSpace;