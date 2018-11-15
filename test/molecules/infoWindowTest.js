const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
const infoWindow = require('../../src/molecules/InfoWindow.js');
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import InfoWindow from '../../src/molecules/InfoWindow.js';
import ReactTestUtils from 'react-dom/test-utils';

//Test of InfoWindow, outdated due to changed SRS

describe('Test InfoWindow class', () =>{
  it('InfoWindow should not be null & have class InfoWindow', () => {
    assert.isNotNull(infoWindow);
    let infoWindow = shallow(<InfoWindow />);
    expect(infoWindow.hasClass('Info-window-holder')).to.equal(true);
  });
});
describe('Test InfoWindow class', () => {
  it('InfoWindow should display information about the game', () => {
    const wrapper = shallow(<InfoWindow />);
    expect(wrapper.contains([
      <p>Gamer</p>,
      <p>Rating</p>,
      <p>Available on steam</p>,
      <p>Requirements</p>,
      <p>Trailer</p>,
      <p>Read reviews</p>,
    ])).to.equal(true);
    });
  });

  describe('FR036: Display viewers', () => {
    it('Info Window should display number of viewers', () => {
      const wrapper = shallow(<InfoWindow />);
      expect(wrapper.find('.Name-holder')).to.have.length(1);
    })
  })
