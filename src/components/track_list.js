import React from "react";
import TrackListItem from "./track_list_item";

const TrackList = props => {
  const trackItems = props.tracks.map(track => {
    return (
      <TrackListItem
        onTrackSelect={props.onTrackSelect}
        key={track.id}
        track={track}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {trackItems}
    </ul>
  );
};

export default TrackList;
