import React from 'react';
import { shallow } from 'enzyme';
import ResetPassword from './reset-password';

describe('ResetPassword', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ResetPassword />);
    expect(wrapper).toMatchSnapshot();
  });
});
