"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PredictiveAnalytics = () => {
  const data = [
    { year: '2020', actual: 75, predicted: 78 },
    { year: '2021', actual: 73, predicted: 75 },
    { year: '2022', actual: 70, predicted: 72 },
    { year: '2023', actual: 68, predicted: 69 },
    { year: '2024', predicted: 67 },
    { year: '2025', predicted: 65 },
  ];

  return (
    <Card className="h-[300px]">
      <CardHeader>
        <CardTitle>Predictive Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="actual" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="predicted" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PredictiveAnalytics;