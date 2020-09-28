import React from 'react';
import { shallow } from 'enzyme';
import Page6 from './Page6';

describe('Page6', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Page6 />);
    expect(wrapper).toMatchSnapshot();
  });
});
