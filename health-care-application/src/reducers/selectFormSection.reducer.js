import { SELECT_SECTION } from "../constants";

const initialState = {
  section: "mainmenu",
//   message: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_SECTION:
      return { section: payload };

    default:
      return state;
  }
};