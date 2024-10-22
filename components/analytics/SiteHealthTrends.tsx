"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SiteHealthTrends = () => {
  const data = [
    { year: '2018', environmental: 85, humanImpact: 70, preservation: 90 },
    { year: '2019', environmental: 82, humanImpact: 72, preservation: 88 },
    { year: '2020', environmental: 80, humanImpact: 75, preservation: 85 },
    { year: '2021', environmental: 78, humanImpact: 78, preservation: 83 },
    { year: '2022', environmental: 75, humanImpact: 80, preservation: 80 },
  ];

  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>Site Health Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="environmental" stroke="#8884d8" />
            <Line type="monotone" dataKey="humanImpact" stroke="#82ca9d" />
            <Line type="monotone" dataKey="preservation" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SiteHealthTrends;