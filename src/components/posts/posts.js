import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import dayjs from 'dayjs';
import { DeleteButton, LoveButton } from '../../Buttons';
import { instance } from '../../axios/axios';

const PostsComponent = ({ 
  id,
  body, 
  created_at,
  user,
  likes,
  getPosts,
  myId
}) => {

  const username = user.handle
  const timeStamp = dayjs(created_at).format("DD/MM")
  const loved = !!likes.filter((like) => like.user.id === myId)[0]

  const deletePeep = async() => {
    await instance.delete(`/peeps/${id}`)
    .then(() => getPosts())
  }

  const lovePeep = async() => {
    console.log('pressed')
    if (loved) {
      instance.delete(`/peeps/${id}/likes/${myId}`)
      .then(() => getPosts())
    } else {
      instance.put(`/peeps/${id}/likes/${myId}`)
      .then(() => getPosts())
    }
  }

  return(
    <View>
      <View style={styles.peepBox}><View style={styles.peepBoxContents}>
      <Image 
          style={styles.profilePic}
          source={require('../../../assets/GenericProfilePic.png') }
          />
          <View style={styles.peepBoxTypedContent}>
        <View style={styles.handleBar}>
          <Text style={styles.handle}>{username}</Text><Text style={styles.handlethin}>{`- @${username} -`}</Text>
          <Text style={styles.timestamp}>{timeStamp}</Text>
        </View>
        <Text style={styles.peepBody} >{body}</Text>
        </View>
        </View>
        <View style={styles.postButtons}>
          <View style={styles.loves}>
        <TouchableOpacity style={styles.lovebutton} onPress={() => lovePeep()}>
            <LoveButton height={12} color={loved ? 'red' : 'gray'} fillColor={loved ? 'red' : 'white'}/>
          </TouchableOpacity>
          <Text style={styles.amountOfLove}>{likes.length}</Text>
          </View>
          <TouchableOpacity onPress={() => deletePeep()}>
            <DeleteButton width={10} color={'gray'}/>
          </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  peepBox: {
    borderWidth: 0.2,
    borderColor: 'lightgray',
    backgroundColor: 'white'
  },
  peepBoxContents: {
    flexDirection: 'row',
  },
  profilePic: {
    width: 60,
    height: 60,
    marginTop: 30,
  },
  handleBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 8,
    marginLeft: 20,
  },
  handle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  handlethin:{
    color: 'gray',
    fontSize: 16,
  },
  timestamp: {
    color: '#aea3b0',
    fontSize: 16,
  },
  peepBody: {
    color: 'black',
    backgroundColor: 'white',
    width: '60%',
    height: 50,
    fontSize: 20,
    marginLeft: 20,
  },
  postButtons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginRight: 60,
    marginLeft: 60,
  },
  lovebutton: {
    marginTop: 15,
  },
  loves: {
    flexDirection: 'row',
    margin: 15,
  },
  amountOfLove: {
    marginTop: 12,
    color: 'gray'
  }
})

export { PostsComponent }