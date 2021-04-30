import 'react-native';
import React from 'react';

import { PostsComponent } from './posts.js';
import renderer from 'react-test-renderer';

test('it works', () => {
  expect(true).toBeTruthy();
});

describe("<PostsComponent />", () => {
  const tree = renderer.create(<PostsComponent />).toJSON();

  it('renders correctly', async () => {
    expect(tree).toMatchSnapshot();
  })

  it('has 1 children', async () => {
    expect(tree.children.length).toBe(1);
  });
});