"use client"

import React, { useState } from 'react';
import SpacesList from './SpacesList';
import SpaceTabs from './SpaceTabs';

interface Space {
  id: number;
  name: string;
  type: string;
  visibility: string;
}

const Spaces = () => {
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);

  const handleSpaceClick = (space: Space) => {
    setSelectedSpace(space);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Spaces</h1>
      {selectedSpace ? (
        <SpaceTabs />
      ) : (
        <SpacesList onSpaceClick={handleSpaceClick} />
      )}
    </div>
  );
};

export default Spaces;
