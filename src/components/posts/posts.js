import React, { useState, useEffect } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Dimensions, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import dayjs from 'dayjs';

const PostsComponent = ({ 
  body, 
  created_at,
  user
}) => {

  const CreateNewPost = async() => {
    axios.post("https://chitter-backend-api-v2.herokuapp.com/peeps")
  }

  const timeStamp = dayjs(created_at).format("DD/MM")

  return(
    <View>
      <View style={styles.peepBox}>
        <View style={styles.handleBar}>
          <Text style={styles.handle} >{user.handle}</Text>
          <Text style={styles.timestamp}>{timeStamp}</Text>
        </View>
        <Text style={styles.peepBody} >{body}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  peepBox: {
    margin: 8,
    borderWidth: 1,
    borderColor: '#c6d2ed'
  },
  handleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
  },
  handle: {
    color: '#aea3b0',
  },
  timestamp: {
    color: '#aea3b0',
  },
  peepBody: {
    color: '#827081',
    backgroundColor: '#e7e6f7',
    width: '100%',
    height: 50,
  }
})

export { PostsComponent }