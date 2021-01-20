import { FORMS1P6_ADD_NEW, apiEld, apiBase, USERLOGIN, HTTP_ELD_SELECTED } from "../constants";
import Axios from "axios";

export const setStateToAdd = (payload) => ({
  type: FORMS1P6_ADD_NEW,
  payload,
});

export const add = (payload) => {
  return (dispatch) => {
    dispatch(setStateToAdd(payload));
  };
};

export const createDisease = async (payload) => {
  await  Axios.post(`${apiEld}/disease/create`, {
    ELD_ID_NUMBER: payload[0],
    DIS_NAME: payload[1],
    EXAM_DATE: new Date(),
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Disease Success");
};

export const deleteDisease = async (payload) => {
  await Axios.delete(
    `${apiEld}/disease/delete/${payload[0]}/diseasename/${payload[1]}`
  )
  console.log("Delete disease Success");
};
// create null table form 2-10
const createExa2Waist = async (visId) => {
  await  Axios.post(`${apiBase}/waist/create`, {
    WAI_WAIST: null,
    WAI_RESULT: null,
    VIS_ID: visId,
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Waist Create Success");
};

const createExa2Bmi = async (visId) => {
  await  Axios.post(`${apiBase}/bmi/create`, {
    BMI_WEIGHT: null,
    BMI_HEIGHT: null,
    BMI_BMI: null,
    BMI_RESULT: null,
    VIS_ID: visId,
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Bmi Create Success");
};

const createExa2Bp = async (visId) => {
  await  Axios.post(`${apiBase}/bp/create`, {
    BP_PULSE: null,
    BP_BLO_SYS: null,
    BP_BLO_DIA: null,
    BP_RESULT: null,
    VIS_ID: visId,
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Bp Create Success");
};

const createExa2Fbs = async (visId) => {
  await  Axios.post(`${apiBase}/fbs/create`, {
    FBS_FAST: null,
    FBS_FBS: null,
    FBS_RESULT: null,
    VIS_ID: visId,
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Fbs Create Success");
};

const createExa3Cardiovascular = async (visId) => {
  await  Axios.post(`${apiBase}/cardiovascular/create`, {
    CARDIO_3_1: null,
    CARDIO_3_1_COUNT: null,
    CARDIO_3_2: null,
    CARDIO_3_3: null,
    CARDIO_3_4: null,
    CARDIO_3_5: null,
    CARDIO_3_6: null,
    CARDIO_3_7: null,
    CARDIO_COUNT: null,
    CARDIO_COUNT_RESULT: null,
    VIS_ID: visId,
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Cardiovascular Create Success");
};

const createExa4Eye = async (visId) => {
  await  Axios.post(`${apiBase}/eye/create`, {
    EYE_4_1: null,
    EYE_4_2: null,
    EYE_4_3: null,
    EYE_4_4: null,
    EYE_4_5: null,
    EYE_COUNT: null,
    EYE_RESULT: null,
    VIS_ID: visId,
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Eye Create Success");
};

const createExa5OralHealth = async  (visId) => {
  await  Axios.post(`${apiBase}/oralHealth/create`, {
    ORAL_5_1: null,
    ORAL_5_2: null,
    ORAL_5_3: null,
    ORAL_5_4_1: null,
    ORAL_5_4_2: null,
    ORAL_5_4_3: null,
    ORAL_5_4_4: null,
    ORAL_5_4_5: null,
    ORAL_5_5: null,
    ORAL_5_6: null,
    ORAL_5_7: null,
    ORAL_5_8: null,
    ORAL_5_9: null,
    ORAL_5_10: null,
    ORAL_5_11: null,
    ORAL_5_12: null,
    ORAL_5_13: null,
    ORAL_COUNT: null,
    ORAL_RESULT: null,
    VIS_ID: visId,
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Oral_Health Create Success");
};

const createExa6AbilityInLife = async (visId) => {
  await  Axios.post(`${apiBase}/abilityInLife/create`, {
    ABI_6_1: null,
    ABI_6_2: null,
    ABI_6_3: null,
    ABI_6_4: null,
    ABI_6_5: null,
    ABI_6_6: null,
    ABI_6_7: null,
    ABI_6_8: null,
    ABI_6_9: null,
    ABI_6_10: null,
    ABI_SUM_POINT: null,
    ABI_GROUP: null,
    ABI_CORRECT_FORM: null,
    VIS_ID: visId,
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Ability_In_Life Create Success");
};

const createExa6TAI = async (visId) => {
  await  Axios.post(`${apiBase}/TAI/create`, {
    TAI_IMMOBILIZE: null,
    TAI_MENTAL: null,
    TAI_FEED: null,
    TAI_TOILET: null,
    TAI_GROUP: null,
    TAI_CORRECT_FORM: null,
    updateBy: USERLOGIN.Fullname,
    VIS_ID: visId
  })
  console.log("TAI Create Success");
};

const createExa7Alzheimer = async (visId) => {
  await   Axios.post(`${apiBase}/alzheimer/create`, {
    ALZ_7_1_EL_AGE: null,
    ALZ_7_1_RESULT_AGE: null,
    ALZ_7_2_EL_TIME: null,
    ALZ_7_2_RESULT_TIME: null,
    ALZ_7_3_EL_ADDR: null,
    ALZ_7_3_RESULT_ADDR: null,
    ALZ_7_4_EL_YEAR: null,
    ALZ_7_4_RESULT_YEAR: null,
    ALZ_7_5_EL_PLACE: null,
    ALZ_7_5_RESULT_PLACE: null,
    ALZ_7_6_EL_WHOM: null,
    ALZ_7_6_RESULT_WHOM: null,
    ALZ_7_7_EL_BIRTHDATE: null,
    ALZ_7_7_RESULT_BIRTHDATE: null,
    ALZ_7_8_EL_OCT14: null,
    ALZ_7_8_RESULT_OCT14: null,
    ALZ_7_9_EL_KING: null,
    ALZ_7_9_RESULT_KING: null,
    ALZ_7_10_EL_COUNTDOWN: null,
    ALZ_7_10_RESULT_COUNTDOWN: null,
    ALZ_RESULT : null,
    ALZ_CORRECT_FORM : null,
    VIS_ID: visId,
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Alzheimer Create Success");
};

const createExa7MMSE = async (visId) => {
  await   Axios.post(`${apiBase}/MMSE/create`, {
    MMSE_1_1: null,
    MMSE_1_1_POINT: null,
    MMSE_1_2: null,
    MMSE_1_2_POINT: null,
    MMSE_1_3: null,
    MMSE_1_3_POINT: null,
    MMSE_1_4: null,
    MMSE_1_4_POINT: null,
    MMSE_1_5: null,
    MMSE_1_5_POINT: null,
    MMSE_2_CHECK_LOCATION:null,
    MMSE_2_1: null,
    MMSE_2_1_POINT: null,
    MMSE_2_2: null,
    MMSE_2_2_POINT: null,
    MMSE_2_3: null,
    MMSE_2_3_POINT: null,
    MMSE_2_4: null,
    MMSE_2_4_POINT: null,
    MMSE_2_5: null,
    MMSE_2_5_POINT: null,
    MMSE_3_1_POINT: null,
    MMSE_3_2_POINT: null,
    MMSE_3_3_POINT: null,
    MMSE_4_CHECK_CALCULATE:null,
    MMSE_4_1_POINT: null,
    MMSE_4_2_POINT: null,
    MMSE_4_3_POINT: null,
    MMSE_4_4_POINT: null,
    MMSE_4_5_POINT: null,
    MMSE_5_1_POINT: null,
    MMSE_5_2_POINT: null,
    MMSE_5_3_POINT: null,
    MMSE_6_1_POINT: null,
    MMSE_6_2_POINT: null,
    MMSE_7_POINT: null,
    MMSE_8_1_POINT: null,
    MMSE_8_2_POINT: null,
    MMSE_8_3_POINT: null,
    MMSE_9_POINT: null,
    MMSE_10: null,
    MMSE_10_POINT: null,
    MMSE_11_POINT: null,
    MMSE_CORRECT_FORM: null,
    MMSE_RESULT: null,
    updateBy: USERLOGIN.Fullname,
    VIS_ID: visId
  })
  console.log("MMSE Create Success");
};

const createExa8DepressionScreening = async (visId) => {
  await   Axios.post(`${apiBase}/depressionScreening/create`, {
    DEP_DEPRESSED: null,
    DEP_NOT_ENJOYING: null,
    DEP_CHECK: null,
    DEP_RESULT: null,
    DEP_8_1: null,
    DEP_8_2: null,
    DEP_8_3: null,
    DEP_8_4: null,
    DEP_8_5: null,
    DEP_8_6: null,
    DEP_8_7: null,
    DEP_8_8: null,
    DEP_8_9: null,
    DEP_SUM_POINT: null,
    DEP_9Q_RESULT: null,
    VIS_ID: visId,
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Depression_Screening Create Success");
};

const createExa9BoneMuscle = async (visId) => {
  await  Axios.post(`${apiBase}/boneMuscle/create`, {
    BONE_9_1: null,
    BONE_9_2: null,
    BONE_9_3: null,
    BONE_9_4: null,
    BONE_9_5: null,
    BONE_9_6: null,
    BONE_9_7: null,
    BONE_9_8: null,
    BONE_9_9: null,
    BONE_9_10: null,
    BONE_9_11: null,
    BONE_9_12: null,
    BONE_RESULT: null,
    BONE_WALK: null,
    BONE_WALK_INFO: null,
    BONE_PHY_FIT_MINUTE: null,
    BONE_PHY_FIT_SECOND: null,
    BONE_PHY_RESULT: null,
    VIS_ID: visId,
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Bone_Muscle Create Success");
};

const createExa9_1Osteoarthritis = async (visId) => {
  await  Axios.post(`${apiBase}/osteoarthritis/create`, {
    OST_1_KNEE_PAIN: null,
    OST_1_LVL_PAIN: null,
    OST_1_RESULT: null,
    OST_2_1_R: null,
    OST_2_1_L: null,
    OST_2_2_R: null,
    OST_2_2_L: null,
    OST_2_3_R: null,
    OST_2_3_L: null,
    OST_2_4_R: null,
    OST_2_4_L: null,
    OST_2_5_R: null,
    OST_2_5_L: null,
    OST_2_RESULT: null,
    VIS_ID: visId,
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Osteoarthritis Create Success");
};

export const createExa10Urination = async (visId) => {
  await   Axios.post(`${apiBase}/urination/create`, {
    URI_10_1: null,
    VIS_ID: visId,
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Urination Create Success");
};

export const createVisitTable =  (payload) => {
  console.log('in createVisitTable USERLOGIN.Fullname: ',USERLOGIN.Fullname)
  console.log('in createVisitTable USERLOGIN.Role: ',USERLOGIN.Role)
  console.log('in createVisitTable USERLOGIN.Id: ',USERLOGIN.Id)
  // console.log('in createVisitTable payload[0]: ',payload[0])
  return async dispatch => {
  let res=  await  Axios.post(`${apiEld}/visit/create`, {
      VIS_DATE: payload[0],
      visiterRole: USERLOGIN.Role, //fix
      VISITER_ID_NUMBER: USERLOGIN.Id, //fix
      ELD_ID_NUMBER: payload[1],
      // updateBy: USERLOGIN.Fullname, //fix
    })
      console.log("Visit Create Success");
    await  createAllDatabase(res.data.VIS_ID)
   await   dispatch({
        type: "VIS_ID",
        payload: [res.data.VIS_ID,payload[1]],
      })
  
    updateLastVisDate(payload)
    
  }
};

export const setSelectEldFromNewEld = payload => {
  return dispatch => {
    dispatch({
      type: HTTP_ELD_SELECTED,
      payload: {
        ELD_FIRSTNAME: payload[0],
        ELD_LASTNAME: payload[1]
      }//ทำให้ elder selected ไม่ null  เพื่อให้สามารถเข้า mainmanu ได้
    })
  }
}

export const updateLastVisDate = payload => {
  console.log('eld id ',payload[1], 'vis date ',payload[0])
  Axios.put(`${apiEld}/update/${payload[1]}`,{
    ELD_LAST_VISIT_DATE: payload[0],
  })
}

export const createAllDatabase = async (visId) => {
 await  createExa2Waist(visId);
 await  createExa2Bmi(visId);
 await  createExa2Bp(visId);
 await  createExa2Fbs(visId);
 await  createExa3Cardiovascular(visId);
 await  createExa4Eye(visId);
 await  createExa5OralHealth(visId);
 await  createExa6AbilityInLife(visId);
 await  createExa6TAI(visId);
 await  createExa7Alzheimer(visId);
 await  createExa7MMSE(visId);
 await  createExa8DepressionScreening(visId);
 await  createExa9BoneMuscle(visId);
 await  createExa9_1Osteoarthritis(visId);
 await  createExa10Urination(visId);
};
