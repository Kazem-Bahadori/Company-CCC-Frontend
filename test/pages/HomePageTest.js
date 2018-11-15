import 'jsdom-global/register'; //to be able to mount React components
import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import HomePage from '../../src/pages/HomePage.js';
import sinon from 'sinon';

//how to access componentDidMount and see if it is executed correctly?
describe('FR007: Game picture pressed', () => {
  it('The button for a specific game shall when pressed redirect the user to that specific game’s page.', () => {
    const homepageSpy = sinon.spy();
    const wrapper = shallow(<HomePage renderGames={homepageSpy}/>);
    const inst = wrapper.instance();
    expect(inst).to.be.instanceOf(HomePage);
    console.log(wrapper.find('.container').children());
    //expect(wrapper.find(PopularGame)).to.have.length(1);//.simulate('click');


    //const wrapper = mount(<GamePage />);

    //console.log(inst);
    //expect(inst).to.be.instanceOf(GamePage);
    //console.log(wrapper.currentStream);
    //wrapper.find(currentStream);
    //wrapper.find();
  });
});
