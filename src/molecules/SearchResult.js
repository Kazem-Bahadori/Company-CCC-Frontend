import React from 'react';
import GameHolder from '../molecules/GameHolder.js';
import StreamerHolder from '../molecules/StreamerHolder.js';
import fish from '../images/fishtv4_yes.png';
import '../css/SearchResult.css';

//Component used inside SearchPage
class SearchResult extends React.Component {

    getFishPlaceholder(string) {
        return(
            <p className="search-placeholder">
            <img className="search-loading" src= {fish} alt="FlatFishTV"/>
              {string} 
            </p>
        )
    }
    
    //Function to render list of search results. Each result is a clickable GameHolder.
    getGameList = () => { 
        let listOfGames = [];
        this.props.games.map((game,i) => {
            listOfGames.push(
                <GameHolder 
                    gameName={game.name}
                    key={game.id}
                    gameId={game.id} 
                    image={game.box_art_url}
                    onClick={this.props.onClick}
                    steamBool={game.steam && game.steam.appId !== 0}    
                />  
            )    
        })
        return listOfGames.slice(0,4);
    }

    getStreamerList = () => {
        if (this.props.streams.length < 1){
            return;
        }
        let listOfStreams = [];
        this.props.streams.map((stream) => {
            listOfStreams.push(
                <StreamerHolder 
                    streamName={stream.channel.display_name}
                    key={stream.id}
                    gameId={stream.id} 
                    image={stream.channel.logo}
                    streamGame={stream.channel.game}
                    
                />
            )
        })
        return listOfStreams.slice(0, 6);
    }

    // While we don't have a search result we are displaying the promo games.
    getPromoGames() {
        return (
            <div className="search-result">
            <GameHolder 
                gameName={"Dead by Daylight"}
                key={491487}
                gameId={'491487'} 
                image={null}
                onClick={this.props.onClick}
                steamBool={true}    
            />      
            <GameHolder 
                    gameName={"Dota 2"}
                    key={29595}
                    gameId={'29595'} 
                    image={null}
                    onClick={this.props.onClick}
                    steamBool={true}    
            />
            </div>
        )
    }

    render() {
        return(
            <div>
                {this.props.value ? (
                    <div>                    
                        <p className="search-titles">Games</p>
                        <div className="search-result">
                            {this.getGameList()}
                        </div> 
                        <p className="search-titles">Streamers</p>
                        <div className="search-result">
                            {this.getStreamerList()}
                        </div>
                    </div>
                ):(
                    <div>
                        {this.getPromoGames()}
                    </div>
                )}
               
               
            </div>
        );
    }
}

export default SearchResult;