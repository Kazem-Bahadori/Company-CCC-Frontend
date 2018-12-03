const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ChatAndInfoWindow from '../../src/organisms/ChatAndInfoWindow.js';
import GameInfo from '../../src/molecules/GameInfo.js';
import TwitchChat from '../../src/molecules/TwitchChat.js';
import sinon from 'sinon';

import ReactTestUtils from 'react-dom/test-utils'; // ES6


//FR062: Display ChatAndInfoWindow
//Desc: The user shall be able to access Twitch’s chat by clicking the chat button.
describe('FR062: Display chat', () =>{
  it('ChatAndInfoWindow is rendered correctly', () => {
    let wrapper = mount(<ChatAndInfoWindow streamName={"mockStreamer"}/>);
    wrapper.setProps({ streamName: "mockStreamer" });
    //Check if state is set to "Chat" when launching ChatAndInfoWindow
    expect(wrapper.state().contentWindow).to.equal('Chat');
    //Assure that ChatAndInfoWindow & TwitchChat is rendered when switch to chat tab
    expect(wrapper.find('.container-window')).to.have.length(1);
    expect(wrapper.find('.content-window')).to.have.length(1);
    expect(wrapper.find(TwitchChat)).to.have.length(1);
  });
});

//FR062: Display ChatAndInfoWindow
//Desc: The user shall be able to access Twitch’s chat by clicking the chat button.
describe('FR062: Display chat', () =>{
  it('ChatAndInfoWindow should have a button for chat that displays the chat if pressed', () => {
     const mockRenderBuySteam = 100;
     var buttonSpy = sinon.spy();
     const mockTabSubs = ["Chat", "Game Info"];
     //Implement spy on chat button/tab
     const wrapper = mount(<ChatAndInfoWindow handleContentWindow={buttonSpy("Chat")} streamName={"mockStreamer"} tabSubs={mockTabSubs}/>);
     //Expecting "chat" to be displayed first
     expect(wrapper.state().contentWindow).to.equal("Chat");
     expect(wrapper.find('.button-highlight')).to.have.length(1); //should return one button
    //Change contentWindow to "Game Info"
    wrapper.setState({ contentWindow: "Game Info" });
    expect(wrapper.find(TwitchChat)).to.have.length(0);
    expect(wrapper.state().contentWindow).to.equal("Game Info");
    //Expect tabbutton to display "chat"
    expect(wrapper.find('.button-style').text()).to.equal("  Chat ");
    //Press chat-button
    wrapper.find('.button-style').simulate('click');
    //Expect button to have been pressed once
    expect(buttonSpy.calledOnce).to.equal(true);
    //Contentwindow is changed to chat
    expect(wrapper.state().contentWindow).to.equal("Chat");
    expect(wrapper.find(TwitchChat)).to.have.length(1);
  });
});
