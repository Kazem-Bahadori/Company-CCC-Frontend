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
    let fetchSystemReq = "http://localhost:8080/api/steam/filters?assetType=system_requirements&filterType=app_id&filterValue=" + this.props.steamId
    fetch(fetchSystemReq)
    .then(response => response.json())
    .then(response => {
      console.log("system req response: " + response.pc_requirements.minimum)
      var temp = JSON.stringify(response.pc_requirements.minimum)
      temp = temp.replace(/"([^"]+(?="))"/g, '$1')
      console.log(temp)
      this.setState({ miniReq: temp })
      
    })
  } else {
    this.setState({ miniReq: "Sorry we can't show you the requirements for this game!" })
  }

  
  }
  render() {
    return (
      
      <div className="Info-window-holder">
        <div className="Name-holder">
          
           <div className="Reqs" dangerouslySetInnerHTML={{ __html: this.state.miniReq }}/>

        </div>
      </div>


    );
  }
}

export default SystemRequirements;