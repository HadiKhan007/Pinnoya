import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../../screens/Customer/ProfileTab/Profile/Profile';
import PrivacyPolicy from '../../../screens/Customer/ProfileTab/PrivacyPolicy/PrivacyPolicy';
import AboutUs from '../../../screens/Customer/ProfileTab/AboutUs/AboutUs';
import Terms from '../../../screens/Customer/ProfileTab/Terms/Terms';
import MyAddresses from '../../../screens/Customer/ProfileTab/MyAddresses/MyAddresses';
import EditProfile from '../../../screens/Customer/ProfileTab/EditProfile/EditProfile';
import PaymentInfo from '../../../screens/Customer/ProfileTab/PaymentInfo';
import HelpCenter from '../../../screens/Customer/ProfileTab/HelpCenter';

const Stack = createStackNavigator();

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="ProfileStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="MyAddresses" component={MyAddresses} />
      <Stack.Screen name="PaymentInfo" component={PaymentInfo} />
      <Stack.Screen name="HelpCenter" component={HelpCenter} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="Terms" component={Terms} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
