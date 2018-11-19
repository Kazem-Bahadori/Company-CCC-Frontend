const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow } from 'enzyme';
import React from 'react';
import Button from '../../src/atoms/Button.js';

//Test button class
describe('FR002, Home button response', () =>{
  it('Assure that button class is rendered correctly', ()=> {
    const btn = shallow(<Button />);
    expect(btn).to.have.length(1);
    expect(btn.hasClass('button')).to.equal(true);
  });
});
