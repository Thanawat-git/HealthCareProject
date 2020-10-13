import React from 'react';
import { shallow } from 'enzyme';
import Pages1 from './Pages1';

describe('Pages1', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Pages1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
