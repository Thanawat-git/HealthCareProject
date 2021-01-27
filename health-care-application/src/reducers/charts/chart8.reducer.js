import {
  CHART8_ERROR,
  CHART8_FETCHING,
  CHART8_GET_SUCCRESS,
} from "../../constants";

const initialState = {
  results: {
    Affiliation: 0,//ต้นสังกัด
    Yourself: 0,//จ่ายเอง
    Gold: 0,//บัตรทอง
    Disabled: 0,//บัตรคนพิการ
    Social: 0,//ประกันสังคม
    Other: 0,//อื่นๆ
    PerAffiliation: 0,
    PerDisabled: 0,
    PerGold: 0,
    PerOther: 0,
    PerSocial: 0,
    PerYourself: 0,
    Sum: 0,
    
  },
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHART8_GET_SUCCRESS:
      return { results: payload, isFetching: false, isError: false };
    case CHART8_FETCHING:
      return { ...state, isFetching: true, isError: false };
    case CHART8_ERROR:
      return { ...state, isFetching: false, isError: true };
    default:
      return state;
  }
};
