const assert = require('chai').assert; //bringring in the chai library
const expect = require('chai').expect;
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MediaWindow from '../../src/molecules/MediaWindow.js';
import ReactPlayer from 'react-player';

//FR024: Active stream on game page (MediaWindow component)
//Desc: Game page shall display an active stream when loaded
describe('FR024: Active stream on game page, part II (MediaWindow component)', () => {
  it('The MediaWindow component is rendered correctly', () => {
    const mockStreamer = "randomStreamer";
    const wrapper = shallow(<MediaWindow streamName={mockStreamer}/>);
    //note: the "false" displayed in console is because the streamer doesn't exist
    //ReactPlayer function "canPlay" is therefore set to false
    expect(wrapper.find(ReactPlayer)).to.have.length(1);
  });
});
