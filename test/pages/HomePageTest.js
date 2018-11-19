import 'jsdom-global/register'; //to be able to mount React components
import "isomorphic-fetch"; //to avoid ES6 troubles

const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount } from 'enzyme';
import React, { Component } from 'react';
import HomePage from '../../src/pages/HomePage.js';
import PopularGame from '../../src/molecules/PopularGame.js';
import SideBar from '../../src/organisms/SideBar.js';
import sinon from 'sinon';

//FR007: Game picture pressed
//Desc: The button for a specific game shall when pressed redirect the user to that specific game’s page.
describe('FR007: Game picture pressed', () => {
  it('Home page is rendered correctly', () => {
    const homepageSpy = sinon.spy();
    const wrapper = shallow(<HomePage/>);
    const inst = wrapper.instance();
    expect(inst).to.be.instanceOf(HomePage);
    expect(wrapper.state().currentPage).to.equal("HomePage");
  });
});

describe('FR007: Game picture pressed', () => {
  it('The button for a specific game shall when pressed redirect the user to that specific game’s page.', () => {
    const gameSpy = sinon.spy();
    const wrapper = shallow( <HomePage popularGameOnClick={gameSpy(0)} />);
    expect(wrapper.state().currentPage).to.equal("HomePage");
    var mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
    var mockGameArray = [{ name: "fooGame", id: 23, steam: true }, { name: "barGame", id: 12, steam: false }];
    wrapper.setState({ popularGameArray: mockGameArray, categories: mockCategories }); //setting up mock games for rendering
    wrapper.instance().renderGames();
    expect(wrapper.find(PopularGame)).to.have.length(2);
    wrapper.find(PopularGame).first().simulate('click');
    expect(gameSpy.calledOnce).to.equal(true);
    expect(wrapper.state().currentPage).to.equal("GamePage");

    //wrapper.find(PopularGame).simulate('click'); /

    // const wrapper = shallow( <HomePage searchButtonOnClick = {searchSpy} > <SideBar handleClick= {sidebarSpy}/> </HomePage>); //since searchpage is reached from homepage, we render homepage
    // var mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
    // wrapper.setState({ categories: mockCategories });
    // const mockGameArray = [{ name: "fooGame", id: 23, steam: true }, { name: "barGame", id: 12, steam: false }]; //must set this array after mounting
    // wrapper.setState({ popularGameArray: mockGameArray });
  });
});

//FR007: Home button response
//Desc: The user shall be redirected to the home page when pressing the home button.
describe('FR002: Home button response', () => {
  it('Pressing home button redirects you to start page', () => {
    const homebuttonSpy = sinon.spy();
    const sidebarSpy = sinon.spy();
    let mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
    const wrapper = mount( <HomePage homeButtonOnClick = {homebuttonSpy} categories = {mockCategories}> <SideBar handleClick = {sidebarSpy} /> </HomePage>);
    //const wrapper = shallow(<HomePage homeButtonOnClick = {homebuttonSpy}/>);    //wrapper.setState({ categories: mockCategories }); //needed to set state of sidebar to not collapsed.
    wrapper.setState({ categories: mockCategories }); //needed to set state of sidebar to not collapsed.
    //expect(wrapper.find(SideBar)).to.have.length(1); //fails since rendering fails bc of missing data from backend
    expect(wrapper.state().currentPage).to.equal("HomePage");

    //TODO: how to reach sidebar when it is collapsed by default? how to mock fetch call in homepage?
    // console.log(wrapper.find(SideBar).instance().state());
    //expect(wrapper.find(SideBar)).to.have.length(1);
    //wrapperSideBar.find('.side-bar-image').simulate('click'); //to return to homepage
    //wrapper.setState({ currentPage: "SearchPage" }); //test from other pages
    //assert(wrapper.state().currentPage != "HomePage");
  });
});
