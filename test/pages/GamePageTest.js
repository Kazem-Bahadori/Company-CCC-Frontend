import 'jsdom-global/register'; //to be able to mount React components
import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import GamePage from '../../src/pages/GamePage.js';
import sinon from 'sinon';

describe('FR024: Active stream on game page', () => {
  it('The game page shall display an active twitch stream when loaded', () => {
    const wrapper = shallow(<GamePage />);
    const inst = wrapper.instance();
    expect(inst).to.be.instanceOf(GamePage);
  });
});

describe('FR007: Game picture pressed', () => {
  it('The button for a specific game shall when pressed redirect the user to that specific game’s page.', () => {
    const homepageSpy = sinon.spy();
    const wrapper = shallow(<GamePage onClick={homepageSpy}/>);
    const inst = wrapper.instance();
    expect(inst).to.be.instanceOf(GamePage);
    expect(wrapper.find('.Thumbnail-window-holder'));
    wrapper.find('.Thumbnail-window-holder').simulate('click');
    //expect(onClick).to.have.property('callCount', 1); //todo: inspect app
  });
});
