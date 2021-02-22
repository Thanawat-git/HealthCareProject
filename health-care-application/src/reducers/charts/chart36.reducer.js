import {
  CHART36_ERROR,
  CHART36_FETCHING,
  CHART36_GET_SUCCRESS,
  CHART36_DEF_FETCHING
} from "../../constants";

const initialState = {
  results: {},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART36_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART36_DEF_FETCHING:
      return { ...state, isFetching: null };
    case CHART36_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART36_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
