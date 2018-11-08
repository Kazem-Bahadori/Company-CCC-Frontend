import React from 'react';
import PopularGame from '../molecules/PopularGame.js';
import GamePage from '../pages/GamePage.js';
import SideBar from '../organisms/Sidebar'
import fish from '../images/fishtv4_yes.png';
import '../css/HomePage.css';

let categories = ["Top Games", "Steam Games", "Games on Sale" ];
let listOfGames
let currentFetch = "http://backend.c3.netplus.se/api/twitch/filters?filterType=top&assetType=games&filterValue=50"

class HomePage extends React.Component {
  state = { 
    popularGameArray: [],
    showGamePage: false,
    gamesPage: null,
    currentCategory: categories[0]
  }
  
    componentDidMount() {
       this.fetchFromBackend()
    }

    fetchFromBackend = () => {
      this.setState({ popularGameArray: [] });
      fetch(currentFetch, { headers: {"Client-ID": '3jxj3x3uo4h6xcxh2o120cu5wehsab'} }) 
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
    this.setState({showGamePage: true})
    this.setState({
      gamePage: 
      <GamePage gameName={this.state.popularGameArray[input].name} 
                gameId={this.state.popularGameArray[input].id} 
                price={price}
                steamBool={this.state.popularGameArray[input].steam}/>})
  }

  homeButtonOnClick = () => {
    this.setState({showGamePage: false})
  }

  categoryButtonOnClick = (category) => {
    this.setState({currentCategory: category});
    if (category === "Steam Games") {
      currentFetch = "http://backend.c3.netplus.se/api/twitch/filters?filterType=category&assetType=games&filterValue=steamGame";
    } else if (category === "Games on Sale") {
      //setState
    } else if(category === "Top Games"){
      currentFetch = "http://backend.c3.netplus.se/api/twitch/filters?filterType=top&assetType=games&filterValue=50";
    }
    this.setState({showGamePage:false});
    this.fetchFromBackend();
  }

  render() {
    var currentWindow = (this.state.showGamePage) ? this.state.gamePage : this.renderGames();
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
          categories={categories}
        />  
      </div>
    );
  }
}

export default HomePage;