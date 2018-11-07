import React, { Component } from 'react';
import '../css/GamePage.css';
import ChatAndInfoWindow from '../organisms/ChatAndInfoWindow.js';
import MediaWindow from '../molecules/MediaWindow.js';
import Thumbnail from '../atoms/Thumbnail.js';
import '../css/ThumbnailWindow.css';

let streamerInfo = [];
let streamDataArray = [];
let viewercount = '';
let thumbnailArray = [];

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
      if(streamDataArray.length>=4){
        for(let i=1; i<5; i++){
          thumbnailArray[i]=(streamDataArray[i].thumbnail_url).substring(0, (streamDataArray[i].thumbnail_url).length - 20);
        }
      }else{
        for(let i=1; i<streamDataArray.length+1; i++){
          thumbnailArray[i]=(streamDataArray[i].thumbnail_url).substring(0, (streamDataArray[i].thumbnail_url).length - 20);
        }
      }
      
      //Calling accessStreamerName function to start the initial stream. /Johandg
      this.accessStreamerName(streamerInfo, 0);
    })
  }

  accessStreamerName(streamerInfo, index) {
    //Here we set the streamName state which is used to start a stream of a specific streamer. /Johandg
    let getStreamerName = "http://backend.c3.netplus.se:8080/api/twitch/filters?filterType=users&additionalFilter=id&amount=" + streamerInfo[index].user_id
    fetch(getStreamerName)
    .then(response => response.json())
    .then(response => {
      this.setState({streamName: response.data[0].login})
    })   
  }

  render() {
    return(
      <div className="game-page-container">
        <div className="media-and-chat-holder">
          <MediaWindow streamName={this.state.streamName}/>
          <ChatAndInfoWindow 
          gameName={this.props.gameName}
          streamName={this.state.streamName} 
          viewers={viewercount} 
          price={this.props.price}
          steamBool={this.props.steamBool}
          />
          </div>

          <div className="streamer-and-viewers-holder"> 
            <p className="streamer-text"> {this.state.streamName} | View Count: {viewercount} </p>
          </div>

          <div className="Thumbnail-window-holder">
            {thumbnailArray.map((thumbnail, index) =>
              <Thumbnail 
              image={thumbnail+'800x800.jpg'}
              onClick={this.accessStreamerName.bind(this, streamerInfo, index)}
              key={index}
              />
            )}
          </div>
        </div>
    )
  }
}

export default GamePage;