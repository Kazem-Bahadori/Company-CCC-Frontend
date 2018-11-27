import React, { Component } from 'react';
import '../css/Thumbnail.css';

class Thumbnail extends Component {
  render() {
   
    return (
      <div className="thumbnail-holder" onClick={this.props.onClick}>  
        <div className={this.props.currentStream ? "thumbnail-popular-game-image-container-current-stream" : "thumbnail-popular-game-image-container"}>
            <img className={this.props.currentStream ? "thumbnail-popular-game-image-current-stream" :"thumbnail-popular-game-image"} src={this.props.image} alt={this.props.gameName} />
            {this.props.currentStream ?  "" : <div className="overlay_img"> </div> }
        </div>
        <div className={this.props.currentStream ? "thumbnail-stream-name-holder-current-stream":"thumbnail-stream-name-holder"}>
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