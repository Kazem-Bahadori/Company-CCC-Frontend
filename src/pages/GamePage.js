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
    console.log(this.props.gameId)
    //Each time the GamePage component mounts the streamerInfo is emptied. /Johandg
    //streamerInfo = []
    //The gameId is send as a prop from our homepage to access the most popular streams of that specific gameId. /Johandg
    let currentStream = "http://localhost:8080/api/twitch/filters?assetType=streams&filterType=game&filterValue=" + this.props.gameId
    fetch(currentStream, {headers: {"Client-ID": '3jxj3x3uo4h6xcxh2o120cu5wehsab'}}) 
      .then(this.handleErrors)
      //Convert response into json. /Johandg
      .then(response => response.json())
      //Loop through the JSON-array to grab each individual element and place inside the popularGameArray state. /Johandg
      .then(response => {
        response.data.map((index) =>
        streamerInfo.push(index)
        
      )
      streamDataArray = response.data;
      // console.log(streamDataArray);
      
      // Viewer count (later sent to infowindow though chatandinfowindow)
      viewercount=streamDataArray[0].viewer_count;

      // viewCountArray[0]=streamDataArray[0].viewer_count;
      
      // Need to trim the thumbnailurl to replace the {width}x{height} /JoakimS
      if(streamDataArray.length>=4){
        for(let i=0; i<streamDataArray.length; i++){
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
      this.accessStreamerName(streamDataArray, 0);
    }).catch(function(error) {
      console.log(error);
  });
  
  }

   handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText + " This game has no active streams");
    }
    return response;
}

  accessStreamerName(streamerInfo, index) {
    //Here we set the streamName state which is used to start a stream of a specific streamer. /Johandg
    let getStreamerName = "http://localhost:8080/api/twitch/filters?assetType=streamer_info&filterValue=" + streamerInfo[index].user_id
    fetch(getStreamerName)
    .then(response => response.json())
    .then(response => {
      this.setState({streamName: response.data[0].login})
    })
    viewercount = viewCountArray[index];
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
          {this.state.streamName.length !== 0 &&
          <div className="streamer-and-viewers-holder"> 
          <p className="game-name"> {this.props.gameName} </p>
            <p className="streamer-text"><img className="player-icon" src={player_icon} alt="player icon"/>{this.state.streamName}</p>
            <p className="streamer-text"><img className="player-icon" src={views_icon} alt="views icon"/> {viewercount} </p>
          </div> }
          
          {this.state.streamName.length !== 0 &&
          <div className="Thumbnail-window-holder">
            {/* For each element in thumbnailarray a thumbnail is placed  */}
            {thumbnailArray.map((thumbnail, index) => {
              
              // Lowercase name to be able to compare streamName to streamerInfo name
              var nameLowerCase=(streamDataArray[index].user_name).toLowerCase();
        
              // Only print a thumbnail if not playing in mediawindow
              if(this.state.streamName!==nameLowerCase){  
                return(
                <Thumbnail 
                image={thumbnail+'800x800.jpg'}
                views={viewCountArray[index]}
                streamName={streamDataArray[index].title}
                streamerName={streamDataArray[index].user_name}
                onClick={this.accessStreamerName.bind(this, streamDataArray, index)}
                key={index}
                />);
              }
              return;}
            )}
            </div>
          }
            {this.state.streamName.length !== 0 &&
            <img className="thumbnail-right-arrow-image" src= {arrowRight} alt="Arrow"/>
            }
          
        </div>
          
    )
  }
}

export default GamePage;