import React from 'react';
import { shallow } from 'enzyme';
import Content from './content';

describe('<Content />', () => {
  test('renders', () => {
    const wrapper = shallow(<Content />);
    expect(wrapper).toMatchSnapshot();
  });
});
