import React from 'react';
import GameHolder from '../molecules/GameHolder.js';
import StreamerHolder from '../molecules/StreamerHolder.js';
import '../css/SearchResult.css';

class SearchResult extends React.Component {
    
    getGameList = () => { 
        if(this.props.games.length < 1){
            return <p> No games matches...</p>
        }
        let listOfGames = [];
        this.props.games.map(game => {
            listOfGames.push(
                <GameHolder 
                    gameName={game.name}
                    key={game.id}
                    gameId={game.id} 
                    image={game.box_art_url}
                    // onClick={()=> game.OnClick}
                    // steamBool={game.steam}    
                />  
            )    
        })
        return listOfGames.slice(0,4);
    }

    getStreamerList = () =>{
        if(!this.props.streams){
            return <p> No streamers matches...</p>
        }
        let listOfStreams = [];
        this.props.streams.map(stream=>{
            // console.log(stream.channel.display_name);
            listOfStreams.push(
                <StreamerHolder 
                    streamName={stream.channel.display_name}
                    key={stream.id}
                    gameId={stream.id} 
                    image={stream.channel.logo}
                    // onClick={()=> this.props.OnClick}
                    // steamBool={stream.steam}    
                />
            )
        })
        return listOfStreams.slice(0, 6);
    }

    render() {
        return(
            <div >
                {this.props.value &&
                <div>
                    <div className="search-result">
                        {this.getGameList()}
                    </div> 
                    <div className="search-result">
                        {this.getStreamerList()}
                    </div>
                </div>                                     
                }
               
               
            </div>
        );
    }
}

export default SearchResult;