import React, { Component } from 'react';
import PopularGame from '../molecules/PopularGame.js';
import '../css/HomePage.css';

const getPopularGames = 'https://api.twitch.tv/helix/games/top'
class HomePage extends Component {

  state = {
    popularGameArray: [],
    
  }
    componentDidMount() {
        // To show the data in terminal:
        //curl -H "Client-ID: 3jxj3x3uo4h6xcxh2o120cu5wehsab"  -X GET "https://api.twitch.tv/helix/games/top"  /Johandg

        // Fetch top 20 most popular games on twitch through twitch API. /Johandg
        fetch(getPopularGames, {headers: {"Client-ID": '3jxj3x3uo4h6xcxh2o120cu5wehsab'}}) 
        //Convert response into json. /Johandg
        .then(response => response.json())
        //Loop through the JSON-array to grab each individual element and place inside the popularGameArray state. /Johandg
        .then(response => {
          console.log(response)
          response.data.map((index) =>
          this.setState({ popularGameArray: [...this.state.popularGameArray, index] })
         
        )
          console.log(this.state.popularGameArray)
        })
    }
  
    //Function to render the top 20 games. /Johandg
    renderPopularGames = () => {
      var listOfGames = [];
      for (var i=0; i < this.state.popularGameArray.length; i++) {
        
        listOfGames.push(<PopularGame 
                          gameName={this.state.popularGameArray[i].name}
                          key={this.state.popularGameArray[i].id}
                          image={'https://static-cdn.jtvnw.net/ttv-boxart/' + this.state.popularGameArray[i].name + '-800x800.jpg'}/>)
      }
      if (!listOfGames) {
        return <p> Loading... </p>
      } else {
      return listOfGames;
      }
    }

  render() {
    return (
      <div className="container">
        <div className="popular-games-container">    
            {this.renderPopularGames()}
            <div className="filler-div"></div>
          
        </div>
      
      </div>
    );
  }
}

export default HomePage;