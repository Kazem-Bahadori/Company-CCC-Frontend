import React, { Component } from 'react';
import '../css/GamePage.css';
import MediaWindow from '../molecules/MediaWindow.js';
import InfoWindow from '../molecules/InfoWindow.js';
import ThumbnailWindow from '../molecules/ThumbnailWindow.js';


let streamerId = '';
class GamePage extends Component {
    
      state = {
        streamName: '',
      }

      componentDidMount() {

        const currentStream = "http://localhost:8080/api/twitch/filters?filterType=streams&additionalFilter=game_id&amount=" + this.props.gameId
        fetch(currentStream, {headers: {"Client-ID": '3jxj3x3uo4h6xcxh2o120cu5wehsab'}}) 
              //Convert response into json. /Johandg
              .then(response => response.json())
              //Loop through the JSON-array to grab each individual element and place inside the popularGameArray state. /Johandg
              .then(response => {
                
                streamerId = response.data[0].user_id;
                
                const streamerName = "http://localhost:8080/api/twitch/filters?filterType=users&additionalFilter=id&amount=" + streamerId
                  fetch(streamerName, {headers: {"Client-ID": '3jxj3x3uo4h6xcxh2o120cu5wehsab' }})
                      .then(response => response.json())
                      .then(response => {
              
                      this.setState({streamName: response.data[0].login})
                  })
              })
      }
    
    render() {
        return(
            <div className="game-page-container">
                <MediaWindow streamName={this.state.streamName} />
                <InfoWindow />
                <ThumbnailWindow />
            </div>

        )
    }
}

export default GamePage;