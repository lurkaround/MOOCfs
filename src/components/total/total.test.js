import React from 'react';
import { shallow } from 'enzyme';
import Total from './total';

describe('<Total />', () => {
  test('renders', () => {
    const wrapper = shallow(<Total />);
    expect(wrapper).toMatchSnapshot();
  });
});
