import Axios from 'axios';

//EXAMINATION 1
//Sec1_1
const createElder = (payload)=>{
  Axios.post("http://localhost:3001/elder/create",{
    ELD_ID_NUMBER: PID,
    ELD_FIRSTNAME: firstname,
    ELD_LASTNAME: lastanme,
    ELD_PHONE: null,
    ELD_LAST_VISIT_DATE: null,
    ELD_AKA: nickname
  }).then(()=>{
    alert("Elder Success")
  })
}

const createElderinfo = ()=>{
  Axios.post("http://localhost:3001/elder/information/create",{
    ELD_BIRTHDATE: null,
    ELD_GENDER: elderlyGender,
    ELD_AGE: null,
    ELD_STATUS: null,
    ELD_LIVELIHOOD: null,
    ELD_RELIGION: null,
    ELD_EDUCATION: null,
    ELD_JOB: null,
    ELD_TREATMENT: null,
    ELD_INCOME: null,
    ELD_ID_NUMBER: PID,
    VOL_ID_NUMBER: "1200101843069"
  }).then(()=>{
    alert("Elder Info Success")
  })
}

const createElderRelative = ()=>{
  Axios.post("http://localhost:3001/elder/relative/create",{
    ELD_REL_FIRSTNAME: null,
    ELD_REL_LASTNAME: null,
    ELD_REL_RELATION: null,
    ELD_REL_PHONE: null,
    ELD_ID_NUMBER: PID
  }).then(()=>{
    alert("Elder Relative Success")
  })
}

const createElderCurrent = ()=>{
  Axios.post("http://localhost:3001/elder/currentaddress/create",{
    ELD_CUR_NUMBER: null,
    ELD_CUR_VILLAGE: null,
    ELD_CUR_LANE: null,
    ELD_CUR_STREET: null,
    ELD_CUR_SUB_DISTRICT: null,
    ELD_CUR_DISTRICT: null,
    ELD_CUR_PROVINCE: null,
    ELD_ID_NUMBER:PID
  }).then(()=>{
    alert("Elder Currentaddress Success")
  })
}

const createElderIdCurrent = ()=>{
  Axios.post("http://localhost:3001/elder/idnumberaddress/create",{
  ELD_IDN_ADDR_NUMBER: null,
  ELD_IDN_ADDR_VILLAGE: null,
  ELD_IDN_ADDR_LANE: null,
  ELD_IDN_ADDR_STREET: null,
  ELD_IDN_ADDR_SUB_DISTRICT: null,
  ELD_IDN_ADDR_DISTRICT: null,
  ELD_IDN_ADDR_PROVINCE: null,
  ELD_ID_NUMBER: PID
  }).then(()=>{
    alert("Elder ID Currentaddress Success")
  })
}

export const createAllElder = ()=>{
  createElder()
  createElderinfo()
  createElderRelative()
  createElderCurrent()
  createElderIdCurrent()
}

//Sec1_2
const updateElder = ()=>{
  Axios.put("http://localhost:3001/elder/update/"+{PID},{
    ELD_PHONE: phoneNumber,
  }).then(()=>{
    alert("Update Elder Success")
  })
}

const updateElderCurrent = ()=>{
  Axios.put("http://localhost:3001/elder/currentaddress/update/1103702726761",{
    ELD_CUR_NUMBER: curHomeNumber,
    ELD_CUR_VILLAGE: curArea,
    ELD_CUR_LANE: curAlley,
    ELD_CUR_STREET: curStreet,
    ELD_CUR_SUB_DISTRICT: curSubDistrict,
    ELD_CUR_DISTRICT: "เมือง",
    ELD_CUR_PROVINCE: "ชลบุรี",

  }).then(()=>{
    alert("Update Elder Currentaddress Success")
  })
}

