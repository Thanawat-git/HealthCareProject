import {
  CREATE_NEW_FORMS6,
  GET_COLLECT_S6,
  GET_DATA_S6,
  GET_RESULT_S6,
  SET_SEC6_TO_DEFAULT,
} from "../constants";

const initialState = {
  ans6_1: 0,
  ans6_2: 0,
  ans6_3: 0,
  ans6_4: 0,
  ans6_5: 0,
  ans6_6: 0,
  ans6_7: 0,
  ans6_8: 0,
  ans6_9: 0,
  ans6_10: 0,
  group: 0,
  collect: false,
  resultsTai: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  isFetching: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_S6:
    case CREATE_NEW_FORMS6:
      return {
        ans6_1: payload[0],
        ans6_2: payload[1],
        ans6_3: payload[2],
        ans6_4: payload[3],
        ans6_5: payload[4],
        ans6_6: payload[5],
        ans6_7: payload[6],
        ans6_8: payload[7],
        ans6_9: payload[8],
        ans6_10: payload[9],
        group: payload[10],
        collect: payload[11],
        resultsTai: payload[12],
        isFetching: false,
      };
    case "FETCHING6":
      return { ...state, isFetching: true };
    case GET_COLLECT_S6:
      return { ...state, collect: payload };
    case GET_RESULT_S6:
      return { ...state, group: payload };
    case SET_SEC6_TO_DEFAULT:
      return {
        ans6_1: 0,
        ans6_2: 0,
        ans6_3: 0,
        ans6_4: 0,
        ans6_5: 0,
        ans6_6: 0,
        ans6_7: 0,
        ans6_8: 0,
        ans6_9: 0,
        ans6_10: 0,
        group: 0,
        collect: false,
        resultsTai: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
        isFetching: null,
      };
    default:
      return state;
  }
};
