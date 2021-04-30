import React, { useState, useEffect } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Dimensions, KeyboardAvoidingView } from 'react-native';
import { instance } from '../../axios/axios';

const NewPostComponent = (props) => {

  const [postBody, setPostBody] = useState('')

  const CreateNewPost = async() => {
    instance.post("/peeps", 
    {"peep": {"user_id": props.route.params.user_id, "body": postBody}}
    )
    .then(() => props.getPosts())
    .catch((error) => {
      console.log(error)
    })
  }

  return(
    <View>
      <TextInput
      placeholder="What is on your mind?"
      style={styles.textInput}
      onChangeText={(text) => setPostBody(text)}
      value={postBody}
      />
      <View style={styles.peepButton}>
        <Button title="Peep" onPress={CreateNewPost}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 16,
    color: 'black',
    backgroundColor: '#e3d0d8',
    width: '100%',
    alignItems: 'center',
  },
  peepButton: {
    alignItems: 'flex-end',
    color: '#e7e6f7',
    backgroundColor: '#e3d0d8',
  }
})

export { NewPostComponent }