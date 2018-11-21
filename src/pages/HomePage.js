import React from 'react';
import PopularGame from '../molecules/PopularGame.js';
import GamePage from '../pages/GamePage.js';
import SideBar from '../organisms/Sidebar'
import fish from '../images/fishtv4_yes.png';
import '../css/HomePage.css';
import SearchPage from '../pages/SearchPage.js';

// const fetchTopGames ="http://localhost:8080/api/twitch/filters?filterType=top&assetType=games&filterValue=50" 
// const fetchTopSteamGames ="http://localhost:8080/api/twitch/filters?filterType=category&assetType=games&filterValue=steamGame"
let categories = ["Top Games", "Steam Games", "Games on Sale" ];
let pages = ["HomePage", "GamePage", "SearchPage"];
let listOfGames
let currentFetch = "http://localhost:8080/api/aggregation/filters?filterType=top&assetType=games&filterValue=50"

class HomePage extends React.Component {
  state = { 
    currentPage: pages[0],
    popularGameArray: [],
    gamePage: null,
    currentCategory: categories[0]
  }
  
    componentDidMount() {
       this.fetchFromBackend()
    }

    fetchFromBackend = () => {
      this.setState({ popularGameArray: [] });
      fetch(currentFetch, {}) 
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
          steamBool={this.state.popularGameArray[i].steam}    
        />
      )
    }
    if (listOfGames < 1) {
       return (
       <p className="homepage-placeholder">
        <img className="home-page-loading" src= {fish} alt="FlatFishTV"/>
          Loading... 
        </p>
      );
    } else {
    return listOfGames; 
    }
  }

  popularGameOnClick = (input) => {
    var price;
    if (this.state.popularGameArray[input].steam.price ==! undefined) {
      price = this.state.popularGameArray[input].steam.price.final / 100
    }
    this.setState({currentPage: pages[1]})
    this.setState({
      gamePage: 
      <GamePage gameName={this.state.popularGameArray[input].name} 
                gameId={this.state.popularGameArray[input].id} 
                price={price}
                steamBool={this.state.popularGameArray[input].steam}/>})
  }

  homeButtonOnClick = () => {
    this.setState({currentPage: pages[0]})
  }

  categoryButtonOnClick = (category) => {
    this.setState({currentCategory: category});
    if (category === "Steam Games") {
      currentFetch = "http://localhost:8080/api/aggregation/filters?filterType=category&assetType=games&filterValue=steamGame";
    } else if (category === "Games on Sale") {
      currentFetch = "http://localhost:8080/api/aggregation/filters?filterType=top&assetType=games&filterValue=50";
    } else if(category === "Top Games"){
      currentFetch = "http://localhost:8080/api/aggregation/filters?filterType=top&assetType=games&filterValue=50";
    }
    this.setState({currentPage: pages[0]});
    this.fetchFromBackend();
  }

  searchButtonOnClick = () => {
    this.setState({currentPage: pages[2]})
  }

  render() {
    var currentWindow;
    if (this.state.currentPage === pages[2]) {
      currentWindow =  <SearchPage></SearchPage>
    } else if (this.state.currentPage === pages[1]) {
      currentWindow = this.state.gamePage;
    } else {
      currentWindow = this.renderGames();
    }
    return (
      <div className="container">    
        <div className="content-container">
            {this.state.currentPage === pages[0] && 
            <div className="homepage-header">
              <p className="header-text">{this.state.currentCategory}</p>
            </div>
          }
          {currentWindow}
        </div>
        <SideBar 
          homeButtonResponse={this.homeButtonOnClick} 
          searchButtonResponse={this.searchButtonOnClick}
          categoryOnClick={this.categoryButtonOnClick} 
          categories={categories}
        />  
      </div>
    );
  }
}

export default HomePage;