const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
const infoWindow = require('../src/molecules/InfoWindow.js');
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import InfoWindow from '../src/molecules/InfoWindow.js';

//InfoWindow is a component that contains information about the chosen stream, such as:
//No. of views, gamer, rating, requirements etc.
//It should also contain a purchase button, leading to Steam's website

describe('Test InfoWindow class', () =>{
  it('InfoWindow should not be null & have class InfoWindow', () => {
    assert.isNotNull(infoWindow);
    let infoWindow = shallow(<InfoWindow />);
    expect(infoWindow.hasClass('Info-window-holder')).to.equal(true);
  });

  it('InfoWindow should display information about the game', () => {
    const wrapper = shallow(<InfoWindow />);
    expect(wrapper.contains([
  //    <p>No. of views</p>,
      <p>Gamer</p>,
      <p>Rating</p>,
      <p>Available on steam</p>,
      <p>Requirements</p>,
      <p>Trailer</p>,
      <p>Read reviews</p>,
    ])).to.equal(true);
    });
    //make sure it redirects to Steam when link is addded to button
  it('FR029: InfoWindow should have a buy button', () => {
    const wrapper = shallow(<InfoWindow />);
    wrapper.find('Button').simulate('click');//it finds Button the InfoWindow class
    //expect(wrapper.contains(<Button onClick={this.props.onClick} name="Buy game"></Button>).to.equal(true);//find button in infoWindow
    //expect(wrapper.find('Button'))
  });
  });
