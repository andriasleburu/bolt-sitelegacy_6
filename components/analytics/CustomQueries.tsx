"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const CustomQueries = () => {
  return (
    <Card className="h-[300px]">
      <CardHeader>
        <CardTitle>Custom Queries</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select site type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="natural">Natural</SelectItem>
            <SelectItem value="cultural">Cultural</SelectItem>
            <SelectItem value="mixed">Mixed</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="africa">Africa</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="namerica">North America</SelectItem>
            <SelectItem value="samerica">South America</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-full">Generate Report</Button>
      </CardContent>
    </Card>
  );
};

export default CustomQueries;