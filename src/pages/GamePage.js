import React, { Component } from 'react';
import '../css/GamePage.css';
import ChatAndInfoWindow from '../organisms/ChatAndInfoWindow.js';
import MediaWindow from '../molecules/MediaWindow.js';
import Thumbnail from '../atoms/Thumbnail.js';
import '../css/ThumbnailWindow.css';
import player_icon from '../images/player_icon.png';
import views_icon from '../images/views_icon.png';
import arrowRight from '../images/arrow-right.png';
import arrowLeft from '../images/arrow-left.png'

let streamerInfo = [];
let streamDataArray = [];
let viewercount = '';
let thumbnailArray = [];
let viewCountArray = [];
let streamNameArray = [];
let currentStreamName = '';

class GamePage extends Component {
  state = {
    streamName: '',
  }

  componentDidMount() {
    document.title = 'FlatfishTV | ' + this.props.gameName;
    //Each time the GamePage component mounts the streamerInfo is emptied. /Johandg
    //streamerInfo = []
    //The gameId is send as a prop from our homepage to access the most popular streams of that specific gameId. /Johandg
    let currentStream = "http://localhost:8080/api/twitch/filters?assetType=streams&filterType=game&filterValue=" + this.props.gameId
    fetch(currentStream)
      .then(this.handleErrors)
      //Convert response into json. /Johandg
      .then(response => response.json())
      //Loop through the JSON-array to grab each individual element and place inside the popularGameArray state. /Johandg
      .then(response => {
        response.data.map((index) =>
        streamerInfo.push(index)

      )
      streamDataArray = response.data;
      //Getting name of the currently active stream
          currentStreamName=streamDataArray[0].title;

      // Viewer count (later sent to infowindow though chatandinfowindow)
      viewercount=streamDataArray[0].viewer_count;

      streamNameArray[0]=streamDataArray[0].title;
      //viewCountArray[0]=streamDataArray[0].viewer_count;
      // Need to trim the thumbnailurl to replace the {width}x{height} /JoakimS
      if(streamDataArray.length>=4){
        for(let i=0; i<streamDataArray.length; i++){
          thumbnailArray[i]=(streamDataArray[i].thumbnail_url).substring(0, (streamDataArray[i].thumbnail_url).length - 20);
          viewCountArray[i]=(streamDataArray[i].viewer_count);
          streamNameArray[i]=(streamDataArray[i].title);
        }
      }else{
        for(let i=1; i<streamDataArray.length+1; i++){
          thumbnailArray[i]=(streamDataArray[i].thumbnail_url).substring(0, (streamDataArray[i].thumbnail_url).length - 20);
          viewCountArray[i]=(streamDataArray[i].viewer_count);
          streamNameArray[i]=(streamDataArray[i].title);
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
      console.log(response.data)
      this.setState({streamName: response.data[0].login})
    })
    viewercount = viewCountArray[index];
    currentStreamName = streamNameArray[index];
  }

  render() {
    return(
      <div className="game-page-container">
        <div className="game-page-back-button" onClick={this.props.backButtonOnClick}>
          <img className="back-button-arrow" src= {arrowLeft} alt="Arrow"/>
          <div className="back-button-text">Back to Homepage</div>
        </div>
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
           //Adding left arrow to the thumbnail array
            <img className="thumbnail-left-arrow-image" src= {arrowLeft} alt="Arrow"/>
          }

          {this.state.streamName.length !== 0 &&
          <div>
          <p className="game-name-gamepage">{this.props.gameName}</p>
          <p className="stream-title-name">{currentStreamName}</p>


          <div className="streamer-and-viewers-holder">

            <p className="streamer-text"><img className="player-icon" src={player_icon} alt="player icon"/>{this.state.streamName}</p>
            <p className="streamer-text"><img className="player-icon" src={views_icon} alt="views icon"/> {viewercount} </p>
          </div>
          </div>}

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
                currentStream={this.state.streamName===nameLowerCase}
                />);
              }else{
                return(
                  <Thumbnail
                  image={thumbnail+'800x800.jpg'}
                  views={viewCountArray[index]}
                  streamName={streamDataArray[index].title}
                  streamerName={streamDataArray[index].user_name}
                  // onClick={this.accessStreamerName.bind(this, streamDataArray, index)}
                  key={index}
                  currentStream={this.state.streamName===nameLowerCase}
                  />);
              }
              return;}
            )}
            </div>
          }
          <div className="overlay-shadow"></div>
            {this.state.streamName.length !== 0 &&
            <img className="thumbnail-right-arrow-image" src= {arrowRight} alt="Arrow"/>
            }

        </div>

    )
  }
}

export default GamePage;
