import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../ContactBox.css';



class News extends Component {
  
    render() {
        return(
            
            <MediaQuery minDeviceWidth={1025}>
             {(matches) => {

            const STYLE = matches? 
                textHolder :
                textHolderMob
            return(

            <div style={this.props.style} >
            <div style={STYLE} className="scroller">
            {this.renderText()}
            </div>
             </div>
            );
             }
            }
            </MediaQuery>
        );
    }

renderText = () => {
    return(
    <MediaQuery minDeviceWidth={1025}>
    {(matches)  => {
          const STYLE = matches ?
          textDesktop :
          textMobile
          const p1STYLE = matches ?
          p1Desk :
          p1Mob
          const p2STYLE = matches ?
          p2Desk :
          p2Mob
          const webmadeSTYLE = matches ?
          websitemadeDesk :
          websitemadeMob
          return(
            <p style={STYLE}> 
            <span style={p1STYLE}>Week 37: </span>
            The project is now in full motion and we have together with Zenterio decided to continue our work by developing a product that will 
            boost its catalogue by promoting games based on its popularity in a social video platform. 
            This will be done by incorporating Twitch.TV and Steam to create an HTML5 application. 

        
            </p>

          );

    }}
    </MediaQuery>
    );
}

}



const textHolder = {
    //marginRight: 'auto',
    display: 'flex',
    alignContent: 'center',
    alignSelf: 'center',
    width: '80%',
    height: '100%',
    overflowY: 'auto',
    
}

const textHolderMob = {
    marginLeft: '3%',
    display: 'flex',
    alignContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    overflowY: 'auto',
}


const textDesktop ={
    fontSize: '1.8vw',
    color: 'white',
    fontFamily: 'Architects Daughter'

}

const textMobile ={
    fontSize: '2vh',
    color: 'white',
    fontFamily: 'Architects Daughter'

}

const p1Desk = {
    fontSize: '1.8vw',
    color: '#f489f3',
    fontFamily: 'Architects Daughter'

}

const p1Mob = {
    fontSize: '2vh',
    color: '#f489f3',
    fontFamily: 'Architects Daughter'

}

const p2Desk = {
    fontSize: '1.8vw',
    color: '#6decac',
    fontFamily: 'Audiowide'

}
const p2Mob ={
    fontSize: '2vh',
    color: '#6decac',
    fontFamily: 'Audiowide'

}

const websitemadeDesk ={
    fontSize: '1.2vw',
    color: 'white',
    fontFamily: 'Architects Daughter'

}

const websitemadeMob ={
    fontSize: '1.4vh',
    color: 'white',
    fontFamily: 'Architects Daughter'

}

  export default News;