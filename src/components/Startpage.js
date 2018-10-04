import React, { Component } from 'react';
import '../startpage.css';
import '../Typist.css';
import background from '../img/background.png';
import Header from './Header';
import AboutUs from './AboutUs';
import News from './News';
import ContactBox from './ContactBox';
import MediaQuery from 'react-responsive';
import {Animated} from 'react-animated-css';
import Typist from 'react-typist';


class Startpage extends Component {

  state = {
    showAboutMe: false,
    showContact: false,
    showNews: false,
    activeButtonNews: false,
    activeButtonAbout: false,
    activeButtonContact: false,
    activeButtonHome: true,
     
  }


  render() {
    return (
      <div>
        <div style={containerDivStyle} >
        
            <Header
            onNewsClick={this.onNewsClicked}
            onAboutClick={this.onAboutMeClicked} 
            onContactClick={this.onContactClicked}
            onLogoClick={this.onLogoClick}
            activeButtonHome={this.state.activeButtonHome}
            activeButtonNews={this.state.activeButtonNews}
            activeButtonAbout={this.state.activeButtonAbout} 
            activeButtonContact={this.state.activeButtonContact} />
            <div style={centerContent}>
             {this.renderName()}
             
            </div>
           
        </div>
          <div style={boxContainer}>
            {this.renderNews()}
            {this.renderAboutMe()}
            {this.renderContact()}
            
          </div>
      </div>

    );
  }

  
  renderName = () => {
      return(
        <Typist className="typistStyle" startDelay="1000" stdTypingDelay="5">
         
          Creative Connected <br/> Communication.
          
          </Typist>
          

          
      ); 
  }

  onLogoClick = () => {
    this.setState({showAboutMe: false});
    this.setState({showContact: false});
    this.setState({showNews: false});
    this.setState({activeButtonNews: false});
    this.setState({activeButtonAbout: false});
    this.setState({activeButtonContact: false});
    this.setState({activeButtonHome: true});
  }

  onHomeClick = () => {

  }

  onAboutMeClicked = () => {
    
    if (this.state.showAboutMe === true) {
      this.setState({showAboutMe: false})
      this.setState({activeButtonAbout: false});
      this.setState({activeButtonHome: true});

    } if (this.state.showAboutMe === false) {
    this.setState({showAboutMe: true});
    this.setState({activeButtonNews: false});
    this.setState({activeButtonAbout: true});
    this.setState({activeButtonContact: false});
    this.setState({activeButtonHome: false});
    
    } if (this.state.showContact === true || this.state.showNews === true) {
    this.setState({showContact: false});
    this.setState({showNews: false})
    this.setState({activeButtonNews: false});
    this.setState({activeButtonAbout: true});
    this.setState({activeButtonContact: false});
    this.setState({activeButtonHome: false});
  }
    }

    onContactClicked = () => {
      if (this.state.showContact === true) {
        this.setState({showContact: false});
        this.setState({activeButtonContact: false});
        this.setState({activeButtonHome: true});
      
      }  if (this.state.showContact === false) {
      this.setState({showContact: true});
      this.setState({activeButtonContact: true});
      this.setState({activeButtonNews: false});
      this.setState({activeButtonAbout: false});
      this.setState({activeButtonHome: false});

      }  if (this.state.showAboutMe === true || this.state.showNews === true) {
        this.setState({showAboutMe: false})
        this.setState({showNews: false})
        this.setState({activeButtonContact: true});
        this.setState({activeButtonNews: false});
        this.setState({activeButtonAbout: false});
        this.setState({activeButtonHome: false});
      } 
    }

    onNewsClicked = () => {
      if (this.state.showNews === true) {
        this.setState({showNews: false});
        this.setState({activeButtonNews: false});
        this.setState({activeButtonHome: true});
      
      }  if (this.state.showNews === false) {
      this.setState({showNews: true});
      this.setState({activeButtonNews: true});
      this.setState({activeButtonAbout: false});
      this.setState({activeButtonContact: false});
      this.setState({activeButtonHome: false});

      }  if (this.state.showAboutMe === true || this.state.showContact === true ) {
        this.setState({showAboutMe: false})
        this.setState({showContact: false})
        this.setState({activeButtonNews: true});
        this.setState({activeButtonContact: false});
        this.setState({activeButtonAbout: false});
        this.setState({activeButtonHome: false});
      } 
    }

    renderNews = () => {
      if (this.state.showNews === false) {
      return null;
     } else {
       return(
      
       <MediaQuery minDeviceWidth={1025}>
         {(matches) => {
          const STYLE = matches? 
          aboutMeDesktop :
          aboutMeMobile
          return(
      
       <Animated style={aboutAnimation} animationIn="slideInDown" animationOut="slideOutUp">
       <div style={STYLE}>
       <News style={aboutmeBoxStyle} />
     
       </div>
       </Animated>
       
          );
         }}
       </MediaQuery>
       
     );
   }
 }


  renderAboutMe = () => {
     if (this.state.showAboutMe === false) {
     return null;
    } else {
      return(
     
      <MediaQuery minDeviceWidth={1025}>
        {(matches) => {
         const STYLE = matches? 
         aboutMeDesktop :
         aboutMeMobile
         return(
     
      <Animated style={aboutAnimation} animationIn="slideInDown" animationOut="slideOutUp">
      <div style={STYLE}>
      <AboutUs style={aboutmeBoxStyle} />
    
      </div>
      </Animated>
      
         );
        }}
      </MediaQuery>
      
    );
  }
}

renderContact = () => {
  if (this.state.showContact === false) {
  return null;
 } else {
   return(
  
   <MediaQuery minDeviceWidth={1025}>
     {(matches) => {
      const STYLE = matches? 
      portfolioDesktop :
      portfolioMobile
      return(

   <Animated style={portAnimation} animationIn="slideInDown">
   <div style={STYLE}  >
   <ContactBox />
   </div>
   </Animated>
      );
     }}
   </MediaQuery>
   
 );
  }
}

}

const containerDivStyle ={
  backgroundColor: 'black',
  opacity: '1',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'absolute',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
 
}

const madeByStyle= {
  display: 'flex',
  height: '5%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 'auto',
}

const centerContent = {
  display: 'flex',
  height: '50%',
  width: '90%',
  position: 'absolute',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'row',
}

const boxContainer ={
  display: 'flex',
  width: '100%',
  height: '80%',
  position: 'fixed',
  marginTop: '15vh',
  justifyContent: 'center',
}

const aboutMeDesktop = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  transition: 'height 2s ease-in, opacity 0.5s ease-in',
  //borderColor: 'purple',
  //borderStyle: 'solid',
  
}

const aboutMeMobile = {
  width: '100%',
  height: '70vh',
  display: 'flex',
  position: 'relative',
  transition: 'height 0.5s ease-out',
  //borderStyle: 'solid',
  //borderColor:'purple'
}

const aboutmeBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.9)',
}

const aboutAnimation = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const portfolioDesktop = {
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'absolute',
  //flexDirection: 'row',
  justifyContent: 'center',
  transition: 'height 2s ease-in, opacity 0.5s ease-in',
 
}

const portfolioMobile = {
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'relative',
  transition: 'height 0.5s ease-out',
  justifyContent: 'center',
}

const portAnimation = {
  display:'flex',
  width:'100%',
  alignContent: 'center',
  justifyContent: 'center'
}





export default Startpage;
