"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';

const ComparativeAnalysis = () => {
  const data = [
    { subject: 'Conservation', A: 120, B: 110, fullMark: 150 },
    { subject: 'Visitor Management', A: 98, B: 130, fullMark: 150 },
    { subject: 'Local Community', A: 86, B: 130, fullMark: 150 },
    { subject: 'Research', A: 99, B: 100, fullMark: 150 },
    { subject: 'Funding', A: 85, B: 90, fullMark: 150 },
    { subject: 'Education', A: 65, B: 85, fullMark: 150 },
  ];

  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>Comparative Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Site A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Site B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ComparativeAnalysis;