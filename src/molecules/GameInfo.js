import React, { Component } from 'react';
import '../css/InfoWindow.css';
import ReviewWindow from '../molecules/ReviewWindow';
import SystemRequirements from '../molecules/SystemRequirements.js';


class GameInfo extends Component {

    render () {
        return(

            <div className="Info-window-holder">
                <div className="Game-name">
                    {this.props.gameName}
                </div>
                <ReviewWindow steamId={this.props.steamId} streamName={this.props.streamName} viewers={this.props.viewers} price={this.props.price} currency={this.props.currency}/>
                <SystemRequirements steamId={this.props.steamId} />
            </div>
    
        )
    }
}

export default GameInfo;


