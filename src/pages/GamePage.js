import React, { Component } from 'react';
import '../css/GamePage.css';
import MediaWindow from '../molecules/MediaWindow.js';

class GamePage extends Component {
    
    render() {
        return(
            <div className="game-page-container">
            <MediaWindow />
            </div>

        )
    }
}

export default GamePage;