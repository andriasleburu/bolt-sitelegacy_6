"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HistoricalData = () => {
  const data = [
    { year: 2018, visitors: 1000000, conservation: 85, environmental: 75 },
    { year: 2019, visitors: 1200000, conservation: 82, environmental: 73 },
    { year: 2020, visitors: 500000, conservation: 88, environmental: 80 },
    { year: 2021, visitors: 800000, conservation: 86, environmental: 78 },
    { year: 2022, visitors: 1100000, conservation: 84, environmental: 76 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historical Data</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a World Heritage Site" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="great-barrier-reef">Great Barrier Reef</SelectItem>
            <SelectItem value="machu-picchu">Machu Picchu</SelectItem>
            <SelectItem value="taj-mahal">Taj Mahal</SelectItem>
          </SelectContent>
        </Select>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="visitors" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="conservation" stroke="#82ca9d" />
            <Line yAxisId="right" type="monotone" dataKey="environmental" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default HistoricalData;