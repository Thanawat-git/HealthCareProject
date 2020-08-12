import React from 'react';
import { shallow } from 'enzyme';
import HomeBody from './home-body';

describe('HomeBody', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<HomeBody />);
    expect(wrapper).toMatchSnapshot();
  });
});
