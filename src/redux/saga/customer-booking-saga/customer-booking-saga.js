import {takeLatest, put} from 'redux-saga/effects';
import {BASE_URL, ENDPOINTS, responseValidator} from '../../../shared/exporter';
import * as types from '../../actions/types';
import axios from 'axios';
import {ServiceProviderDeatilApi} from '../../../shared/service/BookingService';

export function* customerBookings() {
  yield takeLatest(
    types.GET_SERVICE_PROVIDER_DETAILS_REQUEST,
    getServiceProviderDetail,
  );
}

function* getServiceProviderDetail(params) {
  alert('dasdsa');
  try {
    const res = yield ServiceProviderDeatilApi(params?.params);

    yield put({
      type: types.GET_SERVICE_PROVIDERS_SUCCESS,
      payload: res,
    });
    console.log('[res]', res);
    params.cbSuccess(res);
  } catch (error) {
    console.log('[Error]', error);
    yield put({
      type: types.GET_SERVICE_PROVIDERS_FAILURE,
      payload: null,
    });
    // let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(error);
  }
}
