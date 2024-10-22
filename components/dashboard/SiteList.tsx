"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SiteList = () => {
  const sites = [
    { name: 'Great Barrier Reef', location: 'Australia', status: 'In Danger', lastUpdated: '2023-05-15' },
    { name: 'Machu Picchu', location: 'Peru', status: 'Good', lastUpdated: '2023-06-01' },
    { name: 'Pyramids of Giza', location: 'Egypt', status: 'Good', lastUpdated: '2023-05-20' },
    { name: 'Venice and its Lagoon', location: 'Italy', status: 'In Danger', lastUpdated: '2023-06-10' },
  ];

  return (
    <Card className="h-[400px] overflow-auto">
      <CardHeader>
        <CardTitle>Site List</CardTitle>
        <Input type="search" placeholder="Search sites..." className="max-w-sm" />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sites.map((site, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{site.name}</TableCell>
                <TableCell>{site.location}</TableCell>
                <TableCell>{site.status}</TableCell>
                <TableCell>{site.lastUpdated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SiteList;