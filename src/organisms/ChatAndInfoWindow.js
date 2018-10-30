import React, { Component } from 'react';
import TwitchChat from '../molecules/TwitchChat.js';
import InfoWindow from '../molecules/InfoWindow.js';
import '../css/ChatAndInfoWindow.css'
class ChatAndInfoWindow extends Component {
    state = {
        showChat: true,
        showInfo: false
    }

    renderContent = () => {
        if (this.state.showChat) {
            return (<TwitchChat streamName={this.props.streamName} />);
        } else {
            return (<InfoWindow streamName={this.props.streamName} />)
        }
    }

    onClickChat = () => {
        this.setState({showChat: true});
        this.setState({showInfo: false});
    }

    onClickInfo = () => {
        this.setState({showInfo: true});
        this.setState({showChat: false});
    }

    render() {
        return(
            <div className="container-window">
                <div className="header">
                    <button className="button-style" onClick={this.onClickChat}>  Chat </button>
                    <button className="button-style" onClick={this.onClickInfo}> Game Info </button>
                </div>
                    <div className="content-window">
                        {this.renderContent()}
                    </div>
                        <div className="buy-on-steam-holder">
                            <button className="buy-on-steam-btn"> Buy on Steam </button>
                        </div>
                
            </div>
        );
    }
}

export default ChatAndInfoWindow;