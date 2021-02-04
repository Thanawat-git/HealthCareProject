import {
  CHART7_ERROR,
  CHART7_FETCHING,
  CHART7_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {
    Affiliation: {
      summary: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g6064: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g6069: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g7074: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g7079: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g8084: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g8089: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g9094: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g95: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      }
      },
      Yourself : {
      summary: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g6064: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g6069: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g7074: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g7079: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g8084: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale:0,
      ElderPerFemale: 0
      },
      g8089: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g9094: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g95: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      }
      },
      GoldCard: {
      summary: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g6064: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale:0,
      ElderPerFemale: 0
      },
      g6069: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g7074: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g7079: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g8084: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale:0
      },
      g8089: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g9094: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g95: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      }
      },
      DisabledCard: {
      summary: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g6064: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g6069: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g7074: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g7079: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g8084: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g8089: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g9094: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g95: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      }
      },
      SocialCard: {
      summary: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g6064: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g6069: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale:0
      },
      g7074: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale:0
      },
      g7079: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g8084: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g8089: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g9094: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g95: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      }
      },
      Other: {
      summary: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale:0
      },
      g6064: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale:0
      },
      g6069: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g7074: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g7079: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g8084: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g8089: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g9094: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      },
      g95: {
      Elder: 0,
      ElderMale: 0,
      ElderFemale: 0,
      ElderPerMale: 0,
      ElderPerFemale: 0
      }
      }
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
