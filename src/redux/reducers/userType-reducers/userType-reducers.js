import * as TYPES from '../../actions/types';

const initialState = {
  userType: '',
};

const userTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.USER_TYPE_REQUEST:
      return {
        ...state,
        userType: action?.params,
      };
    default:
      return state;
  }
};
export default userTypeReducer;
