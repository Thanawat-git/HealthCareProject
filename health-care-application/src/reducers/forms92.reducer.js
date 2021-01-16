import {
  CREATE_NEW_FORMS92,
  GET_RESULT_S92,
  SET_SEC92_TO_DEFAULT,
} from "../constants";

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
  ans1_1: 0,
  ans1_2: 0,
  ans3_1: 0,
  ans3_2: 0,
  ans3_3: 0,
  ans3_4: 0,
  ans3_5: 0,
  ans3_6: 0,
  ans3_7: 0,
  ans3_8: 0,
  ans3_9: 0,
  ans3_10: 0,
  ans3_11: 0,
  ans3_12: 0,
  collect: false,
  count: 0,
  results: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  results2: "ยังไม่สามารถแปลผลได้",
  results3: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  point: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_FORMS92:
      return {
        ans1R: payload[0], //2.1
        ans2R: payload[1], //2.2
        ans3R: payload[2], //2.3
        ans4R: payload[3], //2.4
        ans5R: payload[4], //2.5
        ans1L: payload[5], //2.1
        ans2L: payload[6], //2.2
        ans3L: payload[7], //2.3
        ans4L: payload[8], //2.4
        ans5L: payload[9], //2.5
        ans1N: payload[10], //2.1
        ans2N: payload[11], //2.2
        ans3N: payload[12], //2.3
        ans4N: payload[13], //2.4
        ans5N: payload[14], //2.5
        ans1_1: payload[15],
        ans1_2: payload[16], //1
        ans3_1: payload[17],
        ans3_2: payload[18],
        ans3_3: payload[19],
        ans3_4: payload[20],
        ans3_5: payload[21],
        ans3_6: payload[22],
        ans3_7: payload[23],
        ans3_8: payload[24],
        ans3_9: payload[25],
        ans3_10: payload[26],
        ans3_11: payload[27],
        ans3_12: payload[28], //3
        collect: payload[29],
        results: payload[30], //ตอนที่ 1 คัดกรองโรคข้อเข่าเสื่อมเบื่องต้น
        results2: payload[31], //ตอนที่ 2 คัดกรองข้อเข่าเสื่อมทางคลินิค
        results3: payload[32], //ตอนที่ 3 แบบประเมินระดับความรุนแรงของโรคข้อเข่าเสื่อม (Oxford Knee Score)
        point: payload[33],
      };
    case GET_RESULT_S92:
      return {
        ...state,
        results: payload[0],
        results2: payload[1],
        results3: payload[2],
      };
    case SET_SEC92_TO_DEFAULT:
      return {
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
        ans1_1: 0,
        ans1_2: 0,
        ans3_1: 0,
        ans3_2: 0,
        ans3_3: 0,
        ans3_4: 0,
        ans3_5: 0,
        ans3_6: 0,
        ans3_7: 0,
        ans3_8: 0,
        ans3_9: 0,
        ans3_10: 0,
        ans3_11: 0,
        ans3_12: 0,
        collect: false,
        count: 0,
        results: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
        results2: "ยังไม่สามารถแปลผลได้",
        results3: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
        point: 0,
      };
    default:
      return state;
  }
};
