import {fork} from 'redux-saga/effects';

import {
  forgotPassRequest,
  loginRequest,
  signUpRequest,
  walkthroughRequest,
  resetPassRequest,
  socialLoginRequest,
  logoutRequestSega,
  OTPVerifyRequest,
  ProviderloginRequest,
  ServiceProviderSignUpRequest,
  CustomerSignup,
  SignupOTPVerifyRequest,
  AddKids,
  AddPet,
} from './auth-saga/auth-sega';
import {
  customer_Book_Appointment,
  getServiceProvider,
} from '../saga/customer-bookAppointment-saga/customer-bookAppointment-saga';
import {setProfileImageRequest} from './profile-sega/profile-sega';
export function* rootSaga() {
  yield fork(loginRequest);
  yield fork(ProviderloginRequest);
  yield fork(walkthroughRequest);
  yield fork(forgotPassRequest);
  yield fork(resetPassRequest);
  yield fork(socialLoginRequest);
  yield fork(logoutRequestSega);
  yield fork(OTPVerifyRequest);
  yield fork(setProfileImageRequest);
  yield fork(CustomerSignup);
  yield fork(SignupOTPVerifyRequest);
  yield fork(AddKids);
  yield fork(AddPet);
  yield fork(ServiceProviderSignUpRequest);
  yield fork(customer_Book_Appointment);
}
