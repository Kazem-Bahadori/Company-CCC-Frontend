import React, { Component } from 'react';
import '../css/GamePage.css';
import ChatAndInfoWindow from '../organisms/ChatAndInfoWindow.js';
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
let viewercount = '';
let streamerName = '';
class GamePage extends Component {
    
      state = {
        streamName: '',
      }

      componentDidMount() {
        //Each time the GamePage component mounts the streamerInfo is emptied. /Johandg
        streamerInfo = []
        //The gameId is send as a prop from our homepage to access the most popular streams of that specific gameId. /Johandg
        let currentStream = "http://localhost:8080/api/twitch/filters?assetType=streams&filterType=game_id&filterValue=" + this.props.gameId
        fetch(currentStream, {headers: {"Client-ID": '3jxj3x3uo4h6xcxh2o120cu5wehsab'}}) 
              //Convert response into json. /Johandg
              .then(response => response.json())
              //Loop through the JSON-array to grab each individual element and place inside the popularGameArray state. /Johandg
              .then(response => {
                response.data.map((index) =>
                streamerInfo.push(index)
              )  
              
                streamDataArray = response.data;
                
                // Viewer count (later sent to infowindow though chatandinfowindow)
                viewercount=streamDataArray[0].viewer_count;
           
                // Need to trim the thumbnailurl to replace the {width}x{height} /JoakimS
                thumbnail1 = (streamDataArray[1].thumbnail_url).substring(0, (streamDataArray[1].thumbnail_url).length - 20);
                thumbnail2 = (streamDataArray[2].thumbnail_url).substring(0, (streamDataArray[2].thumbnail_url).length - 20);
                thumbnail3 = (streamDataArray[3].thumbnail_url).substring(0, (streamDataArray[3].thumbnail_url).length - 20);
              //Calling accessStreamerName function to start the initial stream. /Johandg
              
              this.accessStreamerName(streamerInfo, 0);
              //console.log(this.state.streamName)
                
              })
      }

      accessStreamerName(streamerInfo, index) {
            //Here we set the streamName state which is used to start a stream of a specific streamer. /Johandg
            this.setState({streamName: streamerInfo[index].user_name})
            
            console.log("accessStreamerName")
            
      }

    render() {
        
        return(
            <div className="game-page-container">
              <div className="media-and-chat-holder">
               <MediaWindow streamName={this.state.streamName}/>
                <ChatAndInfoWindow streamName={this.state.streamName} viewers={viewercount}/>
                </div>
                
                {/* <ThumbnailWindow streamArray={streamDataArray}/> */}
                <div className="Thumbnail-window-holder">
                    <Thumbnail 
                    image={thumbnail1+'800x800.jpg'}
                    onClick={this.accessStreamerName.bind(this, streamerInfo, 1)}
                    />
                    <Thumbnail 
                    image={thumbnail2+'800x800.jpg'}
                    onClick={this.accessStreamerName.bind(this, streamerInfo, 2)}
                    />
                    <Thumbnail 
                    image={thumbnail3+'800x800.jpg'}
                    onClick={this.accessStreamerName.bind(this, streamerInfo, 3)}
                    />
                 </div>
        
            </div>

        )
    }
}

export default GamePage;