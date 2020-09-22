import React from 'react';
import { shallow } from 'enzyme';
import FollowUp from './followUp';

describe('FollowUp', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<FollowUp />);
    expect(wrapper).toMatchSnapshot();
  });
});
