import React from 'react';
import '../css/Sidebar.css';
import fish from '../images/fishtv4_yes.png';
import search from '../images/search_icon.png';
import arrowLeft from '../images/arrow-left.png'
import arrowRight from '../images/arrow-right.png'

class Sidebar extends React.Component{
state = {
    collapsed: true,
    activeCategory: false,
}

handleClick = () => {
    if(this.state.collapsed){
        document.addEventListener('click', this.handleClickOutside,false);
    } else {
        document.removeEventListener('click', this.handleClickOutside, false);
    }
    this.setState(prevState => ({collapsed: !prevState.collapsed})); 
    }

handleClickOutside = (e) => {
    if (this.panel.contains(e.target)) {
        return;
      }
    this.handleClick(e);
}

handleSearch = (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    alert("This function will be inplemented in future sprints");
}

handleCategory = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("This function will be inplemented in future sprints");
}

render(){
    if(!this.state.collapsed){
        return(
            <div className="side-bar-container">
                <div className="side-bar-content"  ref={panel =>{this.panel = panel}}  onClick={this.handleClick}>
                    <div className="side-bar-image-container">
                        <img className="side-bar-image" onClick={this.props.HomeButtonResponse} src= {fish} alt="FlatFishTV"/>
                    </div>
                    <div className="side-bar-search" onClick={(e) => this.handleSearch(e)}>
                        <img className="side-bar-search-image" src= {search} alt="Search"/>
                        Search
                    </div>
                    <div className="side-bar-button" onClick={(e) => this.handleCategory(e)}>Top Streams</div>
                    <div className="side-bar-button" onClick={(e) => this.handleCategory(e)}>Category 1</div>
                    <div className="side-bar-button" onClick={(e) => this.handleCategory(e)}>Category 2</div>
                    <div className="side-bar-button" onClick={(e) => this.handleCategory(e)}>Category 3</div>
                </div>
                <div className="side-bar-arrow">
                    <img className="side-bar-arrow-image" src= {arrowLeft} alt="Arrow"/>
                </div>
            </div>
        )
    }
    return(
        <div className="side-bar-container-collapsed" onClick={this.handleClick}>
            <img className="side-bar-arrow-image" src= {arrowRight} alt="Arrow"/>
        </div>
    )
}

}
export default Sidebar;