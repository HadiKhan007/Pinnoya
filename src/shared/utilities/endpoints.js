// const BASE_URL = 'http://192.168.11.164:3000/api/v1/';
// const BASE_URL = 'http://18.212.50.13/api/v1/';
const BASE_URL = 'https://pinoyaya.herokuapp.com/api/v1/';

const ENDPOINTS = {
  REGISTER_CUSTOMER: 'customers',
  REGISTER_SERVICE_PROVIDER: 'service_providers',
  CUSTOMER_LOGIN: 'customers/sign_in',
  PROVIDER_LOGIN: 'service_providers/sign_in',
  GOOGLE_SIGN_IN: 'google_login',
  APPLE_SIGN_IN: 'apple_login',
  FORGOT_PASS: 'forgot_password',
  RESET_PASSWORD: 'reset_password',
  LOGOUT: 'logout',
  ACCESS_TOKEN: 'get_access_token',
  VERIFY_OTP: 'verify_token',
  SIGNUP_VERIFY_OTP: 'verify_otp',
  PROFILE: `users`,
  FAQ: 'faqs',
  TERMS_CONDITION: 'term_and_conditions',
  PRIVACY_POLICY: 'privacy_policies',
  CHECKOUT: 'checkout',
  ADD_KIDS: 'customers/kids',
  ADD_PETS: 'customers/pets',
  GETALLSERVICES: 'customers/homepages',
  GET_SERVICE_PROVIDER:
    'customers/service_providers/custom_service_providers?service_id=',
  GET_SERVICE_PROVIDER_DETAILS: 'customers/service_providers/',
};

export {BASE_URL, ENDPOINTS};
