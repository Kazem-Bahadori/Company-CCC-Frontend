const assert = require('chai').assert; //bringring in the chai library
const button = require('../src/atoms/Button'); //Bringing in the app from the app.js, i.e. the file we want to test

describe('FR002', () =>{
  it('Button should not be NULL', ()=> { //first parameter is the description, the second parameter is
    //assert.isEmpty(button); //first parameter is the file being tested (the paraenthesis is because app is returning a function!)
    //the second parameter is what it is supposed to return
    assert.isNotNull(button); 
    
  });
}); //App is what we name the file we're testing, here app.js. local variable

