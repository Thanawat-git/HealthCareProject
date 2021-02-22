import {
  CHART33_ERROR,
  CHART33_FETCHING,
  CHART33_GET_SUCCRESS,
  CHART33_DEF_FETCHING
} from "../../constants";

const initialState = {
  results: {},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART33_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART33_DEF_FETCHING:
      return { ...state, isFetching: null };
    case CHART33_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART33_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
