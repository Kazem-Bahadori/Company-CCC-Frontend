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

//FR056: Switch streams
//desc: The application shall when the user selects an optional stream play that selected stream
describe('FR056: Switch streams', () => {
   it('The application shall when the user selects an optional stream play that selected stream', () => {
        const streamSpy = sinon.spy();
        const wrapper = shallow(<Thumbnail onClick={streamSpy}/>);
        wrapper.setProps({ onClick: "mockOnClick", currentStream: "mockStream", views: 100, streamerName: "mockStreamer", streamName: "mockStreamName", image: "mockImage", gameName: "mockGameName" });
      });
    });
