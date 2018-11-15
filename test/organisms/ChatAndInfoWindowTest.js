const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ChatAndInfoWindow from '../../src/organisms/ChatAndInfoWindow.js';
import sinon from 'sinon';

//FR062: Display ChatAndInfoWindow
//Desc: ChatAndInfoWindow should display chat at loading
describe('FR062: Display chat', () =>{
  it('ChatAndInfoWindow is rendered correctly', () => {
    let wrapper = shallow(<ChatAndInfoWindow/>);
    //Check if state is set to "Chat" when launching ChatAndInfoWindow
    expect(wrapper.state('contentWindow')).to.equal('Chat');
    //Assure that ChatAndInfoWindow is rendered
    expect(wrapper.find('.container-window')).to.have.length(1);
    expect(wrapper.find('.content-window')).to.have.length(1);
  });
});

//FR029: Purchase button, response
//Desc: Purchase button should redirect to Steam's webpage
describe('FR029: Purchase button, response', () =>{
  it('ChatAndInfoWindow should have a buy button', () => {
    const mockRenderBuySteam = 100;
    const wrapper = shallow(<ChatAndInfoWindow renderBuySteam={mockRenderBuySteam}/>);
    expect(wrapper.find('.button-style')).to.have.length(4); //returns 4 buttons!
    wrapper.find('.button-style').first().simulate('click'); //TODO: check the four buttons returned and test click all
  });
});
