import React, { Component } from 'react';

class SystemRequirements extends Component {

  state = {
    miniReq: '',
    recommended: '',
  }

  componentDidMount() {
    
    console.log("system req steamId: " + this.props.steamId)
    if (this.props.steamId !== undefined) {
    let fetchSystemReq = "http://localhost:8080/api/steam/filters?assetType=system_requirements&filterType=app_id&filterValue=" + this.props.steamId
    fetch(fetchSystemReq)
    .then(response => response.json())
    .then(response => {
      console.log("system req response: " + response.pc_requirements.minimum + response.pc_requirements.recommended)

      var mini = JSON.stringify(response.pc_requirements.minimum)
      mini = mini.replace(/"([^"]+(?="))"/g, '$1')
      console.log(mini)
      this.setState({ miniReq: mini })

      if (response.pc_requirements.recommended !== undefined) {
        var reco = JSON.stringify(response.pc_requirements.recommended)
        reco = reco.replace(/"([^"]+(?="))"/g, '$1')
        console.log(reco)
        this.setState({ recommended: reco })
      }
      
      
    })
  } else {
    this.setState({ miniReq: "Sorry, game information is not available for this game!" })
  }

  
  }
  render() {
    return (
      
        <div>
          
           <div className="Reqs" dangerouslySetInnerHTML={{ __html: this.state.miniReq }}/>
           <div className="Reqs" dangerouslySetInnerHTML={{ __html: this.state.recommended }}/>

        </div>
    );
  }
}

export default SystemRequirements;