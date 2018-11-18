const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ChatAndInfoWindow from '../../src/organisms/ChatAndInfoWindow.js';
import TwitchChat from '../../src/molecules/TwitchChat.js';
import sinon from 'sinon';

//FR062: Display ChatAndInfoWindow
//Desc: ChatAndInfoWindow should display chat at loading
describe('FR062: Display chat', () =>{
  it('ChatAndInfoWindow is rendered correctly', () => {
    let wrapper = shallow(<ChatAndInfoWindow/>);
    //Check if state is set to "Chat" when launching ChatAndInfoWindow
    expect(wrapper.state().contentWindow).to.equal('Chat');
    //Assure that ChatAndInfoWindow & TwitchChat is rendered
    expect(wrapper.find('.container-window')).to.have.length(1);
    expect(wrapper.find('.content-window')).to.have.length(1);
    expect(wrapper.find(TwitchChat)).to.have.length(1);
  });
});

describe('FR062: Display chat', () =>{
  it('ChatAndInfoWindow should have a button for chat that displays the chat if pressed', () => {
    const mockRenderBuySteam = 100;
    var buttonSpy = sinon.spy();
    const wrapper = shallow(<ChatAndInfoWindow renderBuySteam={mockRenderBuySteam} handleContentWindow={buttonSpy("Chat")}/>); //set contentWindow to Chat
    expect(wrapper.state().contentWindow).to.equal("Chat"); //making sure "chat" is displayed first
    expect(wrapper.find('.button-style')).to.have.length(4); //returns 4 buttons (chat, review, system requirements, trailer)
    //check that ChatAndInfoWindow displays chat when pressed from other tabSubs
    var i = 0;
    wrapper.find('.button-style').forEach((node) => {
      wrapper.find('.button-style').at(i).simulate('click'); //clicking the tab at place i
      if (i > 0) {
        assert(wrapper.state().contentWindow !== "Chat"); //Assure that state of contentwindow is changed
      }
      wrapper.find('.button-style').first().simulate('click'); //clicking the tab "Chat"
      expect(buttonSpy.calledOnce).to.equal(true);
      expect(wrapper.state().contentWindow).to.equal("Chat"); //assure that State is set to "Chat"
      expect(wrapper.find(TwitchChat)).to.have.length(1); //assure that twitchChat is rendered
      i++;
    });
  });
});
