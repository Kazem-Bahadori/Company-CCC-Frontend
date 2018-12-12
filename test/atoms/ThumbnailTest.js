import 'jsdom-global/register'; //to be able to mount React components
import "isomorphic-fetch"; //to avoid ES6 troubles

import { shallow} from 'enzyme';
import React from 'react';
import Thumbnail from '../../src/atoms/Thumbnail';
import sinon from 'sinon';

//FR056: Switch streams
//desc: The application shall when the user selects an optional stream play that selected stream
describe('FR056: Switch streams', () => {
   it('Thumbnail component is rendered correctly', () => {
        const streamSpy = sinon.spy();
        const wrapper = shallow(<Thumbnail onClick={streamSpy}/>);
        wrapper.setProps({ onClick: "mockOnClick", currentStream: "mockStream", views: 100, streamerName: "mockStreamer", streamName: "mockStreamName", image: "mockImage", gameName: "mockGameName" });
      });
    });
