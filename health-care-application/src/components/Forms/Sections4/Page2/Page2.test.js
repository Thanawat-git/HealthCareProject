import React from 'react';
import { shallow } from 'enzyme';
import Page2 from './Page2';

describe('Page2', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Page2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
