import React from 'react';
import { shallow } from 'enzyme';
import Page1 from './Page1';

describe('Page1', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Page1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
