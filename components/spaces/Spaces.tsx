"use client"

import React from 'react';
import CreateSpace from './CreateSpace';
import SpacesList from './SpacesList';
import InviteUsers from './InviteUsers';
import FileSharing from './FileSharing';
import ThreadedConversations from './ThreadedConversations';

const Spaces = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Spaces</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CreateSpace />
        <InviteUsers />
      </div>
      <SpacesList />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FileSharing />
        <ThreadedConversations />
      </div>
    </div>
  );
};

export default Spaces;