import axios from 'axios';
import {BASE_URL, ENDPOINTS} from '../exporter';
import {GetToken} from '../utilities/headers';

export const ServiceProviderDeatilApi = async params => {
  const token = await GetToken();

  axios.get(
    `${BASE_URL}${ENDPOINTS.GET_SERVICE_PROVIDER_DETAILS}${params?.serviceProviderId}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
