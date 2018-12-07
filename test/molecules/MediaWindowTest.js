const assert = require('chai').assert;
const expect = require('chai').expect;
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MediaWindow from '../../src/molecules/MediaWindow.js';
import ReactPlayer from 'react-player';

//FR024: Active stream on game page (MediaWindow component)
//Desc: Game page shall display an active stream when loaded
describe('FR024: Active stream on game page, part II (MediaWindow component)', () => {
  it('The MediaWindow component is rendered correctly', () => {
    //Create variable needed to render MediaWindow correctly
    const mockStreamer = "randomStreamer";
    const wrapper = shallow(<MediaWindow streamName={mockStreamer}/>);
    //Ensure that the ReactPlayer is rendered
    expect(wrapper.find(ReactPlayer)).to.have.length(1);
  });
});
