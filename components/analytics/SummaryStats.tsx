"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SummaryStats = () => {
  const stats = [
    { label: 'Monitored Sites', value: 1154 },
    { label: 'Sites at Risk', value: 52 },
    { label: 'Recent Alerts', value: 23 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Summary Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
              <dd className="text-2xl font-semibold">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
};

export default SummaryStats;