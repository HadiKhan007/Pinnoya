import axios from 'axios';
import { ENDPOINTS, HTTP_CLIENT, BASE_URL } from '../exporter';
//Authentication Requests
export const registerUser = params => {
  return HTTP_CLIENT.post(ENDPOINTS.REGISTER, params);
};
export const loginUser = async (route,params) => {
  return HTTP_CLIENT.post(route, params);
};
export const  Provider= async params => {
  return HTTP_CLIENT.post(ENDPOINTS.Provider, params);
};

export const socialLogin = (logintype, params) => {
  return HTTP_CLIENT.post(
    `${logintype == 'google'
      ? ENDPOINTS.GOOGLE_SIGN_IN
      : ENDPOINTS?.APPLE_SIGN_IN
    }`,
    params,
  );
};
export const forgotPassword = params => {
  return HTTP_CLIENT.post(ENDPOINTS.FORGOT_PASS, params);
};
export const OTPVerify = params => {
  return HTTP_CLIENT.post(ENDPOINTS.VERIFY_OTP, params);
};
export const resetPassword = params => {
  return HTTP_CLIENT.post(ENDPOINTS.RESET_PASS, params);
};
export const logoutUser = () => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGOUT);
};
