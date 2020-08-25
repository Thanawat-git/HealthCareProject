import React from 'react';
import { shallow } from 'enzyme';
import Pages3 from './Pages3';

describe('Pages3', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Pages3 />);
    expect(wrapper).toMatchSnapshot();
  });
});
