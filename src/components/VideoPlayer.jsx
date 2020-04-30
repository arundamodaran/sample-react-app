import React from 'react';

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div></div>;
  }
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className='card'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe
          className='embed-responsive-item'
          src={url}
          title={video.snippet.title}
        ></iframe>
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{video.snippet.title}</h5>
        <p>Published by: {video.snippet.channelTitle}</p>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
