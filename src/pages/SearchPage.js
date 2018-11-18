import React from 'react';
import Searchbar from '../molecules/Searchbar';

let starterString = 'http://localhost:8080/api/twitch/search?assetType=games&queryString=';
class SearchPage extends React.Component {

    state = {
        gameArray:[]
    };    

    fetchFromBackend = (value) => {
        if(value.length <1){
            return;
        } 
        this.setState({ gameArray: [] });

        fetch(starterString.concat(value), {})
        .then(response => response.json())
        .then(response => {
            if (!response.games) return;
            response.games.map((index) =>
            this.setState({ gameArray: [...this.state.gameArray, index] }),
            )    
          })
    }

    handleChange = (e) => {
        this.fetchFromBackend(e.target.value.trim())
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