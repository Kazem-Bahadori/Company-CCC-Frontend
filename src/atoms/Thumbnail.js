import React, { Component } from 'react';
import '../css/Thumbnail.css';

class Thumbnail extends Component {
  render() {
    return (
      
      <div className="thumbnail-holder" onClick={this.props.onClick}>


        
        <div className="thumbnail-popular-game-image-container">
            <img className="thumbnaik-popular-game-image" src={this.props.image} alt={this.props.gameName} />
            
        </div>
        <div className="thumbnail-stream-name-holder">
            <p> {this.props.views} viewers </p>
            <h1 className="thumbnail-game-name"> {this.props.streamName} </h1>
            <p> {this.props.streamerName} </p>
        </div>
      
      </div>
      
    );
  }
}

export default Thumbnail;