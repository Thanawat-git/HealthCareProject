import {
  CHART16_ERROR,
  CHART16_FETCHING,
  CHART16_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART16_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART16_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART16_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
