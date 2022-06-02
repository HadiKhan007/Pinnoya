import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyBooking from '../../../screens/Customer/MyBookingTab/MyBookings';
import BookedServiceDetail from '../../../screens/Customer/MyBookingTab/BookedServiceDetail/BookedServiceDetail';

const Stack = createStackNavigator();

function MyBookingStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="BookingStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyBooking" component={MyBooking} />
      <Stack.Screen
        name="BookedServiceDetail"
        component={BookedServiceDetail}
      />
    </Stack.Navigator>
  );
}

export default MyBookingStack;
