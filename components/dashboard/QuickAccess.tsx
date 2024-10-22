"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, FolderKanban, BarChart2 } from 'lucide-react';

const QuickAccess = () => {
  const quickLinks = [
    { name: 'Annual Report 2023', icon: FileText, href: '/reports/annual-2023' },
    { name: 'Restoration Project', icon: FolderKanban, href: '/projects/restoration' },
    { name: 'Visitor Statistics', icon: BarChart2, href: '/analytics/visitors' },
  ];

  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>Quick Access</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {quickLinks.map((link, index) => (
            <Button key={index} variant="outline" className="w-full justify-start">
              <link.icon className="mr-2 h-4 w-4" />
              {link.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAccess;