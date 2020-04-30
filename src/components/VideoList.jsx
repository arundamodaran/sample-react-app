import React from 'react';
import VideoItem from './VideoItem';

// function component
const VideoList = (props) => {
  const renderedList = props.videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video}/>
  })
  
  return (
    <div className="list-group list-group-flush">
      {renderedList}
    </div>
  )
};

export default VideoList;