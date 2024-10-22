"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const UserActivity = () => {
  const users = [
    { name: 'John Doe', role: 'Site Manager', activity: 'Updated Yellowstone report' },
    { name: 'Jane Smith', role: 'Researcher', activity: 'Analyzed Great Barrier Reef data' },
    { name: 'Mike Johnson', role: 'Conservationist', activity: 'Submitted Machu Picchu assessment' },
  ];

  return (
    <Card className="h-[300px] overflow-auto">
      <CardHeader>
        <CardTitle>User Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Recent Activity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.activity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UserActivity;