import { HTTP_FOLLOWUP_FAILED, HTTP_FOLLOWUP_FETCHING, HTTP_FOLLOWUP_SELECTED, HTTP_FOLLOWUP_SUCCESS } from "../constants";

const initialState = {
  result: null,
  resultSelected: null,
  isFetching: false,
  inError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_FOLLOWUP_FETCHING:
      return { ...state, result: null, isFetching: true, inError: false };
    case HTTP_FOLLOWUP_SUCCESS:
      return { ...state, result: payload, isFetching: false, inError: false };
    case HTTP_FOLLOWUP_FAILED:
      return { ...state, result: payload, isFetching: false, inError: true };
    case HTTP_FOLLOWUP_SELECTED:
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
