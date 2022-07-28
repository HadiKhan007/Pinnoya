import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../../../screens/Customer/HomeTab/Dashboard';
import ServiceDetail from '../../../screens/Customer/HomeTab/ServiceDetail';
import ServiceItemDetail from '../../../screens/Customer/HomeTab/ServiceItemDetail';
import BookingDetail from '../../../screens/Customer/HomeTab/BookingDetail/BookingDetail';
import ScheduleNow from '../../../screens/Customer/HomeTab/ScheduleNow/ScheduleNow';
import FilterService from '../../../screens/Customer/HomeTab/FilterService';
import TrackingDetail from '../../../screens/Customer/HomeTab/TrackingDetail/TrackingDetail';
import AvailServiceDetail from '../../../screens/Customer/HomeTab/AvailServiceDetail';
import MyReviews from '../../../screens/Customer/HomeTab/MyReviews';
import MyBookings from '../../../screens/Customer/HomeTab/MyBookings';
import BookedServiceDetail from '../../../screens/Customer/HomeTab/BookedServiceDetail';
import CallNow from '../../../screens/Customer/HomeTab/CallNow/CallNow';
import Chat from '../../../screens/Customer/HomeTab/Chat/Chat';
import FullTimeService from '../../../screens/Customer/HomeTab/FullTimeServices/FullTimeService';

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
      <Stack.Screen name="ScheduleNow" component={ScheduleNow} />
      <Stack.Screen name="FilterService" component={FilterService} />
      <Stack.Screen name="TrackingDetail" component={TrackingDetail} />
      <Stack.Screen name="AvailServiceDetail" component={AvailServiceDetail} />
      <Stack.Screen name="MyReviews" component={MyReviews} />
      <Stack.Screen name="MyBooking" component={MyBookings} />
      <Stack.Screen name="CallNow" component={CallNow} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen
        name="BookedServiceDetail"
        component={BookedServiceDetail}
      />
      <Stack.Screen
        name="FullTimeService"
        component={FullTimeService}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
