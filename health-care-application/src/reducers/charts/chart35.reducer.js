import {
  CHART35_ERROR,
  CHART35_FETCHING,
  CHART35_GET_SUCCRESS,
  // CHART35_DEF_FETCHING
} from "../../constants";

const initialState = {
  results: {Elder:null,Alzheimer:{}},
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART35_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    // case CHART35_DEF_FETCHING:
    //   return { ...state, isFetching: null };
    case CHART35_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART35_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
