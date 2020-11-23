import { CREATE_NEW_FORMS2 } from "../constants";

const initialState = {
  waist: null,
  weight: null,
  high: null,
  pulse: null,
  bloodPressure1: null,
  bloodPressure2: null,
  sugar: null,
  waistResult: null,
  bmiResult: null,
  bloodPressureResult: null,
  sugarResult: null,
  collect: false,
};



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
