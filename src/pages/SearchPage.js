import React from 'react';
import SearchResult from '../molecules/SearchResult.js';
import Searchbar from '../molecules/Searchbar.js';
import '../css/SearchResult.css';

let starterStringGames = 'http://localhost:8080/api/twitch/search?assetType=games&queryString=';
let starterStringStreamers = 'http://localhost:8080/api/twitch/search?assetType=streams&queryString=';
class SearchPage extends React.Component {

    state = {
        gameArray:[],
        streamerArray: [],
        value:''
    };    

    fetchGamesFromBackend = (value) => { 
        this.setState({ gameArray: [] });

        fetch(starterStringGames.concat(value), {})
        .then(response => response.json())
        .then(response => {
            // console.log(response)
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
        this.setState({value: inputValue});
        if(inputValue <1){
            return;
        } 
        this.fetchGamesFromBackend(inputValue);
        this.fetchStreamersFromBackend(inputValue);
    }

    render () {
        return(
            <div className="search-result-container">
                <Searchbar onChange={this.handleChange}/>
                <SearchResult games={this.state.gameArray} streams={this.state.streamerArray} value={this.state.value}/>
            </div>        
        )        
    }
}

export default SearchPage;