import React from 'react';
import GameHolder from '../molecules/GameHolder.js';
import StreamerHolder from '../molecules/StreamerHolder.js';

class SearchResult extends React.Component {
    
    getGameList(){ 
        console.log("getGameList");
        if(this.props.games.length < 1){
            return <p> No games matches...</p>
        }
        let listOfGames = [];
       
        for (var i=0; i < 4; i++){
            if (i === 4) return;
            console.log(this.props.games[i].name);
            listOfGames.push(
                <GameHolder 
                    gameName={this.props.games[i].name}
                    key={this.props.games[i].id}
                    gameId={this.props.games[i].id} 
                    image={this.props.games[i].box_art_url}
                    onClick={()=> this.props.OnClick}
                    steamBool={this.props.games[i].steam}    
                />          
            )
            
        }
        console.log(listOfGames);
        return listOfGames;
    }

    // getStreamerList = () =>{
    //     if(!this.props.streams){
    //         return <p> No streamers matches...</p>
    //     }
    //     let listOfStreams = this.props.streams.map((stream, index2)=>{
    //         <StreamerHolder 
    //             gameName={stream.name}
    //             key={stream.id}
    //             gameId={stream.id} 
    //             image={'https://static-cdn.jtvnw.net/ttv-boxart/' + stream.name + '-800x800.jpg'}
    //             onClick={()=> this.props.OnClick}
    //             steamBool={stream.steam}    
    //         />
    //         if (index2 === 5) return;
    //     })
    //     return listOfStreams;
    // }

    render() {
        console.log(this.props);
        return(
            <div>
               {this.getGameList()}
            </div>
        );
    }
}

export default SearchResult;