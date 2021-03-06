import 'jsdom-global/register'; //to be able to mount React components
//import "isomorphic-fetch"; //to avoid ES6 troubles

const expect = require('chai').expect;
import { shallow } from 'enzyme';
import React from 'react';
import HomePage from '../../src/pages/HomePage.js';
import Sidebar from '../../src/organisms/Sidebar.js';
import sinon from 'sinon';

//FR012: Search bar, response
//Desc: The system shall when the user presses the search bar, display a search page.
describe('FR012: Search bar, response part II (HomePage component)', () => {
  it('SearchPage is rendered when search bar is pressed', () => {
    const searchSpy = sinon.spy();
    const wrapper = shallow(<HomePage searchButtonOnClick = {searchSpy} />);
    var mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
    wrapper.setState({ categories: mockCategories });
    const mockGameArray = [{ name: "fooGame", id: 23, steam: true }, { name: "barGame", id: 12, steam: false }]; //must set this array after mounting
    wrapper.setState({ popularGameArray: mockGameArray });
    //Sidebar is rendered (where the search button is located)
    expect(wrapper.find(Sidebar)).to.have.length(1);
    expect(wrapper.find(Sidebar).dive().find('.side-bar-arrow-image')).to.have.length(1);
    //Current page is home page
    expect(wrapper.state().currentPage).to.equal("HomePage");
    //Run function when pressing search bar in sidebar
    wrapper.instance().searchButtonOnClick();
    //Expecting currentpage to be search page
    expect(wrapper.state().currentPage).to.equal("SearchPage");
  });
});

