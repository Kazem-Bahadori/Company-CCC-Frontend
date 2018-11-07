import React, { Component } from 'react';
import TwitchChat from '../molecules/TwitchChat.js';
import InfoWindow from '../molecules/InfoWindow.js';
import SystemRequirements from '../molecules/SystemRequirements.js';
import '../css/ChatAndInfoWindow.css'
import steamlogo from '../images/steamlogo.png';
import steamBuyLogo from '../images/steam-logo-buy-button.png'

var tabSubs = ["Chat", "Reviews", "System Requirements" , "Trailer"];
let price;
let currency;
let steamId;

class ChatAndInfoWindow extends Component {
    state = {
        contentWindow: "Chat"
    }

    componentDidMount() {
        console.log("CHAT AND INFO WINDOW DID MOUNT")
        console.log("steamBool: " + this.props.steamBool)
        if (this.props.steamBool) {
        let getSteamId = 'http://localhost:8080/api/steam/filters?filterType=on_twitch&assetType=games&filterValue=' + this.props.gameName
        fetch(getSteamId)
        .then(response => response.json())
        .then(response => {
            steamId = response.appId
            console.log(steamId)
            this.accessGamePrice(steamId)   
        })
    } else {
        price = 'Not available on Steam';
        currency = ''
        steamId = undefined
     }
    }
    
    accessGamePrice = (steamId) => {

        let getPrice = 'http://localhost:8080/api/steam/filters?filterType=app_id&assetType=price&filterValue=' + steamId
        fetch(getPrice) 
        .then(response => response.json())
        .then(response => {
            price = response.final/100
            currency = response.currency
            console.log(price)
        })
    
    }

    renderContent = (state) => {

        switch(state){
            case "Chat":
            return <TwitchChat streamName={this.props.streamName} />;

            case "Reviews":
            return <InfoWindow streamName={this.props.streamName} viewers={this.props.viewers}/>;

            case "System Requirements":
            return <SystemRequirements steamId={steamId} />

            case "Trailer":
            alert("Not implemented");
            break;
        }
    }

    handleContentWindow = (newSubject) => {
        this.setState({contentWindow: newSubject});
    }

    renderBuySteam = () => {

        if (steamId) {
        return(
            <div className="buy-on-steam-holder">
                <button className="buy-on-steam-btn"> 
                    <img className="steam-buy-logo" src={steamBuyLogo} /> 
                </button>
                <p className="price-currency">{price} {currency}</p>
            </div>
        );
     }
    }

    render() {
        return(
            <div className="container-window">
                <div className="header">
                {tabSubs.map((subject) =>
                <button className="button-style" key={subject} onClick={() => this.handleContentWindow(subject)}>  {subject} </button>
                    )}
                </div>
                    <div className="content-window">
                        {this.renderContent(this.state.contentWindow)}
                    </div>
                    {this.renderBuySteam()}
                
            </div>
        );
    }
}

export default ChatAndInfoWindow;