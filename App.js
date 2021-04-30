import React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUpScreen, LogInScreen, PostScreen } from './src/screens';

const Stack = createStackNavigator();

class App extends React.Component {
  
  render() {

    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Sign up">
              {props => <SignUpScreen {...props}/>}
            </Stack.Screen>
          <Stack.Screen name='Log In'>
              {props => <LogInScreen {...props}/>}
          </Stack.Screen>
          <Stack.Screen name='Home'>
            {props => <PostScreen {...props}/>}
          </Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;