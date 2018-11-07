import 'jsdom-global/register'; //to be able to mount React components
import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import GamePage from '../src/pages/GamePage.js';

//how to access componentDidMount and see if it is executed correctly?
describe('FR024: Active stream on game page', () =>{
  it('The game page shall display an active twitch stream when loaded', () => {
    const wrapper = shallow(<GamePage />);
    const inst = wrapper.instance();
    expect(inst).to.be.instanceOf(GamePage);

    //const wrapper = mount(<GamePage />);

    //console.log(inst);
    //expect(inst).to.be.instanceOf(GamePage);
    //console.log(wrapper.currentStream);
    //wrapper.find(currentStream);
    //wrapper.find();
  });
});
