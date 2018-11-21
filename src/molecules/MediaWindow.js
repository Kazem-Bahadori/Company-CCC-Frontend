
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/MediaWindow.css';



class MediaWindow extends Component {

  renderMediaWindow = () => {
    if (this.props.streamName !== null) {
      return(
        <div className="media-window-media">
        <ReactPlayer
            url={ 'https://www.twitch.tv/' + this.props.streamName} 
            playing
            width="100%"
            height="100%"
            
          />
    </div>

      );
    } 
  }

  render() {
    
    console.log(ReactPlayer.canPlay('https://www.twitch.tv/' + this.props.streamName));
    console.log("Render Media Window")
  
    if (this.props.streamName.length === 0) {
      return(
      <div className="error-message">
      <h1> Sorry there are no active streams for this game </h1>
      </div>
      );
     
    }
   
    return (
      <div className="media-window-holder">
       {this.renderMediaWindow()}
      
          </div>
    
    );
  
  }
}

export default MediaWindow;