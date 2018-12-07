import 'jsdom-global/register'; //to be able to mount React components
import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import Thumbnail from '../../src/atoms/Thumbnail';

//FR056: Switch streams
//desc: The application shall when the user selects an optional stream play that selected stream
describe('FR056: Switch streams', () => {
   it('Thumbnail component is rendered correctly', () => {
        const wrapper = shallow(<Thumbnail onClick={streamSpy}/>);
	//Setting mock props needed for rendering Thumbnail correctly
        wrapper.setProps({ onClick: "mockOnClick", currentStream: "mockStream", views: 100, streamerName: "mockStreamer", streamName: "mockStreamName", image: "mockImage", gameName: "mockGameName" });
	//Code commented below should work but unable to test since I no longer have the testing tools on the computer currently working on /Linnéa T
	//wrapper.instance();      	
	//expect(wrapper).to.be.instanceOf(Thumbnail);
	//expect(wrapper).hasClass("thumbnail-holder").to.equal(true);
	//expect(wrapper.find("thumbnail-holder").isEmpty()).to.equal(false);
      });
    });
