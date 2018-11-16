import React, { Component } from 'react';
import '../css/GamePage.css';
import ChatAndInfoWindow from '../organisms/ChatAndInfoWindow.js';
import MediaWindow from '../molecules/MediaWindow.js';
import Thumbnail from '../atoms/Thumbnail.js';
import '../css/ThumbnailWindow.css';
import player_icon from '../images/player_icon.png';
import views_icon from '../images/views_icon.png';
import arrowRight from '../images/arrow-right.png'

let streamerInfo = [];
let streamDataArray = [];
let viewercount = '';
let thumbnailArray = [];
let viewCountArray = [];

class GamePage extends Component {
  state = {
    streamName: '',
  }

  componentDidMount() {
    //Each time the GamePage component mounts the streamerInfo is emptied. /Johandg
    //streamerInfo = []
    //The gameId is send as a prop from our homepage to access the most popular streams of that specific gameId. /Johandg
    let currentStream = "http://localhost:8080/api/twitch/filters?assetType=streams&filterType=game&filterValue=" + this.props.gameId
    fetch(currentStream, {headers: {"Client-ID": '3jxj3x3uo4h6xcxh2o120cu5wehsab'}}) 
      //Convert response into json. /Johandg
      .then(response => response.json())
      //Loop through the JSON-array to grab each individual element and place inside the popularGameArray state. /Johandg
      .then(response => {
        response.data.map((index) =>
        streamerInfo.push(index)
        
      )  
      streamDataArray = response.data;
      console.log(streamDataArray);
      
      // Viewer count (later sent to infowindow though chatandinfowindow)
          viewercount=streamDataArray[0].viewer_count;

      viewCountArray[0]=streamDataArray[0].viewer_count;
      // Need to trim the thumbnailurl to replace the {width}x{height} /JoakimS
      if(streamDataArray.length>=4){
        for(let i=1; i<streamDataArray.length; i++){
          thumbnailArray[i]=(streamDataArray[i].thumbnail_url).substring(0, (streamDataArray[i].thumbnail_url).length - 20);
          viewCountArray[i]=(streamDataArray[i].viewer_count);
        }
      }else{
        for(let i=1; i<streamDataArray.length+1; i++){
          thumbnailArray[i]=(streamDataArray[i].thumbnail_url).substring(0, (streamDataArray[i].thumbnail_url).length - 20);
          viewCountArray[i]=(streamDataArray[i].viewer_count);
        }
      }
      
      //Calling accessStreamerName function to start the initial stream. /Johandg
      this.accessStreamerName(streamerInfo, 0);
    })
  }

  accessStreamerName(streamerInfo, index) {
    //Here we set the streamName state which is used to start a stream of a specific streamer. /Johandg
    let getStreamerName = "http://localhost:8080/api/twitch/filters?assetType=streamer_info&filterValue=" + streamerInfo[index].user_id
    fetch(getStreamerName)
    .then(response => response.json())
    .then(response => {
      this.setState({streamName: response.data[0].login})
    })
    console.log(viewCountArray[index]);
    viewercount = viewCountArray[index];
  }

  render() {
    return(
      <div className="game-page-container">
        <div className="game-name-header"> {this.props.gameName} </div>
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
            <p className="streamer-text"><img className="player-icon" src={player_icon} alt="player icon"/>{this.state.streamName}</p>
            <p className="streamer-text"><img className="player-icon" src={views_icon} alt="views icon"/> {viewercount} </p>
          </div>

          {/* <div className="thumbnail-window-and-arrow-holder"> */}
            <div className="Thumbnail-window-holder">
              {thumbnailArray.map((thumbnail, index) =>
                <Thumbnail 
                image={thumbnail+'800x800.jpg'}
                views={viewCountArray[index]}
                streamName={streamerInfo[index].title}
                streamerName={streamerInfo[index].user_name}
                onClick={this.accessStreamerName.bind(this, streamerInfo, index)}
                key={index}
                />
              )}

            </div>
              {/* Thumbnail right arrow */}
              {/* <div className="thumbnail-right-arrow-container"> */}
                <img className="thumbnail-right-arrow-image" src= {arrowRight} alt="Arrow"/>
              {/* </div> */}
              
          {/* </div> */}

        </div>
        
    )
  }
}

export default GamePage;