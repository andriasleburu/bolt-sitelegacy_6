import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

const SpaceTabs = () => {
  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="feed">Feed</TabsTrigger>
        <TabsTrigger value="chats">Chats</TabsTrigger>
        <TabsTrigger value="files">Files</TabsTrigger>
      </TabsList>

      <TabsContent value="feed">
        <div>Feed content goes here.</div>
      </TabsContent>
      <TabsContent value="chats">
        <div>Chats content goes here.</div>
      </TabsContent>
      <TabsContent value="files">
        <div>Files content goes here.</div>
      </TabsContent>
    </Tabs>
  );
};

export default SpaceTabs;
