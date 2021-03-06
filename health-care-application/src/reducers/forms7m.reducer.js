import { CREATE_NEW_FORMS7M, GET_DATA_S7M, GET_RESULT_S7M, SET_MMSE_TO_DEFAULT, GET_COLLECT_MMSE } from "../constants";

const initialState = {
  ans1: 0,
  ans12: 0,
  ans13: 0,
  ans14: 0,
  ans15: 0,
  ans2_1_1: 0,
  ans2_1_2: 0,
  ans2_1_3: 0,
  ans2_1_4: 0,
  ans2_1_5: 0,
  atHospital:'',
  ansF: 0,
  ansR: 0,
  ansT: 0,
  num1: 0,
  num2: 0,
  num3: 0,
  num4: 0,
  num5: 0,
  thinkNumber:'',
  ansF2: 0,
  ansR2: 0,
  ansT2: 0,
  ans61: 0,
  ans62: 0,
  ans7: 0,
  think1:0,
  think2:0,
  think3:0,
  ans9: 0,
  ans10: 0,
  ans11: 0,
  textAns11: null,
  textAns12: null,
  textAns13: null,
  textAns14: null,
  textAns15: null,
  textAns211: null,
  textAns212: null,
  textAns213: null,
  textAns214: null,
  textAns215: null,
  textAns10: null,
  collect: false,
  results: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  point: 0,
  group: null,
  isFetching: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_S7M:
    case CREATE_NEW_FORMS7M:
      return {
        //...state,
        textAns11: payload[0],
        ans1: payload[1],
        textAns12: payload[2],
        ans12: payload[3],
        textAns13: payload[4],
        ans13: payload[5],
        textAns14: payload[6],
        ans14: payload[7],
        textAns15: payload[8],
        ans15: payload[9],
        textAns211: payload[10],
        ans2_1_1: payload[11],
        textAns212: payload[12],
        ans2_1_2: payload[13],
        textAns213: payload[14],
        ans2_1_3: payload[15],
        textAns214: payload[16],
        ans2_1_4: payload[17],
        textAns215: payload[18],
        ans2_1_5: payload[19],
        ansF: payload[20],
        ansR: payload[21],
        ansT: payload[22],
        num1: payload[23],
        num2: payload[24],
        num3: payload[25],
        num4: payload[26],
        num5: payload[27],
        ansF2: payload[28],
        ansR2: payload[29],
        ansT2: payload[30],
        ans61: payload[31],
        ans62: payload[32],
        ans7: payload[33],
        thank1: payload[34],
        thank2: payload[35],
        thank3: payload[36],
        ans9: payload[37],
        textAns10: payload[38],
        ans10: payload[39],
        ans11: payload[40],
        collect: payload[41],
        results: payload[42],
        atHospital:payload[43],
        thinkNumber:payload[44],
        isFetching: false,
      };
    case GET_RESULT_S7M:
      return { ...state, results: payload };
    case SET_MMSE_TO_DEFAULT:
      return {
        ans1: 0,
        ans12: 0,
        ans13: 0,
        ans14: 0,
        ans15: 0,
        ans2_1_1: 0,
        ans2_1_2: 0,
        ans2_1_3: 0,
        ans2_1_4: 0,
        ans2_1_5: 0,
        atHospital:null,
        ansF: 0,
        ansR: 0,
        ansT: 0,
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0,
        thinkNumber:null,
        ansF2: 0,
        ansR2: 0,
        ansT2: 0,
        ans61: 0,
        ans62: 0,
        ans7: 0,
        think1:0,
        think2:0,
        think3:0,
        ans9: 0,
        ans10: 0,
        ans11: 0,
        textAns11: null,
        textAns12: null,
        textAns13: null,
        textAns14: null,
        textAns15: null,
        textAns211: null,
        textAns212: null,
        textAns213: null,
        textAns214: null,
        textAns215: null,
        textAns10: null,
        collect: false,
        results: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
        point: 0,
        group: null,
        isFetching: null,
      }
    case GET_COLLECT_MMSE:
      return {...state, collect:payload}
    default:
      return state;
  }
};
