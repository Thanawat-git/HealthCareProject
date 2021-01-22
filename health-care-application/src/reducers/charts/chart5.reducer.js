import {
  CHART5_ERROR,
  CHART5_FETCHING,
  CHART5_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {
    Alone: 0,
    AloneDay: 0,
    AloneDayNight: 0,
    AloneNight: 0,
    Community: "ชุมชนมณีแก้ว",
    NotAlone: 0,
    PerAloneDay: 0,
    PerAloneDayNight: 0,
    PerAloneNight: 0,
    Summary: 0,
  },
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART5_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART5_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART5_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
