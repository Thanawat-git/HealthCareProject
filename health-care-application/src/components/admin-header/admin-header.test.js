import React from 'react';
import { shallow } from 'enzyme';
import AdminHeader from './admin-header';

describe('AdminHeader', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<AdminHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
