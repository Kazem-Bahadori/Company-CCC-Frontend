import React, { Component } from 'react';
import '../css/InfoWindow.css';
import ReviewWindow from '../molecules/ReviewWindow';
import SystemRequirements from '../molecules/SystemRequirements.js';
import steamBuyLogo from '../images/steam-logo-buy-button.png'


class GameInfo extends Component {

    renderButtonText = () => {
        let text = 'Buy Game on';
        if (this.props.price == "FREE TO PLAY"){
            text = 'Free Download on';
        }
        return text;
    }

    renderBuySteam = () => {
        // Function that renders the "Buy on Steam Button" depending on wether the game is steam game or not. /Johan dG
        if (this.props.steamId) {
            return (
                <div className="buy-on-steam-holder">
                    <a href={this.props.steamUrl} target="_blank" className="buy-on-steam-btn">
                        <div style={{ margin: '0.5rem' }}>
                            {this.renderButtonText()}
                        </div>
                        <img className="steam-buy-logo" src={steamBuyLogo} />
                    </a>
                </div>
            );
        }
    }

    render() {

        return (
            <div className="Info-window-holder">
                <div className="Game-name">
                    {this.props.gameName}
                </div>
                <ReviewWindow steamId={this.props.steamId} streamName={this.props.streamName} viewers={this.props.viewers} price={this.props.price} currency={this.props.currency} />
                <SystemRequirements steamId={this.props.steamId} />
                {this.renderBuySteam()}
            </div>
        )
    }
}

export default GameInfo;
