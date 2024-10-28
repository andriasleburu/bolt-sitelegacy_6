"use client"

import React, { useState } from 'react';
import SpacesList from './SpacesList';
import SpaceTabs from './SpaceTabs';
import CreatePost from './CreatePost';
import Post from './Post'; // Import the Post component

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

  // Sample posts data
  const posts = [
    { content: "This is the first post", initialVotes: 5 },
    { content: "Here's another interesting post", initialVotes: 3 },
  ];

  return (
    <div className="flex p-6 space-x-6">
      <div className="w-1/3">
        <SpacesList onSpaceClick={handleSpaceClick} />
      </div>
      <div className="w-2/3">
        {selectedSpace ? (
          <>
            <SpaceTabs />
            <CreatePost />
            <div className="posts-list">
              {posts.map((post, index) => (
                <Post key={index} content={post.content} initialVotes={post.initialVotes} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500">Select a space to view its contents</div>
        )}
      </div>
    </div>
  );
};

export default Spaces;
