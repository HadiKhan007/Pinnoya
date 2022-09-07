// const BASE_URL = 'https://billion-pound.herokuapp.com/api/v1/';
// const BASE_URL = 'http://192.168.11.164:3000/api/v1/';
// const BASE_URL = 'http://18.212.50.13/api/v1/';
const BASE_URL = 'https://pinoyaya.herokuapp.com/api/v1/';


const ENDPOINTS = {
  REGISTER: 'customers',
  LOGIN: 'customers/sign_in',
  GOOGLE_SIGN_IN: 'google_login',
  APPLE_SIGN_IN: 'apple_login',
  FORGOT_PASS: 'password/forgot',
  RESET_PASS: 'password/reset',
  LOGOUT: 'logout',
  ACCESS_TOKEN: 'get_access_token',
  VERIFY_OTP: 'password/check_otp',
  PROFILE: `users`,
  FAQ: 'faqs',
  TERMS_CONDITION: 'term_and_conditions',
  PRIVACY_POLICY: 'privacy_policies',
  CHECKOUT: 'checkout',
};

export {BASE_URL, ENDPOINTS};
