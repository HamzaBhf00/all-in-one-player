import React, { useState } from 'react';

const VideoForm = ({ onFormSubmit }) => {
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(videoUrl);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h4>URL Video:</h4>
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </label>
      <button type="submit">Play Video</button>
    </form>
  );
};

export default VideoForm;
