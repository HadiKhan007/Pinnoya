import * as TYPES from '../types';

export const userType = params => {
  return {
    type: TYPES.USER_TYPE_REQUEST,
    params,
  };
};
