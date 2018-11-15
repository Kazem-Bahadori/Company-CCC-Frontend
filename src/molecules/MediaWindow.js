
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/MediaWindow.css';

class MediaWindow extends Component {

  render() {

    console.log(ReactPlayer.canPlay('https://www.twitch.tv/' + this.props.streamName));
    console.log("Render Media Window")

    if (this.props.streamName.length === 0) {
      console.log("IF SATS")
      return null;

    }

    return (
      <div className="media-window-holder">
        <div className="media-window-media">
            <ReactPlayer
                url={ 'https://www.twitch.tv/' + this.props.streamName}
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
