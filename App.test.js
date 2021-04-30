import 'react-native';
import React from 'react';

import { App } from './App.js';
import renderer from 'react-test-renderer';

test('it works', () => {
  expect(true).toBeTruthy();
});

describe("<App />", () => {
  const tree = renderer.create(App).toJSON();

  it('renders correctly', async () => {
    expect(tree).toMatchSnapshot();
  })

});