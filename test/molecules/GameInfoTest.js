import 'jsdom-global/register'; //to be able to mount React components
import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert;
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import GameInfo from '../../src/molecules/GameInfo';
import ChatAndInfoWindow from '../../src/organisms/ChatAndInfoWindow';
import TwitchChat from '../../src/molecules/TwitchChat';
import sinon from 'sinon';

//FR029: Purchase button, response
//Desc: Purchase button should redirect to Steam's webpage
describe('FR029: Purchase button, response part II (GameInfo) ', () => {
  it('Buy button in GameInfo redirects to Steam', () => {
    const buySpy = sinon.spy(); //note: use spies or not?
    const wrapper =  mount(<GameInfo/>);
    //Props needed to render GameInfo with steam url
    wrapper.setProps({ steamId: 100, steamUrl: 'www.mocksteam.com', price: 20, currency: "SEK" });
    //Assure steamId is set to 100
    expect(wrapper.props().steamId).to.equal(100);
    //Assure there's a purchase button
    expect(wrapper.find('.buy-on-steam-btn')).to.have.length(1);
    //Button has correct href
    expect(wrapper.find('.buy-on-steam-btn').prop('href')).to.equal("www.mocksteam.com");
    });
  });

//FR065: Display Game Info
//Desc: The user shall be able to access game information, if it is a steam game, by clicking the game info button.
  describe('FR065: Display game info', () =>{
    it('The user shall be able to access game information, if it is a steam game, by clicking the game info button.', () => {
       var buttonSpy = sinon.spy();
       const mockTabSubs = ["Chat", "Game Info"];
       //Implement spy on chat button/tab
       const wrapper = mount(<ChatAndInfoWindow steamBool={true} steamId={1} gameName={"mockGame"} viewers={100} steamUrl={"www.mock.com"} handleContentWindow={buttonSpy("Game Info")} streamName={"mockStreamer"} tabSubs={mockTabSubs}/>);
       //Expecting "chat" to be displayed first
       wrapper.setState({ contentWindow: "Chat" });
       expect(wrapper.state().contentWindow).to.equal("Chat");
       expect(wrapper.find(TwitchChat)).to.have.length(1);
       //Finds button for Chat
       expect(wrapper.find('.button-highlight')).to.have.length(1);
       //Finds button for Game Info
        expect(wrapper.find('.button-style')).to.have.length(1);
        expect(wrapper.find('.button-style').text()).to.equal("  Game Info ");
       //Press button for game info
        wrapper.find('.button-style').simulate('click');
        //Renderns GameInfo
        expect(wrapper.state().contentWindow).to.equal("Game Info");
        expect(wrapper.find(GameInfo)).to.have.length(1);
    });
  });
