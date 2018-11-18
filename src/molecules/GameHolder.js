import React from 'react';
import '../css/PopularGame.css';
import steamlogo from '../images/steamlogo.png';


class GameHolder extends React.Component {
  render() {
    let gameName = this.props.gameName;
    let gameId = this.props.gameId;
    let steamBool = this.props.steamBool;

    return(
      <div onClick={() => this.props.onClick(gameId, gameName, steamBool)} className="popular-game-holder">
        <div className="popular-game-image-container">
          <img className="popular-game-image" src={this.props.image} alt={this.props.gameName} />
        </div>
        <div className="game-name-holder">
          <p className="game-name"> {this.props.gameName}</p>
          {this.props.steamBool && 
            <img className="popular-game-image-logo" src={steamlogo} />
          }
        </div>
      </div>
    );
  }
}

export default GameHolder;