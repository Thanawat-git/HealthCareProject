import { FORMS1P2_ADD_NEW } from "../constants";

const initialState = {
  homeNumber: null,
  alley: null,
  street: null,
  subDistrict: null,
  area: null,
  curHomeNumber: null,
  curAlley: null,
  curStreet: null,
  curSubDistrict: null,
  curArea: null,
  phoneNumber: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FORMS1P2_ADD_NEW:
      return {
        homeNumber: payload[0],
        alley: payload[1],
        street: payload[2],
        subDistrict: payload[3],
        area: payload[4],
        curHomeNumber: payload[5],
        curAlley: payload[6],
        curStreet: payload[7],
        curSubDistrict: payload[8],
        curArea: payload[9],
        phoneNumber: payload[10],
      };

    default:
      return state;
  }
};
