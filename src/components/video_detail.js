import React from 'react'

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading ...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail">
      <div className="videoFrame">
        <iframe className="mainVideo embed-responsive-item" src={url} width="100%" height="500"></iframe>
      </div>

      <div className="details">
        <div className="title">{video.snippet.title}</div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
