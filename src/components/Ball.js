import React, { Component } from 'react';
import {Animated} from 'react-animated-css';

class Ball extends Component {

    render() {
        
        return(
            <Animated style={ball} animationIn="bounceInLeft" isVisible={true} animationInDelay={2000}>
            <div>
            
            </div>
            </Animated>
            
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

  export default Ball;