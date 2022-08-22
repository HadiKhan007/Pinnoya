import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SPDashboard from '../../../screens/Provider/HomeTab/SPDashboard/SPDashboard';
import VerifyProfile from '../../../screens/Provider/HomeTab/VerifyProfile';
import PendingRequest from '../../../screens/Provider/HomeTab/PendingRequest';
import SPJobs from '../../../screens/Provider/HomeTab/SPJobs';
import FilterService from '../../../screens/Customer/HomeTab/FilterService/FilterService';
import ServiceItemDetail from '../../../screens/Provider/HomeTab/ServiceItemDetail';
import CallNow from '../../../screens/Customer/HomeTab/CallNow/CallNow';
import Chat from '../../../screens/Customer/HomeTab/Chat/Chat';
import TrackingDetail from '../../../screens/Provider/HomeTab/TrackingDetail';
import OfferSuccess from '../../../screens/Provider/HomeTab/OfferSuccess';
import History from '../../../screens/Provider/HomeTab/History';
import TransactionHistory from '../../../screens/Provider/HomeTab/TransactionHistory';
import PaymentMethod from '../../../screens/Customer/HomeTab/PaymentMethod/PaymentMethod';
import Payment from '../../../screens/Customer/HomeTab/Payment/Payment';
import PaymentVerfication from '../../../screens/Customer/HomeTab/PaymentVerification/PaymentVerification';
import PaymentSuccess from '../../../screens/Customer/HomeTab/PaymentSuccess/PaymentSuccess';
const Stack = createStackNavigator();

function SPHomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="SPDashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SPDashboard" component={SPDashboard} />
      <Stack.Screen name="VerifyProfile" component={VerifyProfile} />
      <Stack.Screen name="PendingRequest" component={PendingRequest} />
      <Stack.Screen name="SPJobs" component={SPJobs} />
      <Stack.Screen name="FilterService" component={FilterService} />
      <Stack.Screen name="ServiceItemDetail" component={ServiceItemDetail} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="CallNow" component={CallNow} />
      <Stack.Screen name="TrackingDetail" component={TrackingDetail} />
      <Stack.Screen name="OfferSuccess" component={OfferSuccess} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PaymentVerification" component={PaymentVerfication} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Stack.Navigator>
  );
}

export default SPHomeStack;
