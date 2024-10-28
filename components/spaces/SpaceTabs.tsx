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
        <div>
        </div>
      </TabsContent>
      <TabsContent value="chats">
        <div>
          <ul>
            <li>User1: Hi there!</li>
            <li>User2: Hello! How are you?</li>
            <li>User1: I'm good, thanks!</li>
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="files">
        <div>
          <ul>
            <li>Document1.pdf</li>
            <li>Image2.png</li>
            <li>Presentation3.pptx</li>
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default SpaceTabs;
