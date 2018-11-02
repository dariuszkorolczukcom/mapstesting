import React from 'react';
import {shallow} from 'enzyme';
import MapOne from '../MapOne';

describe('react-map-gl', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MapOne />);
  });

  it('contains a react-map-gl component', () => {
    let map = wrapper.find('InteractiveMap');
    expect(map.length).toBe(1);
});

  it('contains 5 markers', () => {
    let marker = wrapper.find('Marker');
    expect(marker.length).toBe(5);
  });

});
