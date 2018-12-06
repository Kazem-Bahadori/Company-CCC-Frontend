import React from 'react';
import '../css/SearchResult.css';

class Searchbar extends React.Component{
//Component used inside SearchPage
  render(){
    return(
      <div className="searchbar-container">
        <input
          className="searchbar-input"
          placeholder="Search"
          type="text"
          onChange={(event) => this.props.onChange(event)}
        />
      </div>        
    )
    
  }
}
export default Searchbar;