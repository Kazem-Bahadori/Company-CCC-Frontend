
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/MediaWindow.css';
import deadFish from '../images/fish-dead.png'

class MediaWindow extends Component {

  //Renders the actual stream embedding the Twitch player. With a streamName we can access a specific stream.
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
 
    if (this.props.streamName.length === 0) {
      
      // If we have no active stream a message will be displayed.
      return (
      <div className="error-message">
      <img className="dead-fish" src={deadFish} alt="Dead flatfish"/>
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
