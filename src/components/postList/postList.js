import React from 'react';
import { PostsComponent } from '../posts'; 

const PostList = ( props ) => {
  const {posts = [], getPosts, route} = props

  return posts.map((post) => <PostsComponent key={post.id} {...post} {...{getPosts}} myId={route.params.user_id}/>)
}

export { PostList }