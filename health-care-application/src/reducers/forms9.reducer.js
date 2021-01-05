import { CREATE_NEW_FORMS9 } from "../constants";

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
        walk: payload[14],
        walkInfo: payload[15],
        minute: payload[16],
        second: payload[17],
        result2: payload[18],
        isFetching: false
      };

    default:
      return state;
  }
};
