import React, { Component } from 'react';
import TwitchChat from '../molecules/TwitchChat.js';
import InfoWindow from '../molecules/InfoWindow.js';
import SystemRequirements from '../molecules/SystemRequirements.js';
import '../css/ChatAndInfoWindow.css'
import steamlogo from '../images/steamlogo.png';

var tabSubs = ["Chat", "Reviews", "System Requirements" , "Trailer"];
class ChatAndInfoWindow extends Component {
    state = {
        contentWindow: "Chat"
    }

    componentDidMount() {
        
    }
    
    renderContent = (state) => {

        switch(state){
            case "Chat":
            return <TwitchChat streamName={this.props.streamName} />;

            case "Reviews":
            return <InfoWindow streamName={this.props.streamName} viewers={this.props.viewers}/>;

            case "System Requirements":
            return <SystemRequirements />

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
                            <button className="buy-on-steam-btn" > 
                                
                                
                                <span>Buy on Steam </span>
                            </button>
                            

                           
                        </div>
                
            </div>
        );
    }
}

export default ChatAndInfoWindow;