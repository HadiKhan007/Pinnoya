import * as TYPES from '../types';

export const getServiceProviderDetailAction = (
  serviceProviderId,
  cbSuccess,
  cbFailure,
) => {
  return {
    type: TYPES.GET_SERVICE_PROVIDER_DETAILS_REQUEST,
    serviceProviderId,
    cbSuccess,
    cbFailure,
  };
};
