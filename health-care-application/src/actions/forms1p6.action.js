import { FORMS1P6_ADD_NEW } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: FORMS1P6_ADD_NEW,
    payload
})
 
// export const setStateToEdit = () => ({
//     type: FORM_EDIT,
// })

export const add = (payload) =>{
    return dispatch=>{
        dispatch(setStateToAdd(payload))
    }
}

// export const edit = () =>{
//     return dispatch=>{
//         dispatch(setStateToEdit())
//     }
// }

// export const createTable = () => ({
//     type: FORMS1P6_ADD_NEW,
// })
export const createDisease = (payload)=>{
  Axios.post("http://localhost:3001/elder/disease/create",{
    ELD_ID_NUMBER: payload[0],
    DIS_NAME: payload[1],
    EXAM_DATE: new Date()
  }).then(()=>{
    alert("Disease Success")
  })
}

export  const deleteDisease = (payload)=>{
  Axios.delete("http://localhost:3001/elder/disease/delete/"+payload[0]+"/diseasename/"+payload[1]).then(()=>{
    alert("Delete disease Success")
  })
}
// create null table form 2-10
const createExa2Waist = ()=>{
  Axios.post("http://localhost:3001/waist/create",{
    WAI_WAIST: null,
    WAI_RESULT: null,
    VIS_ID: "1",
    VIS_DATE: new Date()
  }).then(()=>{
    alert("Waist Create Success")
  })
}

const createExa2Bmi = ()=>{
  Axios.post("http://localhost:3001/bmi/create",{
    BMI_WEIGHT: null,
    BMI_HEIGHT: null,
    BMI_BMI: null,
    BMI_RESULT: null,
    VIS_ID: "1",
    VIS_DATE: new Date()
  }).then(()=>{
    alert("Bmi Create Success")
  })
}

const createExa2Bp = ()=>{
  Axios.post("http://localhost:3001/bp/create",{
    BP_PULSE: null,
    BP_BLO_SYS: null,
    BP_BLO_DIA: null,
    BP_RESULT: null,
    VIS_ID: "1",
    VIS_DATE: new Date()
  }).then(()=>{
    alert("Bp Create Success")
  })
}

const createExa2Fbs = ()=>{
  Axios.post("http://localhost:3001/fbs/create",{
    FBS_FBS: null,
    FBS_RESULT: null,
    VIS_ID: "1",
    VIS_DATE: new Date()
  }).then(()=>{
    alert("Fbs Create Success")
  })
}

const createExa3Cardiovascular = ()=>{
  Axios.post("http://localhost:3001/cardiovascular/create",{
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
      VIS_ID: "1",
      VIS_DATE: new Date()
  }).then(()=>{
    alert("Cardiovascular Create Success")
  })
}

const createExa4Eye = ()=>{
  Axios.post("http://localhost:3001/eye/create",{
      EYE_4_1: null,
      EYE_4_2: null,
      EYE_4_3: null,
      EYE_4_4: null,
      EYE_4_5: null,
      EYE_COUNT: null,
      EYE_RESULT: null,
      VIS_ID: "1",
      VIS_DATE: new Date()
  }).then(()=>{
    alert("Eye Create Success")
  })
}

const createExa5OralHealth = ()=>{
  Axios.post("http://localhost:3001/oralHealth/create",{
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
      VIS_ID: "1",
      VIS_DATE: new Date()
  }).then(()=>{
    alert("Oral_Health Create Success")
  })
}

const createExa6AbilityInLife = ()=>{
  Axios.post("http://localhost:3001/abilityInLife/create",{
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
      ABI_TAI_IMMOBILIZE: null,
      ABI_TAI_MENTAL: null,
      ABI_TAI_FEED: null,
      ABI_TAI_TOILET: null,
      ABI_TAI_GROUP: null,
      ORAL_COUNT: null,
      ORAL_RESULT: null,
      VIS_ID: "1",
      VIS_DATE: new Date()
  }).then(()=>{
    alert("Ability_In_Life Create Success")
  })
}

const createExa7Alzheimer = ()=>{
  Axios.post("http://localhost:3001/alzheimer/create",{
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
      VIS_ID: "1",
      VIS_DATE: new Date()
  }).then(()=>{
    alert("Alzheimer Create Success")
  })
}

const createExa8DepressionScreening = ()=>{
  Axios.post("http://localhost:3001/depressionScreening/create",{
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
      VIS_ID: "1",
      VIS_DATE: new Date()
  }).then(()=>{
    alert("Depression_Screening Create Success")
  })
}

const createExa9BoneMuscle= ()=>{
  Axios.post("http://localhost:3001/boneMuscle/create",{
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
      VIS_ID: "1",
      VIS_DATE: new Date()
  }).then(()=>{
    alert("Bone_Muscle Create Success")
  })
}

const createExa9_1Osteoarthritis= ()=>{
  Axios.post("http://localhost:3001/osteoarthritis/create",{
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
      VIS_ID: "1",
      VIS_DATE: new Date()
  }).then(()=>{
    alert("Osteoarthritis Create Success")
  })
}

const createExa10Urination= ()=>{
  Axios.post("http://localhost:3001/urination/create",{
      URI_10_1: null,
      VIS_ID: "1",
      VIS_DATE: new Date()
  }).then(()=>{
    alert("Urination Create Success")
  })
}

export const createAllDatabase = ()=>{
  createExa2Waist()
  createExa2Bmi()
  createExa2Bp()
  createExa2Fbs()
  createExa3Cardiovascular()
  createExa4Eye()
  createExa5OralHealth()
  createExa6AbilityInLife()
  createExa7Alzheimer()
  createExa8DepressionScreening()
  createExa9BoneMuscle()
  createExa9_1Osteoarthritis()
  createExa10Urination()
}