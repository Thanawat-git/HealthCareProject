import {
  CHART8_ERROR,
  CHART8_FETCHING,
  CHART8_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {
    
  },
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART8_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART8_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART8_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
