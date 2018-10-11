const assert = require('chai').assert; //bringring in the chai library
const app = require('../app'); //Bringing in the app from the app.js, i.e. the file we want to test

describe('App', function(){
  it('app should return hello', function() { //first parameter is the description, the second parameter is
    assert.equal(app(), 'hello'); //first parameter is the file being tested (the paraenthesis is because app is returning a function!)
    //the second parameter is what it is supposed to return
  });
}); //App is what we name the file we're testing, here app.js. local variable
