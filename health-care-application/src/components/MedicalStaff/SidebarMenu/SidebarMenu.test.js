import React from 'react';
import { shallow } from 'enzyme';
import SidebarMenu from './SidebarMenu';

describe('SidebarMenu', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<SidebarMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
