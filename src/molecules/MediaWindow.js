
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/MediaWindow.css';


class MediaWindow extends Component {

  render() {
    return (
      <div className="media-window-holder">
        <div className="media-window-media">
            <ReactPlayer
                url={'https://www.twitch.tv/' + this.props.streamName} 
                playing
                width="100%"
                height="100%"
              />
        </div>
      
          </div>
  
    );
  }
}

export default MediaWindow;