
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/MediaWindow.css';

var StreamName = 'riotgames';
class MediaWindow extends Component {
  render() {
    
    return (
      
      
      <div className="media-window-holder">

        <div className="media-window-media">
            <ReactPlayer
                url={'https://www.twitch.tv/' + StreamName} 
                playing
                width="100%"
                height="100%"
                />
        </div>
        
        <div className="media-window-chat">
          <iframe
            title="twitch-chat"
            frameborder="0"
            scrolling="no"
            id="chat_embed"
            src={"https://www.twitch.tv/embed/" + StreamName + "/chat"}
            height="100%"
            width="100%">
          </iframe>
        </div>
        
      </div>
    

     
      

    );
  }
}

export default MediaWindow;