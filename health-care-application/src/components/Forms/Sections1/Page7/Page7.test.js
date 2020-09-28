import React from 'react';
import { shallow } from 'enzyme';
import Page7 from './Page7';

describe('Page7', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Page7 />);
    expect(wrapper).toMatchSnapshot();
  });
});
