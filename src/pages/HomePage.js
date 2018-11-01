import React from 'react';
import PopularGame from '../molecules/PopularGame.js';
import GamePage from '../pages/GamePage.js';
import SideBar from '../organisms/Sidebar'
import '../css/HomePage.css';

const fetchTopGames ="http://localhost:8080/api/twitch/filters?filterType=games&assetType=top" 
var categories = ["Top Games", "Category 1", "Category 2", "Category 3" ];
class HomePage extends React.Component {
  state = {
    currentCategory: "Top Games",
    popularGameArray: [],
    showGamePage: false,
    gamesPage: null,
  }
    componentDidMount() {
        // To show the data in terminal:
        //curl -H "Client-ID: 3jxj3x3uo4h6xcxh2o120cu5wehsab"  -X GET "https://api.twitch.tv/helix/games/top"  /Johandg

        // Fetch top 20 most popular games on twitch through twitch API. /Johandg
        fetch(fetchTopGames, {headers: {"Client-ID": '3jxj3x3uo4h6xcxh2o120cu5wehsab'}}) 
        //Convert response into json. /Johandg
        .then(response => response.json())
        //Loop through the JSON-array to grab each individual element and place inside the popularGameArray state. /Johandg
        .then(response => {
          response.data.map((index) =>
          this.setState({ popularGameArray: [...this.state.popularGameArray, index] })
        )  
        })
    }
  
    renderGames = () => {
      var gameArray;
      switch(this.state.currentCategory){
        case "Top Games":
        gameArray = this.state.popularGameArray;
        break;

        case "Category 1":
        gameArray = [];
        break;

        case "Category 2":
        gameArray = [];
        break;

        case "Category 3":
        gameArray = [];
        break;
      }
      if (gameArray < 1) return <p className="homepage-placeholder"> No games available for this category </p>;
      var gameList = gameArray.map((game,i) =>
        <PopularGame
          gameName={game.name}
          key={game.id}
          image={'https://static-cdn.jtvnw.net/ttv-boxart/' + game.name + '-800x800.jpg'}
          onClick={() => this.popularGameOnClick(gameArray,i)}
        />
      )
      return gameList;
  }

  popularGameOnClick = (gameArray, input) => {
    this.setState({showGamePage: true})
    this.setState({gamePage: <GamePage gameId={gameArray[input].id} />})
  }

  homeButtonOnClick = () => {
    this.setState({showGamePage: false})
  }

  categoryButtonOnClick = (category) => {
    this.setState({currentCategory: category})
  }

  render() {
    var currentWindow = (this.state.showGamePage)? this.state.gamePage:this.renderGames();
    return (
      <div className="container">    
        <div className="content-container">
          {!this.state.showGamePage && 
            <div className="homepage-header">
              <p className="header-text">{this.state.currentCategory}</p>
            </div>
          }
          {currentWindow}
        </div>
        <SideBar 
          homeButtonResponse={this.homeButtonOnClick} 
          categoryOnClick={this.categoryButtonOnClick} 
          categories={categories}/>  
      </div>
    );
  }
}

export default HomePage;