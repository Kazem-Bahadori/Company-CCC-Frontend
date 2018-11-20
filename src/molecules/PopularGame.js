import React, { Component } from 'react';
import '../css/PopularGame.css';
import steamlogo from '../images/steamlogo.png';


class PopularGame extends Component {
  render() {

    if (!this.props.steamBool) {
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
  } else {
    return(
      <div onClick={this.props.onClick} className="popular-game-holder">
        <div className="popular-game-image-container">
        <img className="popular-game-image" src={this.props.image} alt={this.props.gameName} />

      </div>
      <div className="game-name-holder">
        <p className="game-name"> {this.props.gameName}</p>
        <img className="popular-game-image-logo" src={steamlogo} />
      </div>
    </div>

    );
  }

  }
}

export default PopularGame;
