import React, { Component } from 'react'
import './Grid.css'
import UserInfo from '../../components/UserInfo/UserInfo'
import Scrobbles from '../../components/Scrobbles/Scrobbles'
import TopTracks from '../../components/TopTracks/TopTracks'
import TopArtists from '../../components/TopArtists/TopArtists'
import TopAlbums from '../../components/TopAlbums/TopAlbums'
import RecentTracks from '../../components/RecentTracks/RecentTracks'

class Grid extends Component {
  render() {
    return (
      <div className="wrapper">
        <ul className="grid">
          <li><UserInfo /></li>
          <li><TopTracks /></li>
          <li><TopArtists /></li>
          <li><Scrobbles /></li>
          <li><TopAlbums /></li>
          <li></li>
          <li><RecentTracks /></li>
        </ul>
      </div>
    )
  }
}

export default Grid