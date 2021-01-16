import {
  CREATE_NEW_FORMS4,
  GET_COLLECT_S4,
  GET_RESULT_S4,
  SET_SEC4_TO_DEFAULT,
} from "../constants";

const initialState = {
  ans4_1: 0,
  ans4_2: 0,
  ans4_3: 0,
  ans4_4: 0,
  ans4_5: 0,
  count: 0,
  results: "ยังไม่สามารถแปลผลได้เนื่องจากข้อมูลยังไม่ครบ",
  collect: false,
  isFetching: null,
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
        count: payload[5],
        results: payload[6],
        collect: payload[7],
        isFetching: false,
      };
    case "FETCHING4":
      return { ...state, isFetching: true };
    case GET_COLLECT_S4:
      return { ...state, collect: payload };
    case GET_RESULT_S4:
      return { ...state, results: payload };
    case SET_SEC4_TO_DEFAULT:
      return {
        ans4_1: 0,
        ans4_2: 0,
        ans4_3: 0,
        ans4_4: 0,
        ans4_5: 0,
        count: 0,
        results: "ยังไม่สามารถแปลผลได้เนื่องจากข้อมูลยังไม่ครบ",
        collect: false,
        isFetching: null,
      };
    default:
      return state;
  }
};
