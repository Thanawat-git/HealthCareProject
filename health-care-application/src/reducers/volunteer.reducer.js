import {
  HTTP_VOL_FAILED,
  HTTP_VOL_FETCHING,
  HTTP_VOL_SUCCRESS,
} from "../constants";
const initialState = {
  result: null,
  isFetching: false,
  inError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_VOL_FETCHING:
      return { ...state, result: null, isFetching: true, inError: false };
    case HTTP_VOL_SUCCRESS:
      return { ...state, result: payload, isFetching: false, inError: false };
    case HTTP_VOL_FAILED:
      return { ...state, result: null, isFetching: false, inError: true };
    default:
      return state;
  }
};
