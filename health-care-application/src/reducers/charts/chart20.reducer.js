import {
  CHART20_ERROR,
  CHART20_FETCHING,
  CHART20_GET_SUCCRESS,
  CHART20_DEF_FETCHING
} from "../../constants";

const initialState = {
  results: {},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART20_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART20_DEF_FETCHING:
      return { ...state, isFetching: null };
    case CHART20_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART20_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
