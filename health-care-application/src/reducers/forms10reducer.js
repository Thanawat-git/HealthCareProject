import { CREATE_NEW_FORMS10 } from "../constants";

const initialState = {
  ans10: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_FORMS10:
      return {
        ans10: payload,
      };

    default:
      return state;
  }
};
