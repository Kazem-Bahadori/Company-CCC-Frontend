import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class SocialMediaButton extends Component {
    render() {
        return(
            <a style={linkedInAnc} href={this.props.linkTo}>
            <img style={linkedInImage} src={this.props.thumbNail}>
             </img>
             </a>
        );
    }
}

const linkedInAnc = {
    display: 'flex',
    width: 80,
    height: 80,
    borderWidth: 1,
    alignSelf: 'center',
    position: 'relative',
   
}

const linkedInImage = {
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'relative',
}

export default SocialMediaButton
