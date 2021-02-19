import {
  GET_RESULT_FOLLOW_SEC2,
  GET_RESULT_FOLLOW_SEC3,
  GET_RESULT_FOLLOW_SEC5,
  HTTP_FOLLOWUP_FAILED,
  HTTP_FOLLOWUP_FETCHING,
  HTTP_FOLLOWUP_SELECTED,
  HTTP_FOLLOWUP_SUCCESS,
} from "../constants";

const initialState = {
  result: null,
  resultSelected: null,
  data2: {
    waist_waist: null,
    waist_result: null,
    waist_correct_form: null,
    bmi_weight: null,
    bmi_height: null,
    bmi_bmi: null,
    bmi_result: null,
    bmi_correct_form: null,
    bp_pulse: null,
    bp_sys: null,
    bp_dia: null,
    bp_result: null,
    bp_correct_form: null,
    fbs_fast: null,
    fbs_fbs: null,
    fbs_result: null,
    fbs_correct_form: null,
  },
  data3: {
    cardio_3_1: null,
    cardio_3_2: null,
    cardio_3_3: null,
    cardio_3_4: null,
    cardio_3_5: null,
    cardio_3_6: null,
    cardio_3_7: null,
    cardio_count: null,
    cardio_result: null,
    cardio_correct_form: null,
  },
  data5: {
    oral_5_1: null,
    oral_5_1_1: null,
    oral_5_2: null,
    oral_5_3: null,
    oral_5_4_1: null,
    oral_5_4_2: null,
    oral_5_4_3: null,
    oral_5_4_4: null,
    oral_5_4_5: null,
    oral_5_5: null,
    oral_5_6: null,
    oral_5_7: null,
    oral_5_8: null,
    oral_5_9: null,
    oral_5_10: null,
    oral_5_11: null,
    oral_5_12: null,
    oral_5_13: null,
    oral_COUNT: null,
    oral_RESULT: null,
    oral_CORRECT_FORM: null,
  },
  isFetching: null,
  isError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_FOLLOWUP_FETCHING:
      return { ...state, result: null, isFetching: true, isError: false };
    case HTTP_FOLLOWUP_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    case HTTP_FOLLOWUP_FAILED:
      return { ...state, result: payload, isFetching: false, isError: true };
    case HTTP_FOLLOWUP_SELECTED:
      return {
        ...state,
        resultSelected: payload,
        isFetching: false,
        isError: false,
      };
    case GET_RESULT_FOLLOW_SEC2:
      return {
        ...state,
        data2: payload,
        isFetching: false,
        isError: false,
      };
    case GET_RESULT_FOLLOW_SEC3:
      return {
        ...state,
        data3: payload,
        isFetching: false,
        isError: false,
      };
    case GET_RESULT_FOLLOW_SEC5:
      return {
        ...state,
        data5: payload,
        isFetching: false,
        isError: false,
      };
    default:
      return state;
  }
};
