import {
  CHART14_ERROR,
  CHART14_FETCHING,
  CHART14_GET_SUCCRESS,
  CHART14_DEF_FETCHING
} from "../../constants";

const initialState = {
  results: {
    g6064: {
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
    g6569: {
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
    g7074: {
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
    g7579: {
      Thin: {
        Sum: 1,
        Male: 1,
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
    g8084: {
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
    g8589: {
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
    g9094: {
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
    g95: {
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
  },
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART14_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART14_DEF_FETCHING:
      return { ...state, isFetching: null };
    case CHART14_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART14_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
