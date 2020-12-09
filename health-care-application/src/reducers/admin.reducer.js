import {
  HTTP_ADMIN_FAILED,
  HTTP_ADMIN_FETCHING,
  HTTP_ADMIN_SUCCESS,
} from "../constants";
const initialState = {
  result: null,
  isFetching: false,
  inError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_ADMIN_FETCHING:
      return { ...state, result: null, isFetching: true, inError: false };
    case HTTP_ADMIN_SUCCESS:
      return { ...state, result: payload, isFetching: false, inError: false };
    case HTTP_ADMIN_FAILED:
      return { ...state, result: null, isFetching: false, inError: true };
    default:
      return state;
  }
};
