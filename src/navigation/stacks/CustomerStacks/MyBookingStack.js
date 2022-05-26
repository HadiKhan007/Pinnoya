import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyBooking from '../../../screens/Customer/MyBookingTab/MyBookings';

const Stack = createStackNavigator();

function MyBookingStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="BookingStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyBooking" component={MyBooking} />
    </Stack.Navigator>
  );
}

export default MyBookingStack;
