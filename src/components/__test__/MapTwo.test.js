import React from 'react';
import {shallow} from 'enzyme';
import MapTwo from '../MapTwo';

describe('react-map-gl', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MapTwo />);
  });

  it('renders', () => {
    shallow(<MapTwo />);
});

});
