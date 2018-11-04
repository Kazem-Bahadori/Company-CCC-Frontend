const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
//const chatAndInfoWindow = require('../src/organisms/ChatAndInfoWindow');
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ChatAndInfoWindow from '../src/organisms/ChatAndInfoWindow.js';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('FR062: Test ChatAndInfoWindow class', () =>{
  it('ChatAndInfoWindow should display chat and hide info at loading', () => {
    let wrapper = shallow(<ChatAndInfoWindow/>);
    expect(wrapper.state('showChat')).to.equal(true);
    expect(wrapper.state('showInfo')).to.equal(false);
    expect(wrapper.find('.button-style')).to.have.length(2);
    //TODO: write tests for simulating clicks and checking text on Chat & Game Info-buttons (same class)
    //expect(wrapper.find('.button-style')[0].text()).to.equal(' Chat ');//.simulate('click');//.to.equal(' Chat ');
  });
});

describe('FR029: Test ChatAndInfoWindow class', () =>{
  it('ChatAndInfoWindow should have a buy button', () => {
    let wrapper = shallow(<ChatAndInfoWindow/>);
    //expect(wrapper.find('button')).to.have.length(3);
    expect(wrapper.find('.buy-on-steam-btn').text()).to.equal(' Buy on Steam ');
    wrapper.find('.buy-on-steam-btn').simulate('click');
  });
});

//tests of different imports, seems like components with state variables can't be imported? Compiler problem, can be solved with jest/babel/changed babelrc?
//const thumbnail = require('../src/atoms/Thumbnail.js'); [works]
//import ChatAndInfoWindow from '../src/organisms/ChatAndInfoWindow.js'; [doesn't work]
//const GamePage = require('../src/organisms/Sidebar.js'); //[doesn't work.]
