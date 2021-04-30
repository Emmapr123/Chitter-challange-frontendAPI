import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Modal, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { instance } from '../../axios/axios';
import { PostsComponent, NewPostComponent } from '../../components/index';
import { NewPeepButton } from '../../Buttons'

const PostList = ( props ) => {
  const {posts = [], getPosts, route} = props

  return posts.map((post) => <PostsComponent key={post.id} {...post} {...{getPosts}} myId={route.params.user_id}/>)
}

const PostScreen = (props) => {

  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)

  const getPosts = async() => {
    await instance.get("/peeps").then((res) => {
      setPosts(res.data)
    })
  }
  
  useEffect(() => {
   getPosts()
  }, [])

  return(
    <View style={{flex: 1, position: 'relative'}}>
    <ScrollView >
      <PostList posts={posts} {...{getPosts}} {...props}/>
    </ScrollView>
    <TouchableOpacity style={styles.newPeepButton} onPress={() => setModal(true)}>
        <NewPeepButton width={100} height={100}/>
      </TouchableOpacity>
      <Modal visible={modal} animationType={'slide'} transparent={false}>
        <SafeAreaView> 
          <NewPostComponent closeModal={() => setModal(false)} {...props}/>
        </SafeAreaView>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  newPeepButton: {
    position: 'absolute', 
    bottom: 32, right:32, 
    shadowColor:'black', 
    shadowRadius: 10, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.5
  }
})

export { PostScreen }