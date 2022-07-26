import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../../screens/Customer/ProfileTab/Profile/Profile';
import PrivacyPolicy from '../../../screens/Customer/ProfileTab/PrivacyPolicy/PrivacyPolicy';
import AboutUs from '../../../screens/Customer/ProfileTab/AboutUs/AboutUs';
import Terms from '../../../screens/Customer/ProfileTab/Terms/Terms';

const Stack = createStackNavigator();

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="ProfileStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="Terms" component={Terms} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
