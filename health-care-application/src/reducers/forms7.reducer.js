import { CREATE_NEW_FORMS7, GET_COLLECT_S7, GET_RESULT_S7 } from "../constants";

const initialState = {
  ans7_1: 0,
  ans7_2: 0,
  ans7_3: 0,
  ans7_4: 0,
  ans7_5: 0,
  ans7_6: 0,
  ans7_7: 0,
  ans7_8: 0,
  ans7_9: 0,
  ans7_10: 0,
  collect: false,
  results: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  textAns1: null,
  textAns2: null,
  textAns3: null,
  textAns4: null,
  textAns5: null,
  textAns6: null,
  textAns7: null,
  textAns8: null,
  textAns9: null,
  textAns10: null,
  isFetching: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_FORMS7:
      return {
        ans7_1: payload[0],
        ans7_2: payload[1],
        ans7_3: payload[2],
        ans7_4: payload[3],
        ans7_5: payload[4],
        ans7_6: payload[5],
        ans7_7: payload[6],
        ans7_8: payload[7],
        ans7_9: payload[8],
        ans7_10: payload[9],
        collect: payload[10],
        results: payload[11],
        textAns1: payload[12],
        textAns2: payload[13],
        textAns3: payload[14],
        textAns4: payload[15],
        textAns5: payload[16],
        textAns6: payload[17],
        textAns7: payload[18],
        textAns8: payload[19],
        textAns9: payload[20],
        textAns10: payload[21],
        isFetching: false,
      };
    case GET_COLLECT_S7:
      return { ...state, collect: payload };
    case GET_RESULT_S7:
      return { ...state, results: payload };
    default:
      return state;
  }
};
