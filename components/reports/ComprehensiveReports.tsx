"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ComprehensiveReports = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comprehensive Reports</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a World Heritage Site" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="great-barrier-reef">Great Barrier Reef</SelectItem>
            <SelectItem value="machu-picchu">Machu Picchu</SelectItem>
            <SelectItem value="taj-mahal">Taj Mahal</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex space-x-2">
          <Button>Generate Report</Button>
          <Button variant="outline">View Previous Reports</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComprehensiveReports;