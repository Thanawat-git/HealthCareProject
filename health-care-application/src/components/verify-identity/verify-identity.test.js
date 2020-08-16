import React from 'react';
import { shallow } from 'enzyme';
import VerifyIdentity from './verify-identity';

describe('VerifyIdentity', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<VerifyIdentity />);
    expect(wrapper).toMatchSnapshot();
  });
});
