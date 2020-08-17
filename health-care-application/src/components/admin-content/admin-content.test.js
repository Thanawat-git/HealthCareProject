import React from 'react';
import { shallow } from 'enzyme';
import AdminContent from './admin-content';

describe('AdminContent', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<AdminContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
