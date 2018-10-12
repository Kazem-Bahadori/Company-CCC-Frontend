/*const assert = require('chai').assert; //bringring in the chai library
//const app = require('../../atoms/Button'); //Bringing in the app from the app.js, i.e. the file we want to test
import React from 'react/addons';
import Button from '../src/App/Button';

describe("testing button", () => {

 beforeEach(function() {
     let {TestUtils} = React.addons;

     this.component = TestUtils.renderIntoDocument(<Greeter initialName="my first test" />);
     this.renderedDOM = () => React.findDOMNode(this.component);
   });

  it("wraps a paragraph with a <div> with a proper class name", function() {
      let rootElement = this.renderedDOM();

      expect(rootElement.tagName).toEqual("DIV");
      expect(rootElement.classList.length).toEqual(1);
      //expect(rootElement.classList[0]).toEqual("greeter");
    });

});
*/