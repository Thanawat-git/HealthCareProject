import {
  CHART22_ERROR,
  CHART22_FETCHING,
  CHART22_GET_SUCCRESS,
  CHART22_DEF_FETCHING
} from "../../constants";

const initialState = {
  results: {},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART22_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART22_DEF_FETCHING:
      return { ...state, isFetching: null };
    case CHART22_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART22_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
