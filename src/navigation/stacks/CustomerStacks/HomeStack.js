import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../../../screens/Customer/HomeTab/Dashboard';
import ServiceDetail from '../../../screens/Customer/HomeTab/ServiceDetail';
import ServiceItemDetail from '../../../screens/Customer/HomeTab/ServiceItemDetail';
import BookingDetail from '../../../screens/Customer/HomeTab/BookingDetail/BookingDetail';
import ScheduleNow from '../../../screens/Customer/HomeTab/ScheduleNow/ScheduleNow';
import TrackingDetail from '../../../screens/Customer/HomeTab/TrackingDetail';
import FilterService from '../../../screens/Customer/HomeTab/FilterService';
import AvailServiceDetail from '../../../screens/Customer/HomeTab/AvailServiceDetail';
import MyReviews from '../../../screens/Customer/HomeTab/MyReviews';
import MyBookings from '../../../screens/Customer/HomeTab/MyBookings';
import BookedServiceDetail from '../../../screens/Customer/HomeTab/BookedServiceDetail';
import CallNow from '../../../screens/Customer/HomeTab/CallNow/CallNow';
import Chat from '../../../screens/Customer/HomeTab/Chat/Chat';
import FullTimeService from '../../../screens/Customer/HomeTab/FullTimeServices/FullTimeService';
import Schedule from '../../../screens/Customer/HomeTab/Schedule/Schedule';
import DateTimePicker from '../../../screens/Customer/HomeTab/DateTimePicker/DateTimePicker';
import MyVouchers from '../../../screens/Customer/HomeTab/MyVouchers/MyVouchers';
import ServiceDetailCompleted from '../../../screens/Customer/HomeTab/ServiceDetailCompleted/ServiceDetailCompleted';
import PaymentMethod from '../../../screens/Customer/HomeTab/PaymentMethod/PaymentMethod';
import Payment from '../../../screens/Customer/HomeTab/Payment/Payment';
import PaymentVerfication from '../../../screens/Customer/HomeTab/PaymentVerification/PaymentVerification';
import PaymentSuccess from '../../../screens/Customer/HomeTab/PaymentSuccess/PaymentSuccess';
import ServiceMoreDetail from '../../../screens/Customer/HomeTab/ServiceMoreDetail/ServiceMoreDetail';
import LocationFinder from '../../../screens/AuthScreens/CustomerRegister/LocationFinder/LocationFinder';
import SetLocation from '../../../screens/AuthScreens/CustomerRegister/SetLocation/SetLocation';

const Stack = createStackNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
      <Stack.Screen name="ServiceMoreDetail" component={ServiceMoreDetail} />
      <Stack.Screen name="ServiceItemDetail" component={ServiceItemDetail} />
      <Stack.Screen name="BookingDetail" component={BookingDetail} />
      <Stack.Screen name="ScheduleNow" component={ScheduleNow} />
      <Stack.Screen name="FilterService" component={FilterService} />
      <Stack.Screen name="TrackingDetail" component={TrackingDetail} />
      <Stack.Screen name="AvailServiceDetail" component={AvailServiceDetail} />
      <Stack.Screen name="MyReviews" component={MyReviews} />
      <Stack.Screen name="MyBooking" component={MyBookings} />
      <Stack.Screen name="MyVouchers" component={MyVouchers} />
      <Stack.Screen name="CallNow" component={CallNow} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen
        name="BookedServiceDetail"
        component={BookedServiceDetail}
      />
      <Stack.Screen
        name="ServiceDetailCompleted"
        component={ServiceDetailCompleted}
      />
      <Stack.Screen name="FullTimeService" component={FullTimeService} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="DateTimePicker" component={DateTimePicker} />
      <Stack.Screen name="LocationFinder" component={LocationFinder} />
      <Stack.Screen name="SetLocation" component={SetLocation} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PaymentVerification" component={PaymentVerfication} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Stack.Navigator>
  );
}

export default HomeStack;
