import { shallow } from 'enzyme';
import * as React from 'react';
import AppComponent from '../app/AppComponent';

it('renders without crashing', () => {
  shallow(<AppComponent />);
});

it('includes app logo', () => {
  const app = shallow(<AppComponent />);
  expect(app.containsMatchingElement(<img className="App-logo" />)).toEqual(true)
});

