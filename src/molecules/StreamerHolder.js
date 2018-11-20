import React from 'react';
import '../css/StreamerHolder.css'

class StreamerHolder extends React.Component {

    render() {
        let gameName = this.props.gameName;
        let gameId = this.props.gameId;
        let steamBool = this.props.steamBool;
        return(
            <div onClick={() => this.props.onClick(gameId, gameName, steamBool)} className="streamer-holder">
                <div className="streamer-image-container">
                    <img className="streamer-image" src={this.props.image} alt={this.props.gameName} />
                </div>
                <div className="streamer-name-holder">
                    <p className="streamer-name"> {this.props.streamName}</p>
                </div>
            </div>
        );
    }
}

export default StreamerHolder;