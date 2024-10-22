"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const News = () => {
  const newsItems = [
    { title: 'New World Heritage Site Announced', summary: 'UNESCO adds 10 new sites to the World Heritage List', date: '2023-07-15' },
    { title: 'Conservation Success Story', summary: 'Efforts to protect the Virunga National Park show positive results', date: '2023-07-10' },
    { title: 'Climate Change Impact Report', summary: 'Study reveals increasing threats to coastal World Heritage Sites', date: '2023-07-05' },
    { title: 'Technology in Heritage Preservation', summary: 'New AI tools developed for monitoring archaeological sites', date: '2023-07-01' },
  ];

  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>News</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <ul className="space-y-4">
            {newsItems.map((item, index) => (
              <li key={index} className="border-b pb-2">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm">{item.summary}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default News;