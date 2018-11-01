import React, { Component } from 'react';
import TwitchChat from '../molecules/TwitchChat.js';
import InfoWindow from '../molecules/InfoWindow.js';
import '../css/ChatAndInfoWindow.css'

var tabSubs = ["Chat", "Reviews", "System Requirements" , "Trailer"];
class ChatAndInfoWindow extends Component {
    state = {
        contentWindow: "Chat"
    }
    
    renderContent = (state) => {

        switch(state){
            case "Chat":
            return <TwitchChat streamName={this.props.streamName} />;

            case "Reviews":
            return <InfoWindow streamName={this.props.streamName} />;

            case "System Requirements":
            alert("Not implemented");
            break;

            case "Trailer":
            alert("Not implemented");
            break;
        }
    }

    handleContentWindow = (newSubject) => {
        this.setState({contentWindow: newSubject});
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
                        <div className="buy-on-steam-holder">
                            <button className="buy-on-steam-btn"> Buy on Steam </button>
                        </div>
                
            </div>
        );
    }
}

export default ChatAndInfoWindow;