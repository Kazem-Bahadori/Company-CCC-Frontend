const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ChatAndInfoWindow from '../../src/organisms/ChatAndInfoWindow.js';
import sinon from 'sinon';


describe('FR062: Display chat', () =>{
  it('ChatAndInfoWindow should display chat at loading', () => {
    let wrapper = shallow(<ChatAndInfoWindow/>);
    //Check if state is set to "Chat" when launching ChatAndInfoWindow
    expect(wrapper.state('contentWindow')).to.equal('Chat');
    //Assure that ChatAndInfoWindow is rendered
    expect(wrapper.find('.container-window')).to.have.length(1);
    expect(wrapper.find('.content-window')).to.have.length(1);
  });
});

//goal: write tests for simulating clicks on Chat & Game Info-button and checking if state of ChatAndInfoWindow component is changed
//not specified as a requirement but makes the test cover all aspects in display chat
/*describe('FR062: Display Chat', () =>{
  it('When "Game Info" is pressed, state of showChat should be set to false and showInfo should be set to true', ()=> {
    //code below finds the two buttons and makes sure they're clickable.
    let wrapper = shallow(<ChatAndInfoWindow/>);
    //One button for each tab in ChatAndInfoWindow
    wrapper.find('.button-style').at(0).simulate('click');
    wrapper.find('.button-style').at(1).simulate('click');
    wrapper.find('.button-style').at(2).simulate('click');
    wrapper.find('.button-style').at(3).simulate('click');

    //TODO: use spies to assure they're clicked
    //const wrapperInstance = getShallowlyRenderedInstance(<ChatAndInfoWindow />);
    //const spy = sinon.spy(wrapperInstance, 'onClickChat');
    //wrapperInstance.render();
  });
});
/*
//
describe('FR029: Test ChatAndInfoWindow class', () =>{
  it('ChatAndInfoWindow should have a buy button', () => {
    let wrapper = shallow(<ChatAndInfoWindow/>);
    expect(wrapper.find('.buy-on-steam-btn').text()).to.equal(' Buy on Steam ');
    wrapper.find('.buy-on-steam-btn').simulate('click'); //makes sure it redirects to steam when this is implemented
  });
});

//npm install react-addons-test-utils -save to make this work?
/*getShallowlyRenderedInstance(component) {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(component);
    return renderer._instance && renderer._instance._instance;
};*/

/*describe('FooComponent', () => {
    it('Renders bar by default', () => {
        const fooInstance = getShallowlyRenderedInstance(<FooComponent />);

        // Now you can spy on instance methods
        const barSpy = sinon.spy(fooInstance, 'getBar');

        // Now render the instance to execute the expected code path
        fooInstance.render();

        // Assert that getBar was called as expected
        assert(barSpy.called);
    });
});*/
