"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

const TopAlerts = () => {
  const alerts = [
    { title: 'Flood Warning', description: 'Potential flooding near Angkor Archaeological Park', severity: 'high' },
    { title: 'Drought Alert', description: 'Prolonged dry spell affecting Serengeti National Park', severity: 'medium' },
    { title: 'Vandalism Report', description: 'Recent graffiti discovered at Petra', severity: 'low' },
  ];

  return (
    <Card className="h-[400px] overflow-auto">
      <CardHeader>
        <CardTitle>Top Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert, index) => (
          <Alert key={index} variant={alert.severity === 'high' ? 'destructive' : 'default'}>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>{alert.title}</AlertTitle>
            <AlertDescription>{alert.description}</AlertDescription>
          </Alert>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopAlerts;