import React from 'react';
import { shallow } from 'enzyme';
import Page5 from './Page5';

describe('Page5', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Page5 />);
    expect(wrapper).toMatchSnapshot();
  });
});
