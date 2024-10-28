import React, { useState } from 'react';

const CreatePost = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle post submission logic here
    console.log('Post submitted:', { text, file });
  };

  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="What's on your mind?"
        className="post-textarea"
      />
      <input type="file" onChange={handleFileChange} accept="image/*,video/*" />
      <button type="submit" className="submit-button">Post</button>
    </form>
  );
};

export default CreatePost;
