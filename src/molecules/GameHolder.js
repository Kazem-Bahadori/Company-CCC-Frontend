import React from 'react';
import '../css/PopularGame.css';
import steamlogo from '../images/steamlogo.png';
import deadbydaylightpromo from '../images/deadbydaylight.png';
import dota2promo from '../images/dota2promo.png';


class GameHolder extends React.Component {
  render() {
    let gameName = this.props.gameName;
    let gameId = this.props.gameId;
    let steamBool = this.props.steamBool;
    let onClick = this.props.onClick;

     //Checks if the game is Dota 2 or Dead by Daylight (highlighted)
     if (this.props.steamBool && (this.props.gameId === '29595'|| this.props.gameId === '491487')) {
      return (
        <div onClick={onClick.bind(this, gameId, gameName, steamBool)}className='highlighted-game'>
          <div className='highlighted-game-img'>
          {this.props.gameId === '491487' &&
          <img className="popular-game-image" src={deadbydaylightpromo} alt={this.props.gameName} />
          }

           {this.props.gameId === '29595' &&
          <img className="popular-game-image" src={dota2promo} alt={this.props.gameName} />
          }
         
          
        </div>
        <div className="game-name-holder">
          <p className="game-name"> {this.props.gameName}</p>
          
        </div>
      </div>
       
      );
    }

    return(
      <div onClick={onClick.bind(this, gameId, gameName, steamBool)} className="popular-game-holder">
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