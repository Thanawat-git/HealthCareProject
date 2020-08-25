import React from 'react';
import { shallow } from 'enzyme';
import FormHeader from './formHeader';

describe('FormHeader', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<FormHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
