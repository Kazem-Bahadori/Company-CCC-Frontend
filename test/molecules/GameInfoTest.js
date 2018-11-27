import 'jsdom-global/register'; //to be able to mount React components
import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert;
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import GameInfo from '../../src/molecules/GameInfo';
import sinon from 'sinon';

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
