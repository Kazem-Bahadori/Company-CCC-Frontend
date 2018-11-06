import React from 'react';
import PopularGame from '../molecules/PopularGame.js';
import GamePage from '../pages/GamePage.js';
import SideBar from '../organisms/Sidebar'
import '../css/HomePage.css';

const fetchTopGames ="http://localhost:8080/api/twitch/filters?filterType=top&assetType=games&filterValue=10" 
let categories = ["Top Games", "Steam Games", "Games on Sale" ];
let currentCategory = "Top Games"
let currentFetch;
let listOfGames

class HomePage extends React.Component {
  state = { 
    popularGameArray: [],
    showGamePage: false,
    gamesPage: null,
  }
  
    componentDidMount() {
       this.fetchFromBackend()
    }

    fetchFromBackend = () => {
      // console.log("Fetching data")
      //  To show the data in terminal:
      //curl -H "Client-ID: 3jxj3x3uo4h6xcxh2o120cu5wehsab"  -X GET "https://api.twitch.tv/helix/games/top"  /Johandg

      // Fetch games depending on what category is active. /Johandg 
      if (currentCategory === "Steam games") {
        //currentFetch = another const to a backend call
      } else if (currentCategory === "Games on Sale") {
        //currentFetch = another const to a backend call
      } else {
        currentFetch = fetchTopGames;
      }
      fetch(currentFetch, {headers: {"Client-ID": '3jxj3x3uo4h6xcxh2o120cu5wehsab'}}) 
      //Convert response into json. /Johandg
      .then(response => response.json())
      //Loop through the JSON-array to grab each individual element and place inside the popularGameArray state. /Johandg
      .then(response => {
        response.map((index) =>
        this.setState({ popularGameArray: [...this.state.popularGameArray, index] })
        )  
      })
    }
  
   //Function to render the top 20 games. /Johandg
   renderGames = () => {
    listOfGames = [];
    for (var i=0; i < this.state.popularGameArray.length; i++) {
      listOfGames.push(
        <PopularGame 
          gameName={this.state.popularGameArray[i].name}
          key={this.state.popularGameArray[i].id}
          image={'https://static-cdn.jtvnw.net/ttv-boxart/' + this.state.popularGameArray[i].name + '-800x800.jpg'}
          onClick={this.popularGameOnClick.bind(this, i)}
        />
      )
    }
    if (listOfGames < 1) {
       return <p className="homepage-placeholder"> No games available for this category </p>;
    } else {
    return listOfGames; 
    }
  }

  popularGameOnClick = (input) => {
    this.setState({showGamePage: true})
    this.setState({gamePage: <GamePage gameId={this.state.popularGameArray[input].id} />})
  }

  homeButtonOnClick = () => {
    this.setState({showGamePage: false})
  }

  categoryButtonOnClick = (category) => {
    currentCategory = category;
    this.setState({popularGameArray: []})
    this.fetchFromBackend();
  }

  render() {
    var currentWindow = (this.state.showGamePage)? this.state.gamePage:this.renderGames();
    return (
      <div className="container">    
        <div className="content-container">
          {!this.state.showGamePage && 
            <div className="homepage-header">
              <p className="header-text">{currentCategory}</p>
            </div>
          }
          {currentWindow}
        </div>
        <SideBar 
          homeButtonResponse={this.homeButtonOnClick} 
          categoryOnClick={this.categoryButtonOnClick} 
          categories={categories}
        />  
      </div>
    );
  }
}

export default HomePage;