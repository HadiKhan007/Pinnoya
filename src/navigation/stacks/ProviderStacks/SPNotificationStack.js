import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Notification from '../../../screens/Provider/NotificationTab/Notification';
const Stack = createStackNavigator();

function SPNotificationStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="NotificationStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
}

export default SPNotificationStack;
