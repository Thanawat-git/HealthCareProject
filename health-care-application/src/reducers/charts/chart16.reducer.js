import {
  CHART16_ERROR,
  CHART16_FETCHING,
  CHART16_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {
    Dis1: 0,
    Dis2: 0,
    Dis3: 0,
    Dis4: 0,
    Dis5: 0,
    Dis6: 0,
    Dis7: 0,
    Dis8: 0,
    Dis9: 0,
    Dis10: 0,
    Dis11: 0,
    Dis12: 0,
    Dis13: 0,
    Dis14: 0,
    Dis15: 0,
    Dis16: 0,
    Dis17: 0,
    Dis18: 0,
    Dis19: 0,
    Dis20: 0,
    Dis21: 0,
    Dis22: 0,
    Dis23: 0,
    Dis24: 0,
    Dis25: 0,
    summary: 0,
    Perdis1: 0,
    Perdis2: 0,
    Perdis3: 0,
    Perdis4: 0,
    Perdis5: 0,
    Perdis6: 0,
    Perdis7: 0,
    Perdis8: 0,
    Perdis9: 0,
    Perdis10: 0,
    Perdis11: 0,
    Perdis12: 0,
    Perdis13: 0,
    Perdis14: 0,
    Perdis15: 0,
    Perdis16: 0,
    Perdis17: 0,
    Perdis18: 0,
    Perdis19: 0,
    Perdis20: 0,
    Perdis21: 0,
    Perdis22: 0,
    Perdis23: 0,
    Perdis24: 0,
    Perdis25: 0,
  },
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
