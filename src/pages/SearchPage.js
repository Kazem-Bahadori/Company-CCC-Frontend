import React from "react";
import SearchResult from "../molecules/SearchResult.js";
import Searchbar from "../molecules/Searchbar.js";
import "../css/SearchResult.css";

let starterStringGames = 'http://backend.c3.netplus.se/api/twitchandsteam/search?assetType=games&queryString=';
let starterStringStreamers = 'http://backend.c3.netplus.se/api/twitch/search?assetType=streams&queryString=';
class SearchPage extends React.Component {
  state = {
    gameArray: [],
    streamerArray: [],
    value: ""
  };

  //Fetch response from API and fills game that match with the search to an array.
  fetchGamesFromBackend = value => {
    this.setState({ gameArray: [] });
    fetch(starterStringGames.concat(value), {})
      .then(response => response.json())
      .then(response => {
        if (!response) return;
        response.map(index =>
          this.setState({ gameArray: [...this.state.gameArray, index] })
        );
      })
      .catch(err => {
      });
  };

  //Fetch response from API and fills streams hat match with the search to an array.
  fetchStreamersFromBackend = value => {
    this.setState({ streamerArray: [] });
    fetch(starterStringStreamers.concat(value), {})
      .then(response => response.json())
      .then(response => {
        if (!response.streams) return;
        response.streams.map(index =>
          this.setState({ streamerArray: [...this.state.streamerArray, index] })
        );
      });
  };

  //Handles false characters such as åäö
  handleInputChars = inputValue => {
    return (inputValue = inputValue
      .replace(/å/g, "_x00e5_")
      .replace(/Å/g, "_x00c5_")
      .replace(/ä/g, "_x00e4_")
      .replace(/Ä/g, "_x00c4_")
      .replace(/ö/g, "_x00e6_")
      .replace(/Ö/g, "_x00c6_"));
  };

  //Function to handle the input of the searchfield so that the API calls get a parameter to search on. A game name.
  handleChange = e => {
    let inputValue = this.handleInputChars(e.target.value.trim());
    this.setState({ value: inputValue });
    if (inputValue < 1) {
      return;
    }
    this.fetchGamesFromBackend(inputValue);
    this.fetchStreamersFromBackend(inputValue);
  };

  render() {
    return (
      <div className="search-result-container">
        <Searchbar onChange={this.handleChange} />
        <SearchResult
          games={this.state.gameArray}
          streams={this.state.streamerArray}
          value={this.state.value}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

export default SearchPage;
