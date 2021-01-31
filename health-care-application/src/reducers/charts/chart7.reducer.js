import {
  CHART7_ERROR,
  CHART7_FETCHING,
  CHART7_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {
    g95: {
      Elder: 0,
      ElderFemale: 0,
      ElderMale: 0,
    },
    g6064: {
      Elder: 0,
      ElderFemale: 0,
      ElderMale: 0,
    },
    g6569: {
      Elder: 0,
      ElderFemale: 0,
      ElderMale: 0,
    },
    g7074: {
      Elder: 0,
      ElderFemale: 0,
      ElderMale: 0,
    },
    g7579: {
      Elder: 0,
      ElderFemale: 0,
      ElderMale: 0,
    },
    g8084: {
      Elder: 0,
      ElderFemale: 0,
      ElderMale: 0,
    },
    g8589: {
      Elder: 0,
      ElderFemale: 0,
      ElderMale: 0,
    },
    g9094: {
      Elder: 0,
      ElderFemale: 0,
      ElderMale: 0,
    },
    summary: {
      Elder: 0,
      ElderFemale: 0,
      ElderMale: 0,
    },
},
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART7_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART7_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART7_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};