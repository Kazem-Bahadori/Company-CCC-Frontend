
const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
const button = require('../../src/atoms/Button.js'); //Bringing in the app from the app.js, i.e. the file we want to test
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Button from '../../src/atoms/Button.js';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('FR002', () =>{
  it('Button should not be NULL', ()=> {
    assert.isNotNull(button);

  });
});

describe('Test button class', () =>{
  it('Button should have class button', () => {
    let btn = shallow(<Button />);
    expect(btn.hasClass('button')).to.equal(true);
  });
});
