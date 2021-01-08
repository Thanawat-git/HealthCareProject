import {
  FORMS1P1_ADD_NEW,
  FORMS1P2_ADD_NEW,
  FORMS1P3_ADD_NEW,
  FORMS1P4_ADD_NEW,
  FORMS1P5_ADD_NEW,
  FORMS1P6_ADD_NEW,
} from "../constants";

const resets1p1 = () => ({
    type: FORMS1P1_ADD_NEW,
    payload: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]
})

const resets1p2 = () => ({
    type: FORMS1P2_ADD_NEW,
    payload: [null,null,null,null,null,null,null,null,null,null,null,]
    // {
    //   homeNumber: null,
    //   alley: null,
    //   street: null,
    //   subDistrict: null,
    //   area: null,
    //   curHomeNumber: null,
    //   curAlley: null,
    //   curStreet: null,
    //   curSubDistrict: null,
    //   curArea: null,
    //   phoneNumber: null,
    // },
})

const resets1p3 = () => ({
    type: FORMS1P3_ADD_NEW,
      payload: [null,null,null,null,null,null,null,null,null,null,null,null]
      // {
      //   neighborFirstName1: null,
      //   neighborLastName1: null,
      //   neighborGender1: null,
      //   neighbortime1: null,
      //   neighborRelative1: null,
      //   neighborPhoneNumber1: null,
      //   neighborFirstName2: null,
      //   neighborLastName2: null,
      //   neighborGender2: null,
      //   neighbortime2: null,
      //   neighborRelative2: null,
      //   neighborPhoneNumber2: null,
      // },
})

const resets1p4 = () => ({
    type: FORMS1P4_ADD_NEW,
    payload: [null,null,null,null,null,null,null,null,null,null,null,null,null,null]
    // {
    //   elderlyStatus: null,
    //   elderlyBeing: null,
    //   elderlyBeingDetail: null,
    //   being: null,
    //   neighborName: null,
    //   religion: null,
    //   otherReligion: null,
    //   educations: null,
    //   careers: null,
    //   treatment: null,
    //   hospital: null,
    //   otherTreatment: null,
    //   salary: null,
    //   otherCareers: null,
    // },
})

const resets1p5 = () => ({
    type: FORMS1P5_ADD_NEW,
    payload: [null,[],null,[]]
    // {
    //   drugAllergy: null,
    //   drugs: [],
    //   foodAllergy: null,
    //   foods: [],
    // },
})

const resets1p6 = () => ({
    type: FORMS1P6_ADD_NEW,
      payload: [[],null]
      // {
      //   diseases: [],
      //   date: null,
      // },
})

export const resetDataFromReducer = () => {
    console.log('Is in resetDataFromReducer')
    return dispatch => {
        dispatch(resets1p1())
        dispatch(resets1p2())
        dispatch(resets1p3())
        dispatch(resets1p4())
        dispatch(resets1p5())
        dispatch(resets1p6())
    }
};
