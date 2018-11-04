import React from 'react';
import {shallow} from 'enzyme';
import MapFive from '../MapFive';

describe('react-map-gl', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MapFive />);
  });

  it('renders', () => {
    shallow(<MapFive />);
});
});
