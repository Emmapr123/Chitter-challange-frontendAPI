import 'react-native';
import React from 'react';

import { NewPostComponent } from './newPost.js';
import renderer from 'react-test-renderer';

test('it works', () => {
  expect(true).toBeTruthy();
});

describe("<NewPostComponent />", () => {
  const tree = renderer.create(<NewPostComponent />).toJSON();

  it('renders correctly', async () => {
    expect(tree).toMatchSnapshot();
  })

  it('has 2 children', async () => {
    expect(tree.children.length).toBe(2);
  });
});