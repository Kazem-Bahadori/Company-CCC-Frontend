import React, { Component } from 'react';
import '../css/GamePage.css';
import MediaWindow from '../molecules/MediaWindow.js';
import InfoWindow from '../molecules/InfoWindow.js';
// import ThumbnailWindow from '../molecules/ThumbnailWindow.js';
import Thumbnail from '../atoms/Thumbnail.js';
import '../css/ThumbnailWindow.css';

let streamerId = '';
var streamDataArray = [];
let thumbnail1 = '';
let thumbnail2 = '';
let thumbnail3 = '';
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
                streamDataArray = response.data;
                // console.log(response.data[1].thumbnail_url);
                // console.log(streamDataArray[1].thumbnail_url); //Works if have var and [] at top without state
                
                // Need to trim the thumbnailurl to replace the {width}x{height}
                thumbnail1 = (streamDataArray[1].thumbnail_url).substring(0, (streamDataArray[1].thumbnail_url).length - 20);
                thumbnail2 = (streamDataArray[2].thumbnail_url).substring(0, (streamDataArray[2].thumbnail_url).length - 20);
                thumbnail3 = (streamDataArray[3].thumbnail_url).substring(0, (streamDataArray[3].thumbnail_url).length - 20);
            
                
                const streamerName = "http://localhost:8080/api/twitch/filters?filterType=users&additionalFilter=id&amount=" + streamerId
                  fetch(streamerName, {headers: {"Client-ID": '3jxj3x3uo4h6xcxh2o120cu5wehsab' }})
                      .then(response => response.json())
                      .then(response => {
              
                      this.setState({streamName: response.data[0].login  })
                 
                    })

              })
      }

    render() {
        // console.log(thumbnail1); 
        return(
            <div className="game-page-container">
                <MediaWindow streamName={this.state.streamName} />
                <InfoWindow streamName={this.state.streamName}/>
                {/* <ThumbnailWindow streamArray={streamDataArray}/> */}
                <div className="Thumbnail-window-holder">
                    <Thumbnail 
                    image={thumbnail1+'800x800.jpg'}/>
                    <Thumbnail 
                    image={thumbnail2+'800x800.jpg'}/>
                    <Thumbnail 
                    image={thumbnail3+'800x800.jpg'}/>
                 </div>
        

            </div>

        )
    }
}

export default GamePage;