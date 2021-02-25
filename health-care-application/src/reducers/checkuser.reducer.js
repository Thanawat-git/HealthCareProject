import {
  CHECK_USER,
  CHECK_USER_ERROR,
  CHANGE_PASS_SUCCESS,
} from "../constants";

const initialState = {
  id: null,
  role: null,
  isError: false,
  isSuccess: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_USER:
      return { id: payload[0], role: payload[1], isError: false };
    case CHECK_USER_ERROR:
      return { id: null, role: null, isError: true };
    case CHANGE_PASS_SUCCESS:
      return { id: null, role: null, isError: false, isSuccess: true };
    default:
      return state;
  }
};
