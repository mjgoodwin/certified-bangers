import React, { Component } from 'react';
import TrackList from './track_list.js';
const XYZ_CODE = "BQAOJOQs59z43o_A_a3cPDftk0ynZEctjh_ifVNpisX8XF9625G-Ju4MqmlGbcd1bqiCvJ-VIox5EP-9Pq6W34ExgAYxX3ZNI74hWD5HozTH3uh2TmOsXSzSwweZa4UhoWxZlN2TQNhFpfslUEeO";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: []
    };

    this.trackSearch();
  }

  trackSearch(term) {
    fetch(
      'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20&offset=0',
      { method: 'get', headers: { 'Authorization': `Bearer ${XYZ_CODE}`} }
    ).then(response => response.json())
     .then(data => {
        console.log(data.items)
        this.setState({ tracks: data.items});
    });
  }

  render() {
    return (
      <div>
        <TrackList
          onTrackSelect={selectedTrack => console.log(selectedTrack)}
          tracks={this.state.tracks}
        />
      </div>
    );
  }
}
