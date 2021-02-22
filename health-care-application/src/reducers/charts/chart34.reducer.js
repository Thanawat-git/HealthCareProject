import {
  CHART34_ERROR,
  CHART34_FETCHING,
  CHART34_GET_SUCCRESS,
  CHART34_DEF_FETCHING
} from "../../constants";

const initialState = {
  results: {},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART34_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART34_DEF_FETCHING:
      return { ...state, isFetching: null };
    case CHART34_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART34_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
