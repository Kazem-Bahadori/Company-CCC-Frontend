import React from 'react';
import '../css/Sidebar.css';

class Sidebar extends React.Component{
state={
    collapsed: true 
}

handleClick = () => {
    this.state.collapsed ? this.setState({collapsed:false}): this.setState({collapsed:true});
    }

handleSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("This function will be inplemented in future sprints");
}

handleOnSaleGames = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("This function will be inplemented in future sprints");
}

handleSteamGames = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("This function will be inplemented in future sprints");

}

render(){
    if(!this.state.collapsed){
        return(
            <div className="side-bar-container" onClick={this.handleClick}>
                <h2>FlatFish TV</h2>
                <div className="side-bar-button" onClick={(e) => this.handleSearch(e)}>Click to search</div>
                <div>Home button</div>
                <h3>Categories</h3>
                <div className="side-bar-button" onClick={(e) => this.handleOnSaleGames(e)}>On sale</div>
                <div className="side-bar-button" onClick={(e) => this.handleSteamGames(e)}>Steam Games</div>
            </div>
        )
    }
    return(
        <div className="side-bar-container-collapsed" onClick={this.handleClick}>
            <div className="side-bar-button" onClick={(e) => this.handleSearch(e)}>icon</div>
        </div>
    )
}

}
export default Sidebar;