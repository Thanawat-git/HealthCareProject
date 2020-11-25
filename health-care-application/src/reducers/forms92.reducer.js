import { CREATE_NEW_FORMS92 } from "../constants";

const initialState = {
  ans1R: false,
  ans2R: false,
  ans3R: false,
  ans4R: false,
  ans5R: false,
  ans1L: false,
  ans2L: false,
  ans3L: false,
  ans4L: false,
  ans5L: false,
  ans1N: false,
  ans2N: false,
  ans3N: false,
  ans4N: false,
  ans5N: false,
  collect: false,
  results: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  count: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_FORMS92:
      return {
        ans1R: payload[0],
        ans2R: payload[1],
        ans3R: payload[2],
        ans4R: payload[3],
        ans5R: payload[4],
        ans1L: payload[5],
        ans2L: payload[6],
        ans3L: payload[7],
        ans4L: payload[8],
        ans5L: payload[9],
        ans1N: payload[10],
        ans2N: payload[11],
        ans3N: payload[12],
        ans4N: payload[13],
        ans5N: payload[14],
        collect: payload[15],
        results: payload[16],
        count: payload[17],
      };

    default:
      return state;
  }
};
