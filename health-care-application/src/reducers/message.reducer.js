import { CLEAR_MESSAGE, SET_MESSAGE } from "../constants";

const initialState = {
  isError: false,
  message: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MESSAGE:
      return { ...state, isError: true, message: payload };

    case CLEAR_MESSAGE:
      return { ...state, isError: false, message: null };

    default:
      return state;
  }
};
