import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../../../screens/Customer/HomeTab/Dashboard';
import ServiceDetail from '../../../screens/Customer/HomeTab/ServiceDetail';
import ServiceItemDetail from '../../../screens/Customer/HomeTab/ServiceItemDetail';
import BookingDetail from '../../../screens/Customer/HomeTab/BookingDetail/BookingDetail';

const Stack = createStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
      <Stack.Screen name="ServiceItemDetail" component={ServiceItemDetail} />
      <Stack.Screen name="BookingDetail" component={BookingDetail} />
    </Stack.Navigator>
  );
}

export default HomeStack;
