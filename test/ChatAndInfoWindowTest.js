const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
//const chatAndInfoWindow = require('../src/organisms/ChatAndInfoWindow');
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ChatAndInfoWindow from '../src/organisms/ChatAndInfoWindow.js';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


/*describe('FR029: Test ChatAndInfoWindow class', () =>{
  it('ChatAndInfoWindow should have a buy button', () => {
    //const state = {
    //        showChat: true,
  //          showInfo: false
  //  }
    //let wrapper = shallow(<ChatAndInfoWindow/>, {state}).dive({state});
    //console.log(wrapper.state());
    //wrapper.find('Button').simulate('click');//it finds Button the InfoWindow class
  });
});
*/

//tests of different imports, seems like components with state variables can't be imported? Compiler problem, can be solved with jest/babel/changed babelrc?
//const thumbnail = require('../src/atoms/Thumbnail.js'); [works]
//import ChatAndInfoWindow from '../src/organisms/ChatAndInfoWindow.js'; [doesn't work]
//const GamePage = require('../src/organisms/Sidebar.js'); //[doesn't work.]
