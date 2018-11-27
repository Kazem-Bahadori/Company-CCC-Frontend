import 'jsdom-global/register'; //to be able to mount React components
import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import HomePage from '../../src/pages/HomePage.js';
import Sidebar from '../../src/organisms/Sidebar.js';
import sinon from 'sinon';

//FR007: Game picture pressed
//Desc: The button for a specific game shall when pressed redirect the user to that specific game’s page.


//FR007: Home button response
//Desc: The user shall be redirected to the home page when pressing the home button.
describe('FR002: Home button response part II (HomePage)', () => {
  it('Pressing home button redirects you to start page', () => {
    const homebuttonSpy = sinon.spy();
    const sidebarSpy = sinon.spy();
    let mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
    const wrapper = shallow(<HomePage homeButtonOnClick = {homebuttonSpy} categories = {mockCategories} />);
    expect(wrapper.state().currentPage).to.equal("HomePage");
    wrapper.setState({ currentPage: "GamePage" });
    //Check that currentpage is changed to game page
    expect(wrapper.state().currentPage).to.equal("GamePage");
    //Run function that redirects to home page
    wrapper.instance().homeButtonOnClick();
    //Check that currentpage has been changed to home page
    expect(wrapper.state().currentPage).to.equal("HomePage");
    //Check that currentpage is changed to search page
    wrapper.setState({ currentPage: "SearchPage" });
    //Run function that redirects to home page
    wrapper.instance().homeButtonOnClick();
    //Check that currentpage has been changed to home page
    expect(wrapper.state().currentPage).to.equal("HomePage");
  });
});
