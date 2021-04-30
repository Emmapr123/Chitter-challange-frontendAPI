import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, TouchableOpacity, View, Text, Image, ActivityIndicator } from 'react-native';
import { instance } from '../../axios/axios';

const NewPostComponent = (props) => {

  const [postBody, setPostBody] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const createNewPost = async() => {
    setIsLoading(true)
    instance.post("/peeps", 
    {"peep": {"user_id": props.route.params.user_id, "body": postBody}}
    )
    .then(() => {
      props.getPosts()
      props.closeModal()
      setIsLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setIsLoading(false)
    })
  }

  const opacity = postBody.length ? 1 : 0.5 

  return(
    <View>
      <View style={styles.row}>
        <Button
          title="Cancel"
          onPress={() => props.closeModal()}
        />
        <TouchableOpacity onPress={postBody.length ? createNewPost : undefined} style={[styles.peepButton, {opacity: opacity}]} >
         {isLoading ? <ActivityIndicator color={'white'}/> : (<Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
            Peep
          </Text>)
          }
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <Image 
      style={styles.profilePic}
      source={require('../../../assets/GenericProfilePic.png')}
      />
      <TextInput
      placeholder="What's happening?"
      style={styles.textInput}
      onChangeText={(text) => setPostBody(text)}
      value={postBody}
      autoFocus={true}
      />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 8,
  },
  textInput: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    fontSize: 24,
  },
  peepButton: {
    backgroundColor: '#179aff',
    padding: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  profilePic: {
    width: 40,
    height: 40,
  }
})

export { NewPostComponent }