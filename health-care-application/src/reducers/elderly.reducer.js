import {
  HTTP_ELD_FAILED,
  HTTP_ELD_FETCHING,
  HTTP_ELD_SELECTED,
  HTTP_ELD_SUCCRESS,
} from "../constants";

const initialState = {
  result: [],
  resultSelected: null,
  isFetching: false,
  inError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_ELD_FETCHING:
      return { ...state, result: [], isFetching: true, inError: false };
    case HTTP_ELD_SUCCRESS:
      return { ...state, result: payload, isFetching: false, inError: false };
    case HTTP_ELD_FAILED:
      return { ...state, result: [], isFetching: false, inError: true };
    case HTTP_ELD_SELECTED:
      return {
        ...state,
        resultSelected: payload,
        isFetching: false,
        inError: true,
      };

    default:
      return state;
  }
};
