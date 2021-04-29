import React, { useState, useEffect } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Dimensions, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import { PostsComponent, NewPostComponent } from '../../components/index';
import { useNavigation } from '@react-navigation/native';

const PostList = (props) => {
  const {posts = []} = props
  return posts.map((post) => <PostsComponent key={post.id} {...post} />)
}

const PostScreen = (props, { route }) => {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    await axios.get("https://chitter-backend-api-v2.herokuapp.com/peeps").then((res) => {
      setPosts(res.data)
    })
  }
  
  useEffect(() => {
   getPosts()
  }, [])

  return(
    <ScrollView style={{flex: 1}}>
      <NewPostComponent/>
      <PostList posts={posts}/>
    </ScrollView>
  )
}

export { PostScreen }