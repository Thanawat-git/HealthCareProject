import { HTTP_HISTORY_FAILED, HTTP_HISTORY_FETCHING, HTTP_HISTORY_SELECTED, HTTP_HISTORY_SUCCESS } from "../constants";

const initialState = {
  result: [],
  resultSelected: null,
  isFetching: false,
  inError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_HISTORY_FETCHING:
      return { ...state, result: [], isFetching: true, inError: false };
    case HTTP_HISTORY_SUCCESS:
      return { ...state, result: payload, isFetching: false, inError: false };
    case HTTP_HISTORY_FAILED:
      return { ...state, result: [], isFetching: false, inError: true };
    case HTTP_HISTORY_SELECTED:
      return {
        ...state,
        resultSelected: payload,
        isFetching: false,
        inError: false,
      };
    default:
      return state;
  }
};
