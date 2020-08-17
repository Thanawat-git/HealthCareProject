import React from 'react';
import { shallow } from 'enzyme';
import AdminMenu from './admin-menu';

describe('AdminMenu', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<AdminMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
