import { CREATE_NEW_FORMS10 } from "../constants";

const initialState = {
  ans10: null,
  collect: false,
  results: "ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
  isFetching:null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_FORMS10:
      return {
        ans10: payload[0],
        collect:payload[1],
        results:payload[2],
        isFetching: false
      };

    default:
      return state;
  }
};
