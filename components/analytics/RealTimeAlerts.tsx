"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

const RealTimeAlerts = () => {
  const alerts = [
    { title: 'Flood Warning', description: 'Rising water levels near Angkor Wat', severity: 'high' },
    { title: 'Illegal Logging', description: 'Suspicious activity detected in Yellowstone', severity: 'medium' },
  ];

  return (
    <Card className="h-[300px] overflow-auto">
      <CardHeader>
        <CardTitle>Real-Time Alerts</CardTitle>
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

export default RealTimeAlerts;