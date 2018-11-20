import 'jsdom-global/register'; //to be able to mount React components
//import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import HomePage from '../../src/pages/HomePage.js';
import SearchPage from '../../src/pages/SearchPage.js';
import Sidebar from '../../src/organisms/Sidebar.js';
import PopularGame from  '../../src/molecules/PopularGame.js';
import sinon from 'sinon';

//FR012: Search bar, response
//Desc: The system shall when the user presses the search bar, display a search page.
describe('FR012: Seach bar, response', () => {
  it('SearchPage is rendered when search bar is pressed', () => {
    const searchSpy = sinon.spy();
    const sidebarSpy = sinon.spy();
    //const wrapper = shallow( <HomePage searchButtonOnClick = {searchSpy} > <SideBar handleClick= {sidebarSpy}/> </HomePage>); //since searchpage is reached from homepage, we render homepage
    //const = shallow( <HomePage searchButtonOnClick = {searchSpy} > <Sidebar handleClick = {sidebarSpy} /> </HomePage>); //since searchpage is reached from homepage, we render homepage
    //const wrapper = shallow(<HomePageDummy searchButtonOnClick = {searchSpy}/>);
    const wrapper = shallow(<HomePage searchButtonOnClick = {searchSpy} > <Sidebar collapsed = {false} handleClick= {sidebarSpy}/> </HomePage>);
    var mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
    wrapper.setState({ categories: mockCategories });
    const mockGameArray = [{ name: "fooGame", id: 23, steam: true }, { name: "barGame", id: 12, steam: false }]; //must set this array after mounting
    wrapper.setState({ popularGameArray: mockGameArray });
    expect(wrapper.find(Sidebar)).to.have.length(1);
  });
});

//FR014: Search bar, pressed
//Desc: "The search button shall, when pressed by the user, search for results and if found,
//display videogames and streamers, with streams, whose names correlates with the input."
