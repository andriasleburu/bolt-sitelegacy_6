"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TrendAnalysis = () => {
  const data = [
    { name: 'Africa', natural: 40, cultural: 52, mixed: 5 },
    { name: 'Asia', natural: 70, cultural: 189, mixed: 12 },
    { name: 'Europe', natural: 65, cultural: 453, mixed: 11 },
    { name: 'N. America', natural: 26, cultural: 25, mixed: 1 },
    { name: 'S. America', natural: 38, cultural: 96, mixed: 8 },
  ];

  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>Trend Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="natural" fill="#8884d8" />
            <Bar dataKey="cultural" fill="#82ca9d" />
            <Bar dataKey="mixed" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TrendAnalysis;