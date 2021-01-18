import {
  CREATE_NEW_FORMS2,
  GET_COLLECT_S2,
  HTTP_SECTIONS2_FETCHING,
  GET_RESULT_S2,
  SET_SEC2_TO_DEFAULT,
} from "../constants";

const initialState = {
  waist: null,
  weight: null,
  high: null,
  pulse: null,
  bloodPressure1: null,
  bloodPressure2: null,
  sugar: null,
  waistResult: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  bmiResult: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  bloodPressureResult: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  sugarResult: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  collect: false,
  noFood: null,
  result: null,
  isFetching: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCHING2":
      return { ...state, isFetching: true };
    case CREATE_NEW_FORMS2:
      return {
        waist: payload[0],
        weight: payload[1],
        high: payload[2],
        pulse: payload[3],
        bloodPressure1: payload[4],
        bloodPressure2: payload[5],
        sugar: payload[6],
        waistResult: payload[7],
        bmiResult: payload[8],
        bloodPressureResult: payload[9],
        sugarResult: payload[10],
        collect: payload[11],
        noFood: payload[12],
        isFetching: false,
      };
    case GET_COLLECT_S2:
      return { ...state, collect: payload };
    case GET_RESULT_S2:
      return {
        ...state,
        waistResult: payload[0],
        bmiResult: payload[1],
        bloodPressureResult: payload[2],
        sugarResult: payload[3],
      };
    case SET_SEC2_TO_DEFAULT:
      return {
        waist: null,
        weight: null,
        high: null,
        pulse: null,
        bloodPressure1: null,
        bloodPressure2: null,
        sugar: null,
        waistResult: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
        bmiResult: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
        bloodPressureResult: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
        sugarResult: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
        collect: false,
        noFood: null,
        result: null,
        isFetching: null,
      };
    default:
      return state;
  }
};
