import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
}

interface CommentSectionProps {
  initialComments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ initialComments }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = { id: comments.length + 1, text: newComment };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <div className="comment-section">
      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            {comment.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newComment}
        onChange={handleCommentChange}
        placeholder="Add a comment"
        className="comment-input"
      />
      <button onClick={handleAddComment} className="add-comment-button">Add Comment</button>
    </div>
  );
};

export default CommentSection;