const updateElderIdCurrent = ()=>{
  Axios.put("http://localhost:3001/elder/idnumberaddress/update/1103702726761",{
  ELD_IDN_ADDR_NUMBER: homeNumber,
  ELD_IDN_ADDR_VILLAGE: area,
  ELD_IDN_ADDR_LANE: alley,
  ELD_IDN_ADDR_STREET: street,
  ELD_IDN_ADDR_SUB_DISTRICT: subDistrict,
  ELD_IDN_ADDR_DISTRICT: "เมือง",
  ELD_IDN_ADDR_PROVINCE: "ชลบุรี",
  }).then(()=>{
    alert("Update Elder ID Currentaddress Success")
  })
}

//Sec1_3
  if(neighborFirstName1 !== null || 
    neighborLastName1 !== null ||
    neighborGender1!== null ||
    neighbortime1!== null ||
    neighborRelative1!== null
    ){  updateElderRelative()  }

  if(neighborFirstName2 !== null || 
    neighborLastName2 !== null ||
    neighborGender2!== null ||
    neighbortime2!== null ||
    neighborRelative2!== null
    ){  createElderRelative2()  }


function updateElderRelative() {
  Axios.put("http://localhost:3001/elder/relative/update/1103702726761",{
    ELD_REL_FIRSTNAME: neighborFirstName1,
    ELD_REL_LASTNAME: neighborLastName1,
    ELD_REL_RELATION: neighborRelative1,
    ELD_REL_PHONE: neighborPhoneNumber1,
  }).then(()=>{
    alert("Update Elder Relative Success")
  })
}

function createElderRelative2() {
  Axios.post("http://localhost:3001/elder/relative/create",{
    ELD_REL_FIRSTNAME: neighborFirstName2,
    ELD_REL_LASTNAME: neighborLastName2,
    ELD_REL_RELATION: neighborRelative2,
    ELD_REL_PHONE: neighborPhoneNumber2,
    ELD_ID_NUMBER: "1103702726761"
  }).then(()=>{
    alert("Elder Relative Success")
  })
}

//Sec1_4
  const updateElderinfo = ()=>{
    Axios.put("http://localhost:3001/elder/information/update/1103702726761",{
      ELD_STATUS: elderlyStatus,
      ELD_LIVELIHOOD: elderlyBeing,
      ELD_RELIGION: religion,
      ELD_EDUCATION: educations,
      ELD_JOB: careers,
      ELD_TREATMENT: treatment,
      ELD_INCOME: salary,
    }).then(()=>{
      alert("Update Elder Info Success")
    })
  }

//Sec1_5
const createDrug = ()=>{
  Axios.post("http://localhost:3001/elder/drug/create",{
    ELD_ID_NUMBER: forms1p1Reducer,
    DRUG_NAME: drug,
    EXAM_DATE: new Date()
  }).then(()=>{
    alert("Drug Success")
  })
}

const createFood = ()=>{
  Axios.post("http://localhost:3001/elder/food/create",{
    ELD_ID_NUMBER: forms1p1Reducer,
    FOOD_NAME: food,
    EXAM_DATE: new Date()
  }).then(()=>{
    alert("Food Success")
  })
}

//Sec1_6
const createDisease = ()=>{
  Axios.post("http://localhost:3001/elder/disease/create",{
    ELD_ID_NUMBER: forms1p1Reducer,
    DIS_NAME: disease,
    EXAM_DATE: new Date()
  }).then(()=>{
    alert("Disease Success")
  })
}

