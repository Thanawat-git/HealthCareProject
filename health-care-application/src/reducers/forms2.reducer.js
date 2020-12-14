import { CREATE_NEW_FORMS2,HTTP_SECTIONS2_FETCHING } from "../constants";

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
  result:null,
  isFetching:false
};
// const initialState = {
// res:HTTP_SECTIONS2_FETCHING
// };

// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case CREATE_NEW_FORMS2:
//       return {
//       res:payload
//       };

//     default:
//       return state;
//   }
// };

export default (state = initialState, { type, payload }) => {
  switch (type) {
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
      };

    default:
      return state;
  }
};
