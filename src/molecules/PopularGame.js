import React, { Component } from 'react';
import '../css/PopularGame.css';
import steamlogo from '../images/steamlogo.png';

//Component is not being used. GameHolder is used instead.
class PopularGame extends Component {

  render() {
    //Checks if the game is Dota 2 or Dead by Daylight (highlighted)
    if (this.props.steamBool && (this.props.gameId === '29595'|| this.props.gameId === '491487')) {
    return (
      <div onClick={this.props.onClick} className='highlighted-game'>
        <div className='highlighted-game-img'>
        <img className="popular-game-image" src={this.props.image} alt={this.props.gameName} />
        <img className="popular-game-image" src={this.props.image} alt={this.props.gameName} />
        
      </div>
      <div className="game-name-holder">
        <p className="game-name"> {this.props.gameName}</p>
        <img className="popular-game-image-logo-highlight" src={steamlogo} />
      </div>
    </div>
     
    );
    //Checks if the game is a steam game
  } else if (this.props.steamBool) {
    return(
      <div onClick={this.props.onClick} className='popular-game-holder'>
      <div className="popular-game-image-container">
      <img className="popular-game-image" src={this.props.image} alt={this.props.gameName} />
      
    </div>
    <div className="game-name-holder">
      <p className="game-name"> {this.props.gameName}</p>
      <img className="popular-game-image-logo" src={steamlogo} />
    </div>
  </div>
      

    );
  } else {
    return(
      <div onClick={this.props.onClick} className='popular-game-holder'>
      <div className="popular-game-image-container">
        <img className="popular-game-image" src={this.props.image} alt={this.props.gameName} />
      </div>
      <div className="game-name-holder">
        <p className="game-name"> {this.props.gameName}</p>
      </div>
    </div>
   
    )
  }

  }
}

export default PopularGame;