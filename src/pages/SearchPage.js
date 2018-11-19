import React from 'react';
import Searchbar from '../molecules/Searchbar';

let starterStringGames = 'http://localhost:8080/api/twitch/search?assetType=games&queryString=';
let starterStringStreamers = 'http://localhost:8080/api/twitch/search?assetType=streams&queryString=';
class SearchPage extends React.Component {

    state = {
        gameArray:[],
        streamerArray: []
    };    

    fetchGamesFromBackend = (value) => { 
        this.setState({ gameArray: [] });

        fetch(starterStringGames.concat(value), {})
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (!response.games) return;
            response.games.map((index) =>
                this.setState({ gameArray: [...this.state.gameArray, index] }),
            )        
        })
    }

    fetchStreamersFromBackend = (value) => {
        this.setState({ streamerArray: [] });
        fetch(starterStringStreamers.concat(value), {})
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (!response.streams) return;
            response.streams.map((index) =>
                this.setState({ streamerArray: [...this.state.streamerArray, index] }),
            )                        
        })
    }
    handleInputChars = (inputValue) => {
        return (
            inputValue = inputValue
            .replace(/å/g, '_x00e5_')
            .replace(/Å/g, '_x00c5_')
            .replace(/ä/g, '_x00e4_')
            .replace(/Ä/g, '_x00c4_')
            .replace(/ö/g, '_x00e6_')
            .replace(/Ö/g, '_x00c6_')
        );
    }

    handleChange = (e) => {
        let inputValue = this.handleInputChars(e.target.value.trim());
        if(inputValue <1){
            return;
        } 
        this.fetchGamesFromBackend(inputValue);
        this.fetchStreamersFromBackend(inputValue);
    }

    render () {
        if(this.state.gameArray.length>1){

        }  
        return(
            <div>
                <Searchbar onChange={this.handleChange}/>
            </div>        
        )        
    }
}

export default SearchPage;