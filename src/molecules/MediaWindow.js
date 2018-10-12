
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
        <div className="media-window-chat">
          <iframe
            title="twitch-chat"
            frameBorder="0"
            scrolling="no"
            id="chat_embed"
            src={"https://www.twitch.tv/embed/" + this.props.streaName + "/chat"}
            height="100%"
            //???width="100%">
            />
          </div>
          </div>
  
    );
  }
}

export default MediaWindow;