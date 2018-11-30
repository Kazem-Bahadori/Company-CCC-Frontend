import 'jsdom-global/register'; //to be able to mount React components
import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import HomePage from '../../src/pages/HomePage.js';
import Sidebar from '../../src/organisms/Sidebar.js';
import ChatAndInfoWindow from '../../src/organisms/ChatAndInfoWindow.js';
import GameHolder from '../../src/molecules/GameHolder.js';
import sinon from 'sinon';

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

<<<<<<< HEAD
=======
//FR007: Game picture pressed
//Desc: The button for a specific game shall when pressed redirect the user to that specific game’s page.
describe('FR007: Game picture pressed', () => {
    it('The button for a specific game shall when pressed redirect the user to that specific game’s page.', () => {
      const gameSpy = sinon.spy();
      //Setting up variables needed for correct rendering
      const mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
      const wrapper = mount( <HomePage popularGameOnClick={gameSpy(0)} categories={mockCategories} />);
      const mockGameArray = [{ name: "fooGame", id: 23, steam: true }, { name: "barGame", id: 12, steam: false }];
      //Set state to mock variables
      wrapper.setState({ popularGameArray: mockGameArray, categories: mockCategories });
      //Check that correct rendering has been done
      expect(wrapper.state().currentPage).to.equal("HomePage");
      expect(wrapper.find(GameHolder)).to.have.length(2);
      wrapper.find(GameHolder).first().simulate('click');
      //Assure populargame was called
      expect(gameSpy.calledOnce).to.equal(true);
      //Assure that currentpage is gamepage
      expect(wrapper.state().currentPage).to.equal("GamePage");
      //Assure correct game is streamed
      expect(wrapper.find(ChatAndInfoWindow).props().gameName).to.equal("fooGame");
    });
  });

>>>>>>> dev
//FR064: Filter
//Desc: "The application shall, when the user presses a certain category, filter games on that
//       specific category."
describe('FR064: Filter', () => {
  it('The application shall, when the user presses a certain category, filter games on that specific category', () => {
    const categorySpy = sinon.spy();
    //Categories needed to shallow render sidebar correctly
    var mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
    const wrapper = mount(<HomePage categoryOnClick={categorySpy} categories={mockCategories} />);
    //Assure Sidebar is rendered correctly, should be 3 categories: Top Games, Steam Games and Games on sale.
    expect(wrapper.find('.side-bar-button')).to.have.length(3);
    expect(wrapper.state().currentCategory).to.equal("Top Games");
    //Click button "Steam Games", should change currentCategory to "Steam Games"
    wrapper.find('.side-bar-button').at(1).simulate('click');
    expect(wrapper.state().currentCategory).to.equal("Steam Games");
    //Click button "Games on Sale", should change currentCategory to "Games on Sale"
    wrapper.find('.side-bar-button').at(2).simulate('click');
    expect(wrapper.state().currentCategory).to.equal("Games on Sale");
  });
});
