import {
  FORMS1P1_ADD_NEW,
  FORMS1P2_ADD_NEW,
  FORMS1P3_ADD_NEW,
  FORMS1P4_ADD_NEW,
  FORMS1P5_ADD_NEW,
  FORMS1P6_ADD_NEW,
} from "../constants";

const resets1p1 = () => {
  return (dispatch) => {
    dispatch({
      type: FORMS1P1_ADD_NEW,
      payload: {
        peopleID: null,
        firstname: null,
        lastname: null,
        elderlyGender: null,
        nickname: null,
        elderlyBirthdate: null,
        elderlyAge: null,
        year: null,
        month: null,
        day: null,
      },
    });
  };
};

const resets1p2 = () => {
  return (dispatch) => {
    dispatch({
      type: FORMS1P2_ADD_NEW,
      payload: {
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
      },
    });
  };
};

const resets1p3 = () => {
  return (dispatch) => {
    dispatch({
      type: FORMS1P3_ADD_NEW,
      payload: {
        neighborFirstName1: null,
        neighborLastName1: null,
        neighborGender1: null,
        neighbortime1: null,
        neighborRelative1: null,
        neighborPhoneNumber1: null,
        neighborFirstName2: null,
        neighborLastName2: null,
        neighborGender2: null,
        neighbortime2: null,
        neighborRelative2: null,
        neighborPhoneNumber2: null,
      },
    });
  };
};

const resets1p4 = () => {
  return (dispatch) => {
    dispatch({
      type: FORMS1P4_ADD_NEW,
      payload: {
        elderlyStatus: null,
        elderlyBeing: null,
        elderlyBeingDetail: null,
        being: null,
        neighborName: null,
        religion: null,
        otherReligion: null,
        educations: null,
        careers: null,
        treatment: null,
        hospital: null,
        otherTreatment: null,
        salary: null,
        otherCareers: null,
      },
    });
  };
};

const resets1p5 = () => {
  return (dispatch) => {
    dispatch({
      type: FORMS1P5_ADD_NEW,
      payload: {
        drugAllergy: null,
        drugs: [],
        foodAllergy: null,
        foods: [],
      },
    });
  };
};

const resets1p6 = () => {
  return (dispatch) => {
    dispatch({
      type: FORMS1P6_ADD_NEW,
      payload: {
        diseases: [],
        date: null,
      },
    });
  };
};

export const resetDataFromReducer = () => {
  resets1p1();
  resets1p2();
  resets1p3();
  resets1p4();
  resets1p5();
  resets1p6();
};
