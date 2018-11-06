import React, { Component } from 'react';
import '../css/PopularGame.css';

class PopularGame extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="popular-game-holder">
        <div className="popular-game-image-container">
          <img className="popular-game-image" src={this.props.image} alt={this.props.gameName} />
        </div>
        <div className="game-name-holder">
          <p className="game-name"> {this.props.gameName}</p>
        </div>
      </div>
    );
  }
}

export default PopularGame;