import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import '../ContactBox.css';



class AboutUs extends Component {
  
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
         At C³ we seek to deliver the best media experiences to our customers.
         Being one of the leading media distributers at Linköping University we 
         attract top talent from around campus to form a workplace with high expertise and ambitious individuals from all backgrounds. <br/> <br/>

<span style={p1STYLE}>C³ is formed by its three defining pillars:<br/></span> <span style={p2STYLE}>Creative Connected Communication.<br/><br/></span>
 Creativity is a key factor in all of our employees and <span style={p1STYLE}>we </span> always strive to develop new
  and innovative solutions to reach out to a broader audience. <br/> <br/>
  At C³, constant communication is vital for us and our customers and staying connected with the industry trends is a requirement as a C³ employee. <br/> 
With experts from top programs at campus, our empoyees don’t stay up to date with the current industry trends - we <span style={p1STYLE}>create</span> the future trends. <br/> <br/>

Constant communication is what built this company, establishing important relationships in the industry and making sure that customer satisfaction always is met.

Today C³ consists of 25 consultants working full-time to deliver the best media experience <span style={p1STYLE}>for you </span>.
            <br/>
            <br/>
       <span style={webmadeSTYLE}> 
       // Website is made by: Developer, Johan de Groot <br/>
       // Text is written by: Product Owner, Saam Cedighi <br/>
       // Server is hosted by: Developer, Armin Ehrenwall
        </span>
        
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

  export default AboutUs;