import React from 'react';
import { shallow } from 'enzyme';
import Validation from './validation';

describe('Validation', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Validation />);
    expect(wrapper).toMatchSnapshot();
  });
});
