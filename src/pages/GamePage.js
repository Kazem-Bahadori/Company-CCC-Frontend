import React, { Component } from 'react';
import '../css/GamePage.css';
import MediaWindow from '../molecules/MediaWindow.js';
import InfoWindow from '../molecules/InfoWindow.js';
// import ThumbnailWindow from '../molecules/ThumbnailWindow.js';
import Thumbnail from '../atoms/Thumbnail.js';
import '../css/ThumbnailWindow.css';

let streamerInfo = [];
let streamDataArray = [];
let thumbnail1 = '';
let thumbnail2 = '';
let thumbnail3 = '';
class GamePage extends Component {
    
      state = {
        streamName: [],
      }

      componentDidMount() {
        //Each time the GamePage component mounts the streamerInfo is emptied. /Johandg
        streamerInfo = []
        //The gameId is send as a prop from our homepage to access the most popular streams of that specific gameId. /Johandg
        let currentStream = "http://backend.c3.netplus.se:8080/api/twitch/filters?filterType=streams&additionalFilter=game_id&amount=" + this.props.gameId
        fetch(currentStream, {headers: {"Client-ID": '3jxj3x3uo4h6xcxh2o120cu5wehsab'}}) 
              //Convert response into json. /Johandg
              .then(response => response.json())
              //Loop through the JSON-array to grab each individual element and place inside the popularGameArray state. /Johandg
              .then(response => {
                response.data.map((index) =>
                streamerInfo.push(index)
              )  
              
                streamDataArray = response.data;
                
                // Need to trim the thumbnailurl to replace the {width}x{height} /JoakimS
                thumbnail1 = (streamDataArray[1].thumbnail_url).substring(0, (streamDataArray[1].thumbnail_url).length - 20);
                thumbnail2 = (streamDataArray[2].thumbnail_url).substring(0, (streamDataArray[2].thumbnail_url).length - 20);
                thumbnail3 = (streamDataArray[3].thumbnail_url).substring(0, (streamDataArray[3].thumbnail_url).length - 20);
              //Calling accessStreamerName function to start the initial stream. /Johandg
              this.accessStreamerName(streamerInfo, 0);
                
              })
      }

      //onClick function for thumbnail images below active stream /Johandg
      onClickThumbnail(activeStreamer, index) {
        this.accessStreamerName(activeStreamer, index)
      }

      //Function that makes a fetch call to our api to get the streamer (twitch)name used to do: twitch.tv/streamername. /Johandg
      accessStreamerName(streamerId, index) {
        let getStreamerName = "http://backend.c3.netplus.se:8080/api/twitch/filters?filterType=users&additionalFilter=id&amount=" + streamerId[index].user_id
        fetch(getStreamerName, {headers: {"Client-ID": '3jxj3x3uo4h6xcxh2o120cu5wehsab' }})
            .then(response => response.json())
            .then(response => {
            //Here we set the streamName state which is used to start a stream of a specific streamer. /Johandg
            this.setState({streamName: response.data[0].login  })
          })
      }

    render() {
        
        return(
            <div className="game-page-container">
                <MediaWindow streamName={this.state.streamName} />
                <InfoWindow streamName={this.state.streamName}/>
                {/* <ThumbnailWindow streamArray={streamDataArray}/> */}
                <div className="Thumbnail-window-holder">
                    <Thumbnail 
                    image={thumbnail1+'800x800.jpg'}
                    onClick={this.onClickThumbnail.bind(this, streamerInfo, 1)}
                    />
                    <Thumbnail 
                    image={thumbnail2+'800x800.jpg'}
                    onClick={this.onClickThumbnail.bind(this, streamerInfo, 2)}
                    />
                    <Thumbnail 
                    image={thumbnail3+'800x800.jpg'}
                    onClick={this.onClickThumbnail.bind(this, streamerInfo, 3)}
                    />
                 </div>
        
            </div>

        )
    }
}

export default GamePage;