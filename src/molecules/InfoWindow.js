import React, { Component } from 'react';
import '../css/InfoWindow.css';
import Button from '../atoms/Button.js';

//This component is not being used.
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
        </div>
      </div>


    );
  }
}

export default InfoWindow;