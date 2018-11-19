import 'jsdom-global/register'; //to be able to mount React components
//import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import HomePage from '../../src/pages/HomePage.js';
import SearchPage from '../../src/pages/SearchPage.js';
import SideBar from '../../src/organisms/SideBar.js';
import PopularGame from  '../../src/molecules/PopularGame.js';
import sinon from 'sinon';

//FR012: Search bar, response
//Desc: The system shall when the user presses the search bar, display a search page.
describe('FR012', () => {
  it('SearchPage is rendered when search bar is pressed', () => {
    const searchSpy = sinon.spy();
    const sidebarSpy = sinon.spy();
    const wrapper = shallow( <HomePage searchButtonOnClick = {searchSpy} > <SideBar handleClick= {sidebarSpy}/> </HomePage>); //since searchpage is reached from homepage, we render homepage
    var mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
    wrapper.setState({ categories: mockCategories });
    const mockGameArray = [{ name: "fooGame", id: 23, steam: true }, { name: "barGame", id: 12, steam: false }]; //must set this array after mounting
    wrapper.setState({ popularGameArray: mockGameArray });
    console.log(wrapper.state());

    // expect(wrapper.find(SideBar)).to.have.length(1);
    //wrapper.find('.side-bar-search').simulate('click');
  });
});

//FR014: Search bar, pressed
//Desc: "The search button shall, when pressed by the user, search for results and if found,
//display videogames and streamers, with streams, whose names correlates with the input."


//note: how to access componentDidMount and see if it is executed correctly?
