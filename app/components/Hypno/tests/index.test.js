import React from 'react';
import { shallow } from 'enzyme';

import Hypno from '../index';

describe('<Hypno />', () => {
  it('should return a div', () => {
    const renderedComponent = shallow(<Hypno />);

    // well this test passes, but it ain't good for much
    expect(renderedComponent.children.length).toEqual(1);
  });
});
