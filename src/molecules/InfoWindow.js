import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/InfoWindow.css';
import Button from '../atoms/Button.js';

var StreamName = 'riotgames';
class InfoWindow extends Component {
  render() {
    
    return (
      
      <div className="Info-window-holder">
        <div className="Name-holder">
            <h1 className="Name-text-info"> {this.props.streamName} </h1>
            <p>{this.props.viewers} viewers</p> 
            <p>Gamer</p> 
            <p>Rating</p> 
            <p>Available on steam</p> 
            <p>Requirements</p> 
            <p>Trailer</p> 
            <p>Read reviews</p> 
            {/* Placeholder */}
            <p>Price of the game</p> 
            {/* Old buy on steam button */}
            <Button onClick={this.props.onClick} name="Buy game"></Button>
            

        </div>
      </div>


    );
  }
}

export default InfoWindow;