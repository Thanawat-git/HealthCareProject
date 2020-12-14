import {
  HTTP_LOGIN_FAILED,
  HTTP_LOGIN_SUCCESS,
  LOGOUT,
  USER,
} from "../constants";

const user = JSON.parse(localStorage.getItem(USER));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, user: payload.user };
    case HTTP_LOGIN_FAILED:
      return { ...state, isLoggedIn: false, user: null };
    case LOGOUT:
      return { ...state, isLoggedIn: false, user: null };

    default:
      return state;
  }
};
