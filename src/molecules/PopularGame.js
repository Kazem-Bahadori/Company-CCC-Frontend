import React, { Component } from 'react';
import '../css/PopularGame.css';
import steamlogo from '../images/steamlogo.png';

let holderStyle;
class PopularGame extends Component {

  componentDidMount() {
    console.log("PG DID MOUNT " + this.props.gameId)
   
    if (this.props.gameId === '21779') {
      holderStyle = 'highlighted-game'
      console.log("LEAGUE OF LEGENDS")
    } else {
       holderStyle = 'popular-game-holder';
    }
  }

  render() {

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
    //Checks if the game is Fortnite (highlighted)
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
      <div onClick={this.props.onClick} className={holderStyle}>
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