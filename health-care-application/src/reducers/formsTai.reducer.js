import {
  CREATE_NEW_FORMS6T,
  GET_DATA_TAI,
  GET_RESULT_TAI,
  SET_TAI_TO_DEFAULT,
} from "../constants";

const initialState = {
  ans6_Im: 0,
  ans6_Me: 0,
  ans6_To: 0,
  ans6_Fe: 0,
  groupT: 0,
  collect: false,
  results: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_TAI:
    case CREATE_NEW_FORMS6T:
      return {
        ans6_Im: payload[0],
        ans6_Me: payload[1],
        ans6_To: payload[2],
        ans6_Fe: payload[3],
        groupT: payload[4],
        collect: payload[5],
        results: payload[6],
      };
    case GET_RESULT_TAI:
      return { ...state, results: payload };
    case SET_TAI_TO_DEFAULT:
      return {
        ans6_Im: 0,
        ans6_Me: 0,
        ans6_To: 0,
        ans6_Fe: 0,
        groupT: 0,
        collect: false,
        results: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
      };
    default:
      return state;
  }
};
