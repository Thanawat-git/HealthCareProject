import {
  CHART3_ERROR,
  CHART3_FETCHING,
  CHART3_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {},
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART3_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART3_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART3_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
