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

//FR007: Game picture pressed
//Desc: The button for a specific game shall when pressed redirect the user to that specific game’s page.
describe('FR007: Game picture pressed (Homepage component)', () => {
    it('The button for a specific game shall when pressed redirect the user to that specific game’s page.', () => {
      const gameSpy = sinon.spy();
      const wrapper = shallow( <HomePage popularGameOnClick={gameSpy(0)} />);
      //Home page is displayed when app is loaded
      expect(wrapper.state().currentPage).to.equal("HomePage");
      //Mock variables needed for rendering PopularGame
      var mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
      var mockGameArray = [{ name: "fooGame", id: 23, steam: true }, { name: "barGame", id: 12, steam: false }];
      wrapper.setState({ popularGameArray: mockGameArray, categories: mockCategories });
      wrapper.instance().renderGames();
      //Renders correct number of games
      expect(wrapper.find(PopularGame)).to.have.length(2);
      //Clicking the a popular game component redirects you to that gamepage
      wrapper.find(PopularGame).first().simulate('click');
      expect(gameSpy.calledOnce).to.equal(true);
      expect(wrapper.state().currentPage).to.equal("GamePage");
      //One stream is playing on game page
      expect(wrapper.find(GamePage).dive().find(MediaWindow).dive()).to.have.length(1);
      //Checking that game page contains correct game
      expect(wrapper.find(GamePage).dive().find('.game-name-header').text()).to.equal(" fooGame ");
    });
  });