import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SPDashboard from '../../../screens/Provider/HomeTab/SPDashboard/SPDashboard';

const Stack = createStackNavigator();

function SPHomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="SPDashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Chat" component={SPDashboard} />
    </Stack.Navigator>
  );
}

export default SPHomeStack;
