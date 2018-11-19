import 'jsdom-global/register'; //to be able to mount React components
import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import HomePage from '../../src/pages/HomePage.js';
import GamePage from '../../src/pages/GamePage.js';
import MediaWindow from '../../src/molecules/MediaWindow.js';
import PopularGame from '../../src/molecules/PopularGame';
import ReactPlayer from 'react-player';
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

describe('FR007: Game picture pressed', () => {
    it('Home page is rendered correctly', () => {
      const homepageSpy = sinon.spy();
      const wrapper = shallow(<HomePage/>);
      const inst = wrapper.instance();
      expect(inst).to.be.instanceOf(HomePage);
      expect(wrapper.state().currentPage).to.equal("HomePage");
    });
  });

describe('FR007: Game picture pressed', () => {
    it('The button for a specific game shall when pressed redirect the user to that specific game’s page.', () => {
      const gameSpy = sinon.spy();
      const wrapper = shallow( <HomePage popularGameOnClick={gameSpy(0)} />);
      expect(wrapper.state().currentPage).to.equal("HomePage");
      var mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
      var mockGameArray = [{ name: "fooGame", id: 23, steam: true }, { name: "barGame", id: 12, steam: false }];
      wrapper.setState({ popularGameArray: mockGameArray, categories: mockCategories }); //setting up mock games for rendering
      wrapper.instance().renderGames();
      expect(wrapper.find(PopularGame)).to.have.length(2);
      wrapper.find(PopularGame).first().simulate('click');
      expect(gameSpy.calledOnce).to.equal(true);
      expect(wrapper.state().currentPage).to.equal("GamePage");
      expect(wrapper.find(GamePage).dive().find(MediaWindow).dive()).to.have.length(1); //one stream is playing
      //expect(wrapper.find(GamePage).props().streamName).to.equal("fooGame");
      //console.log(wrapper.find(GamePage).dive().find(MediaWindow).dive().find(ReactPlayer).props());
    });
  });
