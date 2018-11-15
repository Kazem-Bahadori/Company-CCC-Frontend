import 'jsdom-global/register'; //to be able to mount React components
import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import GamePage from '../../src/pages/GamePage.js';
import MediaWindow from '../../src/molecules/MediaWindow.js';
import sinon from 'sinon';

//FR024: Active Stream on GamePage.
//Desc: Game page shall display an active stream when loaded
describe('FR024: Active stream on game page (GamePage component)', () => {
  const wrapper = shallow(<GamePage />);
  it('The GamePage component is rendered correctly', () => {
    const inst = wrapper.instance();
    expect(inst).to.be.instanceOf(GamePage);
  });
  it('The GamePage contains relevant components', () => {
    expect(wrapper.find('.game-page-container')).to.have.length(1);
    expect(wrapper.find('.media-and-chat-holder')).to.have.length(1);
    expect(wrapper.find(MediaWindow)).to.have.length(1);
    });
  });

//TODO
//FR007: Game picture pressed
//Desc: "The button for a specific game shall when pressed redirect the user to that specific game’s page."
describe('FR007: Game picture pressed', () => {
  it('The button for a specific game shall when pressed redirect the user to that specific game’s page.', () => {
    const homepageSpy = sinon.spy();
    const wrapper = shallow(<GamePage onClick={homepageSpy}/>);
    const inst = wrapper.instance();
    expect(inst).to.be.instanceOf(GamePage);
    expect(wrapper.find('.Thumbnail-window-holder'));
    wrapper.find('.Thumbnail-window-holder').simulate('click');
    //assert(homepageSpy.called); //how to check if spy called or not?
    const onClick = wrapper.find('.Thumbnail-window-holder');
  });
});
