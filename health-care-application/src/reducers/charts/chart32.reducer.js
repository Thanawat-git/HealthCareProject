import {
  CHART32_ERROR,
  CHART32_FETCHING,
  CHART32_GET_SUCCRESS,
  CHART32_DEF_FETCHING
} from "../../constants";

const initialState = {
  results: {},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART32_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART32_DEF_FETCHING:
      return { ...state, isFetching: null };
    case CHART32_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART32_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
