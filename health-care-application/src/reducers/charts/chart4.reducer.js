import {
  CHART4_ERROR,
  CHART4_FETCHING,
  CHART4_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {
    Child: 0,
    Community: "ชุมชนมณีแก้ว",
    GrandChild: 0,
    Keeper: 0,
    NoKeeper: 0,
    Other: 0,
    Parent: 0,
    Partner: 0,
    Sibling: 0,
    SonInLaw: 0,
    Summary: 0,
  },
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART4_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART4_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART4_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
