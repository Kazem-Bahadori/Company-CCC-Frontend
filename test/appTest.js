const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
const button = require('../src/atoms/Button'); //Bringing in the app from the app.js, i.e. the file we want to test
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Button from '../src/atoms/Button';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('FR002', () =>{
  it('Button should not be NULL', ()=> { //first parameter is the description, the second parameter is
    //assert.isEmpty(button); //first parameter is the file being tested (the paraenthesis is because app is returning a function!)
    //the second parameter is what it is supposed to return
    assert.isNotNull(button);
    
  });
}); //App is what we name the file we're testing, here app.js. local variable

describe('Test button class', () =>{
  it('Button should have class button', () => { //first parameter is the description, the second parameter is
    //assert.isEmpty(button); //first parameter is the file being tested (the paraenthesis is because app is returning a function!)
    //the second parameter is what it is supposed to return
    let btn = shallow(<Button />);
    expect(btn.hasClass('button')).to.equal(true);
  });
});

//npm run test_case -s To run the test

// https://mochajs.org
