import React from "react";

const TrackListItem = ({ track, onTrackSelect }) => {
  const imageUrl = track.album.images[2].url;

  return (
    <li onClick={() => onTrackSelect(track)} className="list-group-item">
      <div className="track-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{track.name}</div>
        </div>
      </div>
    </li>
  );
};

export default TrackListItem;
