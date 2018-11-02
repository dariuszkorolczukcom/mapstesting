import React from 'react';
import {shallow} from 'enzyme';
import MapThree from '../MapThree';

describe('react-map-gl', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MapThree />);
  });

  it('renders', () => {
    shallow(<MapThree />);
});
});
