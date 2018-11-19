import React from 'react';
import GameHolder from '../molecules/GameHolder.js';
import StreamerHolder from '../molecules/StreamerHolder.js';

class SearchResult extends React.Component {

    getGameList = () =>{
        if(!this.props.games){
            return <p> No games matches...</p>
        }
        return(
            this.props.games.map((item, index)=>{
                <GameHolder 
                    gameName={item.name}
                    key={item.id}
                    gameId={item.id} 
                    image={'https://static-cdn.jtvnw.net/ttv-boxart/' + item.name + '-800x800.jpg'}
                    onClick={()=> this.props.OnClick}
                    steamBool={item.steam}    
                />
                if (index === 3) return;
            })
        )
    }

    getStreamerList = () =>{
        if(!this.props.streamers){
            return <p> No streamers matches...</p>
        }
        return(
            this.props.streamers.map((item, index)=>{
                <StreamerHolder 
                    gameName={item.name}
                    key={item.id}
                    gameId={item.id} 
                    image={'https://static-cdn.jtvnw.net/ttv-boxart/' + item.name + '-800x800.jpg'}
                    onClick={()=> this.props.OnClick}
                    steamBool={item.steam}    
                />
                if (index === 5) return;
            })
        )
    }

    render() {
        return(
            <div>
                {this. getGameList()}
                {this. getStreamerList()}
            </div>
        );
    }
}

export default SearchResult;