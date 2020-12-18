import { CREATE_NEW_FORMS5, GET_COLLECT_S5 } from "../constants";

const initialState = {
  ans5_1: null,
  moreInfoAns5_1: null,
  ans5_2: null,
  ans5_3: null,
  ans5_4: null,
  ans5_5: null,
  ans5_6: null,
  ans5_7: null,
  ans5_8: null,
  ans5_9: null,
  ans5_10: null,
  ans5_11: null,
  ans5_12: null,
  ans5_13: null,
  ans5_14: null,
  ans5_15: null,
  ans5_16: null,
  ans5_17: null,
  results: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  collect: false,
  count: 0,
  isFetching: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_FORMS5:
      return {
        ans5_1: payload[0],
        moreInfoAns5_1: payload[1],
        ans5_2: payload[2],
        ans5_3: payload[3],
        ans5_4: payload[4],
        ans5_5: payload[5],
        ans5_6: payload[6],
        ans5_7: payload[7],
        ans5_8: payload[8],
        ans5_9: payload[9],
        ans5_10: payload[10],
        ans5_11: payload[11],
        ans5_12: payload[12],
        ans5_13: payload[13],
        ans5_14: payload[14],
        ans5_15: payload[15],
        ans5_16: payload[16],
        ans5_17: payload[17],
        results: payload[18],
        collect: payload[19],
        count: payload[20],
        isFetching: false,
      };
    case "FETCHING5":
      return { ...state, isFetching: true };
    case GET_COLLECT_S5:
      return { ...state, collect: payload };

    default:
      return state;
  }
};
