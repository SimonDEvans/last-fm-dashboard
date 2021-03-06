import React, { Component } from 'react'
import './RecentTracks.css'

class RecentTracks extends Component {

  getRecentTracks() {

    let key      = '168bcdd68b93bc37ed26d3670c203322',
        userName = 'LAST.HQ',
        apiLink  = 'http://ws.audioscrobbler.com/2.0/';

    fetch(apiLink +'?method=user.getRecentTracks&user='+ userName +'&api_key='+ key +'&format=json&limit=12')
        .then( response => response.json() )
        .then(function(data) {

          let RecentTracks = data.recenttracks.track

          return RecentTracks.map(function(track) {
            let name   = track.name;
            let trackUrl = track.url;

            const trackHTML = document.querySelector('.recent-tracks__inner')
            trackHTML.innerHTML += '<a href="' + trackUrl +'" class="recent-tracks__track"><div>' + name + '</div></a>'

          })
      })
  }

  componentDidMount() {
    this.getRecentTracks()
  }

  render() {
    return (
      <div className="recent-tracks">
        <div className="grid__heading recent-tracks__heading">Recent Tracks</div>
        <div className="grid__inner recent-tracks__inner"></div>
      </div>
    )
  }
}

export default RecentTracks