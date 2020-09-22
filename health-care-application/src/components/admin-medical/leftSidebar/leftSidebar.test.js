import React from 'react';
import { shallow } from 'enzyme';
import LeftSidebar from './leftSidebar';

describe('LeftSidebar', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<LeftSidebar />);
    expect(wrapper).toMatchSnapshot();
  });
});
