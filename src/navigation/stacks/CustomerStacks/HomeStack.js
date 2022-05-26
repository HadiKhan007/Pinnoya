import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../../../screens/Customer/HomeTab/Dashboard';

const Stack = createStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default HomeStack;
