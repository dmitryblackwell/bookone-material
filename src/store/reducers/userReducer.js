import * as actionTypes from "../actions/actionTypes";

const initialState = {
  username: ''
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.REGISTRATION_USER_DATA_CHANGED) {
      return {
        ...state,
        [action.id]: action.value
      };
  }
  return state;
};

export default reducer;