import * as actionTypes from '../actionTypes';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
