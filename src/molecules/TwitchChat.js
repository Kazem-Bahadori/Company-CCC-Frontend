import React, { Component } from 'react';
import '../css/MediaWindow.css';

class TwitchChat extends Component {
    //Renders an embedded Twitch Chat using a streamName to show the correct chat.
    render() {
        return(
            <div className="media-window-chat">
            <iframe
              title="twitch-chat"
              frameBorder="0"
              scrolling="no"
              id="chat_embed"
              src={"https://www.twitch.tv/embed/" + this.props.streamName + "/chat?darkpopout"}
              height="100%"
              width="100%"
              //???width="100%">
              />
            </div>
        )
    }

}

export default TwitchChat;