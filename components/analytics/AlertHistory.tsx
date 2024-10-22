"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AlertHistory = () => {
  const alerts = [
    { site: 'Great Barrier Reef', country: 'Australia', description: 'Coral bleaching event', date: '2023-06-15', action: 'Increased monitoring' },
    { site: 'Machu Picchu', country: 'Peru', description: 'Landslide risk', date: '2023-06-10', action: 'Visitor restrictions implemented' },
  ];

  return (
    <Card className="h-[300px] overflow-auto">
      <CardHeader>
        <CardTitle>Alert History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Site</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Alert</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alerts.map((alert, index) => (
              <TableRow key={index}>
                <TableCell>{alert.site}</TableCell>
                <TableCell>{alert.country}</TableCell>
                <TableCell>{alert.description}</TableCell>
                <TableCell>{alert.date}</TableCell>
                <TableCell>{alert.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AlertHistory;