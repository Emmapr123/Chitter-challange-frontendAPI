import 'react-native';
import React from 'react';

import { SignUpScreen } from './signup.js';
import renderer from 'react-test-renderer';

test('it works', () => {
  expect(true).toBeTruthy();
});

describe("<SignUpScreen />", () => {
  const tree = renderer.create(<SignUpScreen />).toJSON();

  it('renders correctly', async () => {
    expect(tree).toMatchSnapshot();
  })

  it('has 1 children', async () => {
    expect(tree.children.length).toBe(1);
  });
});