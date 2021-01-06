import { CREATE_NEW_FORMS9, GET_COLLECT_S9 } from "../constants";

const initialState = {
  ans9_1: 0,
  ans9_2: 0,
  ans9_3: 0,
  ans9_4: 0,
  ans9_5: 0,
  ans9_6: 0,
  ans9_7: 0,
  ans9_8: 0,
  ans9_9: 0,
  ans9_10: 0,
  ans9_11: 0,
  ans9_12: 0,
  collect: false,
  result1: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  count: 0,
  walk: null,
  walkInfo: null,
  minute: null,
  second: null,
  result2: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  isFetching:null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_FORMS9:
      return {
        ans9_1: payload[0],
        ans9_2: payload[1],
        ans9_3: payload[2],
        ans9_4: payload[3],
        ans9_5: payload[4],
        ans9_6: payload[5],
        ans9_7: payload[6],
        ans9_8: payload[7],
        ans9_9: payload[8],
        ans9_10: payload[9],
        ans9_11: payload[10],
        ans9_12: payload[11],
        collect: payload[12],
        results: payload[13],
        count: payload[14],
        walk: payload[15],
        walkInfo: payload[16],
        minute: payload[17],
        second: payload[18],
        result2: payload[19],
        isFetching: false
      };
    
    case GET_COLLECT_S9:
      return { ...state, collect: payload};
    default:
      return state;
  }
};
