import {takeLatest, put} from 'redux-saga/effects';
import {BASE_URL, ENDPOINTS, responseValidator} from '../../../shared/exporter';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  loginUser,
  registerUser,
  resetPassword,
  socialLogin,
  OTPVerify,
  Provider,
  customerLoginService,
} from '../../../shared/service/AuthService';
import * as types from '../../actions/types';
import axios from 'axios';

export function* CustomerSignup() {
  yield takeLatest(types.CUSTOMER_SIGNUP_REQUEST, CustomerSignupRequest);
}
function* CustomerSignupRequest(params) {
  try {
    const res = yield axios.post(
      `${BASE_URL}${ENDPOINTS.REGISTER_CUSTOMER}`,
      params?.data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (res) {
      yield put({
        type: types.CUSTOMER_SIGNUP_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    } else {
      yield put({
        type: types.CUSTOMER_SIGNUP_FAILURE,
        payload: null,
      });
      params?.cbFailure(res);
    }
  } catch (error) {
    yield put({
      type: types.CUSTOMER_SIGNUP_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
// *************Login Sega**************

export function* loginRequest() {
  yield takeLatest(types.LOGIN_REQUEST_REQUEST, customerLogin);
}

function* customerLogin(params) {
  try {
    const res = yield axios.post(
      `${BASE_URL}${ENDPOINTS.CUSTOMER_LOGIN}`,
      params?.data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (res) {
      AsyncStorage.setItem('usertoken', res?.data?.token);
      yield put({
        type: types.LOGIN_REQUEST_SUCCESS,
        payload: res,
      });
      yield put({
        type: types.GET_PROFILE_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res);
    } else {
      yield put({
        type: types.LOGIN_REQUEST_FAILURE,
        payload: null,
      });
      // params?.cbFailure(res);
    }
  } catch (error) {
    console.log('LOGIN REs error', error);

    yield put({
      type: types.LOGIN_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
export function* ProviderloginRequest() {
  yield takeLatest(types.PROVIDER_LOGIN_REQUEST, providerLogin);
}

function* providerLogin(params) {
  try {
    const res = yield axios.post(
      `${BASE_URL}${ENDPOINTS.PROVIDER_LOGIN}`,
      params?.data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (res) {
      yield put({
        type: types.PROVIDER_LOGIN_SUCCESS,
        payload: res,
      });
      yield put({
        type: types.GET_PROFILE_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    } else {
      yield put({
        type: types.PROVIDER_LOGIN_FAILURE,
        payload: null,
      });
      params?.cbFailure(res);
    }
  } catch (error) {
    yield put({
      type: types.PROVIDER_LOGIN_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.data?.error);
    params?.cbFailure(msg);
  }
}

// *************Social Login Login Sega**************
export function* socialLoginRequest() {
  yield takeLatest(types.SOCIAL_LOGIN_REQUEST, socialLoginUser);
}
function* socialLoginUser(params) {
  try {
    const res = yield socialLogin(params?.login_type, params?.params);
    if (res.data) {
      yield put({
        type: types.SOCIAL_LOGIN_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.SOCIAL_LOGIN_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    yield put({
      type: types.SOCIAL_LOGIN_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status);
    params?.cbFailure(msg);
  }
}

// *************Sign Up Sega**************
// export function* signUpRequest() {
//   yield takeLatest(types.SIGNUP_REQUEST, customerSignUp);
// }

// function* customerSignUp(params) {
//   console.log('PARAMS==> saga', params);
//   try {
//     registerUser(params?.params)
//       .then(res => {
//         params?.cbSuccess(res.data);
//       })
//       .catch(error => {
//         params?.cbFailure(error);
//       });
//   } catch (error) {
//     let msg = responseValidator(error?.response?.status, error?.response?.data);
//     params?.cbFailure(msg);
//   }
// }

export function* ServiceProviderSignUpRequest() {
  yield takeLatest(
    types.SERVICE_PROVIDER_SIGNUP_REQUEST,
    serviceProviderSignUp,
  );
}

function* serviceProviderSignUp(params) {
  try {
    const res = yield axios.post(
      `${BASE_URL}${ENDPOINTS.REGISTER_SERVICE_PROVIDER}`,
      params?.data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (res.data) {
      params?.cbSuccess(res.data);
    } else {
      params?.cbFailure(res);
    }
  } catch (error) {
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

export function* forgotPassRequest() {
  yield takeLatest(types.FORGOT_PASSWORD_REQUEST, forgotPassword);
}

function* forgotPassword(params) {
  try {
    const res = yield axios.post(
      `${BASE_URL}${ENDPOINTS.FORGOT_PASS}`,
      params?.data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (res.data) {
      yield put({
        type: types.FORGOT_PASSWORD_SUCCESS,
        payload: res?.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.FORGOT_PASSWORD_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    yield put({
      type: types.FORGOT_PASSWORD_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************Verify OTP Sega**************
export function* OTPVerifyRequest() {
  yield takeLatest(types.OTP_VERIFY_REQUEST, verifyOTP);
}

function* verifyOTP(params) {
  try {
    const res = yield axios.post(
      `${BASE_URL}${ENDPOINTS.VERIFY_OTP}`,
      params?.data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (res.data) {
      yield put({
        type: types.OTP_VERIFY_SUCCESS,
        payload: res?.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.OTP_VERIFY_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    yield put({
      type: types.OTP_VERIFY_FAILURE,
      payload: null,
    });
    let msg = responseValidator(
      error?.response?.data?.status,
      error?.response?.data,
    );
    params?.cbFailure(msg);
  }
}

export function* SignupOTPVerifyRequest() {
  yield takeLatest(types.SIGNUP_OTP_VERIFY_REQUEST, registerVerifyOTP);
}

function* registerVerifyOTP(params) {
  try {
    const res = yield axios.post(
      `${BASE_URL}${ENDPOINTS.SIGNUP_VERIFY_OTP}`,
      params?.data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (res.data) {
      yield put({
        type: types.SIGNUP_OTP_VERIFY_SUCCESS,
        payload: res?.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.SIGNUP_OTP_VERIFY_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    yield put({
      type: types.SIGNUP_OTP_VERIFY_FAILURE,
      payload: null,
    });
    let msg = responseValidator(
      error?.response?.data?.status,
      error?.response?.data,
    );
    params?.cbFailure(msg);
  }
}

// *************Reset Password Sega**************
export function* resetPassRequest() {
  yield takeLatest(types.PASSWORD_RESET_REQUEST, resetPass);
}

function* resetPass(params) {
  try {
    const res = yield axios.post(
      `${BASE_URL}${ENDPOINTS.RESET_PASSWORD}`,
      params?.data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (res.data) {
      yield put({
        type: types.PASSWORD_RESET_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.PASSWORD_RESET_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    yield put({
      type: types.RESET_PASSWORD_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

//*************Walkthrough SEGA**************
export function* walkthroughRequest() {
  yield takeLatest(types.SET_WALKTHROUGH_REQUEST, set_walkthrough);
}
function* set_walkthrough(params) {
  try {
    yield put({
      type: types.SET_WALKTHROUGH_SUCCESS,
      payload: params?.params,
    });
  } catch (error) {}
}
//************* Logout **************
export function* logoutRequestSega() {
  yield takeLatest(types.LOGOUT_REQUEST_REQUEST, logout);
}
function* logout(params) {
  try {
    yield put({
      type: types.LOGOUT_REQUEST_SUCCESS,
      payload: params,
    });
  } catch (error) {}
}

export function* AddKids() {
  yield takeLatest(types.ADD_KIDS_REQUEST, addKidsSaga);
}

function* addKidsSaga(params) {
  const {token} = params;
  try {
    const res = yield axios.post(
      `${BASE_URL}${ENDPOINTS.ADD_KIDS}`,
      params?.data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          // 'Content-Type': `multipart/form-data boundary=${data._boundary}`,
          Authorization: `Bearer ${token}`,
        },
      },
    );
    params.cbSuccess(res);
  } catch (error) {
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

export function* AddPet() {
  yield takeLatest(types.ADD_PETS_REQUEST, addPetSaga);
}

function* addPetSaga(params) {
  const {token} = params;

  try {
    const res = yield axios.post(
      `${BASE_URL}${ENDPOINTS.ADD_PETS}`,
      params?.data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    params.cbSuccess(res);
  } catch (error) {
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
