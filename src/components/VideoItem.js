import React from 'react';

// function component
const VideoItem = (props) => {
  return (
    <div>
      {props.video.snippet.title}
    </div>
  )
};

export default VideoItem;