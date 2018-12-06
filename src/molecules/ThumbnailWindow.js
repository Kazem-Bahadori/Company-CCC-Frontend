
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/ThumbnailWindow.css';
import Thumbnail from '../atoms/Thumbnail.js';

var StreamName = 'riotgames';
class InfoWindow extends Component {



  render() {

    return (
      <div className="Thumbnail-window-holder">


        <Thumbnail 
        image={'https://www-cdn.jtvnw.net/images/twitch_logo3.jpg'}/>
        <Thumbnail
        image={'https://www-cdn.jtvnw.net/images/twitch_logo3.jpg'}/>
        <Thumbnail
        image={'https://www-cdn.jtvnw.net/images/twitch_logo3.jpg'}/>


      </div>

    );
  }
}

export default InfoWindow;
