import React from 'react';
import '../css/Searchbar.css';

class Searchbar extends React.Component{

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