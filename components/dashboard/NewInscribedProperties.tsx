"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NewInscribedProperties = () => {
  const recentSites = [
    { name: 'Dholavira: A Harappan City', country: 'India', year: 2021, session: '44th' },
    { name: 'Arslantepe Mound', country: 'Turkey', year: 2021, session: '44th' },
    { name: 'Sítio Roberto Burle Marx', country: 'Brazil', year: 2021, session: '44th' },
  ];

  return (
    <Card className="h-[400px] overflow-auto">
      <CardHeader>
        <CardTitle>New Inscribed Properties</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recentSites.map((site, index) => (
            <li key={index} className="border-b pb-2">
              <h3 className="font-semibold">{site.name}</h3>
              <p className="text-sm text-muted-foreground">
                {site.country} - {site.year} ({site.session} Session)
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default NewInscribedProperties;