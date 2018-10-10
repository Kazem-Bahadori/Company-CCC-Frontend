import React, { Component } from 'react';
import '../css/Thumbnail.css';

class Thumbnail extends Component {
  render() {
    return (
    
      <div className="thumbnail-holder">


        <div className="thumbnail-stream-name-holder">
            <h1 className="thumbnail-game-name"> {this.props.gameName}</h1>
        </div>
            <div className="thumbnail-popular-game-image-container">
            <img className="thumbnaik-popular-game-image" src={this.props.image} alt={this.props.gameName} />
            </div>
      
      </div>
    );
  }
}

export default Thumbnail;