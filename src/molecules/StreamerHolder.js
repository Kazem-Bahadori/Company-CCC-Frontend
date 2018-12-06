import React from 'react';
import '../css/StreamerHolder.css'

class StreamerHolder extends React.Component {

    //Renders a streamer "poster" that can be visible on the SearchResult page.
    render() {
        return(
            <div className="streamer-holder">
                <div className="streamer-image-container">
                    <img className="streamer-image" src={this.props.image} alt={this.props.gameName} />
                </div>
                <div className="streamer-name-holder">
                    <p className="streamer-name"> {this.props.streamName}</p>
                    <p className="streamer-game">Playing:</p>
                    <p className="streamer-game-title"> {this.props.streamGame}</p>
                </div>
            </div>
        );
    }
}

export default StreamerHolder;