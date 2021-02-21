import {
  CHART10_ERROR,
  CHART10_FETCHING,
  CHART10_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {
    Elder: 0,
    Male: 0,
    Female: 0,
    ElderBmi: 0,
    MaleBmi: 0,
    FemaleBmi: 0,
    Thin: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0,
    },
    Normal: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0,
    },
    Plump: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0,
    },
    Fat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0,
    },
    VeryFat: {
      Sum: 0,
      Male: 0,
      Female: 0,
      PerSum: 0,
      PerMale: 0,
      PerFemale: 0,
    },
  },
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART10_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART10_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART10_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
