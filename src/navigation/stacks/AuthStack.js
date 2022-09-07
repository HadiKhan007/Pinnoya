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
import AddPersonalInfo from '../../screens/AuthScreens/CustomerRegister/AddPersonalInfo';
import UploadDoc from '../../screens/AuthScreens/SPRegister/UploadDoc';
import SPVerifyOtp from '../../screens/AuthScreens/SPRegister/SPVerifyOtp';
import SetLocation from '../../screens/AuthScreens/CustomerRegister/SetLocation';
import LocationFinder from '../../screens/AuthScreens/CustomerRegister/LocationFinder';
import ResetPasswordSuccess from '../../screens/AuthScreens/ResetPasswordSuccess';
import ForgotVerifyOtp from '../../screens/AuthScreens/ForgotVerifyOtp';
import TrackingDetail from '../../screens/Customer/HomeTab/TrackingDetail';
const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="AddPersonalInfo" component={AddPersonalInfo} />
      <Stack.Screen name="SetLocation" component={SetLocation} />
      <Stack.Screen name="LocationFinder" component={LocationFinder} />
      <Stack.Screen name="TrackingDetail" component={TrackingDetail} />
      <Stack.Screen name="CSignUp" component={CSignUp} />
      <Stack.Screen name="CSignUp2" component={CSignUp2} />
      <Stack.Screen name="SPSignUp" component={SPSignUp} />
      <Stack.Screen name="SPSignUp2" component={SPSignUp2} />
      <Stack.Screen name="UploadDoc" component={UploadDoc} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen name="SPVerifyOtp" component={SPVerifyOtp} />
      <Stack.Screen name="ForgotVerifyOtp" component={ForgotVerifyOtp} />
      <Stack.Screen
        name="ResetPasswordSuccess"
        component={ResetPasswordSuccess}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
