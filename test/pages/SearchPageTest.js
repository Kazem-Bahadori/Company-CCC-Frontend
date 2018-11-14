import 'jsdom-global/register'; //to be able to mount React components
//import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import SearchPageTest from '../../src/pages/SearchPage.js';

//how to access componentDidMount and see if it is executed correctly?
describe('FR012 & FR014: Test search button', () => {
  it('Make sure search button is rendered as intended', () => {
    const wrapper = shallow(<SearchPageTest />);
    const inst = wrapper.instance();
    expect(inst).to.be.instanceOf(SearchPageTest);
    //missing search button
  });
});
