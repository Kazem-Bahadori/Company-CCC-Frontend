import React, { Component } from 'react';

class SystemRequirements extends Component {

  state = {
    miniReq: '',
    recommended: '',
  }

  componentDidMount() {
    
    //When the component mounts we fetch the system requirements from our API using a steamId.
    if (this.props.steamId !== undefined) {
    let fetchSystemReq = "http://backend.c3.netplus.se/api/steam/filters?assetType=system_requirements&filterType=app_id&filterValue=" + this.props.steamId
    fetch(fetchSystemReq)
    .then(response => response.json())
    .then(response => {
      
      //Convert the JSON to string and remove all special characters.
      var mini = JSON.stringify(response.pc_requirements.minimum)
      mini = mini.replace(/"([^"]+(?="))"/g, '$1')
      this.setState({ miniReq: mini })

      if (response.pc_requirements.recommended !== undefined) {
        //Convert the JSON to string and remove all special characters.
        var reco = JSON.stringify(response.pc_requirements.recommended)
        reco = reco.replace(/"([^"]+(?="))"/g, '$1')
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