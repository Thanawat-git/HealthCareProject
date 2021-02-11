import {
  CHART17_ERROR,
  CHART17_FETCHING,
  CHART17_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART17_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART17_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART17_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
