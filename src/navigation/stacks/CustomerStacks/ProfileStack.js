import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../../screens/Customer/ProfileTab/Profile';

const Stack = createStackNavigator();

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="ProfileStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
