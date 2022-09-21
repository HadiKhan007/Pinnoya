import * as TYPES from '../types';

export const getAllSericeAction = (token, cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_ALL_SERVICES,
    token,
    cbSuccess,
    cbFailure,
  };
};

export const getAllServiceProvidersAction = (
  token,
  serviceId,
  cbSuccess,
  cbFailure,
) => {
  return {
    type: TYPES.GET_SERVICE_PROVIDERS_REQUEST,
    token,
    serviceId,
    cbSuccess,
    cbFailure,
  };
};