//CREATE ALL TABLE EXAMINATION 2-9
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

  const createAllDatabase = ()=>{
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


//EXAMINATION 2 
//SEC 2
  const updateExa2Waist = ()=>{
    Axios.put("http://localhost:3001/waist/update/1",{
      WAI_WAIST: waist,
      WAI_RESULT: waistResult,
    }).then(()=>{
      alert("Waist update Success")
    })
  }
  
  const updateExa2Bmi = ()=>{
    Axios.put("http://localhost:3001/bmi/update/1",{
      BMI_WEIGHT: weight,
      BMI_HEIGHT: high,
      BMI_BMI: bmi,
      BMI_RESULT: bmiResult,
    }).then(()=>{
      alert("Bmi update Success")
    })
  }
  
  const updateExa2Bp = ()=>{
    Axios.put("http://localhost:3001/bp/update/1",{
      BP_PULSE: pulse,
      BP_BLO_SYS: bloodPressure1,
      BP_BLO_DIA: bloodPressure2,
      BP_RESULT: bloodPressureResult,
    }).then(()=>{
      alert("Bp update Success")
    })
  }
  
  const updateExa2Fbs = ()=>{
    Axios.put("http://localhost:3001/fbs/update/1",{
      FBS_FBS: sugar,
      FBS_RESULT: sugarResult,
    }).then(()=>{
      alert("Fbs update Success")
    })
  }

  const updateAllExa2 = ()=> {
    updateExa2Waist()
    updateExa2Bmi()
    updateExa2Bp()
    updateExa2Fbs()
    alert("Update All Examination2 Success")
  }

//EXAMINATION 3
//SEC3
const updateCardiovascular = ()=>{
  Axios.put("http://localhost:3001/cardiovascular/update/1",{
    CARDIO_3_1: ans3_1,
    CARDIO_3_2: ans3_2,
    CARDIO_3_3: ans3_3,
    CARDIO_3_4: ans3_4,
    CARDIO_3_5: ans3_5,
    CARDIO_3_6: ans3_6,
    CARDIO_3_7: ans3_7,
    CARDIO_COUNT: null,
    CARDIO_COUNT_RESULT: results3,
  }).then(()=>{
    alert("Cardiovascular Update Success")
  })
}

//EXAMINATION 4 
//SEC4
const updateEye = ()=>{
  Axios.put("http://localhost:3001/eye/update/1",{
    EYE_4_1: ans4_1,
    EYE_4_2: ans4_2,
    EYE_4_3: ans4_3,
    EYE_4_4: ans4_4,
    EYE_4_5: ans4_5,
    EYE_COUNT: count,
    EYE_RESULT: results,
  }).then(()=>{
    alert("Eye Update Success")
  })
}

//EXAMINATION 5
//SEC5
const updateOralHealth = ()=>{
  Axios.put("http://localhost:3001/oralHealth/update/1",{
    ORAL_5_1: ans5_1,
    ORAL_5_2: ans5_2,
    ORAL_5_3: ans5_3,
    ORAL_5_4_1: ans5_4,
    ORAL_5_4_2: ans5_5,
    ORAL_5_4_3: ans5_6,
    ORAL_5_4_4: ans5_7,
    ORAL_5_4_5: ans5_8,
    ORAL_5_5: ans5_9,
    ORAL_5_6: ans5_10,
    ORAL_5_7: ans5_11,
    ORAL_5_8: ans5_12,
    ORAL_5_9: ans5_13,
    ORAL_5_10: ans5_14,
    ORAL_5_11: ans5_15,
    ORAL_5_12: ans5_16,
    ORAL_5_13: ans5_17,
    ORAL_COUNT: count,
    ORAL_RESULT: results,
  }).then(()=>{
    alert("Oral_Health Update Success")
  })
}

//EXAMINATION 6
//SEC6


//EXAMINATION 7 
//SEC7
const updateAlzheimer = ()=>{
  Axios.put("http://localhost:3001/alzheimer/update/1",{
    ALZ_7_1_EL_AGE: textAns1,
    ALZ_7_1_RESULT_AGE: ans7_1,
    ALZ_7_2_EL_TIME: textAns2,
    ALZ_7_2_RESULT_TIME: ans7_2,
    ALZ_7_3_EL_ADDR: textAns3,
    ALZ_7_3_RESULT_ADDR: ans7_3,
    ALZ_7_4_EL_YEAR: textAns4,
    ALZ_7_4_RESULT_YEAR: ans7_4,
    ALZ_7_5_EL_PLACE: textAns5,
    ALZ_7_5_RESULT_PLACE: ans7_5,
    ALZ_7_6_EL_WHOM: textAns6,
    ALZ_7_6_RESULT_WHOM: ans7_6,
    ALZ_7_7_EL_BIRTHDATE: textAns7,
    ALZ_7_7_RESULT_BIRTHDATE: ans7_7,
    ALZ_7_8_EL_OCT14: textAns8,
    ALZ_7_8_RESULT_OCT14: ans7_8,
    ALZ_7_9_EL_KING: textAns9,
    ALZ_7_9_RESULT_KING: ans7_9,
    ALZ_7_10_EL_COUNTDOWN: textAns10,
    ALZ_7_10_RESULT_COUNTDOWN: ans7_10,
  }).then(()=>{
    alert("Alzheimer Update Success")
  })
}


//EXAMINATION 8
//SEC8
//===== 8_1 =====
  const updateDepressionScreening = ()=>{
    Axios.put("http://localhost:3001/depressionScreening/update/1",{
      DEP_DEPRESSED: ans8_1,
      DEP_NOT_ENJOYING: ans8_2,
      DEP_CHECK: collect,
      DEP_RESULT: results,
    }).then(()=>{
      alert("Depression_Screening Update Success")
    })
  }
  //SEC8_9Q
//===== 8_9Q =====
    const updateDepressionScreening9q = ()=>{
        Axios.put("http://localhost:3001/depressionScreening/update/1",{
          DEP_8_1: ans8_9q_1,
          DEP_8_2: ans8_9q_2,
          DEP_8_3: ans8_9q_3,
          DEP_8_4: ans8_9q_4,
          DEP_8_5: ans8_9q_5,
          DEP_8_6: ans8_9q_6,
          DEP_8_7: ans8_9q_7,
          DEP_8_8: ans8_9q_8,
          DEP_8_9: ans8_9q_9,
          DEP_SUM_POINT: collect,
          DEP_9Q_RESULT: results,
        }).then(()=>{
          alert("Depression_Screening Update Success")
        })
      }

//EXAMINATION 9 
//SEC9
const updateExa9BoneMuscle= (payload)=>{
  Axios.put("http://localhost:3001/boneMuscle/update/1",{
      BONE_9_1: ans9_1,
      BONE_9_2: ans9_2,
      BONE_9_3: ans9_3,
      BONE_9_4: ans9_4,
      BONE_9_5: ans9_5,
      BONE_9_6: ans9_6,
      BONE_9_7: ans9_7,
      BONE_9_8: ans9_8,
      BONE_9_9: ans9_9,
      BONE_9_10: ans9_10,
      BONE_9_11: ans9_11,
      BONE_9_12: ans9_12,
      BONE_RESULT: result1,
      BONE_WALK: walk,
      BONE_WALK_INFO: walkInfo,
      BONE_PHY_FIT_MINUTE: minute,
      BONE_PHY_FIT_SECOND: second,
      BONE_PHY_RESULT: result2,
  }).then(()=>{
    alert("Bone_Muscle Update Success")
  })
}

//EXAMINATION 9_1 
//SEC9_1
const updateExa9_1Osteoarthritis= ()=>{
  Axios.put("http://localhost:3001/osteoarthritis/update",{
      OST_1_KNEE_PAIN: null,
      OST_1_LVL_PAIN: null,
      OST_1_RESULT: null,
      OST_2_1_R: ans1R,
      OST_2_1_L: ans1L,
      OST_2_1_N: ans1N,
      OST_2_2_R: ans2R,
      OST_2_2_L: ans2L,
      OST_2_2_N: ans2N,
      OST_2_3_R: ans3R,
      OST_2_3_L: ans3L,
      OST_2_3_N: ans3N,
      OST_2_4_R: ans4R,
      OST_2_4_L: ans4L,
      OST_2_4_N: ans4N,
      OST_2_5_R: ans5R,
      OST_2_5_L: ans5L,
      OST_2_5_N: ans5N,
      OST_2_RESULT: null,
  }).then(()=>{
    alert("Osteoarthritis Update Success")
  })
}

//EXAMINATION 10 
//SEC10

