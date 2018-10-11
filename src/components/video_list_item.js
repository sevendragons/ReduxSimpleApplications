import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video  <!-- this shit and below is equal to cal argumaent in above (sth, sth)-->
  // const onVideoSelect = props.onVideoSelect

  const imageUrl = video.snippet.thumbnails.default.url;

  return (<li onClick={() => onVideoSelect(video)}
              className="list-group-item">
            <div className="  video_list_item">
              <div className="media-left">
                <img className="media-object" src={imageUrl}/>
              </div>

              <div className="media-body">
                <div className="media-heading">
                  {video.snippet.title}
                </div>
              </div>
            </div>
        </li>);
}
// video

export default VideoListItem;
