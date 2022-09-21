import * as TYPES from '../types';

//Email Validation Action
export const loginRequest = (data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.LOGIN_REQUEST_REQUEST,
    data,
    cbSuccess,
    cbFailure,
  };
};
export const providerLoginRequest = (data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.PROVIDER_LOGIN_REQUEST,
    data,
    cbSuccess,
    cbFailure,
  };
};
//Social Login Action
export const socialLoginRequest = (
  login_type,
  params,
  cbSuccess,
  cbFailure,
) => {
  return {
    type: TYPES.SOCIAL_LOGIN_REQUEST,
    login_type,
    params,
    cbSuccess,
    cbFailure,
  };
};
//Sign up obj Action
export const signUpRequest = (data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.CUSTOMER_SIGNUP_REQUEST,
    data,
    cbSuccess,
    cbFailure,
  };
};

export const serviceProviderSignUpRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SERVICE_PROVIDER_SIGNUP_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

//Forgot Password Action
export const forgotPasswordRequest = (data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.FORGOT_PASSWORD_REQUEST,
    data,
    cbSuccess,
    cbFailure,
  };
};
//Reset Password Action
export const resetPassRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.RESET_PASSWORD_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
export const resetPasswordAction = (data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.PASSWORD_RESET_REQUEST,
    data,
    cbSuccess,
    cbFailure,
  };
};
//Verify OTP Action
export const verifyOTPRequest = (data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.OTP_VERIFY_REQUEST,
    data,
    cbSuccess,
    cbFailure,
  };
};
export const verifySignupOTPRequest = (data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.SIGNUP_OTP_VERIFY_REQUEST,
    data,
    cbSuccess,
    cbFailure,
  };
};

//Set Walkthrough Action
export const setWalkthrough = params => {
  return {
    type: TYPES.SET_WALKTHROUGH_REQUEST,
    params,
  };
};

//Set Walkthrough Action
export const logoutRequset = params => {
  return {
    type: TYPES.LOGOUT_REQUEST_REQUEST,
    params,
  };
};
export const addKidRequest = (token, data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.ADD_KIDS_REQUEST,
    token,
    data,
    cbSuccess,
    cbFailure,
  };
};
export const addPetRequest = (token, data, cbSuccess, cbFailure) => {
  return {
    type: TYPES.ADD_PETS_REQUEST,
    token,
    data,
    cbSuccess,
    cbFailure,
  };
};
