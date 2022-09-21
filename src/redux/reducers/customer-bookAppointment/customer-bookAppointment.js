import * as TYPES from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
};
const bookAppointment = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    case TYPES.SET_PROFILE_IMAGE:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailure: false,
      };

    default:
      return state;
  }
};
export default bookAppointment;
