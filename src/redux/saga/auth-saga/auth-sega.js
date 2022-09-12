import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import {
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
  socialLogin,
  OTPVerify,
  Provider,
} from '../../../shared/service/AuthService';
import * as types from '../../actions/types';

// *************Login Sega**************
export function* loginRequest() {
  yield takeLatest(types.LOGIN_REQUEST_REQUEST, login);
}

function* login(params) {
  try {
    const res = yield loginUser(params?.route,params?.params)
    if (res) {
      yield put({
        type: types.LOGIN_REQUEST_SUCCESS,
        payload: res.data,
      });
      yield put({
        type: types.GET_PROFILE_SUCCESS,
        payload: res.data.user,
      });
      params?.cbSuccess(res.data)
    } else {
      yield put({
        type: types.LOGIN_REQUEST_FAILURE,
        payload: null,
      });
    params?.cbFailure(res?.data);
    }
  } catch (error) {
    console.log("Error--", error);
    yield put({
      type: types.LOGIN_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    console.log("Message error---", msg);
    params?.cbFailure(msg);
  }
}
export function* ProviderloginRequest() {
  yield takeLatest(types.LOGIN_REQUEST_REQUEST, ProviderLogin);
}

function* ProviderLogin(params) {
  try {
    const res = yield Provider(params?.params)
    if (res) {
      yield put({
        type: types.PROVIDER_REQUEST_REQUEST,
        payload: res.data,
      });
      yield put({
        type: types.GET_PROFILE_SUCCESS,
        payload: res.data.user,
      });
      params?.cbSuccess(res.data)
    } else {
      yield put({
        type: types.LOGIN_REQUEST_FAILURE,
        payload: null,
      });
    params?.cbFailure(res?.data);
    }
  } catch (error) {
    console.log("Error--", error);
    yield put({
      type: types.LOGIN_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    console.log("Message error---", msg);
    params?.cbFailure(msg);
  }
}

// *************Social Login Login Sega**************
export function* socialLoginRequest() {
  yield takeLatest(types.SOCIAL_LOGIN_REQUEST_REQUEST, socialLoginUser);
}
function* socialLoginUser(params) {
  try {
    const res = yield socialLogin(params?.login_type, params?.params);
    if (res.data) {
      yield put({
        type: types.SOCIAL_LOGIN_REQUEST_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.SOCIAL_LOGIN_REQUEST_FAILURE,
        payload: null,
      });
      params?.cbFailure(res?.data);
    }
  } catch (error) {
    yield put({
      type: types.SOCIAL_LOGIN_REQUEST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status);
    params?.cbFailure(msg);
  }
}

// *************Sign Up Sega**************
export function* signUpRequest() {
  yield takeLatest(types.SIGNUP_REQUEST, signUp);
}

function* signUp(params) {
  try {
    registerUser(params?.params)
      .then(res => {
        params?.cbSuccess(res.data);
      })
      .catch(error => {
        params?.cbFailure(error);
      });
  } catch (error) {
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************Forgot Sega**************
export function* forgotPassRequest() {
  yield takeLatest(types.FORGOT_PASSWORD_REQUEST, forgot);
}

function* forgot(params) {
  try {
    const res = yield forgotPassword(params?.params);
    if (res.data) {
      yield put({
        type: types.FORGOT_PASSWORD_SUCCESS,
        payload: {...params?.params, ...res?.data},
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
    const res = yield OTPVerify(params?.params);
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
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

// *************Reset Password Sega**************
export function* resetPassRequest() {
  yield takeLatest(types.RESET_PASSWORD_REQUEST, resetPass);
}

function* resetPass(params) {
  try {
    const res = yield resetPassword(params?.params);
    if (res.data) {
      yield put({
        type: types.RESET_PASSWORD_SUCCESS,
        payload: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.RESET_PASSWORD_FAILURE,
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
  } catch (error) {
  }
}
