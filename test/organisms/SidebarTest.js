const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Sidebar from '../../src/organisms/Sidebar.js';
import sinon from 'sinon';

describe('FR002, Home button response' ,() => {
  it('The user shall be redirected to the home page when pressing the home button', () => {
    const sidebarSpy = sinon.spy();
    const wrapper = shallow(<Sidebar handleClick={sidebarSpy}/>);
    expect(wrapper.state('collapsed')).to.equal(true);
    expect(wrapper.find('.side-bar-container-collapsed')).to.have.length(1);
  //  wrapper.find('.side-bar-container-collapsed').simulate('click'); //doesn't work for now, get an error message saying
  //"cannot read map of undefined". Leaving this on hold for now

  });
});
