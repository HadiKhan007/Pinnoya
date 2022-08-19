import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SPDashboard from '../../../screens/Provider/HomeTab/SPDashboard/SPDashboard';
import VerifyProfile from '../../../screens/Provider/HomeTab/VerifyProfile';
import PendingRequest from '../../../screens/Provider/HomeTab/PendingRequest';
import SPJobs from '../../../screens/Provider/HomeTab/SPJobs';

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
    </Stack.Navigator>
  );
}

export default SPHomeStack;
