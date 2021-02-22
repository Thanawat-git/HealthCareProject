import {
  CHART37_ERROR,
  CHART37_FETCHING,
  CHART37_GET_SUCCRESS,
  CHART37_DEF_FETCHING
} from "../../constants";

const initialState = {
  results: {},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART37_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART37_DEF_FETCHING:
      return { ...state, isFetching: null };
    case CHART37_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART37_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
