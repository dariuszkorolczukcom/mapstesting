import React from 'react';
import {shallow} from 'enzyme';
import MapFour from '../MapFour';

describe('react-map-gl', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MapFour />);
  });

  it('renders', () => {
    shallow(<MapFour />);
});
});
