import {
  HTTP_HISTORY_FAILED,
  HTTP_HISTORY_FETCHING,
  HTTP_HISTORY_SELECTED,
  HTTP_HISTORY_SUCCESS,
} from "../constants";

const initialState = {
  result: [],
  resultSelected: {
    waist_waist: null,
    waist_result: null,
    bmi_weight: null,
    bmi_height: null,
    bmi_bmi: null,
    bmi_result: null,
    bp_pulse: null,
    bp_sys: null,
    bp_dia: null,
    bp_result: null,
    fbs_fast: null,
    fbs_fbs: null,
    fbs_result: null,
    cardio_result: null,
    eye_result: null,
    oral_result: null,
    abi_group: null,
    tai_group: null,
    alz_result: null,
    mmse_result: null,
    dep_result: null,
    dep_9q_result: null,
    bone_result: null,
    bone_walk: null,
    ost_1_result: null,
    ost_2_result: null,
    ost_3_result: null,
    uri_result: null,
  },
  isFetching: false,
  inError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_HISTORY_FETCHING:
      return { ...state, result: [], isFetching: true, inError: false };
    case HTTP_HISTORY_SUCCESS:
      return { ...state, result: payload, isFetching: false, inError: false };
    case HTTP_HISTORY_FAILED:
      return { ...state, result: payload, isFetching: false, inError: true };
    case HTTP_HISTORY_SELECTED:
      return {
        ...state,
        resultSelected: payload,
        isFetching: false,
        inError: false,
      };
    default:
      return state;
  }
};
