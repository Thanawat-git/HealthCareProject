import React from 'react';
import { shallow } from 'enzyme';
import Pages2 from './Pages2';

describe('Pages2', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Pages2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
