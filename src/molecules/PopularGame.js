import React, { Component } from 'react';
import '../css/PopularGame.css';



class PopularGame extends Component {
  render() {
    return (
    
      <div className="popular-game-holder">
        <div className="game-name-holder">
            <h1 className="game-name"> {this.props.gameName}</h1>
        </div>
            <div className="popular-game-image-container">
            <img className="popular-game-image" src={this.props.image} alt={this.props.gameName} />
            </div>
      
      </div>
    );
  }
}

export default PopularGame;