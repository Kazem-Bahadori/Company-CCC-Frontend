import React from 'react';
import GameHolder from '../molecules/GameHolder.js';
import GamePage from '../pages/GamePage.js';
import SideBar from '../organisms/Sidebar'
import fish from '../images/fishtv4_yes.png';
import '../css/HomePage.css';
import SearchPage from '../pages/SearchPage.js';

let categories = ["Top Games", "Steam Games"];
let pages = ["HomePage", "GamePage", "SearchPage"];
let listOfGames
let currentFetch = {
  filterType: "top",
  assetType: "games",
  limit: 50
}
let mounted;

class HomePage extends React.Component {
  state = {
    currentPage: pages[0],
    popularGameArray: [],
    gamePage: null,
    currentCategory: categories[0]
  }

  postData(url = ``, data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => {
        console.log(response);
        response.json();
      }); // parses response to JSON
  }
    componentDidMount() {
       this.mounted = true;
       this.fetchFromBackend()
      //.catch(error => console.error(error));
    }

    componentWillUnmount() {
      //Cancel the setState of popularGameArray inside fetchFromBackend(). This is done when you leave the HomePage.
      this.mounted = false;
    }

    //Function to fetch api data to homepage.
    fetchFromBackend = () => {
      if (this.mounted) {
      this.setState({ popularGameArray: [] });
      //fetch() 
      this.postData("http://localhost:8080/api/twitchandsteam/content", currentFetch)
      //Convert response into json. /Johandg
      //.then(response => response.json())
      //Loop through the JSON-array to grab each individual element and place inside the popularGameArray state. /Johandg
      .then(response => {
        response.data.map((index) =>
        this.setState({ popularGameArray: [...this.state.popularGameArray, index] })
        )
      })
    }
    }

   //Function to render the top 50 games. /Johandg
   renderGames = () => {
    listOfGames = [];

    
    for (var i=0; i < this.state.popularGameArray.length; i++) {
      
      listOfGames.push(
        <GameHolder
          gameName={this.state.popularGameArray[i].name}
          key={this.state.popularGameArray[i].id}
          gameId={this.state.popularGameArray[i].id}
          image={'https://static-cdn.jtvnw.net/ttv-boxart/' + this.state.popularGameArray[i].name + '-800x800.jpg'}
          onClick={this.popularGameOnClick.bind(this)}
          steamBool={this.state.popularGameArray[i].steam}
        />
      )
    }

    //Determines if the page has something to show or not. If its "loading" or not.
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

  //If a game is clicked we will be directed to GamePage with that specific game following.
  popularGameOnClick = (gameId, gameName, steam) => {
  
    this.setState({currentPage: pages[1]})
    this.setState({
      gamePage:
      <GamePage
        backButtonOnClick={this.homeButtonOnClick}
        gameName={gameName}
        gameId={gameId}
        steamBool={steam}
      />
    })
  }

  //When the flatfish logo is clicked you are directed to HomePage showing top 50 games.
  homeButtonOnClick = () => {

    if(this.state.currentPage !== pages[0] || this.state.currentCategory !== "Top Games") {
      this.setState({currentPage: pages[0]})
      document.title = 'FlatfishTV';
    this.setState({currentCategory: "Top Games"});
    currentFetch = "http://localhost:8080/api/aggregation/filters?filterType=top&assetType=games&filterValue=50";
      this.fetchFromBackend();
    }
  }

  //When clicking a specific category you will be directed to the HomePage displaying games in regard to what category you clicked.
  categoryButtonOnClick = (category) => {
    this.setState({currentCategory: category});
    document.title = 'FlatfishTV';
    if (category === "Steam Games") {
      currentFetch = {
        filterType: "steamGame",
        assetType: "games",
        limit: 20
     }
    } else if (category === "Games on Sale") {
      currentFetch = "http://localhost:8080/api/aggregation/filters?filterType=top&assetType=games&filterValue=50";
    } else if(category === "Top Games"){
      currentFetch = "http://localhost:8080/api/aggregation/filters?filterType=top&assetType=games&filterValue=50";
    }
    this.setState({currentPage: pages[0]});
    this.fetchFromBackend();
  }

  //By clicking the search button you are directed to the SearchPage.
  searchButtonOnClick = () => {
    document.title = 'FlatfishTV';
    this.setState({currentCategory: categories[0]})
    this.setState({currentPage: pages[2]})
  }

  render() {
    var currentWindow;
    if (this.state.currentPage === pages[2]) {
      currentWindow =  <SearchPage onClick={this.popularGameOnClick}/>
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
