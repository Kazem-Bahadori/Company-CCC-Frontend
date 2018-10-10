
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../css/MediaWindow.css';



//access most popular streams (with user_id) from a specific game by using game id.
//const activeStream = "http://localhost:8080/api/twitch/filters?filterType=streams&additionalFilter=game_id&amount=21779"

//access info about streamer by using user_id.
//const getStreamerName = "http://localhost:8080/api/twitch/filters?filterType=users&additionalFilter=id&amount=11561802"

let streamerId = '';
class MediaWindow extends Component {

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
    
    return (
<div className="media-window-holder">
    <div className="media-window-media">
        <ReactPlayer
            url={'https://www.twitch.tv/' + this.state.streamName} 
            playing
            width="100%"
            height="100%"
           />
    </div>
            <div className="media-window-chat">
              <iframe
                title="twitch-chat"
                frameBorder="0"
                scrolling="no"
                id="chat_embed"
                src={"https://www.twitch.tv/embed/" + this.state.streaName + "/chat"}
                height="100%"
                //???width="100%">
                />
        </div>
        
      </div>
    

     
      

    );
  }
}

export default MediaWindow;