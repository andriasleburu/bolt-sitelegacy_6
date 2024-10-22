"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const CustomReportBuilder = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Custom Report Builder</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Select Sites</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select World Heritage Sites" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="great-barrier-reef">Great Barrier Reef</SelectItem>
              <SelectItem value="machu-picchu">Machu Picchu</SelectItem>
              <SelectItem value="taj-mahal">Taj Mahal</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Time Period</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-quarter">Last Quarter</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Data Types</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="environmental" />
              <label htmlFor="environmental">Environmental Conditions</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="community" />
              <label htmlFor="community">Community Reports</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="satellite" />
              <label htmlFor="satellite">Satellite Imagery</label>
            </div>
          </div>
        </div>
        <Button>Generate Custom Report</Button>
      </CardContent>
    </Card>
  );
};

export default CustomReportBuilder;