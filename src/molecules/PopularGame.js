import React, { Component } from 'react';
import '../css/PopularGame.css';



class PopularGame extends Component {
  render() {
    return (
    
      <div className="popular-game-holder">
        <div className="game-name-holder">
            <h1 className="game-name"> GAME NAME </h1>
        </div>
            <div className="popular-game-image-container">
            </div>
      
      </div>
    );
  }
}

export default PopularGame;