import {
  CHART23_ERROR,
  CHART23_FETCHING,
  CHART23_GET_SUCCRESS,
  CHART23_DEF_FETCHING
} from "../../constants";

const initialState = {
  results: {},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART23_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART23_DEF_FETCHING:
      return { ...state, isFetching: null };
    case CHART23_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART23_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
