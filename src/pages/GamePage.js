import React, { Component } from 'react';
import '../css/GamePage.css';
import MediaWindow from '../molecules/MediaWindow.js';
import InfoWindow from '../molecules/InfoWindow.js';
import ThumbnailWindow from '../molecules/ThumbnailWindow.js';
class GamePage extends Component {
    
    render() {
        return(
            <div className="game-page-container">
                <MediaWindow />
                <InfoWindow />
                {/*
                <ThumbnailWindow />*/}
            </div>

        )
    }
}

export default GamePage;