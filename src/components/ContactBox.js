import React, { Component } from 'react';
import Contact from './Contact'
import Typist from 'react-typist';
import MediaQuery from 'react-responsive';

import johandegroot from '../img/jag.jpg';
import saamcedighi from '../img/saamcedighi.jpg';
import ellikajerna from '../img/ellikajerna.jpg';
import erikkarlstrom from '../img/erikkarlstrom.jpg';
import eirikfunnemark from '../img/eirikfunnemark.jpg';
import hedvigolander from '../img/hedvigolander.jpg';
import kazembahadori from '../img/kazembahadori.jpg';
import nilsjonsson from '../img/nilsjonsson.jpg';
import ylvanorrby from '../img/ylvanorrby.jpg';
import oscarhubertsson from '../img/oscarhubertsson.jpg';
import axelekenstierna from '../img/axelekenstierna.jpg';
import rickardhellenberg from '../img/rickardhellenberg.jpg';
import gullisphung from '../img/gullisphung.jpg';
import gustavbjornek from '../img/gustavbjornek.jpg';
import gustavwoxen from '../img/gustavwoxén.jpg';
import arminehrenwall from '../img/arminehrenwall.png';
import oscarlovgren from '../img/c3logo.png';
import joakimsporrong from '../img/joakimsporrong.jpg';
import kristingylseth from '../img/kristingylseth.jpg';
import carlgoransson from '../img/carlgoransson.jpg';
import pierrealkmyr from '../img/pierrealkmyr.jpg';
import hampusengstrom from '../img/hampusengstrom.jpg';
import simonrynningsjo from '../img/simonrynningsjo.jpg';
import linneatullin from '../img/linneatullin.jpg';
import hermansvensk from '../img/hermansvensk.jpg';


import '../ContactBox.css';
import '../TypistContact.css';




class ContactBox extends Component {

    render() {
        return(
            <MediaQuery minDeviceWidth={767}>
                {(matches) => {

                 const STYLE = matches? 
                 itemHolder :
                 itemHolderMob

                 return( 
                    <div style={STYLE} className="scroller">
                    <div style={centerContacts}>
                    
                    <div style={contactHeadingHolder}>
                        <Typist className="typistStyleContact" startDelay="1500" stdTypingDelay="5">
                         MANAGEMSNT.
                            <Typist.Backspace count={6} delay={200} />
                                EMENT.
                            
                        </Typist>
                    </div>

                    <Contact title='Product Owner' name='Saam Cedighi' email='saace092@student.liu.se' thumbNail={saamcedighi} alt='Saam Cedighi' />
                    <Contact title='Project Manager' name='Ellika Jernå' email='ellje538@student.liu.se' thumbNail={ellikajerna} alt='Ellika Jernå' />
                    <Contact title='Process Manager' name='Erik Karlström' email='erika712@student.liu.se' thumbNail={erikkarlstrom} alt='Erik Karlström' />
                    <Contact title='Line Manager' name='Eirik Funnemark' email='eirfu235@student.liu.se' thumbNail={eirikfunnemark} alt='Eirik Funnemark' />
                    <Contact title='Quality Coord.' name='Hedvig Olander' email='hedol060@student.liu.se' thumbNail={hedvigolander} alt='Hedvig Olander' />
                    <Contact title='Config. Manager' name='Kazem Bahadori' email='kazba438@student.liu.se' thumbNail={kazembahadori} alt='Kazem Bahadori' />
                    <Contact title='Deploy. Manager' name='Gustav Björnek' email='gusbj829@student.liu.se' thumbNail={gustavbjornek} alt='Gustav Björnek' />
                    <Contact title='Lead Analyst' name='Nils Jonsson' email='niljo639@student.liu.se' thumbNail={nilsjonsson} alt='Nils Jonsson' />
                    <Contact title='Analyst' name='Ylva Norrby' email='ylvno212@student.liu.se' thumbNail={ylvanorrby} alt='Ylva Norrby' />
                    <Contact title='Analyst' name='Oscar Hubertsson' email='oschu750@student.liu.se' thumbNail={oscarhubertsson} alt='Oscar Hubertsson' />
                    <Contact title='Analyst' name='Axel Ekenstierna' email='axeek359@student.liu.se' thumbNail={axelekenstierna} alt='Axel Ekenstierna' />
                    <Contact title='Analyst' name='Hampus Engström' email='hamen287@student.liu.se' thumbNail={hampusengstrom} alt='Hampus Engström' />
                    <div style={contactHeadingHolder}>
                        <Typist className="typistStyleContact" startDelay="2200" stdTypingDelay="5">
                            DEVELOPMENT.
                        </Typist>
                    </div>

                    
                    
                    <Contact title='Architect' name='Rickard Hellenberg' email='riche828@student.liu.se' thumbNail={rickardhellenberg} alt='Rickard Hellenberg' />
                    <Contact title='Lead Designer' name='Gullis Phung' email='gulph714@student.liu.se' thumbNail={gullisphung} alt='Gullis Phung' />
                    <Contact title='Lead Developer' name='Johan de Groot' email='johde234@student.liu.se' thumbNail={johandegroot} alt='Johan de Groot' />
                    <Contact title='Lead Developer' name='Armin Ehrenwall' email='armeh223@student.liu.se' thumbNail={arminehrenwall} alt='Armin Ehrenwall' />
                    <Contact title='Developer' name='Oscar Lövgren' email='osclo118@student.liu.se' thumbNail={oscarlovgren} alt='Oscar Lövgren' />
                    <Contact title='Developer' name='Gustav Woxén' email='guswo721@student.liu.se' thumbNail={gustavwoxen} alt='Gustav Woxén ' />
                    <Contact title='Developer' name='Joakim Sporrong' email='joasp591@student.liu.se' thumbNail={joakimsporrong} alt='Joakim Sporrong' />
                    <Contact title='UX Designer' name='Kristin Gylseth' email='krigy604@student.liu.se' thumbNail={kristingylseth} alt='Kristin Gylseth' />
                    <Contact title='UX Designer' name='Carl Göransson' email='cargo482@student.liu.se' thumbNail={carlgoransson} alt='Carl Göransson' />
                    <Contact title='Test Leader' name='Pierre Alkmyr' email='pieal253@student.liu.se' thumbNail={pierrealkmyr} alt='Pierre Alkmyr' />
                    <Contact title='Tester' name='Simon Rynningsjö' email='simry196@student.liu.se' thumbNail={simonrynningsjo} alt='Simon Rynningsjö' />
                    <Contact title='Tester' name='Linnea Tullin' email='lintu069@student.liu.se' thumbNail={linneatullin} alt='Linnea Tullin' />
                    <Contact title='Tester' name='Herman Svensk' email='hersv911@student.liu.se' thumbNail={hermansvensk} alt='Herman Svensk' />
                    
                    </div>
                    </div>
                 );
                }
            }
            </MediaQuery>
        );
    }

}

const centerContacts = {
    display: 'flex',
    width: '1500px',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',

}

const itemHolder = {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    flexDirection: 'row',
    justifyContent: 'center',
    //flexWrap: 'wrap',
    overflowY: 'auto',

}

const contactHeadingHolder = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '3%',
    marginTop: '3%',

}

const itemHolderMob = {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overflowY: 'auto',
}

export default ContactBox;