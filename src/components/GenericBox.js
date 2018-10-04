import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import SocialMediaButton from './SocialMediaButton';



class ContactBox extends Component {
  
    render() {
        return(
            
            <div style={this.props.style}>
            <div style={textHolder}>
            
            {this.renderText()}
            </div>
             </div>

        );
    }

renderText = () => {
    return(
    <MediaQuery minDeviceWidth={1025}>
    {(matches)  => {
          const STYLE = matches ?
          textDesktop :
          textMobile
          return(
              <div>
            <p style={STYLE}> 
            0768554854 <br/>
            Johandg7@gmail.com <br/>
            </p>
              <div style={socialMediaHolder}>
              <SocialMediaButton 
              thumbNail='http://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png'
              linkTo='https://www.linkedin.com/in/johan-de-groot-245223128/?trk=public-profile-join-page' 
              />
               <SocialMediaButton 
              thumbNail='http://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png'
              linkTo='https://www.linkedin.com/in/johan-de-groot-245223128/?trk=public-profile-join-page' 
              />
              <SocialMediaButton 
              thumbNail='http://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png'
              linkTo='https://www.linkedin.com/in/johan-de-groot-245223128/?trk=public-profile-join-page' 
              />
              </div>
              </div>

          );

    }}
    </MediaQuery>
    );
}

}

const textHolder = {
    //marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '100%',
    
}

const textDesktop ={
    fontSize: '1.4vw',
    color: 'white',
    fontFamily: 'Architects Daughter'

}

const textMobile = {
    fontSize: '2vh',
    color: 'white',
    fontFamily: 'Architects Daughter'

}

const socialMediaHolder ={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '20vw',
    height: '6vw',
    position: 'relative',
     
  }

  export default ContactBox;