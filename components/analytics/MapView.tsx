"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MapView = () => {
  return (
    <Card className="h-[500px]">
      <CardHeader>
        <CardTitle>World Heritage Sites Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[400px] bg-accent flex items-center justify-center text-accent-foreground">
          Interactive World Map with color-coded markers (Integration required)
        </div>
      </CardContent>
    </Card>
  );
};

export default MapView;