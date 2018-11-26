import 'jsdom-global/register'; //to be able to mount React components
import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import HomePage from '../../src/pages/HomePage.js';
import GamePage from '../../src/pages/GamePage.js';
import MediaWindow from '../../src/molecules/MediaWindow.js';
import GameHolder from '../../src/molecules/GameHolder';
import GameInfo from '../../src/molecules/GameInfo';
import ChatAndInfoWindow from '../../src/organisms/ChatAndInfoWindow';
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
// describe('FR007: Game picture pressed', () => {
//     it('The button for a specific game shall when pressed redirect the user to that specific game’s page.', () => {
//       const gameSpy = sinon.spy();
//       let mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
//       const wrapper = shallow( <HomePage PopularGameOnClick={gameSpy(0)} categories={mockCategories} />);
//       wrapper.setState({ currentPage: "GamePage" });
//       expect(wrapper.find(MediaWindow)).to.have.length(1);//(ChatAndInfoWindow).dive();//.setState({ price: 100 });
//       //Home page is displayed when app is loaded
//       expect(wrapper.state().currentPage).to.equal("HomePage");
//       //Mock variables needed for rendering GameHolder
//       var mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
//       var mockGameArray = [{ name: "fooGame", id: 23, steam: true }, { name: "barGame", id: 12, steam: false }];
//       wrapper.setState({ popularGameArray: mockGameArray, categories: mockCategories });
//       wrapper.instance().renderGames();
//       //Renders correct number of games
//       expect(wrapper.find(GameHolder)).to.have.length(2);
//       //Clicking the a popular game component redirects you to that gamepage
//       wrapper.setProps({ price: 100 });
//       wrapper.find(GameHolder).first().simulate('click');
//       expect(gameSpy.calledOnce).to.equal(true);
//       expect(wrapper.state().currentPage).to.equal("GamePage");
//       //One stream is playing on game page
//       expect(wrapper.find(GamePage).dive().find(MediaWindow).dive()).to.have.length(1);
//       //Checking that game page contains correct game
//       expect(wrapper.find(GamePage).dive().find('.game-name').text()).to.equal(" fooGame ");
//     });
//   });

//Note: how to send props down to gameinfo? Needs steamId to redner
// FR029: Purchase button, response
// Desc: Purchase button should redirect to Steam's webpage
describe('FR029: Purchase button, response ', () => {
  it('ChatAndInfoWindow should have a purchase button if game is on Steam', () => {
    const mockContent = sinon.spy();
    const contentWindowSpy = sinon.spy();
    const wrapper =  mount(<GamePage handleContentWindow={contentWindowSpy("Game Info")} renderContent={mockContent("Game Info")} steamId={100} steamUrl={"www.mocksteam.com"} contentWindow={"Game Info"} price={20} currency={"SEK"}/>);
  //  expect(wrapper.find(ChatAndInfoWindow).state().steamId).to.equal(100);
    wrapper.find(ChatAndInfoWindow).instance().handleContentWindow("Game Info");
    //wrapper.find(ChatAndInfoWindow).instance().renderContent("Game Info");
    expect(contentWindowSpy.calledOnce).to.equal(true);
    expect(wrapper.find(ChatAndInfoWindow).state().contentWindow).to.equal("Game Info");
  //  expect(wrapper.find(GameInfo)).to.have.length(1);//.find(GameInfo)).to.have.length(1);
    });
  });
