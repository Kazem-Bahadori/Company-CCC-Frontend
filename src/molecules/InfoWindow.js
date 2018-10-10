
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/InfoWindow.css';

var StreamName = 'riotgames';
class InfoWindow extends Component {
  render() {
    
    return (
      
      <div className="Info-window-holder">
        <div className="Name-holder">
            <h1 className="Name-text-info"> {StreamName} </h1>
            <p>Info text</p> 
        </div>
      </div>


    );
  }
}

export default InfoWindow;