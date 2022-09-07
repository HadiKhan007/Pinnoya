import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SPDashboard from '../../../screens/Provider/HomeTab/SPDashboard';
import VerifyProfile from '../../../screens/Provider/HomeTab/VerifyProfile';
import PendingRequest from '../../../screens/Provider/HomeTab/PendingRequest';
import SPJobs from '../../../screens/Provider/HomeTab/SPJobs';
import CallNow from '../../../screens/Customer/HomeTab/CallNow';
import Chat from '../../../screens/Customer/HomeTab/Chat';
import ServiceItemDetail from '../../../screens/Provider/HomeTab/ServiceItemDetail';
import TrackingDetail from '../../../screens/Provider/HomeTab/TrackingDetail';
import OfferSuccess from '../../../screens/Provider/HomeTab/OfferSuccess';
import History from '../../../screens/Provider/HomeTab/History';
import TransactionHistory from '../../../screens/Provider/HomeTab/TransactionHistory';
import PaymentMethod from '../../../screens/Customer/HomeTab/PaymentMethod';
import Payment from '../../../screens/Customer/HomeTab/Payment';
import PaymentVerfication from '../../../screens/Customer/HomeTab/PaymentVerification';
import PaymentSuccess from '../../../screens/Customer/HomeTab/PaymentSuccess';
import PaymentWithDraw from '../../../screens/Provider/HomeTab/PaymentWithDraw';
import PaymentPending from '../../../screens/Provider/HomeTab/PaymentPending';
import Wallet from '../../../screens/Provider/HomeTab/Wallet';
import CustomerDetail from '../../../screens/Provider/HomeTab/CustomerDetail';
import BookedServiceDetail from '../../../screens/Customer/HomeTab/BookedServiceDetail';
import MyReviews from '../../../screens/Customer/HomeTab/MyReviews';
import MyJobs from '../../../screens/Provider/HomeTab/MyJobs';
import SPServiceDetail from '../../../screens/Provider/HomeTab/SPServiceDetail';
import ServiceDetailCompleted from '../../../screens/Customer/HomeTab/ServiceDetailCompleted';

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
      <Stack.Screen name="ServiceItemDetail" component={ServiceItemDetail} />
      <Stack.Screen name="CustomerDetail" component={CustomerDetail} />
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
      <Stack.Screen name="PaymentWithDraw" component={PaymentWithDraw} />
      <Stack.Screen name="PaymentPending" component={PaymentPending} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen
        name="BookedServiceDetail"
        component={BookedServiceDetail}
      />
      <Stack.Screen
        name="ServiceDetailCompleted"
        component={ServiceDetailCompleted}
      />
      <Stack.Screen name="SPServiceDetail" component={SPServiceDetail} />
      <Stack.Screen name="MyReviews" component={MyReviews} />
      <Stack.Screen name="MyJobs" component={MyJobs} />
    </Stack.Navigator>
  );
}

export default SPHomeStack;
