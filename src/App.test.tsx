import { shallow } from 'enzyme';
import * as React from 'react';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('includes app logo', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<img className="App-logo" />)).toEqual(true)
});

