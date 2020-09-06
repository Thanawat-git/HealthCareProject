import React from 'react';
import { shallow } from 'enzyme';
import MedicContent from './MedicContent';

describe('MedicContent', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<MedicContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
