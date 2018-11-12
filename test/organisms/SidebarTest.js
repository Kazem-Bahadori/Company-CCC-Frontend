const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Sidebar from '../../src/organisms/Sidebar.js';
//import sinon from 'sinon';

describe('FR002, Home button response' ,() => {
  it('The user shall be redirected to the home page when pressing the home button', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.state('collapsed')).to.equal(true);
    //wrapper.setState({ collapsed: false}); needs to be revised
    expect(wrapper.find('.side-bar-arrow-image')).to.have.length(1);
  });
});
