import React from 'react';
import { shallow } from 'enzyme';
import FormFooter from './formFooter';

describe('FormFooter', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<FormFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
