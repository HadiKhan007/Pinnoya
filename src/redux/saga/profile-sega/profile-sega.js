import {takeLatest, put} from 'redux-saga/effects';
import {BASE_URL, ENDPOINTS, responseValidator} from '../../../shared/exporter';
import {
  getFaqs,
  getPrivacyPolicy,
  getTermsConditions,
  getUserData,
  updateUserData,
} from '../../../shared/service/ProfileService';
import * as types from '../../actions/types';

//*************PROFILE IMAGE SEGA**************
export function* setProfileImageRequest() {
  yield takeLatest(types.SET_PROFILE_IMAGE_REQUEST, setprofileImage);
  yield takeLatest(types.GET_PROFILE_REQUEST, getProfileRequest);
  yield takeLatest(types.UPDATE_PROFILE_REQUEST, updateProfileRequest);
  yield takeLatest(types.GET_FAQ_REQUEST, getFaqRequest);
  yield takeLatest(types.GET_TERMS_CONDITION_REQUEST, getTermsCondition);
  yield takeLatest(types.GET_PRIVACY_POLICY_REQUEST, getPrivacyPolicyRequest);
}

function* setprofileImage(params) {
  console.log('TESTING');
  try {
    yield put({
      type: types.SET_PROFILE_IMAGE,
      payload: params?.params,
    });
  } catch (error) {}
}

//get profile data of the user
function* getProfileRequest(params) {
  try {
    const response = yield getUserData(params?.params);
    if (response.data) {
      yield put({
        type: types.GET_PROFILE_SUCCESS,
        payload: response.data,
      });
      params?.cbSuccess(response.data);
    } else {
      yield put({
        type: types.GET_PROFILE_FAILURE,
        payload: null,
      });
      params?.cbFailure(response?.data);
    }
  } catch (error) {
    yield put({
      type: types.GET_PROFILE_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

//get profile data of the user
function* updateProfileRequest(params) {
  try {
    yield put({
      type: types.UPDATE_PROFILE_SUCCESS,
      payload: params?.params,
    });
    params?.cbSuccess();
  } catch (error) {
    params?.cbFailure();
  }
}

function* getFaqRequest(params) {
  try {
    const response = yield getFaqs();
    if (response.data) {
      let array = response?.data;
      array.forEach(element => {
        element.expanded = false;
      });
      yield put({
        type: types.GET_FAQ_SUCCESS,
        payload: array,
      });

      params?.cbSuccess(array);
    } else {
      yield put({
        type: types.GET_FAQ_FAILURE,
        payload: null,
      });
      params?.cbFailure(response?.data);
    }
  } catch (error) {
    yield put({
      type: types.GET_FAQ_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* getTermsCondition(params) {
  try {
    const response = yield getTermsConditions();
    if (response.data) {
      yield put({
        type: types.GET_TERMS_CONDITION_SUCCESS,
        payload: response?.data,
      });
      params?.cbSuccess(response?.data);
    } else {
      yield put({
        type: types.GET_TERMS_CONDITION_FAILURE,
        payload: null,
      });
      params?.cbFailure(response?.data);
    }
  } catch (error) {
    yield put({
      type: types.GET_TERMS_CONDITION_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* getPrivacyPolicyRequest(params) {
  try {
    const response = yield getPrivacyPolicy();
    if (response.data) {
      yield put({
        type: types.GET_PRIVACY_POLICY_SUCCESS,
        payload: response?.data,
      });
      params?.cbSuccess(response?.data);
    } else {
      yield put({
        type: types.GET_PRIVACY_POLICY_FAILURE,
        payload: null,
      });
      params?.cbFailure(response?.data);
    }
  } catch (error) {
    yield put({
      type: types.GET_PRIVACY_POLICY_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

export function* customerBookingsSega() {
  alert('hello');
  yield takeLatest(types.GET_SERVICE_DETAILS_REQUEST, getServices);
}

function* getServices(params) {
  alert('hello');
  console.log('PARAMS ', params);
  // try {
  //   const res = yield ServiceProviderDeatilApi(params);
  //   console.log(res);
  //   yield put({
  //     type: types.GET_SERVICE_PROVIDERS_SUCCESS,
  //     payload: res,
  //   });
  //   console.log('[res]', res);
  //   params.cbSuccess(res);
  // } catch (error) {
  //   console.log('[Error]', error);
  //   yield put({
  //     type: types.GET_SERVICE_PROVIDERS_FAILURE,
  //     payload: null,
  //   });
  //   // let msg = responseValidator(error?.response?.status, error?.response?.data);
  //   params?.cbFailure(error);
  // }
}
