import React, { Component } from 'react';
import '../headerbutton.css';
import MediaQuery from 'react-responsive';


class HeaderButton extends Component {
    render() {
        return(
            <div>
            {this.renderButton()}
            </div>
        );
    }

    renderButton = () => {
        
                         
        if (this.props.activeButtonNews === false || this.props.activeButtonAbout === false || this.props.activeButtonContact === false || this.props.activeButtonHome === false) {
            
            return(
                <MediaQuery minDeviceWidth={1025}>
                {(matches) => {
                 const STYLE = matches? 
                   headerButtonStyleDes :
                    headerButtonStyleMob
                return(
                
                <button 
                 style={STYLE}
                 onClick={this.props.onClick} >
                {this.props.name}
                </button>
                );
                }}
                </MediaQuery>
            );
        
        } else {
            return(
                <MediaQuery minDeviceWidth={1025}>
                {(matches) => {
                 const STYLE = matches? 
                   headerButtonActDes :
                    headerButtonActMob
                return(
                <button style={STYLE} className="headerButton" onClick={this.props.onClick}>
                {this.props.name}
                </button>
                );
            }}
            </MediaQuery>
            );

        }
    }

    
}

const buttonHolder ={
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    
}

const headerButtonStyleDes = {
    display: 'flex',
    width: '100%',
    //marginRight: '60%',
    position: 'aboslute',
    justifyContent: 'center',
    background: 'transparent',
    border: 1,
    outline: 0,
    color: 'white',
    fontSize: '2vh',
    fontFamily: 'Raleway',
    
   
   
}

const headerButtonStyleMob = {
    display: 'flex',
    width: '100%',
    marginRight: '2%',
    position: 'aboslute',
    justifyContent: 'center',
    background: 'transparent',
    border: 1,
    outline: 0,
    color: 'white',
    fontSize: '1.5vh',
    fontFamily: 'Raleway',
   
   
}

const headerButtonActDes = {
    display: 'flex',
    width: '100%',
    marginRight: '2%',
    position: 'aboslute',
    justifyContent: 'center',
    background: 'transparent',
    border: 0,
    outline: 0,
    color: 'purple',
    fontSize: '2vh',
    fontFamily: 'Raleway',
}

const headerButtonActMob = {
    display: 'flex',
    width: '100%',
    marginRight: '2%',
    position: 'aboslute',
    justifyContent: 'center',
    background: 'transparent',
    border: 0,
    outline: 0,
    color: 'purple',
    fontSize: '1.5vh',
    fontFamily: 'Raleway',
}

export default HeaderButton;