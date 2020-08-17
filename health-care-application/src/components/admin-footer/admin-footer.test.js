import React from 'react';
import { shallow } from 'enzyme';
import AdminFooter from './admin-footer';

describe('AdminFooter', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<AdminFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
