import {
  CHART21_ERROR,
  CHART21_FETCHING,
  CHART21_GET_SUCCRESS,
  CHART21_DEF_FETCHING
} from "../../constants";

const initialState = {
  results: {},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART21_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART21_DEF_FETCHING:
      return { ...state, isFetching: null };
    case CHART21_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART21_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
