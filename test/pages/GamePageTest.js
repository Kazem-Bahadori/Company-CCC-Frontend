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
import Thumbnail from '../../src/atoms/Thumbnail';
import ThumbnailWindow from '../../src/molecules/ThumbnailWindow';
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

//FR056: Switch streams
//desc: The application shall when the user selects an optional stream play that selected stream
// describe('FR056: Switch streams', () => {
//    it('The application shall when the user selects an optional stream play that selected stream', () => {
//         const gameSpy = sinon.spy();
//     //    let mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
//         const mockViewCountArray = [100, 20, 30];
//         const mockStreamDataArray = [{ title: "mockGame", user_name: "mockstreamer", thumbnail_url: "www.mockGamemockGamemockGamemockGame.com"}, { title: "fooGame", user_name: "fooUser", thumbnail_url: "www.fooGamefooGamefooGamefooGame.com" }, { title: "barGame", user_name: "barUser", thumbnail_url: "www.barGamebarGamebarGamebarGame.com" }];
//         const mockThumbnailArray =[];
//         const mockCurrentStream = true;
//         for(let i=0; i<mockStreamDataArray.length; i++){
//           mockThumbnailArray[i]=(mockStreamDataArray[i].thumbnail_url);
//         };
//         const wrapper = shallow( <GamePage currentStream={mockCurrentStream} viewCountArray={mockViewCountArray} streamDataArray={mockStreamDataArray} thumbnailArray={mockThumbnailArray} />);
//         console.log("hello world");
//         wrapper.setState({ streamName: 'mockstreamer' });
//         console.log(wrapper.state().streamName);
//   //     console.log(wrapper.props().currentStream); //undefined
//         var nameLowerCase=(mockStreamDataArray[1].user_name).toLowerCase();
//         console.log(wrapper.props().streamName===nameLowerCase); //funkar, ej problem med currentStream...
//         mockThumbnailArray.map((thumbnail, index) => {
//           console.log(mockViewCountArray[index])
//           console.log(mockStreamDataArray[index].title)
//           console.log(mockStreamDataArray[index].user_name)
//         });
//         expect(wrapper.find('.Thumbnail-window-holder')).to.have.length(1);
//         //expect(wrapper.find(Thumbnail).first()).to.have.length(1);
//     //    expect(wrapper.find('.Thumbnail-window-holder').contains([ <div className="overlay-shadow"></div> ])).to.equal(true);
//         // console.log(wrapper.props().streamDataArray[0].user_name);
//       //    expect(wrapper.find('.Thumbnail-winodw-holder')).to.have.length(1);
//       });
//     });
