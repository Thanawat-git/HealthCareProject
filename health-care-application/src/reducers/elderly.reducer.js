import {
  GET_HISTORY_EDL,
  HTTP_ELD_FAILED,
  HTTP_ELD_FETCHING,
  HTTP_ELD_SELECTED,
  HTTP_ELD_SUCCESS,
} from "../constants";

const initialState = {
  result: [],
  resultSelected: null,
  history: [],
  isFetching: false,
  inError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_ELD_FETCHING:
      return { ...state, result: [], isFetching: true, inError: false };
    case HTTP_ELD_SUCCESS:
      return { ...state, result: payload, isFetching: false, inError: false };
    case HTTP_ELD_FAILED:
      return { ...state, result: [], isFetching: false, inError: true };
    case HTTP_ELD_SELECTED:
      return {
        ...state,
        resultSelected: payload,
        isFetching: false,
        inError: false,
      };
    case GET_HISTORY_EDL:
      return {
        ...state,
        history: payload,
        isFetching: false,
        isError: false,
      };
    default:
      return state;
  }
};
