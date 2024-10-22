"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ScheduledReports = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scheduled Reports</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="report-name">Report Name</Label>
          <Input id="report-name" placeholder="Enter report name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="frequency">Frequency</Label>
          <Select>
            <SelectTrigger id="frequency">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="recipients">Recipients</Label>
          <Input id="recipients" placeholder="Enter email addresses" />
        </div>
        <Button>Schedule Report</Button>
      </CardContent>
    </Card>
  );
};

export default ScheduledReports;