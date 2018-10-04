import React, { Component } from 'react';
import {Animated} from 'react-animated-css';

class Letter extends Component {

    render() {
        
        return(
          
            <h1 style={this.props.style}> {this.props.title} </h1>
          
            
        );
    } 
}



const ball = {
    width: '200px',
    height: '200px',
    backgroundColor: 'purple',
    borderRadius: '50%',
    position: 'absolute',
    transition: 'height 2s ease-in, opacity 0.5s ease-in',
  }

  export default Letter;