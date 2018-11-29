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
<<<<<<< HEAD
=======
import Thumbnail from '../../src/atoms/Thumbnail';
>>>>>>> dev
import TwitchChat from '../../src/molecules/TwitchChat.js';
import ReactPlayer from 'react-player';
import sinon from 'sinon';

//FR024: Active Stream on GamePage.
//Desc: Game page shall display an active stream when loaded
describe('FR024: Active stream on game page, part I (GamePage component)', () => {
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

<<<<<<< HEAD

//FR007: Game picture pressed
//Desc: The button for a specific game shall when pressed redirect the user to that specific game’s page.
// describe('FR007: Game picture pressed', () => {
//     it('The button for a specific game shall when pressed redirect the user to that specific game’s page.', () => {
//       const gameSpy = sinon.spy();
//       let mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
//       const wrapper = shallow( <HomePage PopularGameOnClick={gameSpy(0)} categories={mockCategories} />);
//       wrapper.setState({ currentPage: "GamePage" });
//
//       expect(wrapper.find(MediaWindow)).to.have.length(1);
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

=======
>>>>>>> dev
// FR029: Purchase button, response
// Desc: Purchase button should redirect to Steam's webpage
describe('FR029: Purchase button, response part I (GamePage) ', () => {
  it('ChatAndInfoWindow should display GameInfo if a steamId exist', () => {
    const mockContent = sinon.spy(); //note: use spies or not?
    const contentWindowSpy = sinon.spy();
    const wrapper =  mount(<GamePage handleContentWindow={contentWindowSpy("Game Info")} renderContent={mockContent("Game Info")}/>);
    //Set state of ChatAndInfoWindow to Game Info
    wrapper.find(ChatAndInfoWindow).instance().handleContentWindow("Game Info");
    //Props needed to render GameInfo
    wrapper.setProps({ steamId: 100, steamUrl: "www.mocksteam.com", price: 20, currency: "SEK" });
    //Assure steamId is set to 100
    expect(wrapper.props().steamId).to.equal(100);
    //Assure state of ChatAndInfoWindow is Game Info
    expect(wrapper.find(ChatAndInfoWindow).state().contentWindow).to.equal("Game Info");
    //Assure that GameInfo is rendered
    });
  });
<<<<<<< HEAD
=======

  // describe('FR056: Switch streams', () => {
  //   it('The application shall when the user selects an optional stream play that selected stream', () => {
  //       const gameSpy = sinon.spy();
  //   //    let mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
  //       const mockViewCountArray = [100, 20, 30];
  //       const mockStreamDataArray = [{ title: "mockGame", user_name: "mockstreamer", thumbnail_url: "www.mock.com"}, { title: "fooGame", user_name: "fooUser", thumbnail_url: "www.foo.com" }, { title: "barGame", user_name: "barUser", thumbnail_url: "www.bar.com" }];
  //       let mockThumbnailArray =[];
  //       for(let i=0; i<mockStreamDataArray.length; i++){
  //         mockThumbnailArray[i]=(mockStreamDataArray[i].thumbnail_url);
  //       };
  //       const wrapper = shallow( <GamePage viewCountArray={mockViewCountArray} streamDataArray={mockStreamDataArray} thumbnailArray={mockThumbnailArray} />);
  //
  //       console.log("hello world");
  //       wrapper.setState({ streamName: 'mockstreamer' });
  //       console.log(wrapper.state().streamName);
  //       mockThumbnailArray.map((thumbnail, index) => {
  //         console.log(mockViewCountArray[index])
  //         console.log(mockStreamDataArray[index].title)
  //         console.log(mockStreamDataArray[index].user_name)
  //       });
  //       // console.log(wrapper.props().streamDataArray[0].user_name);
  //     //  expect(wrapper.find(Thumbnail)).to.have.length(1);
  //       //NOTE: doesn't render thumbnail. Find Thumbnail-window-holder though.
  //     });
  //   });
>>>>>>> dev
