import React, { Component } from 'react';
import TwitchChat from '../molecules/TwitchChat.js';
import GameInfo from '../molecules/GameInfo.js';
import '../css/ChatAndInfoWindow.css'
import steamlogo from '../images/steamlogo.png';
import steamBuyLogo from '../images/steam-logo-buy-button.png'

let tabSubs = [];
let steamId;
let steamUrl

class ChatAndInfoWindow extends Component {
    state = {
        contentWindow: "Chat",
        price: '',
        currency: '',
    }

    componentDidMount() {
        // When the component mounts we check if it's a steam game and then fetch the steam id and assigns it to a variable ->
        // to later be used. /Johan dG
        if (this.props.steamBool) {
        let getSteamId = 'http://localhost:8080/api/steam/filters?filterType=on_twitch&assetType=games&filterValue=' + this.props.gameName
        fetch(getSteamId)
        .then(response => response.json())
        .then(response => {
            steamId = response.appId
            //Sets the URL to correct Steam page, used when clicking on "Buy now" /Johan dG
            steamUrl = "https://store.steampowered.com/app/" + steamId + this.props.gameName
            this.accessGamePrice(steamId)
        })
            tabSubs = ["Chat", "Game Info"];
        
    } else {
        tabSubs = ["Chat"]
        this.setState({contentWindow: "Chat"})
        steamId = undefined
     }

    }

    accessGamePrice = (steamId) => {

        // Function to access the price of a steam game. If the price of the game is 0 we instead display "FREE TO PLAY". /Johan dG
        let getPrice = 'http://localhost:8080/api/steam/filters?filterType=app_id&assetType=price&filterValue=' + steamId
        fetch(getPrice)
        .then(response => response.json())
        .then(response => {
            if (response.final !== 0) {
                this.setState({price: response.final/100 })
            } else {
                this.setState({price: "FREE TO PLAY"})
            }
            this.setState({currency: response.currency})
        })

    }

    renderContent = (state) => {
    // Function to decide what to render inside this component. Depending on what the state is equal to. /Johan dG
        switch(state){
            case "Chat":
            return <TwitchChat streamName={this.props.streamName} />;

            case "Game Info":
            return <GameInfo steamUrl={steamUrl} gameName={this.props.gameName} steamId={steamId} streamName={this.props.streamName} viewers={this.props.viewers} price={this.state.price} currency={this.state.currency}/>;
        
        }
    }

    handleContentWindow = (newSubject) => {
        //onClick function that sets the State to which tab you clicked.
        // Kind of a helper function to "renderContent()" /Johan dG
        this.setState({contentWindow: newSubject});
    }

    render() {

        if (this.props.streamName.length === 0) {
            return (
                null
            )
          }
      
          return (
            <div className="container-window">
                <div className="header">
                {tabSubs.map((subject) =>
                <button className={subject===this.state.contentWindow ? "button-highlight": "button-style"} key={subject} onClick={() => this.handleContentWindow(subject)}>  {subject} </button>
                    )}
                </div>
                    <div className="content-window">
                        {this.renderContent(this.state.contentWindow)}
                    </div>

            </div>
        );
    }
}

export default ChatAndInfoWindow;
