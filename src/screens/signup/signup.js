import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Dimensions, KeyboardAvoidingView } from 'react-native';
import { addHeader, instance } from '../../axios/axios';

const SignUpScreen = ({navigation}) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const createNewUser = async() => {
    await instance.post("/users" , 
    {"user": {"handle": userName, "password": password}})
    const {data} = await instance.post("/sessions",
    {"session": {"handle": userName, "password": password}})
    addHeader(data.session_key)
    navigation.navigate('Home', data)
    alert(`Welcome to chitter ${userName} !`)
    .catch((error) => {
      console.log('error', error)
    })
  };

  return(
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.signUpSheet}>
        <TextInput style={styles.textInput}
        placeholder='First Name'
        autoCapitalize='none'
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
        />
        <TextInput style={styles.textInput}
        placeholder='Last Name'
        autoCapitalize='none'
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        />
         <TextInput style={styles.textInput}
        placeholder='Email'
        autoCapitalize='none'
        onChangeText={(text) => setEmail(text)}
        value={email}
        />
         <TextInput style={styles.textInput}
        placeholder='Username'
        autoCapitalize='none'
        onChangeText={(text) => setUserName(text)}
        value={userName}
        />
         <TextInput style={styles.textInput}
        placeholder='Password'
        autoCapitalize='none'
        onChangeText={(text) => setPassword(text)}
        value={password}
        />
        <Button style={styles.button} title='Sign Up' onPress={() => createNewUser()}/>
        <Text>Do you already have an account?</Text>
        <Text onPress={() => navigation.navigate('Log In')}>Log In</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  textInput: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E1E5EA',
    borderRadius: 4,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    width: 200,
    alignItems: 'center',
  },
  signUpSheet: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height*0.2,
  },
});

export { SignUpScreen }