import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
  wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains a header component', () => {
    const header = wrapper.find('Header');
    expect(header.length).toBe(1);
  });

});