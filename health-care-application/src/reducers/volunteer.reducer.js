import {
  HTTP_VOL_FAILED,
  HTTP_VOL_FETCHING,
  HTTP_VOL_SUCCESS,
} from "../constants";
const initialState = {
  result: null,
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_VOL_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };
    case HTTP_VOL_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    case HTTP_VOL_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };
    default:
      return state;
  }
};
