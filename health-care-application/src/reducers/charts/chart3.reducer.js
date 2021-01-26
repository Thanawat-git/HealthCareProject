import {
  CHART3_ERROR,
  CHART3_FETCHING,
  CHART3_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {
    Community: "ชุมชนมณีแก้ว",
    Elder: 0,
    ElderMale: 0,
    ElderFemale: 0,
    PerElderMale: 0,
    PerElderFemale: 0,
    ElderSurvey: 0,
    ElderSurveyMale: 0,
    ElderSurveyFemale: 0,
    PerElderSurveyMale: 0,
    PerElderSurveyFemale: 0,
  },
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
