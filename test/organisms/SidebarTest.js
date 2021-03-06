const expect = require('chai').expect;
import { shallow} from 'enzyme';
import React from 'react';
import Sidebar from '../../src/organisms/Sidebar.js';
import sinon from 'sinon';

//FR002: Home button response
//Desc: The user shall be redirected to the home page when pressing the home button.
describe('FR002, Home button response part I (SideBar component)' ,() => {
  it('Sidebar component is rendered correctly', () => {
    const homebuttonSpy = sinon.spy();
    //Mock variable needed to render Sidebar when collapsed is set to false
    var mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
    const wrapper = shallow(<Sidebar homeButtonResponse={homebuttonSpy} categories={mockCategories}/>);
    //Expecting Sidebar to be collapsed by default
    expect(wrapper.state().collapsed).to.equal(true);
    //Change collapsed to true
    wrapper.instance().handleClick();
    //Finding the class where the home button function is located. Should be only one.
    expect(wrapper.find('.side-bar-image')).to.have.length(1);
    //Clicking the home button
    wrapper.find('.side-bar-image').simulate('click');
    //Checking that the homebutton was pressed
    expect(homebuttonSpy.calledOnce).to.equal(true);
    //Note: whether or not the home page is changed is determined in part II of this test
  });
});

//FR012: Search bar, response
//Desc: The system shall when the user presses the search bar, display a search page.
describe('FR012: Search bar, response, part I (Sidebar component)', () => {
  it('Search button is clickable', () => {
    const sidebarSpy = sinon.spy();
    var mockCategories = ["Top Games", "Steam Games", "Games on Sale" ];
    const wrapper = shallow(<Sidebar searchButtonResponse={sidebarSpy} categories={mockCategories}/>);
    wrapper.setState({ collapsed: false });
    expect(wrapper.state().collapsed).to.equal(false);
    expect(wrapper.find('.side-bar-search')).to.have.length(1);
    wrapper.find('.side-bar-search').simulate('click');
    expect(sidebarSpy.calledOnce).to.equal(true);
    //Note: whether or not the home page is changed is determined in part II of this test
  });
});
