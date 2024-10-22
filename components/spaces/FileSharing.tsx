"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileIcon, ImageIcon, LinkIcon } from 'lucide-react';

const FileSharing = () => {
  const sharedFiles = [
    { name: 'Project Report.pdf', type: 'document', sharedBy: 'John Doe', date: '2023-06-20' },
    { name: 'Site Photo.jpg', type: 'image', sharedBy: 'Jane Smith', date: '2023-06-19' },
    { name: 'Research Paper', type: 'link', sharedBy: 'Mike Johnson', date: '2023-06-18' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <FileIcon className="w-4 h-4" />;
      case 'image':
        return <ImageIcon className="w-4 h-4" />;
      case 'link':
        return <LinkIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>File Sharing</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input type="file" />
            <Button>Upload</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Shared By</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sharedFiles.map((file, index) => (
                <TableRow key={index}>
                  <TableCell className="flex items-center space-x-2">
                    {getIcon(file.type)}
                    <span>{file.name}</span>
                  </TableCell>
                  <TableCell>{file.sharedBy}</TableCell>
                  <TableCell>{file.date}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Download</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default FileSharing;