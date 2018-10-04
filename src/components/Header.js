import React, { Component } from 'react';
import HeaderButton from './HeaderButton';
import MediaQuery from 'react-responsive';
import '../App.css';
import c3Logo from '../img/c3logo.png';


class Header extends Component {
    render() {
        return(
<MediaQuery minDeviceWidth={767}>
  {(matches) => {

      const theSTYLE = matches? 
      headerDesktopStyle :
      headerMobileStyle

      const buttonHolderSTYLE = matches?
      buttonHolderDesktop :
      buttonHolderMobile
     
      return(
      <div style={theSTYLE}>
      <div style={logoHolder} onClick={this.props.onLogoClick}>
      <img style={logoStyle} src={c3Logo} alt="Logo"/>
      </div>
      <div style={buttonHolderSTYLE}>
      <HeaderButton name='HOME' onClick={this.props.onLogoClick} activeButtonHome={this.props.activeButtonHome} />
      <p style={buttonSplitter}> l </p>
      <HeaderButton name='NEWS' onClick={this.props.onNewsClick} activeButtonNews={this.props.activeButtonNews} />
      <p style={buttonSplitter}> l </p>
      <HeaderButton name='ABOUT' onClick={this.props.onAboutClick} activeButtonAbout={this.props.activeButtonAbout} />
      <p style={buttonSplitter}> l </p>
      <HeaderButton name='CONTACT' onClick={this.props.onContactClick} activeButtonContact={this.props.activeButtonContact}/>
      </div>
      </div>
      );
    
  }}
</MediaQuery>

);
}

}

const headerMobileStyle = {
    height: '15vh',
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 'auto',
}

const headerDesktopStyle ={
    height: '120px',
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 'auto',
}

const buttonHolderDesktop = {
    display: 'flex',
    height: '100px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    marginRight: '3%',
}

const buttonHolderMobile = {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    //marginLeft: 'auto',
    
    
}
const logoHolder = {
    display: 'flex',
    height: '90%',
    width: '120px',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    
}
const logoStyle  = {
    height: '100%',
    display: 'flex',
}

const buttonSplitter = {
    fontSize: '6vh',
    color: 'white',
}
 

  





 

export default Header;