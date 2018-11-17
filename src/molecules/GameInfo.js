import React, { Component } from 'react';
import '../css/InfoWindow.css';
import ReviewWindow from '../molecules/ReviewWindow';
import SystemRequirements from '../molecules/SystemRequirements.js';


class GameInfo extends Component {

    render () {
        return(

            <div className="Info-window-holder">
                <SystemRequirements steamId={this.props.steamId} />
                <ReviewWindow steamId={this.props.steamId} streamName={this.props.streamName} viewers={this.props.viewers}/>
            </div>
    
        )
    }
}

export default GameInfo;


