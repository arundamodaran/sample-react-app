import React from 'react';
import './VideoItem.css';

// function component
const VideoItem = ({video}) => {
  return (
    <div className="m-2 video-item list-group-item">
      <div className="row">
        <div>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
        </div>
        <div className="ml-2">
          <h6 className="card-title">
            {video.snippet.title}
          </h6>
          <p>Published by: {video.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  )
};

export default VideoItem;