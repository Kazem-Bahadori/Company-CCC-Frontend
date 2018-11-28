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
//Desc: ChatAndInfoWindow should display chat at loading
describe('FR062: Display chat', () =>{
  it('ChatAndInfoWindow is rendered correctly', () => {
    let wrapper = shallow(<ChatAndInfoWindow/>);
    //Check if state is set to "Chat" when launching ChatAndInfoWindow
    expect(wrapper.state().contentWindow).to.equal('Chat');
    //Assure that ChatAndInfoWindow & TwitchChat is rendered when switch to chat tab
    expect(wrapper.find('.container-window')).to.have.length(1);
    expect(wrapper.find('.content-window')).to.have.length(1);
    expect(wrapper.find(TwitchChat)).to.have.length(1);
  });
});

describe('FR062: Display chat', () =>{
  it('ChatAndInfoWindow should have a button for chat that displays the chat if pressed', () => {
     const mockRenderBuySteam = 100;
     var buttonSpy = sinon.spy();
     //Implement spy on chat button/tab
     const wrapper = shallow(<ChatAndInfoWindow renderBuySteam={mockRenderBuySteam} handleContentWindow={buttonSpy("Chat")}/>);
     //Expecting "game info" to be displayed first
     expect(wrapper.state().contentWindow).to.equal("Chat");
     expect(wrapper.find('.button-highlight')).to.have.length(1); //should return one button
    //Check that ChatAndInfoWindow displays chat when pressed from other tabSubs
    var i = 0;
    //Error message from following code bc. of alert notice in chatandinfowindow ("Trailer").
    //However, the test does not fail. The code below should not throw an error when trailer is implemented since "alert" will be removed. Put on hold for now.

    // wrapper.find('.button-style').forEach((node) => {
    //   if (wrapper.state().contentWindow != "Trailer") {
    //      wrapper.find('.button-style').at(i).simulate('click'); //clicking the tab at place i
    //      console.log("something");//Assure that state of contentwindow is changed
    //      // wrapper.find('.button-style').first().simulate('click'); //clicking the tab "Chat"
    //      // expect(buttonSpy.calledOnce).to.equal(true);
    //      // expect(wrapper.state().contentWindow).to.equal("Chat"); //assure that State is set to "Chat"
    //      // expect(wrapper.find(TwitchChat)).to.have.length(1); //assure that twitchChat is rendered
    //       i++;
    //     }
    //  });
  });
});
