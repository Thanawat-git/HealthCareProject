import React from 'react';
import { shallow } from 'enzyme';
import Page4 from './Page4';

describe('Page4', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Page4 />);
    expect(wrapper).toMatchSnapshot();
  });
});
