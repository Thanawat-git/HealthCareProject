import {
  CHART31_ERROR,
  CHART31_FETCHING,
  CHART31_GET_SUCCRESS,
  CHART31_DEF_FETCHING
} from "../../constants";

const initialState = {
  results: {},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART31_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART31_DEF_FETCHING:
      return { ...state, isFetching: null };
    case CHART31_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART31_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
