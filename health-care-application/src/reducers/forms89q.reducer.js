import {
  CREATE_NEW_FORMS89Q,
  GET_DATA_S89Q,
  GET_RESULT_S89Q,
  SET_89Q_TO_DEFAULT,
} from "../constants";

const initialState = {
  ans8_9q_1: 0,
  ans8_9q_2: 0,
  ans8_9q_3: 0,
  ans8_9q_4: 0,
  ans8_9q_5: 0,
  ans8_9q_6: 0,
  ans8_9q_7: 0,
  ans8_9q_8: 0,
  ans8_9q_9: 0,
  results: "ไม่สามารถประเมินได้ กรุณากรอกข้อมูลให้ครบถ้วน",
  collect: false,
  isFetching: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_S89Q:
    case CREATE_NEW_FORMS89Q:
      return {
        ans8_9q_1: payload[0],
        ans8_9q_2: payload[1],
        ans8_9q_3: payload[2],
        ans8_9q_4: payload[3],
        ans8_9q_5: payload[4],
        ans8_9q_6: payload[5],
        ans8_9q_7: payload[6],
        ans8_9q_8: payload[7],
        ans8_9q_9: payload[8],
        results: payload[9],
        collect: payload[10],
        isFetching: false,
      };
    case GET_RESULT_S89Q:
      return { ...state, results: payload };
    case SET_89Q_TO_DEFAULT:
      return {
        ans8_9q_1: 0,
        ans8_9q_2: 0,
        ans8_9q_3: 0,
        ans8_9q_4: 0,
        ans8_9q_5: 0,
        ans8_9q_6: 0,
        ans8_9q_7: 0,
        ans8_9q_8: 0,
        ans8_9q_9: 0,
        results: "ไม่สามารถประเมินได้ กรุณากรอกข้อมูลให้ครบถ้วน",
        collect: false,
        isFetching: null,
      };
    default:
      return state;
  }
};
