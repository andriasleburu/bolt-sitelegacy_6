"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WorldHeritageSitesMap = () => {
  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>World Heritage Sites</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Placeholder for the map */}
        <div className="w-full h-[300px] bg-accent flex items-center justify-center text-accent-foreground">
          Interactive World Map (Integration required)
        </div>
      </CardContent>
    </Card>
  );
};

export default WorldHeritageSitesMap;