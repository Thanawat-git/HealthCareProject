import {
  CHART18_ERROR,
  CHART18_FETCHING,
  CHART18_GET_SUCCRESS,
  CHART18_DEF_FETCHING
} from "../../constants";

const initialState = {
  results: {},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART18_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART18_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART18_DEF_FETCHING:
      return { ...state, isFetching: null };
    case CHART18_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
