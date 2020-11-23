import { CREATE_NEW_FORMS8 } from "../constants";

const initialState = {
  ans8_1: 0,
  ans8_2: 0,
  collect: false,
  results: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_FORMS8:
      return {
        ans8_1: payload[0],
        ans8_2: payload[1],
        collect: payload[2],
        results: payload[3],
      };

    default:
      return state;
  }
};
