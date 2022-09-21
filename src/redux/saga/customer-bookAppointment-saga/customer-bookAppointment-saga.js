import {takeLatest, put} from 'redux-saga/effects';
import {BASE_URL, ENDPOINTS, responseValidator} from '../../../shared/exporter';
import * as types from '../../actions/types';
import axios from 'axios';

export function* customer_Book_Appointment() {
  console.log('Into saga  service list');
  yield takeLatest(types.GET_ALL_SERVICES, getAllServiceSaga);
  yield takeLatest(types.GET_SERVICE_PROVIDERS_REQUEST, getServiceProviderSaga);
}

function* getAllServiceSaga(params) {
  const {token} = params;
  try {
    const res = yield axios.get(`${BASE_URL}${ENDPOINTS.GETALLSERVICES}`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    params.cbSuccess(res);
  } catch (error) {
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* getServiceProviderSaga(params) {
  try {
    var data = new FormData();

    var config = {
      method: 'get',
      url: 'https://pinoyaya.herokuapp.com/api/v1//customers/service_providers/custom_service_providers?service_id=9',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMiIsInNjcCI6ImN1c3RvbWVyIiwiYXVkIjpudWxsLCJpYXQiOjE2NjM2NTU1OTUsImV4cCI6MTY2NDk1MTU5NSwianRpIjoiYzU4MTY4ZjAtMWZkOC00OTlhLTg5MTgtODkxZTlkYjcwNzc2In0.bqq5gM9XiKK3Jm7ncksfUJdUqYgQPUaQoZl-tWIdDHQ',
      },
      data: data,
    };

    const res = yield axios(config);
    yield put({
      type: types.GET_SERVICE_PROVIDERS_SUCCESS,
      payload: response,
    });
    console.log(response.data);
  } catch (error) {
    console.log('[err]', error);
    yield put({
      type: types.GET_SERVICE_PROVIDERS_FAILURE,
      payload: error,
    });
  }

  return;
  try {
    const res = yield axios.get(
      `${BASE_URL}${ENDPOINTS.GET_SERVICE_PROVIDER}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${params?.token}`,
        },
      },
    );
    console.log('[API response]', res);
    yield put({
      type: types.GET_SERVICE_PROVIDERS_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
  } catch (error) {
    console.log('[API response error]', error);
    yield put({
      type: types.GET_SERVICE_PROVIDERS_FAILURE,
      payload: error,
    });
    params?.cbFailure('');
  }
}
