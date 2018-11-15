import React, { Component } from 'react';
import '../css/Thumbnail.css';

class Thumbnail extends Component {
  render() {
    console.log(this.props.streamerName);
    return (
      
      <div className="thumbnail-holder" onClick={this.props.onClick}>


        
        <div className="thumbnail-popular-game-image-container">
            <img className="thumbnaik-popular-game-image" src={this.props.image} alt={this.props.gameName} />
            <div className="overlay_img"> </div>    
        </div>
        <div className="thumbnail-stream-name-holder">
            <p className="thumbnail-viewers"> {this.props.views} viewers </p>
            <div className="thumbnail-game-name-holder">
            <h1 className="thumbnail-game-name"> {this.props.streamName} </h1>
            </div>
            <p className="thumbnail-streamer"> {this.props.streamerName} </p>

        </div>
      
      </div>
      
    );
  }
}

export default Thumbnail;