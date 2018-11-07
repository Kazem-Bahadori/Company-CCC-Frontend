const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ChatAndInfoWindow from '../src/organisms/ChatAndInfoWindow.js';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils'; //ES6


describe('FR062: Display chat', () =>{
  it('ChatAndInfoWindow should display chat and hide info at loading', () => {
    let wrapper = shallow(<ChatAndInfoWindow/>);
    expect(wrapper.state('showChat')).to.equal(true);
    expect(wrapper.state('showInfo')).to.equal(false);
    expect(wrapper.find('.button-style')).to.have.length(2);
  });
});

//goal: write tests for simulating clicks on Chat & Game Info-button and checking if state of ChatAndInfoWindow component is changed
//not specified as a requirement but makes the test cover all aspects in display chat
describe('FR062: Display Chat', () =>{
  it('When "Game Info" is pressed, state of showChat should be set to false and showInfo should be set to true', ()=> {
    //code below finds the two buttons and makes sure they're clickable.
    let wrapper = shallow(<ChatAndInfoWindow/>);
    wrapper.find('.button-style').at(0).simulate('click');
    wrapper.find('.button-style').at(1).simulate('click');

    //TODO: use spies to assure they're clicked
    //const wrapperInstance = getShallowlyRenderedInstance(<ChatAndInfoWindow />);
    //const spy = sinon.spy(wrapperInstance, 'onClickChat');
    //wrapperInstance.render();
  });
});

//
describe('FR029: Test ChatAndInfoWindow class', () =>{
  it('ChatAndInfoWindow should have a buy button', () => {
    let wrapper = shallow(<ChatAndInfoWindow/>);
    expect(wrapper.find('.buy-on-steam-btn').text()).to.equal(' Buy on Steam ');
    wrapper.find('.buy-on-steam-btn').simulate('click');
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
