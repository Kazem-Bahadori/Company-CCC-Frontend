import React, { Component } from 'react';
import PopularGame from '../molecules/PopularGame.js';
import '../css/HomePage.css';

class HomePage extends Component {
    componentDidMount() {
        // Fetch top 50(?) most popular games on twitch through twitch API.
    }


  render() {
    return (
      <div className="container">
        <div className="popular-games-container">    
            <PopularGame />
            <PopularGame />
            <PopularGame />
            <PopularGame />
            <PopularGame />
            <PopularGame />
            <PopularGame />
            <PopularGame />
            <PopularGame />
            <div className="filler-div"></div>
            
           
        </div>
      
      </div>
    );
  }



}

export default HomePage;