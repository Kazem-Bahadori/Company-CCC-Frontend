import React, { Component } from 'react';
import '../css/InfoWindow.css';
import Button from '../atoms/Button.js';


class SystemRequirements extends Component {

  state = {
    miniReq: '',
  }

  componentDidMount() {
    
    console.log("system req steamId: " + this.props.steamId)
    if (this.props.steamId !== undefined) {
    let fetchSystemReq = "http://backend.c3.netplus.se/api/steam/filters?assetType=system_requirements&filterType=app_id&filterValue=" + this.props.steamId
    fetch(fetchSystemReq)
    .then(response => response.json())
    .then(response => {
      console.log("system req response: " + response.pc_requirements.minimum)
      this.setState({ miniReq: response.pc_requirements.minimum })
      
    })
  } else {
    this.setState({ miniReq: "Sorry we can't show you the requirements for this game!" })
  }

  
  }
  render() {
    return (
      
      <div className="Info-window-holder">
        <div className="Name-holder">
           Minimum Requirements
           <p> {this.state.miniReq} </p>

        </div>
      </div>


    );
  }
}

export default SystemRequirements;