import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../screens/AuthScreens/Login';
import CSignUp from '../../screens/AuthScreens/CustomerRegister/Register';
import CSignUp2 from '../../screens/AuthScreens/CustomerRegister/RegisterStep2';
import SPSignUp from '../../screens/AuthScreens/SPRegister/Register';
import SPSignUp2 from '../../screens/AuthScreens/SPRegister/RegisterStep2';

import ForgotPassword from '../../screens/AuthScreens/ForgotPassword';
import ResetPassword from '../../screens/AuthScreens/ResetPassword';
import VerifyOtp from '../../screens/AuthScreens/VerifyOtp';

const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CSignUp" component={CSignUp} />
      <Stack.Screen name="CSignUp2" component={CSignUp2} />
      <Stack.Screen name="SPSignUp" component={SPSignUp} />
      <Stack.Screen name="SPSignUp2" component={SPSignUp2} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
    </Stack.Navigator>
  );
}

export default AuthStack;
