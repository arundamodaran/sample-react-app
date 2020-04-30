import React from 'react';
import './VideoItem.css';

// function component
const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <div
      className='m-2 video-item list-group-item'
      onClick={() => onSelectVideo(video)}
    >
      <img className="float-left mr-2"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <h6 className="card-title">{video.snippet.title}</h6>
    </div>
  );
};

export default VideoItem;
