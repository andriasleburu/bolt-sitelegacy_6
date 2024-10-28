import React, { useState } from 'react';
import CommentSection from './CommentSection';
import { FaArrowUp, FaComment, FaShare } from 'react-icons/fa';

interface PostProps {
  content: string;
  initialVotes: number;
}

const Post: React.FC<PostProps> = ({ content, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(content).then(() => {
      alert('Post content copied to clipboard!');
    });
  };

  const initialComments = [
    { id: 1, text: "Great post!" },
    { id: 2, text: "Thanks for sharing." },
  ];

  return (
    <div className="post bg-white shadow-md rounded-lg p-4 mb-4">
      <p className="text-gray-800">{content}</p>
      <div className="post-actions flex items-center justify-between mt-4">
        <button onClick={handleUpvote} className="upvote-button flex items-center text-blue-500">
          <FaArrowUp className="mr-1" /> Upvote
        </button>
        <span className="text-gray-600">{votes} votes</span>
        <button className="comment-button flex items-center text-green-500">
          <FaComment className="mr-1" /> Comment
        </button>
        <button onClick={handleShare} className="share-button flex items-center text-purple-500">
          <FaShare className="mr-1" /> Share
        </button>
      </div>
      <CommentSection initialComments={initialComments} />
    </div>
  );
};

export default Post;
