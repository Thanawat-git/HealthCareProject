import { CREATE_NEW_FORMS4 } from "../constants";

const initialState = {
  ans4_1: 0,
  ans4_2: 0,
  ans4_3: 0,
  ans4_4: 0,
  ans4_5: 0,
  count: 0,
  results: 'ยังไม่สามารถแปลผลได้เนื่องจากข้อมูลยังไม่ครบ',
  collect: false,
};



export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_FORMS4:
      return {
        ans4_1: payload[0],
        ans4_2: payload[1],
        ans4_3: payload[2],
        ans4_4: payload[3],
        ans4_5: payload[4],
        results: payload[5],
        collect: payload[6],
        count: payload[7]
      };

    default:
      return state;
  }
};
